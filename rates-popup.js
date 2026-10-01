(function () {
  "use strict";

  var modal = document.getElementById("ratesModal");
  var closeBtn = document.getElementById("ratesCloseBtn");

  if (!modal) return;

  function openRates() {
    modal.style.display = "flex";

    document.body.style.overflow = "hidden";
  }

  function closeRates() {
    modal.style.display = "none";

    document.body.style.overflow = "";
  }

  /* Open */
  document.addEventListener("click", function (e) {
    var trigger = e.target.closest(".rates-open-trigger");

    if (!trigger) return;

    e.preventDefault();

    openRates();
  });

  /* Close button */
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      closeRates();
    });
  }

  /* Click outside */
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeRates();
    }
  });

  /* ESC */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.style.display === "flex") {
      closeRates();
    }
  });
})();
