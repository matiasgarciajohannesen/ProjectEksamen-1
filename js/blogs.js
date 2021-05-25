
const F1 = "https://matiasjohannesen.no/wp-json/wp/v2/posts?_embed=true&per_page=9";
const loadMore = "https://matiasjohannesen.no/wp-json/wp/v2/posts?_embed=true&per_page=3&offset=9";
const posts = document.querySelector(".allBlogs");
const more = document.querySelector(".loadMore");

 fetch(F1)
     .then(response => response.json())
     .then(data => formula(data))
     .catch(error => console.error(error))

const formula = (blogs) => {
     console.log(blogs);
     let postDiv = ``
     for (blog of blogs) {
         console.log(blog)
         let images = blog._embedded["wp:featuredmedia"]
         console.log(images)
         for (image of blog._embedded["wp:featuredmedia"]){
         postDiv =  `
         <div class="all">
         <a href="details.html?id=${blog.id}"><h2>${blog.title.rendered}</h2></a>
         <a href="details.html?id=${blog.id}"><img src="${image.source_url}" alt="yeet"></a>
        </div>
        `;
        posts.innerHTML += postDiv;
        }

         
     }
 }


 more.addEventListener("click", ()=> {
    fetch(loadMore)
    .then(response => response.json())
    .then(data => formula(data))
    .catch(error => console.error(error))
    more.style.display="none"
 })