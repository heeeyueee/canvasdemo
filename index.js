//设定画板的大小——给canvas设定高度
let canvas = document.getElementById("stockGraph");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
console.log(canvas);
let ctx = canvas.getContext("2d");
//开始画点
canvas.onmousemove = (e) => {
    //画矩形
    console.log(e);
    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(e.clientX, e.clientY, 5, 5);
    //画圆
    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
}