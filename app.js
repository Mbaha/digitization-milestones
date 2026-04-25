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
const storageKey = "digitization-milestones-v2";

const state = {
  checks: loadChecks(),
  filters: {
    sector: "all",
    month: "all",
    stage: "all"
  }
};

const heroStats = document.querySelector("#hero-stats");
const overviewGrid = document.querySelector("#overview-grid");
const timelineGroups = document.querySelector("#timeline-groups");
const resultsCount = document.querySelector("#results-count");
const sectorFilter = document.querySelector("#sector-filter");
const monthFilter = document.querySelector("#month-filter");
const stageFilter = document.querySelector("#stage-filter");
const resetButton = document.querySelector("#reset-button");
const shareButton = document.querySelector("#share-button");

init();

function init() {
  registerServiceWorker();
  populateFilters();
  bindEvents();
  render();
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

  sectors.forEach((sector) => {
    sectorFilter.add(new Option(sector, sector));
  });

  monthOrder.forEach((month) => {
    monthFilter.add(new Option(month, month));
  });

  stages.forEach((stage) => {
    stageFilter.add(new Option(stage, stage));
  });
}

function bindEvents() {
  [sectorFilter, monthFilter, stageFilter].forEach((element) => {
    element.addEventListener("change", () => {
      state.filters[element.id.replace("-filter", "")] = element.value;
      render();
    });
  });

  resetButton.addEventListener("click", () => {
    state.checks = {};
    saveChecks();
    render();
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

  return lines.join("\n");
}

function getVisibleMilestones() {
  return milestones
    .filter((item) => state.filters.sector === "all" || item.sector === state.filters.sector)
    .filter((item) => state.filters.month === "all" || item.month === state.filters.month)
    .filter((item) => state.filters.stage === "all" || item.stage === state.filters.stage)
    .sort(sortMilestones);
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
  renderHero();
  renderOverview();
  renderMilestones();
}

function renderHero() {
  const total = milestones.length;
  const completed = milestones.filter((item) => state.checks[item.id]).length;
  const remaining = total - completed;
  const percent = Math.round((completed / total) * 100);

  heroStats.innerHTML = [
    statMarkup("Completed", `${completed}`),
    statMarkup("Remaining", `${remaining}`),
    statMarkup("Progress", `${percent}%`)
  ].join("");
}

function statMarkup(label, value) {
  return `
    <div class="hero-stat">
      <span class="hero-stat__label">${label}</span>
      <span class="hero-stat__value">${value}</span>
    </div>
  `;
}

function renderOverview() {
  const template = document.querySelector("#sector-card-template");
  overviewGrid.innerHTML = "";

  ["Education", "Agriculture", "Healthcare Services", "Tourism", "Shared"].forEach((sector) => {
    const items = milestones.filter((item) => item.sector === sector);
    const completed = items.filter((item) => state.checks[item.id]).length;
    const percent = items.length ? Math.round((completed / items.length) * 100) : 0;
    const clone = template.content.cloneNode(true);

    clone.querySelector("h3").textContent = sector;
    clone.querySelector(".sector-card__ratio").textContent = `${completed}/${items.length}`;
    clone.querySelector(".progress-bar span").style.width = `${percent}%`;
    clone.querySelector(".sector-card__detail").textContent = `${percent}% complete`;
    overviewGrid.append(clone);
  });
}

function renderMilestones() {
  const visible = getVisibleMilestones();
  const template = document.querySelector("#group-template");
  const cardTemplate = document.querySelector("#milestone-template");
  timelineGroups.innerHTML = "";
  resultsCount.textContent = `${visible.length} milestone${visible.length === 1 ? "" : "s"}`;

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

      checkbox.checked = Boolean(state.checks[item.id]);
      checkbox.addEventListener("change", () => {
        state.checks[item.id] = checkbox.checked;
        saveChecks();
        render();
      });

      if (checkbox.checked) {
        label.classList.add("is-complete");
      }

      cardClone.querySelector(".milestone-card__week").textContent = item.week;
      cardClone.querySelector(".milestone-card__sector").textContent = item.sector;
      cardClone.querySelector(".milestone-card__title").textContent = item.title;
      cardClone.querySelector(".milestone-card__stage").textContent = item.stage;
      list.append(cardClone);
    });

    timelineGroups.append(groupClone);
  });
}
