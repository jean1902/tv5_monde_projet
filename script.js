var slideIndex = 2;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
//   setTimeout(showSlides, 4000);
}
//carousel2


let span = document.querySelector('.left_arrow');
let span1 = document.querySelector('.right_arrow');
let product = document.getElementsByClassName('product')
let product_page = Math.ceil(product.length/4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;
// mobile_view	
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches)
 {
	 movePer = 50.36;
	 maxMove = 504;
 }

let right_mover = ()=>{
	l = l + movePer;
	if (product == 1){l = 0; }
	for(const i of product)
	{
		if (l > maxMove){l = l - movePer;}
		i.style.left = '-' + l + '%';
	}

}
let left_mover = ()=>{
	l = l - movePer;
	if (l<=0){l = 0;}
	for(const i of product){
		if (product_page>1){
			i.style.left = '-' + l + '%';
		}
	}
}
span1.onclick = ()=>{right_mover();}
span.onclick = ()=>{left_mover();}


let keys_api = "7843f8d22a43911f15301ef8d76338ae";
let container_product =document.querySelector('.container_product');
let container_product2 =document.querySelector('.container_product2');
fetch(
  `https://api.themoviedb.org/3/discover/movie?api_key=${keys_api}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false`)
  .then((reponse) => reponse.json())
  .then((data) => {
	  console.log(data)
	  DisplayCarousel(data.results);
    console.log(data.results[0].poster_path);
  })
  .catch((error) => console.log(" une erreur est survenue"));

  function  DisplayCarousel(data){
			for(let i=0; i< data.length;i++){
				container_product.innerHTML +=`
				<div class="product">
				<img class=" img_card" src=" https://image.tmdb.org/t/p/w500${data[i].poster_path}" alt="photo">	
			  </div>
				
				`
			}
  }

let icon_menu =document.querySelector('.logo_navbar');
let click_box =document.querySelector('.click_box')
let body = document.getElementsByTagName('body')

icon_menu.addEventListener('click',(e)=>{
	e.preventDefault();
	click_box.classList.toggle('active');
	body.style="backgroundColor:linearGradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7))";
})
// carousel

// let keys_api = "7843f8d22a43911f15301ef8d76338ae";
// let card_img_carousel_section3 = document.querySelector(
//   '.slide_card1'
// );

// fetch(
//   `https://api.themoviedb.org/3/discover/movie?api_key=${keys_api}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false`
// )
//   .then((reponse) => reponse.json())
//   .then((data) => {
//     Displaycard(data.results);
//     console.log(data.results[0].poster_path);
//   })
//   .catch((error) => console.log(" une erreur est survenue"));


// function Displaycard(data) {

//   if( data.results !=0){
//     for(let i=0; i< data.length;i++){
//       product.innerHTML +=`
//         <div class="card-group col-md-3 ">
//           <div class="profile-photo card  " >
//               <img class=" img_card" src=" https://image.tmdb.org/t/p/w500${data[i].poster_path}" alt="photo">
//           </div>
//        </div>
        
//         `
//     }
//   }

// // }
// class Carousel{


//   constructor(element , options ={}){

//     this.element =element;
//     this.option = Object.assign({},{
//       slidesToScroll :1,
//       slidesVisible:3
//     },options) 
//     this.children =[].slice.call(element.children)
//     let root =this.createDivWithClass('carousel')
//     let container =this.createDivWithClass('carousel__container')
//     root.appendChild(container)
//     root.setAttribute('class','carousel')
//     this.element.appendChild(root)
//     this.children.forEach(child => {
//       container.appendChild(child)
//     });
//   }

//   createDivWithClass(className){
//     let div =document.createElement('div')
//     div.setAttribute('class',className)
//   }

// }

// document.addEventListener('DOMContentLoaded',function(){
//   new Carousel(document.querySelector('.slide_card1'),{
//     slidesToScroll :3,
//     slidesVisible:3
  
//   })
// })