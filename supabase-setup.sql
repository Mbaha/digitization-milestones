create extension if not exists pgcrypto;

create table if not exists public.team_workspaces (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.workspace_members (
  workspace_id uuid not null references public.team_workspaces(id) on delete cascade,
  email text not null,
  role text not null default 'member',
  created_at timestamptz not null default timezone('utc', now()),
  primary key (workspace_id, email)
);

create table if not exists public.milestone_states (
  workspace_id uuid not null references public.team_workspaces(id) on delete cascade,
  milestone_id text not null,
  completed boolean not null default false,
  updated_at timestamptz not null default timezone('utc', now()),
  updated_by_email text,
  primary key (workspace_id, milestone_id)
);

alter table public.team_workspaces enable row level security;
alter table public.workspace_members enable row level security;
alter table public.milestone_states enable row level security;

drop policy if exists "workspace_members_read_own" on public.workspace_members;
create policy "workspace_members_read_own"
on public.workspace_members
for select
to authenticated
using (lower(email) = lower(auth.jwt()->>'email'));

drop policy if exists "workspaces_read_by_member" on public.team_workspaces;
create policy "workspaces_read_by_member"
on public.team_workspaces
for select
to authenticated
using (
  exists (
    select 1
    from public.workspace_members wm
    where wm.workspace_id = team_workspaces.id
      and lower(wm.email) = lower(auth.jwt()->>'email')
  )
);

drop policy if exists "milestones_select_by_member" on public.milestone_states;
create policy "milestones_select_by_member"
on public.milestone_states
for select
to authenticated
using (
  exists (
    select 1
    from public.workspace_members wm
    where wm.workspace_id = milestone_states.workspace_id
      and lower(wm.email) = lower(auth.jwt()->>'email')
  )
);

drop policy if exists "milestones_insert_by_member" on public.milestone_states;
create policy "milestones_insert_by_member"
on public.milestone_states
for insert
to authenticated
with check (
  exists (
    select 1
    from public.workspace_members wm
    where wm.workspace_id = milestone_states.workspace_id
      and lower(wm.email) = lower(auth.jwt()->>'email')
  )
);

drop policy if exists "milestones_update_by_member" on public.milestone_states;
create policy "milestones_update_by_member"
on public.milestone_states
for update
to authenticated
using (
  exists (
    select 1
    from public.workspace_members wm
    where wm.workspace_id = milestone_states.workspace_id
      and lower(wm.email) = lower(auth.jwt()->>'email')
  )
)
with check (
  exists (
    select 1
    from public.workspace_members wm
    where wm.workspace_id = milestone_states.workspace_id
      and lower(wm.email) = lower(auth.jwt()->>'email')
  )
);

create or replace function public.touch_milestone_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists milestone_states_touch_updated_at on public.milestone_states;
create trigger milestone_states_touch_updated_at
before update on public.milestone_states
for each row
execute procedure public.touch_milestone_updated_at();

insert into public.team_workspaces (slug, name)
values ('npc-digitization', 'NPC Digitization Timeline')
on conflict (slug) do nothing;

insert into public.workspace_members (workspace_id, email)
select tw.id, member_email.email
from public.team_workspaces tw
cross join (
  values
    ('replace-with-team-member-1@example.org'),
    ('replace-with-team-member-2@example.org')
) as member_email(email)
where tw.slug = 'npc-digitization'
on conflict do nothing;
