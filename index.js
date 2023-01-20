let e = document.body
console.log(e)
	e.addEventListener('keydown', arrows)


function arrows(){
	const key = event.key;
	car = document.getElementById('car')
	spot = car.style.gridColumn[0]
	console.log(spot)

	if(key === 'ArrowLeft'){
		console.log('hi')
		car.style.gridColumn = 1
	}
	if(key === 'ArrowRight'){
		console.log('bye')
		car.style.gridColumn = 3
	}
}
