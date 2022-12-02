(() => {
  const refs = {
    openmenuBtn: document.querySelector("[data-menu-open]"),
    closemenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    body: document.querySelector("body"),
    menuList: document.querySelector(".mob-menu-item"),
  };

  refs.openmenuBtn.addEventListener("click", togglemenu);
  refs.closemenuBtn.addEventListener("click", togglemenu);
  refs.closemenuBtn.addEventListener("click", togglemenu);

  function togglemenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.menu.classList.toggle("no-scroll");
  }
   function removemenu() {
    refs.menu.classList.add("is-hidden");
    refs.menu.classList.remove("no-scroll");
  }
})();