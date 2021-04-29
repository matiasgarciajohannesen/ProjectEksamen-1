

const getUrl = document.location.search
console.log (getUrl)

const para = new URLSearchParams (getUrl);
const id = para.get("id")
console.log(id)

const F1 = `https://matiasjohannesen.no/wp-json/wp/v2/posts/${id}?_embed=true`;
const posts = document.querySelector(".blog");

 fetch(F1)
     .then(response => response.json())
     .then(data => formula(data))
     .catch(error => console.error(error))

const formula = (blog) => {
     console.log(blog);
     posts.innerHTML = "";
     let images = blog._embedded["wp:featuredmedia"]
     for (image of blog._embedded["wp:featuredmedia"]){
        postDiv =  `
        <div>
        <h2>${blog.title.rendered}</h2>
        <img src="${image.source_url}" alt="yeet">
        <p>${blog.content.rendered}</p>
       </div>
       `;
       posts.innerHTML += postDiv;
       }
 }