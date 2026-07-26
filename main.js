/* Dozvuky prázdnin — interaktivita: navigace, odpočet, reveal animace */
(function () {
  "use strict";

  // --- Mobilní menu ---
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  // --- Odpočet do akce: 12. 9. 2026, 14:00 ---
  var target = new Date("2026-09-12T14:00:00+02:00").getTime();
  var elDays = document.getElementById("cd-days");
  var elHours = document.getElementById("cd-hours");
  var elMin = document.getElementById("cd-min");
  var elSec = document.getElementById("cd-sec");

  function pad(n) { return n < 10 ? "0" + n : "" + n; }

  function tick() {
    if (!elDays) return;
    var now = Date.now();
    var diff = target - now;
    if (diff <= 0) {
      elDays.textContent = "0"; elHours.textContent = "00";
      elMin.textContent = "00"; elSec.textContent = "00";
      var wrap = document.getElementById("countdown-wrap");
      if (wrap) {
        var note = wrap.querySelector(".cd-note");
        if (note) note.textContent = "Akce právě probíhá — vítejte na Farské louce!";
      }
      return;
    }
    var d = Math.floor(diff / 86400000);
    var h = Math.floor((diff % 86400000) / 3600000);
    var m = Math.floor((diff % 3600000) / 60000);
    var s = Math.floor((diff % 60000) / 1000);
    elDays.textContent = d;
    elHours.textContent = pad(h);
    elMin.textContent = pad(m);
    elSec.textContent = pad(s);
  }
  tick();
  setInterval(tick, 1000);

  // --- Reveal on scroll ---
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (r) { io.observe(r); });
  } else {
    reveals.forEach(function (r) { r.classList.add("in"); });
  }
})();
