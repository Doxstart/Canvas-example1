console.log('ecco');

const myCanvas = document.getElementById('my-canvas');

const ctx = myCanvas.getContext('2d');

// ctx.fillRect(20,20,69,69);
// //ctx.fillRect(90,20,69,69);
// ctx.fillRect(160,20,69,69);
// //ctx.fillRect(230,20,69,69);
// ctx.fillRect(300,20,69,69);
// //ctx.fillRect(370,20,69,69);
// ctx.fillRect(440,20,69,69);
// //ctx.fillRect(510,20,69,69);
// //ctx.fillRect(20,90,69,69);
// ctx.fillRect(20,160,69,69);
// //ctx.fillRect(20,230,69,69);
// ctx.fillRect(20,300,69,69);
// //ctx.fillRect(20,370,69,69);
// ctx.fillRect(20,440,69,69);
// //ctx.fillRect(20,510,69,69);
// ctx.fillRect(90,90,69,69);
// //ctx.fillRect(90,160,69,69);
// ctx.fillRect(90,230,69,69);
// //ctx.fillRect(90,300,69,69);
// ctx.fillRect(90,370,69,69);
// //ctx.fillRect(90,440,69,69);
// ctx.fillRect(90,510,69,69);
// //ctx.fillRect(160,90,69,69);
// ctx.fillRect(230,90,69,69);
// //ctx.fillRect(300,90,69,69);
// ctx.fillRect(370,90,69,69);
// //ctx.fillRect(440,90,69,69);
// ctx.fillRect(510,90,69,69);
// ctx.fillRect(160,160,69,69);
// //ctx.fillRect(160,230,69,69);
// ctx.fillRect(160,300,69,69);
// //ctx.fillRect(160,370,69,69);
// ctx.fillRect(160,440,69,69);
// //ctx.fillRect(160,510,69,69);
// //ctx.fillRect(230,160,69,69);
// ctx.fillRect(230,230,69,69);
// //ctx.fillRect(230,300,69,69);
// ctx.fillRect(230,370,69,69);
// //ctx.fillRect(230,440,69,69);
// ctx.fillRect(230,510,69,69);
// ctx.fillRect(300,160,69,69);
// //ctx.fillRect(300,230,69,69);
// ctx.fillRect(300,300,69,69);
// //ctx.fillRect(300,370,69,69);
// ctx.fillRect(300,440,69,69);
// //ctx.fillRect(300,510,69,69);
// //ctx.fillRect(370,160,69,69);
// ctx.fillRect(370,230,69,69);
// //ctx.fillRect(370,300,69,69);
// ctx.fillRect(370,370,69,69);
// //ctx.fillRect(370,440,69,69);
// ctx.fillRect(370,510,69,69);
// ctx.fillRect(440,160,69,69);
// //ctx.fillRect(440,230,69,69);
// ctx.fillRect(440,300,69,69);
// //ctx.fillRect(440,370,69,69);
// ctx.fillRect(440,440,69,69);
// //ctx.fillRect(440,510,69,69);
// //ctx.fillRect(510,160,69,69);
// ctx.fillRect(510,230,69,69);
// //ctx.fillRect(510,300,69,69);
// ctx.fillRect(510,370,69,69);
// //ctx.fillRect(510,440,69,69);
// ctx.fillRect(510,510,69,69);

for (let i = 0; i < 100; i++) {
    const originX = Math.random() * 600;
    const originY = Math.random() * 600;
    const width = Math.random() * 450;
    const height = Math.random() *500;
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const alpha = Math.random();

    ctx.fillStyle = `rgba(${red},${green},${blue},${alpha})`
    ctx.fillRect(originX,originY,width,height);
    
}