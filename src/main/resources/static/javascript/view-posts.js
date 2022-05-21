class Post {

    constructor(title, content, author, date, id) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.date = date;
        this.id = id;
    }

    append(container) {
        let postContainer = document.createElement("div");
        postContainer.classList.add("post-container");
        postContainer.classList.add("container");

        let title = document.createElement("h3");
        title.classList.add("post-title");
        title.classList.add("title");
        title.innerText = this.title;
        let postContent = document.createElement("div");
        postContent.classList.add("post-content");
        let displayContent = this.content;
        if (displayContent.length > 400) {
            displayContent = displayContent.substring(0, 400) + "...";
        }
        postContent.innerText = displayContent;
        let author = document.createElement("h3");
        author.classList.add("author");
        author.classList.add("title");
        author.innerText = this.author;
        container.appendChild(postContainer);
        postContainer.appendChild(title);
        postContainer.appendChild(postContent);
        postContainer.appendChild(author);
        postContainer.addEventListener("click", () => {
            window.location = "/post/" + this.id;
        });
    }

}

let xhr = new XMLHttpRequest();
xhr.open("POST", '/view-posts/', true);
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhr.send();
xhr.onload = function (e) {
    let response = JSON.parse(xhr.response);
    for (let i = 0; i < response.length; i++) {
        let post = new Post(response[i].title, response[i].content, response[i].authorName, response[i].date, response[i].id);
        let container = document.createElement("div");
        container.classList.add("container");
        document.getElementsByTagName("body")[0].appendChild(container);
        post.append(container);
    }
};
xhr.onerror = function () {
    console.error("** An error occurred during the XMLHttpRequest");
};
