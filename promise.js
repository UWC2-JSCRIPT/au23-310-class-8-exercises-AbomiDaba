// let myPromise = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve();
//   }, 1000);
// });

// myPromise
//   .then(function() {
//     return 99;
//   })
//   .then(function(number) {
//     console.log(number);
//   });

const randomNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomVal = Math.random();
    if (randomVal > 0.5) {
      resolve(randomVal)
    } else if (randomVal <= 0.5) {
      reject(randomVal)
    }
  }, 1000)
} )

randomNumber.then((value) => {
  console.log('Success', value);

}).catch((error, value) => {
  console.log(error, value);
})