# Digitization Milestones

Static mobile-friendly milestone tracker for the NPC Data Office digitization timeline.

## Shared Cloud Saving

The app now supports optional team sync with Supabase.

Setup:

1. Create a Supabase project.
2. In Supabase, keep email auth enabled and set the site URL / redirect URL to your GitHub Pages app URL.
3. Run the SQL in `supabase-setup.sql`.
4. Replace the placeholder values in `supabase-config.js` with your project URL, anon key, and workspace slug.
5. Add the team member email addresses in `workspace_members`.

After that, users sign in with magic links and share the same milestone state in the configured workspace.

## GitHub Pages

This app is ready to publish on GitHub Pages.

Recommended setup:

1. Create a new GitHub repository.
2. Put the contents of this folder at the repository root.
3. Publish the repository.
4. In GitHub, open `Settings` > `Pages`.
5. Set the source to the `main` branch root.

The app is configured to work both:

- on a GitHub Pages repository URL such as `https://username.github.io/repository-name/`
- on a custom domain root such as `https://milestones.example.org/`

## Files

- `index.html`: app shell
- `styles.css`: mobile UI styling
- `app.js`: milestone data and interaction logic
- `manifest.webmanifest`: install metadata for home screen support
- `service-worker.js`: offline cache
- `supabase-config.js`: public browser config for optional team sync
- `supabase-setup.sql`: Supabase schema and row-level security policies
- `.nojekyll`: prevents GitHub Pages from running Jekyll processing
