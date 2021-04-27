const posts = document.querySelector(".posts")

const F1 = "https://matiasjohannesen.no/wp-json/wp/v2/posts/"

fetch(F1, {
    
})

.then(response => response.json())
.then(data => postTemplate(data))
.catch(error => posts.innerHTML = "ups that went wrong");




const postTemplate =(posts)=>{
    posts.innerHTML = "";
    for(post of posts){
        console.log(post)
        let postDiv = ``
        // for(image of post.images){
        //     postDiv += `
        //     <ul class="card">
        //     <a href="single-product.html?id=${post.id}"><img src="${image.thumbnail}"></a>
        //     <li>${post.name}</li>
        //     <a href="single-product.html?id=${post.id}"><button>View</button></a>
        //     </ul>
        //     `
        // }
        posts.innerHTML += postDiv
    }
}