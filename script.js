let btn = document.getElementsByClassName('btn-trigger-2')[0];
let bulb = document.getElementsByClassName('light')[0];
let lightImg = document.getElementsByClassName('light-img')[0];
var c = 0;
btn.addEventListener('click', function () {
  if (c == 0) {
    bulb.style.display = 'block';
    lightImg.src = './lighton.png';
    c = 1;
  } else {
    bulb.style.display = 'none';
    lightImg.src = './lightoff.png';
    c = 0;
  }
});
