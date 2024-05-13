const Service = require('node-windows').Service;
const path = require('path');

// Create a new service object
const svc = new Service({
  name: 'VencordRichPresence', // The name of the service
  description: 'Service for Vencord Rich Presence', // Description of the service
  script: path.join(__dirname, 'src', 'index.js') // Path to your Node.js script
});

// Listen for the "install" event
svc.on('install', () => {
  svc.start(); // Start the service once it's installed
});

// Install the service
svc.install();