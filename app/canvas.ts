export let canvas = document.createElement('canvas');
export let ctx= canvas.getContext('2d');

canvas.style.backgroundColor='Grey';


document.querySelector('#app')
.appendChild(canvas);



canvas.width= window.innerWidth
canvas.height= window.innerHeight
