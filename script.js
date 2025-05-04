// Add your JavaScript code here
console.log('Welcome to Aditya Pal\'s Portfolio!');

// script.js

const twilioAccountSid = 'AC2d16abc7559e92282fe35f1bbbe7086d';
const twilioAuthToken = '05447150c014e5ae64507f733626ceb7';

// URL for sending messages to WhatsApp using Twilio API
const twilioApiUrl = 'https://api.twilio.com/2010-04-01/Accounts/' + twilioAccountSid + '/Messages.json';

// Your Twilio phone number in E.164 format
const twilioPhoneNumber = '+916398227726';

function sendWhatsAppMessage() {
    // Get form data
    const formData = new FormData(document.getElementById('whatsapp-form'));

    // Build WhatsApp message
    const message = `New message from ${formData.get('name')} (${formData.get('phone')}):\n${formData.get('message')}`;

    // Make API request to send WhatsApp message using Twilio
    fetch(twilioApiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(`${twilioAccountSid}:${twilioAuthToken}`)
        },
        body: new URLSearchParams({
            From: 'whatsapp:' + twilioPhoneNumber,
            To: 'whatsapp:' + formData.get('phone'), // Use the provided phone number from the form
            Body: message
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('WhatsApp message sent successfully:', data);
        alert('WhatsApp message sent successfully!');
    })
    .catch(error => {
        console.error('Error sending WhatsApp message:', error);
        alert('Error sending WhatsApp message. Please try again later.');
    });
}


const buttons = document.querySelectorAll('.sills_button');
const buttonContainer = document.querySelector('.button-container');

let currentIndex = 0;

function updateButtons() {
  buttons.forEach((button, index) => {
    button.classList.toggle('sills_button-disabled', index !== currentIndex);
  });

  const activeButton = buttonContainer.children[currentIndex];
  activeButton.classList.add('active');
  buttons.forEach((button, index) => {
    if (index !== currentIndex) {
      buttonContainer.children[index].classList.remove('active');
    }
  });
}

function nextButton() {
  currentIndex = (currentIndex + 1) % buttons.length;
  updateButtons();
}

setInterval(nextButton, 1000); // Change button every 3 seconds (adjust as needed)

