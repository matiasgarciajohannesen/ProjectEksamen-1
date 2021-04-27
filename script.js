
const F1 = "https://matiasjohannesen.no/wp-json/wp/v2/posts/";
const posts = document.querySelector(".blog");

 fetch(F1)
     .then(response => response.json())
     .then(data => formula(data))
     .catch(error => posts.innerHTML = "ups that went wrong")

formula = (blogs) => {
     console.log(blogs);
     posts.innerHTML = "";
     for (blog of blogs) {
         console.log(blog)
         let postDiv =  `
         <div>
         <h2>${blog.title.rendered}</h2>
         <p>${blog.content.rendered}</p>
        </div>
        `;
         posts.innerHTML += postDiv;
     }
 }

