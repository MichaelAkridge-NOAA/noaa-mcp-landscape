(function () {
  "use strict";

  var register = document.getElementById("register");
  if (!register) return;

  var entries = Array.prototype.slice.call(register.querySelectorAll(".entry"));
  var q = document.getElementById("q");
  var shown = document.getElementById("shown");
  var empty = document.getElementById("empty");
  var reset = document.getElementById("reset");
  var emptyReset = document.getElementById("empty-reset");

  var selects = {
    org: document.getElementById("f-org"),
    status: document.getElementById("f-status"),
    type: document.getElementById("f-type"),
    resource: document.getElementById("f-resource"),
    external: document.getElementById("f-external")
  };

  // Populate each dropdown with the distinct values present in the data,
  // so filters always reflect what is actually in the registry.
  Object.keys(selects).forEach(function (key) {
    var sel = selects[key];
    var seen = {};
    entries.forEach(function (el) {
      var raw = el.getAttribute("data-" + key);
      if (!raw) return;
      var value = raw.trim();
      var norm = value.toLowerCase();
      if (norm && !seen[norm]) {
        seen[norm] = true;
        var opt = document.createElement("option");
        opt.value = norm;
        // Show organizations as written; title-case the short vocabularies.
        opt.textContent = key === "org" ? value : titleCase(value);
        sel.appendChild(opt);
      }
    });
    sortOptions(sel);
  });

  function titleCase(s) {
    return s.replace(/\w\S*/g, function (t) {
      return t.charAt(0).toUpperCase() + t.slice(1);
    });
  }

  function sortOptions(sel) {
    var opts = Array.prototype.slice.call(sel.querySelectorAll("option")).slice(1);
    opts.sort(function (a, b) { return a.textContent.localeCompare(b.textContent); });
    opts.forEach(function (o) { sel.appendChild(o); });
  }

  function apply() {
    var term = (q.value || "").trim().toLowerCase();
    var wants = {
      org: selects.org.value,
      status: selects.status.value,
      type: selects.type.value,
      resource: selects.resource.value,
      external: selects.external.value
    };
    var active = term || wants.org || wants.status || wants.type || wants.resource;
    var visible = 0;

    entries.forEach(function (el) {
      var ok = true;
      Object.keys(wants).forEach(function (key) {
        if (wants[key] && (el.getAttribute("data-" + key) || "").toLowerCase() !== wants[key]) {
          ok = false;
        }
      });
      if (ok && term && (el.getAttribute("data-search") || "").indexOf(term) === -1) {
        ok = false;
      }
      el.hidden = !ok;
      if (ok) visible++;
    });

    if (shown) shown.textContent = visible;
    if (empty) empty.hidden = visible !== 0;
    if (reset) reset.hidden = !active;

    // Keep the ?query in the URL so a filtered view can be shared.
    syncUrl(term, wants);
  }

  function syncUrl(term, wants) {
    if (!window.history || !window.history.replaceState) return;
    var params = new URLSearchParams();
    if (term) params.set("q", term);
    Object.keys(wants).forEach(function (k) { if (wants[k]) params.set(k, wants[k]); });
    var qs = params.toString();
    window.history.replaceState(null, "", qs ? "?" + qs : location.pathname);
  }

  function hydrateFromUrl() {
    var params = new URLSearchParams(location.search);
    if (params.get("q")) q.value = params.get("q");
    ["org", "status", "type", "resource", "external"].forEach(function (k) {
      var v = params.get(k);
      if (v && selects[k]) selects[k].value = v.toLowerCase();
    });
  }

  function clearAll() {
    q.value = "";
    Object.keys(selects).forEach(function (k) { selects[k].value = ""; });
    apply();
  }

  q.addEventListener("input", apply);
  Object.keys(selects).forEach(function (k) {
    selects[k].addEventListener("change", apply);
  });
  if (reset) reset.addEventListener("click", clearAll);
  if (emptyReset) emptyReset.addEventListener("click", clearAll);

  hydrateFromUrl();
  apply();
})();
