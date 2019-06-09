const nemo = ['nemo']

const everyone = [
  'dory',
  'bruce',
  'marlin',
  'nemo',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'darla',
  'hank'
]

const large = new Array(1000).fill('nemo')

function findNemo (array) {
  // let timer0 = performance.now()
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      // console.log('✅ Found Nemo!!')
      // document.write('✅ Found Nemo!!')
    }
  }

  // let timer1 = performance.now()
  // console.log(
  //   'Call to find Nemo took ' +
  //     (timer1 - timer0) / 1000 +
  //     ' seconds'
  // )
  // document.write(
  //   '<br> Call to find Nemo took ' +
  //     (timer1 - timer0) / 1000 +
  //     ' seconds'
  // )
}

// Run time: How long does it take to run

findNemo(large) // O(n) ---> Linear Time.
// `n` is variable and simply represent the number elements.
// Linear meaning that as the number of elements increase so do the number of operations (in the same amount), which is in a linear manner.
// BigO measures how quickly the run time grows the size of the input, `n` (chosen variable) and compare it to the number of operations that increase.
//
