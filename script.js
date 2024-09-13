// Theme switcher
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

toggleSwitch.addEventListener('change', function(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}, false);

// Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}
document.addEventListener("DOMContentLoaded", function() {
    var cookieConsent = document.getElementById("cookieConsent");
    var acceptCookies = document.getElementById("acceptCookies");
    var declineCookies = document.getElementById("declineCookies");


    // Check if the user has already accepted or declined cookies
    if (!getCookie("cookiesAccepted") && !getCookie("cookiesDeclined")) {
        cookieConsent.style.display = "block";
        setTimeout(function() {
            cookieConsent.style.opacity = "1";
            cookieConsent.style.bottom = "0";
        }, 100); // Delay to trigger the transition
    } 

    acceptCookies.onclick = function() {
        setCookie("cookiesAccepted", "true", 365);
        cookieConsent.style.opacity = "0";
        cookieConsent.style.bottom = "-100px";
        setTimeout(function() {
            cookieConsent.style.display = "none";
        }, 1000); // Wait for the fade-out transition to complete
    };

    declineCookies.onclick = function() {
        setCookie("cookiesDeclined", "true", 365);
        cookieConsent.style.opacity = "0";
        cookieConsent.style.bottom = "-100px";
        setTimeout(function() {
            cookieConsent.style.display = "none";
        }, 1000); // Wait for the fade-out transition to complete
    };

    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
});

document.getElementById('chatbotIcon').addEventListener('click', function() {
    document.getElementById('chatWindow').style.display = 'block';
});

document.getElementById('closeChat').addEventListener('click', function() {
    document.getElementById('chatWindow').style.display = 'none';
});

document.getElementById('sendBtn').addEventListener('click', function() {
    sendMessage();
});

document.getElementById('chatInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value;
    if (message.trim() === '') return;

    appendMessage('You', message);
    input.value = '';

    // Show typing indicator
    appendMessage('Bot', 'Typing...');

    // Call the chatbot API
    fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_OPENAI_API_KEY'
        },
        body: JSON.stringify({
            model: 'text-davinci-003',
            prompt: message,
            max_tokens: 150
        })
    })
    .then(response => response.json())
    .then(data => {
        // Remove typing indicator
        removeTypingIndicator();

        // Append the bot's response
        const botMessage = data.choices[0].text.trim();
        appendMessage('Bot', botMessage);
    })
    .catch(error => {
        console.error('Error:', error);
        removeTypingIndicator();
        appendMessage('Bot', 'Sorry, something went wrong.');
    });
}

function appendMessage(sender, message) {
    const chatBody = document.getElementById('chatBody');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function removeTypingIndicator() {
    const chatBody = document.getElementById('chatBody');
    const typingIndicator = chatBody.querySelector('.message:last-child');
    if (typingIndicator && typingIndicator.innerHTML.includes('Typing...')) {
        chatBody.removeChild(typingIndicator);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('premiumPopup');
    const closeButton = document.querySelector('.close-button');
  
    // Show the popup when the page loads
    popup.style.display = 'flex';
  
    // Close the popup when the close button is clicked
    closeButton.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  });
  