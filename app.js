const milestones = [
  { id: "m1", month: "April", week: "Week 3", stage: "Identification of indicators", sector: "Education", title: "Identify sector indicators for Education" },
  { id: "m2", month: "April", week: "Week 4", stage: "Identification of indicators", sector: "Agriculture", title: "Identify sector indicators for Agriculture" },
  { id: "m3", month: "May", week: "Week 1", stage: "Identification of indicators", sector: "Healthcare Services", title: "Identify sector indicators for Healthcare Services" },
  { id: "m4", month: "May", week: "Week 2", stage: "Identification of indicators", sector: "Tourism", title: "Identify sector indicators for Tourism" },
  { id: "m5", month: "April", week: "Week 4", stage: "Confirmation with Statistics Botswana", sector: "Education", title: "Confirm Education indicators with Statistics Botswana" },
  { id: "m6", month: "May", week: "Week 1", stage: "Confirmation with Statistics Botswana", sector: "Agriculture", title: "Confirm Agriculture indicators with Statistics Botswana" },
  { id: "m7", month: "May", week: "Week 2", stage: "Confirmation with Statistics Botswana", sector: "Healthcare Services", title: "Confirm Healthcare indicators with Statistics Botswana" },
  { id: "m8", month: "May", week: "Week 3", stage: "Confirmation with Statistics Botswana", sector: "Tourism", title: "Confirm Tourism indicators with Statistics Botswana" },
  { id: "m9", month: "May", week: "Week 1", stage: "Identification of administrative data collection forms", sector: "Education", title: "Identify administrative forms for Education" },
  { id: "m10", month: "May", week: "Week 2", stage: "Identification of administrative data collection forms", sector: "Agriculture", title: "Identify administrative forms for Agriculture" },
  { id: "m11", month: "May", week: "Week 3", stage: "Identification of administrative data collection forms", sector: "Healthcare Services", title: "Identify administrative forms for Healthcare Services" },
  { id: "m12", month: "May", week: "Week 4", stage: "Identification of administrative data collection forms", sector: "Tourism", title: "Identify administrative forms for Tourism" },
  { id: "m13", month: "May", week: "Week 2", stage: "Standardization of forms by Statistics Botswana", sector: "Education", title: "Standardize Education forms with Statistics Botswana" },
  { id: "m14", month: "May", week: "Week 3", stage: "Standardization of forms by Statistics Botswana", sector: "Agriculture", title: "Standardize Agriculture forms with Statistics Botswana" },
  { id: "m15", month: "May", week: "Week 4", stage: "Standardization of forms by Statistics Botswana", sector: "Healthcare Services", title: "Standardize Healthcare forms with Statistics Botswana" },
  { id: "m16", month: "June", week: "Week 1", stage: "Standardization of forms by Statistics Botswana", sector: "Tourism", title: "Standardize Tourism forms with Statistics Botswana" },
  { id: "m17", month: "April", week: "Week 3", stage: "Building a web app", sector: "Shared", title: "Complete solution architecture and database schema" },
  { id: "m18", month: "April", week: "Week 4", stage: "Building a web app", sector: "Shared", title: "Finalize shared requirements and module design" },
  { id: "m19", month: "May", week: "Week 3", stage: "Building a web app", sector: "Education", title: "Build Education web app module" },
  { id: "m20", month: "May", week: "Week 4", stage: "Building a web app", sector: "Agriculture", title: "Build Agriculture web app module" },
  { id: "m21", month: "June", week: "Week 1", stage: "Building a web app", sector: "Healthcare Services", title: "Build Healthcare Services web app module" },
  { id: "m22", month: "June", week: "Week 2", stage: "Building a web app", sector: "Tourism", title: "Build Tourism web app module" },
  { id: "m23", month: "June", week: "Week 4", stage: "Building a web app", sector: "Shared", title: "Complete integration, reporting dashboard, and bug fixing" },
  { id: "m24", month: "July", week: "Week 1", stage: "Building a web app", sector: "Shared", title: "Apply user acceptance changes" },
  { id: "m25", month: "July", week: "Week 3", stage: "Building a web app", sector: "Shared", title: "Finish production configuration and hosting" },
  { id: "m26", month: "July", week: "Week 4", stage: "Building a web app", sector: "Shared", title: "Provide hypercare support after release" },
  { id: "m27", month: "May", week: "Week 4", stage: "Testing the web app", sector: "Education", title: "Test Education web app module" },
  { id: "m28", month: "June", week: "Week 1", stage: "Testing the web app", sector: "Agriculture", title: "Test Agriculture web app module" },
  { id: "m29", month: "June", week: "Week 2", stage: "Testing the web app", sector: "Healthcare Services", title: "Test Healthcare Services web app module" },
  { id: "m30", month: "June", week: "Week 3", stage: "Testing the web app", sector: "Tourism", title: "Test Tourism web app module" },
  { id: "m31", month: "June", week: "Week 4", stage: "Testing the web app", sector: "Shared", title: "Run integrated system testing across all sectors" },
  { id: "m32", month: "July", week: "Week 1", stage: "Testing the web app", sector: "Shared", title: "Complete user acceptance testing and sign-off" },
  { id: "m33", month: "July", week: "Week 2", stage: "Testing the web app", sector: "Shared", title: "Train focal persons and system administrators" },
  { id: "m34", month: "July", week: "Week 3", stage: "Testing the web app", sector: "Shared", title: "Validate go-live and data migration" },
  { id: "m35", month: "July", week: "Week 4", stage: "Testing the web app", sector: "Shared", title: "Monitor rollout, support users, and hand over" },
  { id: "m36", month: "June", week: "Week 4", stage: "Cross-sector review", sector: "Shared", title: "Review progress across all sectors" },
  { id: "m37", month: "June", week: "Week 4", stage: "Cross-sector review", sector: "Shared", title: "Confirm final indicator set and metadata" },
  { id: "m38", month: "June", week: "Week 4", stage: "Cross-sector review", sector: "Shared", title: "Complete gap analysis and form consolidation" },
  { id: "m39", month: "June", week: "Week 4", stage: "Cross-sector review", sector: "Shared", title: "Approve cross-sector standard template pack" }
];

const monthOrder = ["April", "May", "June", "July"];
const weekOrder = ["Week 1", "Week 2", "Week 3", "Week 4"];
const storageKey = "digitization-milestones-v1";

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
  const lines = [
    `Digitization milestones: ${done}/${total} complete`
  ];

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
