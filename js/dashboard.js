// Fixed educational examples. No network requests or live weather data.
'use strict';
const locations = {
  nagpur: { name: 'Nagpur', temperature: 42, humidity: 30, heatIndex: 45 },
  pune: { name: 'Pune', temperature: 29, humidity: 40, heatIndex: 29 },
  mumbai: { name: 'Mumbai', temperature: 32, humidity: 60, heatIndex: 37 },
  delhi: { name: 'New Delhi', temperature: 45, humidity: 30, heatIndex: 50 }
};
const precautions = {
  Low: 'Keep drinking water and stay aware of changing conditions during outdoor activities.',
  Moderate: 'Take breaks in shade. Choose cooler hours for outdoor activity and keep water nearby.',
  High: 'Limit time in the heat. Move outdoor activities to cooler hours and take regular cooling breaks.',
  Extreme: 'Postpone strenuous outdoor activities. Seek an air-conditioned place and check on people vulnerable to heat.'
};
function getRisk(index) {
  if (index >= 48) return 'Extreme';
  if (index >= 40) return 'High';
  if (index >= 32) return 'Moderate';
  return 'Low';
}
function updateDashboard() {
  const data = locations[document.getElementById('location').value];
  if (!data) return;
  const risk = getRisk(data.heatIndex);
  document.getElementById('city-title').textContent = data.name;
  document.getElementById('temperature').textContent = data.temperature + '°C';
  document.getElementById('humidity').textContent = data.humidity + '%';
  document.getElementById('heat-index').textContent = data.heatIndex + '°C';
  document.getElementById('risk-text').textContent = risk;
  const badge = document.getElementById('risk-badge');
  badge.textContent = risk + ' risk';
  badge.className = 'badge ' + risk.toLowerCase();
  document.getElementById('advice').textContent = precautions[risk];
}
document.getElementById('location').addEventListener('change', updateDashboard);
updateDashboard();
