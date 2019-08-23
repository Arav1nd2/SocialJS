window.onload = function() {
    let loginState = localStorage.getItem("loginStatus");
    console.log(loginState);
    if (loginState === "false") {
         console.log(loginState);

         window.location = "index.html";
    }
    getPosts();
};
function logout() {
    localStorage.setItem("loginStatus", false);
    window.location = "index.html";
}

let postData = '';

function getPosts() {
    axios.get("http://5d602661c2ca490014b26e1a.mockapi.io/posts")
        .then((res) => {
     let posts = res.data;
     console.log(res);
     posts.forEach(element => {
        postData += `
            <div class="card">
                <img src="${element.post}" />
                <br/>
                <div>
                <p><b>Name: </b>${element.name}</p>
                <p><b>Description: </b>${element.description}</p>
                <b>Posted On: </b>${element.createdAt}    
                <p><b>Likes: </b>${element.likes}</p>
                </div>
            </div>
        `;
     });
     document.getElementById("post-container").innerHTML = postData;
    }).catch(err => {
        console.log(err);
    })
}