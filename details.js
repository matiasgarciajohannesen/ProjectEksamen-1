

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

const formula = (blogs) => {
     console.log(blogs);
     posts.innerHTML = "";
     let postDiv =  `
         <div>
         <h2>${blogs.title.rendered}</h2>
         <p>${blogs.content.rendered}</p>
        </div>
        `;
        posts.innerHTML += postDiv;
 }