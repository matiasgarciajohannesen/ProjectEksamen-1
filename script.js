
const F1 = "https://matiasjohannesen.no/wp-json/wp/v2/posts?_embed=true";
const posts = document.querySelector(".blog");

 fetch(F1)
     .then(response => response.json())
     .then(data => formula(data))
     .catch(error => posts.innerHTML = "ups that went wrong")

const formula = (blogs) => {
     console.log(blogs);
     posts.innerHTML = "";
     let postDiv = ``
     for (blog of blogs) {
         console.log(blog)
         postDiv =  `
         <div>
         <h2>${blog.title.rendered}</h2>
         <p>${blog.content.rendered}</p>
        </div>
        `;

         posts.innerHTML += postDiv;
     }
 }


// const F1 = "https://matiasjohannesen.no/wp-json/wp/v2/posts?_embed=true";
// const posts = document.querySelector(".blog");

//  fetch(F1)
//      .then(response => response.json())
//      .then(data => formula(data))
//      .catch(error => posts.innerHTML = "ups that went wrong")

// const formula = (blogs) => {
//      console.log(blogs);
//      posts.innerHTML = "";
//      let postDiv = ``
//      for (blog of blogs) {
//          console.log(blog)
//          let photo = blog._embedded["wp:featuredmedia"]
//          for(image of photo){
//              postDiv =  `
//             <div>
//             <h2>${blog.title.rendered}</h2>
//             <p>${blog.content.rendered}</p>
//             <img src="${image.source.url}" alt="yeet">
//             </div>
//             `;
//         }
//          posts.innerHTML += postDiv;
//      }
//  }
