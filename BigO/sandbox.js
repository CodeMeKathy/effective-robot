const nemo = ['nemo']

function findNemo(array) {
	let timer0 = performance.now()
	for (i = 0; i < array.length; i++) {
		if (array[i] === 'nemo') {
			console.log('✅ Found Nemo!!')
		}
	}

	let timer1 = performance.now()
	console.log('Call to find Nemo took ' + (timer1 - timer0))
}

// Run time: How long does it take to ru

findNemo(nemo)
