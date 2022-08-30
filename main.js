const canvas=document.getElementById("myCanvas");
canvas.width=200;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width/2, canvas.width*0.9); //*0.9 is for have a slightly empty part
const car=new Car(road.getLaneCenter(1),100,30,50); //car will be in lane 2 (index start from 0)

animate();

function animate(){

    car.update();
    
    canvas.height=window.innerHeight;

    //looks like there is a camera up of the car follows car
    ctx.save();
    ctx.translate(0, -car.y+canvas.height*0.7);//*0.7 for determine where will be the car on screen 

    road.draw(ctx);
    car.draw(ctx);

    ctx.restore();
    
    requestAnimationFrame(animate);

}