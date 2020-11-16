//设定画板的大小——给canvas设定高度
let canvas = document.getElementById("stockGraph");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
let ctx = canvas.getContext("2d");
let paintFlag = false;
ctx.translate(0.5, 0.5);
ctx.strokeStyle = 'none';
ctx.lineWidth = 6;
ctx.lineCap = "round"
//1.开始画点
// canvas.onmousemove = (e) => {
//     //画矩形
//     console.log(e);
//     ctx.fillStyle = "rgb(200,0,0)";
//     ctx.fillRect(e.clientX, e.clientY, 5, 5);
//     //画圆
//     ctx.beginPath();
//     ctx.arc(e.clientX, e.clientY, 5, 0, 2 * Math.PI);
//     ctx.fillStyle = "black";
//     ctx.fill();
// }
//2.改进——鼠标按下画点，抬起停下
// canvas.onmousedown = () => {
//     paintFlag = true;
// }
// canvas.onmousemove = (e) => {
//     if (paintFlag === true) {
//         ctx.beginPath();
//         ctx.arc(e.clientX, e.clientY, 5, 0, 2 * Math.PI);
//         ctx.fillStyle = "black";
//         ctx.fill();
//     }
// }
// canvas.onmouseup = () => {
//     paintFlag = false;
// }
//3.在手机上运行——手机画板
//先判断是不是触屏设备
// let isTouchDevice = "ontouchstart" in document.documentElement;
// console.log(isTouchDevice);
// if (isTouchDevice === true) {
//     canvas.addEventListener('touchmove', function (e) {
//         ctx.beginPath();
//         ctx.arc(e.changedTouches[0].clientX, e.changedTouches[0].clientY, 10, 0, 2 * Math.PI);
//         ctx.fillStyle = "black";
//         ctx.stroke();
//         ctx.fill();
//     })
// } else {
//     canvas.onmousedown = () => {
//         paintFlag = true;
//     }
//     canvas.onmousemove = (e) => {
//         if (paintFlag === true) {
//             ctx.beginPath();
//             ctx.arc(e.clientX, e.clientY, 10, 0, 2 * Math.PI);
//             ctx.fillStyle = "black";
//             ctx.stroke();
//             ctx.fill();
//         }
//     }
//     canvas.onmouseup = () => {
//         paintFlag = false;
//     }
// }
//4.canvas画线
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}
//记录划线的起点
let last;
let isTouchDevice = "ontouchstart" in document.documentElement;
console.log(isTouchDevice);
if (isTouchDevice === true) {
    canvas.addEventListener('touchstart', function (e) {
        last = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
    })
    canvas.addEventListener('touchmove', function (e) {
        drawLine(last[0], last[1], e.changedTouches[0].clientX, e.changedTouches[0].clientY);
        last = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
    })
} else {
    canvas.onmousedown = (e) => {
        paintFlag = true;
        last = [e.clientX, e.clientY];
    }
    canvas.onmousemove = (e) => {
        if (paintFlag === true) {
            drawLine(last[0], last[1], e.clientX, e.clientY);
            last = [e.clientX, e.clientY];
        }
    }
    canvas.onmouseup = () => {
        paintFlag = false;
    }
}