/* Dozvuky prázdnin 2027 — navigace, odpočet dní, reveal animace */
(function () {
  "use strict";

  // --- Mobilní menu ---
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  // --- Odpočet dní do festivalu: sobota 18. 9. 2027 ---
  var box = document.getElementById("countdown");
  if (box) {
    var target = new Date("2027-09-18T00:00:00+02:00").getTime();
    var days = Math.ceil((target - Date.now()) / 86400000);
    var num = document.getElementById("cd-days");
    var unit = document.getElementById("cd-unit");
    if (days > 0) {
      num.textContent = days;
      unit.textContent = days === 1 ? "den" : (days >= 2 && days <= 4 ? "dny" : "dní");
      box.hidden = false;
    } else if (days === 0) {
      box.innerHTML = '<span class="num">Dnes</span> <span>se vidíme na Farské louce!</span>';
      box.hidden = false;
    }
  }

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
