carspot = 3

let e = document.body
e.addEventListener('keydown', arrows)

let obstacleTime = window.setInterval(function(){createObstacle()}, 5000);
let moveTime = window.setInterval(function(){moveObstacle()}, 1000);

function arrows(){
	const key = event.key;
	car = document.getElementById('car')

	if(key === 'ArrowLeft'){
		if(carspot === 1){
			carspot = 5
			car.style.gridColumn = carspot
		}
		else{
			carspot -= 1
			car.style.gridColumn = carspot
		}
	}
	if(key === 'ArrowRight'){
		if(carspot === 5){
			carspot = 1
			car.style.gridColumn = carspot
		}
		else{
			carspot += 1
			car.style.gridColumn = carspot
		}
	}
}


function createObstacle(){
	spot = Math.floor((Math.random()*5)+1)
	console.log(spot)
	let Div = document.createElement('div')
	Div.className = 'obstacle'
	let word = document.createElement('p')
	word.textContent = 'Obstacle!'
	Div.append(word)
	g = document.getElementById('road')
	g.prepend(Div)
	Div.style.gridColumn = spot
	Div.style.gridRow = 1
}

function moveObstacle(){
	Obstacle = document.getElementsByClassName('obstacle')
	console.log(Obstacle)
	for(value of Obstacle){
		spot = parseInt(value.style.gridRow[0])
		colspot = parseInt(value.style.gridColumn[0])
		if(spot === 5){
			value.remove()
		}
		value.style.gridRow = spot + 1
		if(spot===carspot && colspot===carspot){
			console.log('game over!')
			gameOver()
		}
	 }
}

function gameOver(){
	window.location.replace('gameover.html')
	console.log('function called')
}
