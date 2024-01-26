class Alert {
    constructor(message) {
        this.message = message;
    }

    showMessage() {
        alert(this.message);
    }
}

export default Alert;
