class Controls {
    constructor(canvas) {
        this.canvas = canvas;
        this.colorPicker = document.getElementById('colorPicker');
        this.brushSize = document.getElementById('brushSize');
        this.clearButton = document.getElementById('clearCanvas');
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.colorPicker.addEventListener('change', (e) => {
            this.canvas.setColor(e.target.value);
        });

        this.brushSize.addEventListener('input', (e) => {
            this.canvas.setBrushSize(e.target.value);
        });

        this.clearButton.addEventListener('click', () => {
            this.canvas.clear();
        });
    }
}
