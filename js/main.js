const button = document.getElementById('calculate')

function result() {
	const inputHeight = document.getElementById('inputHeight').value
	const inputWeight = document.getElementById('inputWeight').value

	let weight = parseInt(inputWeight)
	let height = parseInt(inputHeight)/100
	let bmiResult = weight/(height**2)
	let levelResult = ''

	const place = document.getElementById('result')

	if (bmiResult < 18) {
		levelResult = 'Underweight'
		place.innerHTML = `<div class="alert alert-warning" role="alert">
					<p class="m-0"><small>BMI : ${bmiResult.toFixed(1)}</small></p>
					<p class="m-0"><small>Status level : ${levelResult}</small></p>
				</div>`
	} else if (bmiResult >= 18 && bmiResult <= 24.9) {
		levelResult = 'Normal'
		place.innerHTML = `<div class="alert alert-success" role="alert">
					<p class="m-0"><small>BMI : ${bmiResult.toFixed(1)}</small></p>
					<p class="m-0"><small>Status level : ${levelResult}</small></p>
				</div>`
	} else if (bmiResult > 24.9) {
		levelResult = 'Overweight'
		place.innerHTML = `<div class="alert alert-danger" role="alert">
					<p class="m-0"><small>BMI : ${bmiResult.toFixed(1)}</small></p>
					<p class="m-0"><small>Status level : ${levelResult}</small></p>
				</div>`
	}
}

button.addEventListener('click', result)