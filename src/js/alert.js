class Alert {
    constructor(message, background, color) {
        this.message = message;
        this.background = background;
        this.color = color;
    }

    showMessage() {
        const alertContainer = document.createElement('div');
        alertContainer.style.backgroundColor = this.background;
        alertContainer.style.color = this.color;
        alertContainer.style.padding = '10px';
        alertContainer.style.margin = '10px';
        alertContainer.textContent = this.message;
        
        document.body.appendChild(alertContainer);
    }
}

export default Alert;
