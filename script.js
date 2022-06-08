const loading = document.querySelector('.loading-text');
const background = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 35);

function blurring() {
  load+=1;

  if (load == 100) {
    clearInterval(int);
  }

  loading.innerText = `${load}%`

  loading.style.opacity = scale(load, 0, 100, 1, 0);
  
  background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// mapeia o decréscimo do segundo intervalo com base no acréscimo do primeiro intervalo
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num -in_min) * (out_max -out_min)) / (in_max - in_min) + out_min
};