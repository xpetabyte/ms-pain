document.addEventListener('DOMContentLoaded', () => {
    const canvas = new Canvas('paintCanvas');
    new Controls(canvas);

    // Set up canvas event listeners
    canvas.canvas.addEventListener('mousedown', (e) => canvas.startDrawing(e));
    canvas.canvas.addEventListener('mousemove', (e) => canvas.draw(e));
    canvas.canvas.addEventListener('mouseup', () => canvas.stopDrawing());
    canvas.canvas.addEventListener('mouseout', () => canvas.stopDrawing());

    // Handle window resize
    window.addEventListener('resize', () => {
        // Save the current canvas content
        const imageData = canvas.ctx.getImageData(0, 0, canvas.canvas.width, canvas.canvas.height);
        
        // Resize canvas
        canvas.setupCanvas();
        
        // Restore the content
        canvas.ctx.putImageData(imageData, 0, 0);
    });
});
