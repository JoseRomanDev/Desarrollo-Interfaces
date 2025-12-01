let canvas = document.getElementById("canvas");
let draw = document.getElementById('draw');
let reset = document.getElementById('reset');
let change = document.getElementById('change');
let colorInput = document.getElementById('color');


if(canvas && canvas.getContext){
    let ctx = canvas.getContext('2d');

    let strokeColor = '#000000';
    let pendingColor = strokeColor;

    function clearCanvas(){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }


    function drawTriangle(size = 150){
        clearCanvas();
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        const h = size * Math.sqrt(3) / 2;


        const p1 = [cx, cy - (2 * h) / 3];
        const p2 = [cx - size / 2, cy + h /3];
        const p3 = [cx + size / 2, cy + h /3];

        ctx.beginPath();
        ctx.moveTo(p1[0], p1[1]);
        ctx.lineTo(p2[0], p2[1]);
        ctx.lineTo(p3[0], p3[1]);
        ctx.closePath();
        ctx.fillStyle = strokeColor;
        ctx.fill();

        ctx.lineWith = 4;
        ctx.strokeStyle = strokeColor;
        ctx.stroke();
    }


    if (draw) {
        draw.addEventListener('click', () =>{
            strokeColor = pendingColor;
            drawTriangle(150);
        });
    }

    if (change) {
        change.addEventListener('click', ()=>{
            if(colorInput && colorInput.value){
                pendingColor = colorInput.value;
                canvas.style.border = `3px solid ${pendingColor}`;
            }
        });
    }

    if (reset) {
        reset.addEventListener('click', ()=>{
            clearCanvas();

            strokeColor = '#000000';
            pendingColor = strokeColor;
            canvas.style.border = '';
        });
    }
}