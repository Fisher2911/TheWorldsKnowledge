// <h1 className="title">Title</h1>
// <div className="container">
//     <p className="answer-content">
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro consequatur quia excepturi ipsa minus ex,
//         neque reiciendis cum amet suscipit. Dolor possimus et debitis ex quidem magni dolores nihil sed omnis
//         libero! Maiores, sapiente nisi. Rerum tempore nobis expedita iste ipsa temporibus reiciendis corrupti
//         tenetur neque. Culpa laborum explicabo velit.
//     </p>
// </div>
// <div className="comment-container">
//     <button className="comment-section feedback">Feedback</button>
//     <button className="comment-section help">Help</button>
//     <button className="comment-section discussion">Discussion</button>
// </div>

let postId = getCookie("post-id");
let xhr = new XMLHttpRequest();
xhr.open("POST", "/api/post/get/" + postId, true);
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhr.send();
xhr.onload = function(e) {
    if (xhr.response === undefined || xhr.response === "") window.location = "/view-posts";
    let post = JSON.parse(xhr.response);

    let postTitle = document.createElement("h1");
    postTitle.classList.add("title");
    postTitle.innerText = post.title;

    let container = document.createElement("div");
    container.classList.add("container");

    let answerContent = document.createElement("p");
    answerContent.classList.add("answer-content");
    answerContent.innerText = post.content;

    let authorName = document.createElement("h3");
    authorName.classList.add("author");
    authorName.classList.add("title");
    authorName.innerText = post.authorName;

    let body = document.getElementsByTagName("body")[0];
    body.appendChild(postTitle);
    body.appendChild(container);

    container.appendChild(answerContent);
    container.appendChild(authorName);

    let commentContainer = document.createElement("div");

    commentContainer.classList.add("comment-container");

    let feedback = document.createElement("button");
    feedback.classList.add("comment-section");
    feedback.classList.add("feedback");
    feedback.innerText = "Feedback";

    let help = document.createElement("button");
    help.classList.add("comment-section");
    help.classList.add("help");
    help.innerText = "Help";

    let discussion = document.createElement("button");
    discussion.classList.add("comment-section");
    discussion.classList.add("discussion");
    discussion.innerText = "Discussion";

    commentContainer.appendChild(feedback);
    commentContainer.appendChild(help);
    commentContainer.appendChild(discussion);

    body.appendChild(commentContainer);
};

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
