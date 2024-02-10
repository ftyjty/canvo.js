class Canvo {
    constructor(){
        this.canvasEl = document.createElement("canvas");
        document.body.appendChild(this.canvasEl);

        this.canvasEl.width = 400;
        this.canvasEl.height = 400;

        this.canvas = this.canvasEl.getContext("2d");
    }

    setFillColor(r, g, b){
        this.canvas.fillStyle = "rgb(" + r + " ," + g + " ," + b + ")"
        console.log(this.canvas.fillStyle);
    }
}

var canvoInstance = new Canvo();
canvoInstance.setFillColor(1, 2, 3);