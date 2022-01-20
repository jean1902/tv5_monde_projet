let span = document.auery('span');
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
	span[1].onclick = ()=>{right_mover();}
	span[0].onclick = ()=>{left_mover();}
    //
    
// api

// let keys_api = "7843f8d22a43911f15301ef8d76338ae";


// fetch(
//       `https://api.themoviedb.org/3/discover/movie?api_key=${keys_api}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false`
//     )
//       .then((reponse) => reponse.json())
//       .then((data) => {
//           console.log(data)
//         Displaycard(data.results);
//         console.log(data.results[0].poster_path[i]);
//       })
//       .catch((error) => console.log(" une erreur est survenue"));


//       function Displaycard(data) {

//           if( data.results !=0){
//             for(let i=0; i< data.length;i++){
//               product.innerHTML +=`
//               <img class=" img_card" src=" https://image.tmdb.org/t/p/w500${data[i].poster_path}" alt="photo"
              
//               style="height:100%";
//               >
//                 `
//             }
//             console.log(product)
//           }
//         }
        
    

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
//       <div class="product ">
//       <img class=" img_card" src=" https://image.tmdb.org/t/p/w500${data[i].poster_path}" alt="photo">
// 			</div>
    
        
//         `
//     }
//   }
//   console.log(product)
// }