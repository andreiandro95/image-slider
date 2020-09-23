let nextBtnCars = document.querySelector('#button-right');
let prevBtnCars = document.querySelector('#button-left');
let imgDiv = document.querySelector(".img-container");
let counterCars = 0;
let cars = [
	"contBcg-0",
	"contBcg-1",
	"contBcg-2",
	"contBcg-3",
	"contBcg-4"
];


nextBtnCars.addEventListener('click', nextSlide);
prevBtnCars.addEventListener('click', prevSlide);

function nextSlide(){
    counterCars++;
    imgDiv.style.backgroundImage = `url(./img/${cars[counterCars]}.jpeg`
    if(counterCars === 4){
    	counterCars = -1;
    }
}
function prevSlide(){
	 if(counterCars === 0){
    	counterCars = 5;
    }
    counterCars--;
    imgDiv.style.backgroundImage = `url(./img/${cars[counterCars]}.jpeg` 
}
