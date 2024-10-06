class HeaderNav extends HTMLElement {
  connectedCallback() {
    document.addEventListener("onLoadedSelections", () => {
      this.innerHTML = `
                    <header>
                    <div class="header_components">
                        <div class="logo_and_initials">
                            <a href="/">
                                <img class="logo" src="../assets/goblin_logo.png" alt="">
                                <h1 class="initials">GGG</h1>
                            </a>
                        </div>
                        <nav class="main_nav" data-visible="false">
                            <div class="nav_options_container">
                                <ul class="nav_options">
                                    <li class="nav_option"><a href="/">Home</a></li>
                                    <li class="nav_option">
                                        ${this.createSublist(
                                          "genres",
                                          global.categories.genres
                                        )}
                                    </li>
                                    <li class="nav_option">
                                        ${this.createSublist(
                                          "platforms",
                                          global.categories.platforms
                                        )}
                                    </li>
                                    <li class="nav_option"><a href="#">Forums</a></li>
                                </ul>
                                <div class="socials_container">
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">
                                            <path d="M10.053,7.988l5.631,8.024h-1.497L8.566,7.988H10.053z M21,6v12	c0,1.657-1.343,3-3,3H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h12C19.657,3,21,4.343,21,6z M17.538,17l-4.186-5.99L16.774,7	h-1.311l-2.704,3.16L10.552,7H6.702l3.941,5.633L6.906,17h1.333l3.001-3.516L13.698,17H17.538z"/>
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">
                                            <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"/>
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">
                                            <path d="M 5.3632812 2 L 2 6.6367188 L 2 20 L 7 20 L 7 23 L 10 23 L 13 20 L 17 20 L 22 15 L 22 2 L 5.3632812 2 z M 6 4 L 20 4 L 20 13 L 17 16 L 12 16 L 9 19 L 9 16 L 6 16 L 6 4 z M 11 7 L 11 12 L 13 12 L 13 7 L 11 7 z M 16 7 L 16 12 L 18 12 L 18 7 L 16 7 z"/>
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">
                                            <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"/>
                                        </svg>
                                    </a>
                                    <a href='#'>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                            <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </nav>
                        <div class="burger_container">
                            <i id="slide_icon" class="gg-menu"></i>
                        </div>
                    </div>
                </header>
            `;
      this.initSideBar();
    });
  }

  initSideBar() {
    const navBarSlide = document.querySelector(".main_nav");
    const navBarButton = document.querySelector(".burger_container");

    const genreComponents = this.getCategoryComponents("genres");
    const platformComponents = this.getCategoryComponents("platforms");

    //Open side menu
    navBarButton.addEventListener("click", () => {
      let visibility = navBarSlide.getAttribute("data-visible");
      let icon = document.querySelector("#slide_icon");

      if (visibility === "false") {
        navBarSlide.setAttribute("data-visible", "true");
        icon.classList.replace("gg-menu", "gg-close");
      } else if (visibility === "true") {
        navBarSlide.setAttribute("data-visible", "false");
        icon.classList.replace("gg-close", "gg-menu");
      }
    });

    //Show sublists
    genreComponents.button.addEventListener("click", () =>
      executeButtonAction(genreComponents)
    );

    platformComponents.button.addEventListener("click", () =>
      executeButtonAction(platformComponents)
    );

    //Reset changes
    const mq2 = window.matchMedia("(width >= 1185px)");

    mq2.addEventListener("change", this.resetArrows);

    mq2.addEventListener("change", this.resetNavBar);
  }

  createSublist(typeName, types) {
    const typeNameLabel = typeName.charAt(0).toUpperCase() + typeName.slice(1);

    let listItems = `<a href="${global.links.selection}category=${typeName}">${typeNameLabel}</a>
                      <i class="${typeName}_sublist_arrow gg-chevron-down"></i>
                      <ul class="sublist ${typeName}_sublist" data-visible="false">`;

    for (const [key, val] of Object.entries(types)) {
      listItems += `<li><a href="${global.links.selection}category=${typeName}&type=${key}">${val.label}</a></li>`;
    }

    listItems += `</ul>`;

    return listItems;
  }

  getCategoryComponents(category) {
    const sublist = document.querySelector(`.${category}_sublist`);
    const button = document.querySelector(`.${category}_sublist_arrow`);

    return { sublist, button };
  }

  executeButtonAction({ sublist, button }) {
    let visibility = platformsSublist.getAttribute("data-visible");

    if (visibility === "false") {
      sublist.setAttribute("data-visible", "true");
      button.classList.replace("gg-chevron-down", "gg-chevron-up");
    } else if (visibility === "true") {
      sublist.setAttribute("data-visible", "false");
      button.classList.replace("gg-chevron-up", "gg-chevron-down");
    }
  }

  resetArrows(mql) {
    if (mql.matches) {
      const pComponents = this.getCategoryComponents("platforms");
      const gComponents = this.getCategoryComponents("genres");

      pComponents.sublist.setAttribute("data-visible", "false");
      pComponents.button.classList.replace("gg-chevron-up", "gg-chevron-down");

      gComponents.sublist.setAttribute("data-visible", "false");
      gComponents.button.classList.replace("gg-chevron-up", "gg-chevron-down");
    }
  }

  resetNavBar(mql) {
    if (mql.matches) {
      let icon = document.querySelector("#slide_icon");

      navBarSlide.setAttribute("data-visible", "false");
      icon.classList.replace("gg-close", "gg-menu");
    }
  }
}

customElements.define("header-nav", HeaderNav);
