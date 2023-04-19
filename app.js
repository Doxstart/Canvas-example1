console.log('ecco');

const myCanvas = document.getElementById('my-canvas');

const ctx = myCanvas.getContext('2d');

// ctx.fillRect(20,20,50,50);
// ctx.fillRect(90,20,50,50);
// ctx.fillRect(160,20,50,50);
// ctx.fillRect(230,20,50,50);
// ctx.fillRect(300,20,50,50);
// ctx.fillRect(370,20,50,50);
// ctx.fillRect(440,20,50,50);
// ctx.fillRect(510,20,50,50);

for (let i = 0; i < 100; i++) {
    const originX = Math.random() * 600;
    const originY = Math.random() * 600;
    const width = Math.random() * 100;
    const height = Math.random() *100;

    ctx.fillRect(originX,originY,width,height);
    
}