(() => {
  const refs = {
    openmenuBtn: document.querySelector("[data-menu-open]"),
    closemenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openmenuBtn.addEventListener("click", togglemenu);
  refs.closemenuBtn.addEventListener("click", togglemenu);

  function togglemenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();