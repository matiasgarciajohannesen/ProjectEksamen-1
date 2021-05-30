const F1 = "https://matiasjohannesen.no/wp-json/wp/v2/posts?_embed=true&per_page=100";
const carouselContainer = document.querySelector('.karusel');
const posts = document.querySelector(".blog");
const load = document.querySelector(".loading");


 fetch(F1)
     .then(response => response.json())
     .then(data => formula(data))
     .catch(error => console.error(error))
     .finally(() => load.style.display = "none");

const formula = (blogs) => {
     console.log(blogs);
     posts.innerHTML = "";
     let postDiv = ``
     for (blog of blogs) {
         console.log(blog);
         let images = blog._embedded["wp:featuredmedia"];
         console.log(images);
         for (image of blog._embedded["wp:featuredmedia"]){
            postDiv =  `
            <div class="slides">
                <a href="details.html?id=${blog.id}"><h3>${blog.title.rendered}</h3></a>
                <a href="details.html?id=${blog.id}"><img id= karuImg src="${image.source_url}" alt="yeet"></a>
            </div>
            `;
            posts.innerHTML += postDiv;
        }

         
     }
 }



//  const carouselImages = document.querySelectorAll('.blog');


 //buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter

let counter = 0;
const size = carouselContainer.clientWidth;
console.log(size);

posts.style.transform = 'translateX(' + (-size * counter) + 'px)';


//btn listener

nextBtn.addEventListener('click',()=>{
    if( carouselContainer.clientWidth === 1306 && counter >= 2){
        counter= -1
        posts.style.transform = 'translateX(0px)';
    }
    else if( carouselContainer.clientWidth === 980 && counter >= 3){
        counter= -1
        posts.style.transform = 'translateX(0px)';
    }
    else if( carouselContainer.clientWidth === 652 && counter >= 5){
        counter= -1
        posts.style.transform = 'translateX(0px)';
    }
    else if( carouselContainer.clientWidth === 326 && counter >= 11){
        counter= -1
        posts.style.transform = 'translateX(0px)';
    }
    else if( carouselContainer.clientWidth === 276 && counter >= 11){
        counter= -1
        posts.style.transform = 'translateX(0px)';
    }
    
    posts.style.transition = "transform 0.4s ease-in-out";
    counter++;
    posts.style.transform = 'translateX(' + (-size * counter) + 'px)';
    console.log(counter)
});
prevBtn.addEventListener('click',()=>{
    if(carouselContainer.clientWidth === 1306 && counter <= 0){
        counter= 3
        posts.style.transform = 'translateX(0px)';
    }
    else if( carouselContainer.clientWidth === 980 && counter <= 0){
        counter= 4
        posts.style.transform = 'translateX(0px)';
    }
    else if( carouselContainer.clientWidth === 652 && counter <= 0){
        counter= 6
        posts.style.transform = 'translateX(0px)';
    }
    else if( carouselContainer.clientWidth === 326 && counter <= 0){
        counter= 12
        posts.style.transform = 'translateX(0px)';
    }
    else if( carouselContainer.clientWidth === 276 && counter <= 0){
        counter= 12
        posts.style.transform = 'translateX(0px)';
    }
    posts.style.transition = "transform 0.4s ease-in-out";
    counter--;
    posts.style.transform = 'translateX(' + (-size * counter) + 'px)';
    console.log(counter)
    
});


