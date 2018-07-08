// main.js

// let links = ["","","","",""]

// $("#next").on("click", function(){
// 	list.push($("input").val())
// });

// $("#next").on("click", function(){
// 	list.forEach(function(el){
// 		console.log(el)
// 		$( "img" ).attr( "src", links );
// 		//$('ul').append('<li>'+el+'</li>')
// // 	});
// // });
// <img src="https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&h=350">
// 	<img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&h=350">
// 	<img src="https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&h=350">


//click on two buttons
//clikc next to go next
//click back to go back
//img src cycles based on clicks
//see img changes


//array to hold sources
let foods =["https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&h=350",
			"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&h=350",
			"https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&h=350",
			"https://images.pexels.com/photos/8500/food-dinner-pasta-spaghetti-8500.jpg?auto=compress&cs=tinysrgb&h=350",
			"https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&h=350"]

let count = 0

//event listeners
$('#next').on('click', next);
$('#prev').on('click', prev);


//next function
function next(){

	//move to next img src 
	count++
	if(count == foods.length){
		count = 0
	}

	//update the image with that source
	$('img').attr('src',foods[count])

}
//function prev
function prev(){

	//move to next img src 
	count--
	if(count == -1){
		count = foods.length - 1
	}

	//update the image with that source
	$('img').attr('src',foods[count])
}