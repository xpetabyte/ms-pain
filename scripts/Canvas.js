export class Canvas {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.isDrawing = false;
        this.setupCanvas();
        this.setDefaultState();
    }

    setupCanvas() {
        // Set canvas size to window size minus some padding
        this.canvas.width = window.innerWidth - 40;
        this.canvas.height = window.innerHeight - 100;
        
        // Set default background
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    setDefaultState() {
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 5;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
    }

    startDrawing(e) {
        this.isDrawing = true;
        this.draw(e);
    }

    stopDrawing() {
        this.isDrawing = false;
        this.ctx.beginPath();
    }

    draw(e) {
        if (!this.isDrawing) return;

        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        this.ctx.lineTo(x, y);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
    }

    setColor(color) {
        this.ctx.strokeStyle = color;
    }

    setBrushSize(size) {
        this.ctx.lineWidth = size;
    }

    clear() {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
