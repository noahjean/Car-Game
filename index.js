spot = 3

let e = document.body
e.addEventListener('keydown', arrows)


function arrows(){
	const key = event.key;
	car = document.getElementById('car')

	if(key === 'ArrowLeft'){
		if(spot === 1){
			spot = 5
			car.style.gridColumn = spot
		}
		else{
			spot -= 1
			car.style.gridColumn = spot
		}
	}
	if(key === 'ArrowRight'){
		if(spot === 5){
			spot = 1
			car.style.gridColumn = spot
		}
		else{
			spot += 1
			car.style.gridColumn = spot
		}
	}
}
