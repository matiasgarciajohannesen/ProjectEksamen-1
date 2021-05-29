

const getUrl = document.location.search
console.log (getUrl)

const para = new URLSearchParams (getUrl);
const id = para.get("id")
console.log(id)

const F1 = `https://matiasjohannesen.no/wp-json/wp/v2/posts/${id}?_embed=true`;
const posts = document.querySelector(".blog");
const modal = document.querySelector(".modal");
const body = document.querySelector("body");

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
        <div class="info">
        <fieldset>
        <legend>${blog.title.rendered}</legend>
        <div class="top">
        <img onClick="funcModal()" class="big" src="${image.source_url}" alt="yeet">
        </div>
        <p>${blog.content.rendered}</p>
        </fieldset>
       </div>
       `;
       posts.innerHTML += postDiv;
       }



       
 }


 const funcModal = () => {
      const large = document.querySelector(".big");
      modal.style.display = "flex";
      body.classlist.add("modalScreen");
      document.documentElement.scrollTop = "0";
 }


 modal.addEventListener("click", () =>{
      modal.style.display = "none";
      body.classList.remove("modalScreen")
 });