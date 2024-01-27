class Alert {
  constructor() {
    this.alertList = [];
  }

  async fetchAlerts() {
    try {
      const response = await fetch("./alerts.json");
      const data = await response.json();
      this.alertList = data;
    } catch (error) {
      throw new Error("Error fetching alerts:", error);
    }
  }

  createAlertSection() {
    const alertSection = document.createElement("section");
    alertSection.classList.add("alert-list");

    this.alertList.forEach((alertData) => {
      const alertParagraph = document.createElement("p");
      alertParagraph.textContent = alertData.message;
      alertParagraph.style.backgroundColor = alertData.background;
      alertParagraph.style.color = alertData.color;

      alertSection.appendChild(alertParagraph);
    });

    document.body.appendChild(alertSection);
  }

  async init() {
    await this.fetchAlerts();
    this.createAlertSection();
  }
}

export default Alert;
