class Post {

    constructor(id, title, authorId, authorName, content, timePosted) {
        this.id = id;
        this.title = title;
        this.authorId = authorId;
        this.authorName = authorName;
        this.content = content;
        this.timePosted = timePosted;
    }
}

let addResourceButton = document.getElementById("add-resource");
let resourceArea = document.getElementById("resource-area");

let addButton = new AddButton(addResourceButton, "resource");

addResourceButton.addEventListener("click", function() {
    add();
});

function add() {
    let input = document.createElement("input");
    input.placeholder = "Resource...";
    let id = addButton.getNextResource();
    input.type = "text";
    input.classList.add("input");
    let removable = addButton.add(id, resourceArea, input);
}

document.getElementById("post-button").addEventListener("click", function() {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/post/next-id", true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send();
    xhr.onload = function(e) {
        sendPost(xhr.response)
    };
});

function sendPost(id) {
    let title = document.getElementById("post-title").value;
    let authorId = "some-random-id";
    let authorName = "Some Random Name";
    let content = document.getElementById("post-content").value;
    let notFilled = false;
    if (title === "") {
        document.getElementById("post-title").style.borderColor = "red";
        notFilled = true;
    }
    if (content === "") {
        document.getElementById("post-content").style.borderColor = "red";
        notFilled = true;
    }
    if (notFilled) return;
    let post = new Post(id, title, authorId, authorName, content, 0);
    let postJson = JSON.stringify(post);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/post/create", true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(postJson);
    console.log("Sent post");
    xhr.onload = function(e) {
        window.location.href = "post/" + id;
    };
}