// let countBtn = document.getElementById('countBtn');
// let countNumber = document.getElementById('countNumber');
// countBtn.addEventListener('click', function() {
//   let number = Number(countNumber.innerText);
//   countNumber.innerText = number + 1;
// })

// let isLock = false;
// let isCountDown = 0;
// let countBtn = document.getElementById('countBtn');
// let countNumber = document.getElementById('countNumber');
// let countDown = document.getElementById('countDown');
// countBtn.addEventListener('click', function() {
//   if(!isLock) {
//     let number = Number(countNumber.innerText);
//     countNumber.innerText = number + 1;
//   }
//   if(!isCountDown) {
//     countDownFunc();
//   }
// })
// function countDownFunc () {
//   isCountDown = setInterval(() => {
//     let countDownNumber = Number(countDown.innerText);
//     countDown.innerText = countDownNumber - 1;
//     if(countDownNumber === 1) {
//       clearInterval(isCountDown);
//       isLock = true;
//     } 
//   },1000)
// }

const PAGE = {
  data: {
    isLock: false,
    isCountDown: 0,
  },
  init: function() {
    this.bind();
  },
  bind: function() {
    let countBtn = document.getElementById('countBtn');
    countBtn.addEventListener('click', this.addCountEvent);
  },
  addCountEvent: function() {
    let countNumber = document.getElementById('countNumber');
    if(!PAGE.data.isLock) {
      let number = Number(countNumber.innerText);
      countNumber.innerText = number + 1;
    }
    if(!PAGE.data.isCountDown) {
      PAGE.countDownFunc();
    }
  },
  countDownFunc: function() {
    let countDown = document.getElementById('countDown');
    PAGE.data.isCountDown = setInterval(() => {
      let countDownNumber = Number(countDown.innerText);
      countDown.innerText = countDownNumber - 1;
      if(countDownNumber === 1) {
        clearInterval(PAGE.data.isCountDown);
        PAGE.data.isLock = true;
      } 
    },1000)
  }
}

PAGE.init();