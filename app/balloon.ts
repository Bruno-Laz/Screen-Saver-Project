import {ctx,canvas} from './canvas'

function drawBalloon (x,y) {
  //white string
  ctx.beginPath();
  ctx.strokeStyle='white'
  ctx.moveTo(x,y+130)
  ctx.lineTo(x,y);
  ctx.stroke();
  //red circle
  ctx.beginPath ();
  ctx.fillStyle='Red'
  ctx.arc(x,y,50,0,Math.PI*2);
  ctx.fill();
  //white square for "reflection"
  ctx.beginPath();
  ctx.fillStyle='white'
  ctx.fillRect(x+10,y+10,10,10)
}

