function playMusic() {
  document.getElementById("birthdaySong").play();
}

// Typing Effect
const messages = [
  "Babe, it is another birthday together!",
  "You are the choice of my Heart.",
  "May your birthday be as beautiful as you are.",
  "I wish we could be together today!",
  "NAKUPENDA SANA." 
];
let messageIndex = 0;
let charIndex = 0;

function typeMessage() {
  const display = document.getElementById("typed-message");
  if (charIndex < messages[messageIndex].length) {
    display.textContent += messages[messageIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeMessage, 60);
  } else {
    setTimeout(() => {
      display.textContent = "";
      charIndex = 0;
      messageIndex = (messageIndex + 1) % messages.length;
      setTimeout(typeMessage, 600);
    }, 2000);
  }
}

// Countdown to July 23 00:00:00
const targetDate = new Date();
targetDate.setMonth(6); // July
targetDate.setDate(23);
targetDate.setHours(0, 0, 0, 0);

// If passed, go for next year
const now = new Date();
if (now > targetDate) {
  targetDate.setFullYear(targetDate.getFullYear() + 1);
}

const elements = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

const interval = setInterval(() => {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    clearInterval(interval);
    document.querySelector(".countdown-container").style.display = "none";
    document.getElementById("birthdaySurprise").style.display = "block";
    typeMessage();
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  elements.days.textContent = String(days).padStart(2, '0');
  elements.hours.textContent = String(hours).padStart(2, '0');
  elements.minutes.textContent = String(minutes).padStart(2, '0');
  elements.seconds.textContent = String(seconds).padStart(2, '0');
}, 1000);
