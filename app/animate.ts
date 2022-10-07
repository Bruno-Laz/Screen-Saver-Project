import {ctx, canvas} from './canvas'
import {drawBalloon} from './balloon'

let x=10
let y=10

drawBalloon(250,250)

function animate () {
  drawBalloon(x,y);
  x +=1
  y +=1
  //run again after one "tick" (1/60 a second)
  window.requestAnimationFrame(animate)
}
 

window.requestAnimationFrame(animate)