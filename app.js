const myCanvas = document.getElementById('my-canvas');

const ctx = myCanvas.getContext('2d');

const point = {x: 300, y: 300};

setInterval(() => {
    const randomX = (Math.random() * 4)-2; 
    const randomY = (Math.random() * 4)-2; 
    point.x += randomX;
    point.y += randomY;

    ctx.fillStyle = 'red';

    ctx.fillRect(point.x, point.y, 10, 10);
}, 0.1);

for (let i = 0; i < 100; i++) {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const point = {x: 300, y: 300};

    point.color = `rgba(${red},${green},${blue})`;
    
    setInterval(() => {
        const randomX = (Math.random() * 4)-2; 
        const randomY = (Math.random() * 4)-2; 
        point.x += randomX;
        point.y += randomY;
    
        ctx.fillStyle = point.color;
    
        ctx.fillRect(point.x, point.y, 10, 10);
    }, 0.1);
}