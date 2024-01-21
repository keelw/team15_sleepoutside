class Alert {
    constructor(){
        // Read alerts.json file
        const alertsData = this.readAlertsFile();
        this.alerts = alertData || [];
    }

    createAlertSection() {
        const alertSection = document.createElement('section');
        alertSection.classList.add('alert-list');
    
        this.alerts.forEach(alertData => {
          const alertParagraph = document.createElement('p');
          alertParagraph.textContent = alertData.message;
          alertParagraph.style.backgroundColor = alertData.background;
          alertParagraph.style.color = alertData.color;
    
          alertSection.appendChild(alertParagraph);
        });
    
        return alertSection;
      }
    
}

export default Alert;