class NavbarItem {

    constructor(name, linksTo, navbar) {
        this.name = name;
        this.linksTo = linksTo;
        this.addToNavbar(navbar);
    }

    addToNavbar(navbar) {
        let item = document.createElement("span");
        item.innerText = this.name;
        item.classList.add("navbar-item");
        let navbarItem = this;
        let isSame = window.location.pathname === (navbarItem.linksTo);
        item.addEventListener("click", function () {
            if (isSame) {
                item.classList.add("navbar-activated");
                return;
            }
            window.location = navbarItem.linksTo;
        });
        item.addEventListener('mouseup', (event) => {
            if (event.button != 1 && event.buttons != 4) return;
            if (isSame) return;
            window.open(navbarItem.linksTo, "_blank");
        });
        if (isSame) item.classList.add("navbar-activated");
        navbar.appendChild(item);
    }
}

const navbar = document.createElement("span");
navbar.classList.add("navbar");
navbar.id = "navbar";

let homeItem = new NavbarItem("Home", "/", navbar);
let createPostItem = new NavbarItem("Create Post", "/create-post", navbar);
let viewPostsItem = new NavbarItem("View Posts", "/view-posts", navbar);

let signIn = document.createElement("div");
signIn.id = "sign-in";

function handleCredentialResponse(response) {
    // console.log("Encoded JWT ID token: " + response.credential);
    // console.log(response);
    // console.log(response.credential);
    // console.log(response.credential.username);
}

window.onload = function () {
    google.accounts.id.initialize({
        client_id: "939552060322-k50u112qi8q176724lsua84kvlsa44mc.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
        document.getElementById("sign-in"),
        { theme: "outline", size: "large" }  // customization attributes
    );
    console.log(document.getElementById("sign-in").style.backgroundColor);
    // google.accounts.id.prompt(); // also display the One Tap dialog
}

navbar.appendChild(signIn);

let body = document.getElementsByTagName("body");
body[0].insertAdjacentElement("afterbegin", navbar);