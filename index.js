const url = "https://jsonplaceholder.typicode.com/posts";

document.addEventListener("DOMContentLoaded", ()=>{
    fetch(url).then((res)=>{
        console.log(res);
        return res.json()
    }).then(data => {
    console.log(data);
    displayPosts(data)
    }).catch(error => {
        console.log(`An error occured`, error);
    })

    function displayPosts(posts) {
        var postContainer = document.getElementById("post-container");
    
        posts.forEach((post) => {
          var postElement = document.createElement("div");
          postElement.innerHTML = `
              <h1>${post.title}</h1>
              <p>${post.body}</p>
              <hr>
            `
          postContainer.appendChild(postElement);
    });
    }


})

