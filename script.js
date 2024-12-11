function updateTemperature() {
    const temperature = document.getElementById('temperature').value;
    const status = document.getElementById('status');
    status.textContent = `Current temperature: ${temperature}°C`;
}
