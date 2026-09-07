// =========================================
// NAVBAR MENU LINKS
// =========================================

const menuLinks = document.querySelectorAll(".link");
const menuToggle = document.getElementById("menuToggle");
const mainMenu = document.getElementById("mainMenu");


// Menu link click
menuLinks.forEach(link => {

    link.addEventListener("click", function () {

        // Active link change
        menuLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");


        // Mobile menu close
        if (mainMenu) {
            mainMenu.classList.remove("show");
        }


        // Hamburger icon back to menu
        if (menuToggle) {

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.remove("ri-close-line");
                icon.classList.add("ri-menu-line");
            }

        }

    });

});


// =========================================
// MOBILE HAMBURGER MENU
// =========================================

if (menuToggle && mainMenu) {

    menuToggle.addEventListener("click", function () {

        // Open / Close menu
        mainMenu.classList.toggle("show");


        // Hamburger ↔ Close icon
        const icon = menuToggle.querySelector("i");

        if (icon) {

            if (mainMenu.classList.contains("show")) {

                icon.classList.remove("ri-menu-line");
                icon.classList.add("ri-close-line");

            } else {

                icon.classList.remove("ri-close-line");
                icon.classList.add("ri-menu-line");

            }

        }

    });

}


// =========================================
// CUSTOM SERVICE DROPDOWN
// =========================================

const customSelect = document.querySelector(".custom-select");
const selectBox = document.querySelector(".select-box");
const selectText = document.querySelector(".select-text");
const options = document.querySelectorAll(".select-options div");


// Open / Close Dropdown

if (selectBox && customSelect) {

    selectBox.addEventListener("click", function () {

        customSelect.classList.toggle("active");

    });

}


// =========================================
// SELECT SERVICE OPTION
// =========================================

options.forEach(function (option) {

    option.addEventListener("click", function () {

        // Change selected text
        if (selectText) {
            selectText.textContent = this.textContent.trim();
        }


        // Remove previous selected
        options.forEach(function (item) {

            item.classList.remove("selected");

        });


        // Add selected class
        this.classList.add("selected");


        // Close dropdown
        if (customSelect) {
            customSelect.classList.remove("active");
        }

    });

});

document.addEventListener("click", function (event) {

    if (
        customSelect &&
        !customSelect.contains(event.target)
    ) {

        customSelect.classList.remove("active");

    }

});