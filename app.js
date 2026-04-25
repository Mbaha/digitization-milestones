const milestones = [
  { id: "m1", month: "April", week: "Week 3", stage: "KPI identification by M&E", sector: "Education", title: "M&E identifies Education KPIs" },
  { id: "m2", month: "April", week: "Week 4", stage: "KPI identification by M&E", sector: "Agriculture", title: "M&E identifies Agriculture KPIs" },
  { id: "m3", month: "May", week: "Week 1", stage: "KPI identification by M&E", sector: "Healthcare Services", title: "M&E identifies Healthcare Services KPIs" },
  { id: "m4", month: "May", week: "Week 2", stage: "KPI identification by M&E", sector: "Tourism", title: "M&E identifies Tourism KPIs" },
  { id: "m5", month: "April", week: "Week 4", stage: "KPI confirmation with Statistics Botswana", sector: "Education", title: "Confirm Education KPIs with Statistics Botswana" },
  { id: "m6", month: "May", week: "Week 1", stage: "KPI confirmation with Statistics Botswana", sector: "Agriculture", title: "Confirm Agriculture KPIs with Statistics Botswana" },
  { id: "m7", month: "May", week: "Week 2", stage: "KPI confirmation with Statistics Botswana", sector: "Healthcare Services", title: "Confirm Healthcare Services KPIs with Statistics Botswana" },
  { id: "m8", month: "May", week: "Week 3", stage: "KPI confirmation with Statistics Botswana", sector: "Tourism", title: "Confirm Tourism KPIs with Statistics Botswana" },
  { id: "m9", month: "May", week: "Week 1", stage: "Sector identification of administrative forms", sector: "Education", title: "Sector identifies Education administrative data forms" },
  { id: "m10", month: "May", week: "Week 2", stage: "Sector identification of administrative forms", sector: "Agriculture", title: "Sector identifies Agriculture administrative data forms" },
  { id: "m11", month: "May", week: "Week 3", stage: "Sector identification of administrative forms", sector: "Healthcare Services", title: "Sector identifies Healthcare Services administrative data forms" },
  { id: "m12", month: "May", week: "Week 4", stage: "Sector identification of administrative forms", sector: "Tourism", title: "Sector identifies Tourism administrative data forms" },
  { id: "m13", month: "May", week: "Week 2", stage: "Forms meeting and SB standardization", sector: "Education", title: "Hold forms meeting and standardize Education forms with SB" },
  { id: "m14", month: "May", week: "Week 3", stage: "Forms meeting and SB standardization", sector: "Agriculture", title: "Hold forms meeting and standardize Agriculture forms with SB" },
  { id: "m15", month: "May", week: "Week 4", stage: "Forms meeting and SB standardization", sector: "Healthcare Services", title: "Hold forms meeting and standardize Healthcare Services forms with SB" },
  { id: "m16", month: "June", week: "Week 1", stage: "Forms meeting and SB standardization", sector: "Tourism", title: "Hold forms meeting and standardize Tourism forms with SB" },
  { id: "m17", month: "May", week: "Week 2", stage: "App development", sector: "Shared", title: "Set shared application architecture and environments with DIT" },
  { id: "m18", month: "May", week: "Week 3", stage: "App development", sector: "Education", title: "Develop Education application module" },
  { id: "m19", month: "May", week: "Week 4", stage: "App development", sector: "Agriculture", title: "Develop Agriculture application module" },
  { id: "m20", month: "June", week: "Week 1", stage: "App development", sector: "Healthcare Services", title: "Develop Healthcare Services application module" },
  { id: "m21", month: "June", week: "Week 2", stage: "App development", sector: "Tourism", title: "Develop Tourism application module" },
  { id: "m22", month: "June", week: "Week 3", stage: "App development", sector: "Shared", title: "Review interoperability alignment with DTCO" },
  { id: "m23", month: "June", week: "Week 4", stage: "App development", sector: "Shared", title: "Prepare hosting and deployment environments with DIT" },
  { id: "m24", month: "May", week: "Week 4", stage: "User review meeting and tester nomination", sector: "Education", title: "Convene Education review meeting and identify testers" },
  { id: "m25", month: "June", week: "Week 1", stage: "User review meeting and tester nomination", sector: "Agriculture", title: "Convene Agriculture review meeting and identify testers" },
  { id: "m26", month: "June", week: "Week 2", stage: "User review meeting and tester nomination", sector: "Healthcare Services", title: "Convene Healthcare review meeting and identify testers" },
  { id: "m27", month: "June", week: "Week 3", stage: "User review meeting and tester nomination", sector: "Tourism", title: "Convene Tourism review meeting and identify testers" },
  { id: "m28", month: "June", week: "Week 1", stage: "User testing, feedback, and debugging", sector: "Education", title: "Run Education user testing and debug feedback" },
  { id: "m29", month: "June", week: "Week 2", stage: "User testing, feedback, and debugging", sector: "Agriculture", title: "Run Agriculture user testing and debug feedback" },
  { id: "m30", month: "June", week: "Week 3", stage: "User testing, feedback, and debugging", sector: "Healthcare Services", title: "Run Healthcare Services user testing and debug feedback" },
  { id: "m31", month: "June", week: "Week 4", stage: "User testing, feedback, and debugging", sector: "Tourism", title: "Run Tourism user testing and debug feedback" },
  { id: "m32", month: "July", week: "Week 1", stage: "User testing, feedback, and debugging", sector: "Shared", title: "Complete Security review and remediation" },
  { id: "m33", month: "July", week: "Week 2", stage: "User testing, feedback, and debugging", sector: "Shared", title: "Complete Data Protection review and compliance actions" },
  { id: "m34", month: "June", week: "Week 4", stage: "Deployment and wider rollout", sector: "Education", title: "Deploy Education application to wider sector users" },
  { id: "m35", month: "July", week: "Week 1", stage: "Deployment and wider rollout", sector: "Agriculture", title: "Deploy Agriculture application to wider sector users" },
  { id: "m36", month: "July", week: "Week 2", stage: "Deployment and wider rollout", sector: "Healthcare Services", title: "Deploy Healthcare Services application to wider sector users" },
  { id: "m37", month: "July", week: "Week 3", stage: "Deployment and wider rollout", sector: "Tourism", title: "Deploy Tourism application to wider sector users" },
  { id: "m38", month: "July", week: "Week 3", stage: "Deployment and wider rollout", sector: "Shared", title: "Activate production hosting and support with DIT" },
  { id: "m39", month: "July", week: "Week 4", stage: "Deployment and wider rollout", sector: "Shared", title: "Provide DTCO interoperability support and post-go-live stabilization" }
];

const monthOrder = ["April", "May", "June", "July"];
const weekOrder = ["Week 1", "Week 2", "Week 3", "Week 4"];
const storageKey = "digitization-milestones-v4";
const refreshIntervalMs = 30000;

const state = {
  checks: loadChecks(),
  filters: { sector: "all", month: "all", stage: "all" },
  ui: { view: "dashboard", boardMode: "active" },
  cloud: {
    configured: false,
    client: null,
    session: null,
    workspace: null,
    lastSyncAt: null,
    status: "local",
    message: "Shared cloud sync is not configured yet. The app is saving on this device only.",
    intervalId: null
  }
};

const heroStats = document.querySelector("#hero-stats");
const overviewGrid = document.querySelector("#overview-grid");
const timelineGroups = document.querySelector("#timeline-groups");
const resultsCount = document.querySelector("#results-count");
const progressCaption = document.querySelector("#progress-caption");
const boardTitle = document.querySelector("#board-title");
const emptyState = document.querySelector("#empty-state");
const sectorFilter = document.querySelector("#sector-filter");
const monthFilter = document.querySelector("#month-filter");
const stageFilter = document.querySelector("#stage-filter");
const resetButton = document.querySelector("#reset-button");
const shareButton = document.querySelector("#share-button");
const showActiveButton = document.querySelector("#show-active");
const showCompletedButton = document.querySelector("#show-completed");
const openActiveBoardButton = document.querySelector("#open-active-board");
const openProgressViewButton = document.querySelector("#open-progress-view");
const syncStatusPill = document.querySelector("#sync-status-pill");
const syncCopy = document.querySelector("#sync-copy");
const syncEmailField = document.querySelector("#sync-email-field");
const syncEmail = document.querySelector("#sync-email");
const syncSendLink = document.querySelector("#sync-send-link");
const syncRefresh = document.querySelector("#sync-refresh");
const syncSignout = document.querySelector("#sync-signout");
const views = [...document.querySelectorAll(".view")];
const navButtons = [...document.querySelectorAll(".bottom-nav__item")];

init().catch((error) => {
  console.error(error);
  setCloudStatus("warn", "The app loaded, but cloud sync could not be initialized.");
});

async function init() {
  registerServiceWorker();
  populateFilters();
  bindEvents();
  render();
  await initializeCloudSync();
}

function loadChecks() {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || "{}");
  } catch {
    return {};
  }
}

function saveChecks() {
  localStorage.setItem(storageKey, JSON.stringify(state.checks));
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    const serviceWorkerUrl = new URL("./service-worker.js", window.location.href);
    navigator.serviceWorker.register(serviceWorkerUrl.href).catch(() => {});
  }
}

function populateFilters() {
  const sectors = [...new Set(milestones.map((item) => item.sector))];
  const stages = [...new Set(milestones.map((item) => item.stage))];
  sectors.forEach((sector) => sectorFilter.add(new Option(sector, sector)));
  monthOrder.forEach((month) => monthFilter.add(new Option(month, month)));
  stages.forEach((stage) => stageFilter.add(new Option(stage, stage)));
}

function bindEvents() {
  [sectorFilter, monthFilter, stageFilter].forEach((element) => {
    element.addEventListener("change", () => {
      state.filters[element.id.replace("-filter", "")] = element.value;
      render();
    });
  });

  navButtons.forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.targetView));
  });

  showActiveButton.addEventListener("click", () => setBoardMode("active"));
  showCompletedButton.addEventListener("click", () => setBoardMode("completed"));
  openActiveBoardButton.addEventListener("click", () => {
    setBoardMode("active");
    setView("board");
  });
  openProgressViewButton.addEventListener("click", () => setView("progress"));

  resetButton.addEventListener("click", async () => {
    state.checks = {};
    saveChecks();
    render();
    if (state.cloud.workspace && state.cloud.session) {
      await pushAllChecksToCloud();
    }
  });

  shareButton.addEventListener("click", async () => {
    const summary = buildSummary();
    try {
      await navigator.clipboard.writeText(summary);
      shareButton.textContent = "Copied";
      window.setTimeout(() => {
        shareButton.textContent = "Copy summary";
      }, 1400);
    } catch {
      window.alert(summary);
    }
  });

  syncSendLink.addEventListener("click", async () => {
    if (!state.cloud.client) {
      return;
    }
    const email = syncEmail.value.trim();
    if (!email) {
      setCloudStatus("warn", "Enter a team email address before requesting a sign-in link.");
      return;
    }
    setCloudStatus("warn", "Sending sign-in link...");
    const { error } = await state.cloud.client.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: window.location.href }
    });
    if (error) {
      setCloudStatus("warn", error.message);
      return;
    }
    setCloudStatus("warn", `A sign-in link was sent to ${email}.`);
  });

  syncRefresh.addEventListener("click", async () => {
    if (state.cloud.workspace && state.cloud.session) {
      await pullCloudChecks();
    }
  });

  syncSignout.addEventListener("click", async () => {
    if (state.cloud.client) {
      await state.cloud.client.auth.signOut();
    }
  });
}

function setView(viewName) {
  state.ui.view = viewName;
  renderViews();
}

function setBoardMode(mode) {
  state.ui.boardMode = mode;
  renderBoardMode();
  renderMilestones();
}

async function initializeCloudSync() {
  const config = window.SUPABASE_CONFIG || {};
  if (!config.url || !config.anonKey || !config.workspaceSlug) {
    renderSyncState();
    return;
  }

  state.cloud.configured = true;
  state.cloud.client = window.supabase.createClient(config.url, config.anonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  });

  state.cloud.client.auth.onAuthStateChange(async (_event, session) => {
    state.cloud.session = session;
    if (session) {
      await bootstrapWorkspace();
    } else {
      clearCloudInterval();
      state.cloud.workspace = null;
      setCloudStatus("warn", "Signed out. Local saving is still available on this device.");
    }
    renderSyncState();
  });

  const { data } = await state.cloud.client.auth.getSession();
  state.cloud.session = data.session;
  if (state.cloud.session) {
    await bootstrapWorkspace();
  } else {
    setCloudStatus("warn", "Cloud sync is configured. Sign in with your team email to share progress.");
  }
  renderSyncState();
}

async function bootstrapWorkspace() {
  const workspace = await loadWorkspace();
  if (!workspace) {
    renderSyncState();
    return;
  }
  state.cloud.workspace = workspace;
  await pullCloudChecks();
  startCloudInterval();
}

async function loadWorkspace() {
  const { data, error } = await state.cloud.client
    .from("team_workspaces")
    .select("id, name, slug")
    .eq("slug", window.SUPABASE_CONFIG.workspaceSlug)
    .single();

  if (error) {
    setCloudStatus("warn", "You are signed in, but this email is not yet allowed for the configured workspace.");
    return null;
  }

  return data;
}

async function pullCloudChecks() {
  const { data, error } = await state.cloud.client
    .from("milestone_states")
    .select("milestone_id, completed, updated_at")
    .eq("workspace_id", state.cloud.workspace.id);

  if (error) {
    setCloudStatus("warn", error.message);
    return;
  }

  if (!data.length && hasLocalProgress()) {
    await pushAllChecksToCloud();
    return;
  }

  const checks = {};
  data.forEach((row) => {
    checks[row.milestone_id] = Boolean(row.completed);
  });
  state.checks = checks;
  saveChecks();
  state.cloud.lastSyncAt = new Date().toISOString();
  setCloudStatus("live", `Synced team workspace "${state.cloud.workspace.name}".`);
  render();
}

async function pushAllChecksToCloud() {
  const rows = milestones.map((item) => ({
    workspace_id: state.cloud.workspace.id,
    milestone_id: item.id,
    completed: Boolean(state.checks[item.id]),
    updated_by_email: state.cloud.session?.user?.email || null
  }));

  const { error } = await state.cloud.client
    .from("milestone_states")
    .upsert(rows, { onConflict: "workspace_id,milestone_id" });

  if (error) {
    setCloudStatus("warn", error.message);
    return;
  }

  state.cloud.lastSyncAt = new Date().toISOString();
  setCloudStatus("live", `All milestones synced to "${state.cloud.workspace.name}".`);
  renderSyncState();
}

async function saveMilestoneToCloud(id, completed) {
  if (!state.cloud.workspace || !state.cloud.session) {
    return;
  }

  const { error } = await state.cloud.client
    .from("milestone_states")
    .upsert({
      workspace_id: state.cloud.workspace.id,
      milestone_id: id,
      completed,
      updated_by_email: state.cloud.session.user.email
    }, { onConflict: "workspace_id,milestone_id" });

  if (error) {
    setCloudStatus("warn", error.message);
    return;
  }

  state.cloud.lastSyncAt = new Date().toISOString();
  setCloudStatus("live", `Saved to "${state.cloud.workspace.name}".`);
  renderSyncState();
}

function startCloudInterval() {
  clearCloudInterval();
  state.cloud.intervalId = window.setInterval(() => {
    if (state.cloud.workspace && state.cloud.session) {
      pullCloudChecks();
    }
  }, refreshIntervalMs);
}

function clearCloudInterval() {
  if (state.cloud.intervalId) {
    window.clearInterval(state.cloud.intervalId);
    state.cloud.intervalId = null;
  }
}

function hasLocalProgress() {
  return Object.values(state.checks).some(Boolean);
}

function setCloudStatus(kind, message) {
  state.cloud.status = kind;
  state.cloud.message = message;
  renderSyncState();
}

function renderSyncState() {
  const sessionEmail = state.cloud.session?.user?.email;
  const syncLabel = state.cloud.configured ? (sessionEmail ? "Cloud active" : "Awaiting sign-in") : "Local only";
  syncStatusPill.textContent = syncLabel;
  syncStatusPill.classList.toggle("is-live", state.cloud.status === "live");
  syncStatusPill.classList.toggle("is-warn", state.cloud.status !== "live");

  const suffix = state.cloud.lastSyncAt
    ? ` Last sync: ${new Date(state.cloud.lastSyncAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}.`
    : "";
  syncCopy.textContent = `${state.cloud.message}${suffix}`;
  syncEmailField.hidden = !state.cloud.configured || Boolean(sessionEmail);
  syncSendLink.hidden = !state.cloud.configured || Boolean(sessionEmail);
  syncRefresh.hidden = !state.cloud.configured || !sessionEmail;
  syncSignout.hidden = !state.cloud.configured || !sessionEmail;
}

function buildSummary() {
  const total = milestones.length;
  const done = milestones.filter((item) => state.checks[item.id]).length;
  const lines = [`Digitization milestones: ${done}/${total} complete`];

  ["Education", "Agriculture", "Healthcare Services", "Tourism", "Shared"].forEach((sector) => {
    const items = milestones.filter((item) => item.sector === sector);
    const completed = items.filter((item) => state.checks[item.id]).length;
    lines.push(`${sector}: ${completed}/${items.length}`);
  });

  if (state.cloud.workspace) {
    lines.unshift(`Workspace: ${state.cloud.workspace.name}`);
  }

  return lines.join("\n");
}

function getFilteredMilestones() {
  return milestones
    .filter((item) => state.filters.sector === "all" || item.sector === state.filters.sector)
    .filter((item) => state.filters.month === "all" || item.month === state.filters.month)
    .filter((item) => state.filters.stage === "all" || item.stage === state.filters.stage)
    .sort(sortMilestones);
}

function getBoardMilestones() {
  return getFilteredMilestones().filter((item) => {
    const completed = Boolean(state.checks[item.id]);
    return state.ui.boardMode === "completed" ? completed : !completed;
  });
}

function sortMilestones(a, b) {
  return (
    monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month) ||
    weekOrder.indexOf(a.week) - weekOrder.indexOf(b.week) ||
    a.sector.localeCompare(b.sector) ||
    a.title.localeCompare(b.title)
  );
}

function render() {
  renderViews();
  renderHero();
  renderOverview();
  renderMilestones();
  renderSyncState();
}

function renderViews() {
  views.forEach((view) => {
    view.classList.toggle("is-active", view.dataset.view === state.ui.view);
  });
  navButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.targetView === state.ui.view);
  });
}

function renderHero() {
  const total = milestones.length;
  const completed = milestones.filter((item) => state.checks[item.id]).length;
  const remaining = total - completed;
  const percent = Math.round((completed / total) * 100);

  heroStats.innerHTML = [
    statButtonMarkup("Completed", `${completed}`, completed ? "Tap to review finished work" : "No completed milestones yet", "completed", !completed),
    statButtonMarkup("Remaining", `${remaining}`, "Open the active working board", "active", false),
    statButtonMarkup("Progress", `${percent}%`, "Track overall delivery", "progress", false)
  ].join("");

  heroStats.querySelectorAll(".hero-stat--button").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      if (action === "completed") {
        setBoardMode("completed");
        setView("board");
      } else if (action === "active") {
        setBoardMode("active");
        setView("board");
      } else if (action === "progress") {
        setView("progress");
      }
    });
  });
}

function statButtonMarkup(label, value, hint, action, disabled) {
  return `
    <button class="hero-stat hero-stat--button" type="button" data-action="${action}" ${disabled ? "disabled" : ""}>
      <span class="hero-stat__label">${label}</span>
      <span class="hero-stat__value">${value}</span>
      <span class="hero-stat__hint">${hint}</span>
    </button>
  `;
}

function renderOverview() {
  const template = document.querySelector("#sector-card-template");
  overviewGrid.innerHTML = "";
  const totalCompleted = milestones.filter((item) => state.checks[item.id]).length;
  progressCaption.textContent = `${totalCompleted}/${milestones.length} complete`;

  ["Education", "Agriculture", "Healthcare Services", "Tourism", "Shared"].forEach((sector) => {
    const items = milestones.filter((item) => item.sector === sector);
    const completed = items.filter((item) => state.checks[item.id]).length;
    const percent = items.length ? Math.round((completed / items.length) * 100) : 0;
    const clone = template.content.cloneNode(true);
    clone.querySelector(".sector-card").style.setProperty("--sector-accent", getSectorAccent(sector));
    clone.querySelector("h3").textContent = sector;
    clone.querySelector(".sector-card__ratio").textContent = `${completed}/${items.length}`;
    clone.querySelector(".progress-bar span").style.width = `${percent}%`;
    clone.querySelector(".sector-card__detail").textContent = `${percent}% complete`;
    overviewGrid.append(clone);
  });
}

function renderBoardMode() {
  const completedMode = state.ui.boardMode === "completed";
  showActiveButton.classList.toggle("is-active", !completedMode);
  showCompletedButton.classList.toggle("is-active", completedMode);
  boardTitle.textContent = completedMode ? "Completed Milestones" : "Active Milestones";
}

function renderMilestones() {
  renderBoardMode();
  const visible = getBoardMilestones();
  const template = document.querySelector("#group-template");
  const cardTemplate = document.querySelector("#milestone-template");
  timelineGroups.innerHTML = "";
  resultsCount.textContent = `${visible.length} milestone${visible.length === 1 ? "" : "s"}`;
  emptyState.hidden = visible.length > 0;

  monthOrder.forEach((month) => {
    const items = visible.filter((item) => item.month === month);
    if (!items.length) {
      return;
    }

    const groupClone = template.content.cloneNode(true);
    groupClone.querySelector("h3").textContent = month;
    groupClone.querySelector(".month-group__count").textContent = `${items.length} item${items.length === 1 ? "" : "s"}`;
    const list = groupClone.querySelector(".milestone-list");

    items.forEach((item) => {
      const cardClone = cardTemplate.content.cloneNode(true);
      const label = cardClone.querySelector(".milestone-card");
      const checkbox = cardClone.querySelector(".milestone-card__checkbox");
      const checked = Boolean(state.checks[item.id]);
      label.style.setProperty("--sector-accent", getSectorAccent(item.sector));

      checkbox.checked = checked;
      checkbox.addEventListener("change", async () => {
        state.checks[item.id] = checkbox.checked;
        saveChecks();
        render();
        await saveMilestoneToCloud(item.id, checkbox.checked);
      });

      label.classList.toggle("is-complete", checked);
      cardClone.querySelector(".milestone-card__week").textContent = item.week;
      cardClone.querySelector(".milestone-card__sector").textContent = item.sector;
      cardClone.querySelector(".milestone-card__title").textContent = item.title;
      cardClone.querySelector(".milestone-card__stage").textContent = item.stage;
      list.append(cardClone);
    });

    timelineGroups.append(groupClone);
  });
}

function getSectorAccent(sector) {
  switch (sector) {
    case "Education":
      return "var(--education)";
    case "Agriculture":
      return "var(--agriculture)";
    case "Healthcare Services":
      return "var(--healthcare)";
    case "Tourism":
      return "var(--tourism)";
    default:
      return "var(--shared)";
  }
}
