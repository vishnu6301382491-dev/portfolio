// Digital Clock Script - Real-time time zone updates

const timeZones = {
  'ny': { name: 'New York', offset: -5, elementTime: 'time-ny', elementDate: 'date-ny' },
  'london': { name: 'London', offset: 0, elementTime: 'time-london', elementDate: 'date-london' },
  'paris': { name: 'Paris', offset: 1, elementTime: 'time-paris', elementDate: 'date-paris' },
  'dubai': { name: 'Dubai', offset: 4, elementTime: 'time-dubai', elementDate: 'date-dubai' },
  'india': { name: 'India', offset: 5.5, elementTime: 'time-india', elementDate: 'date-india' },
  'singapore': { name: 'Singapore', offset: 8, elementTime: 'time-singapore', elementDate: 'date-singapore' },
  'tokyo': { name: 'Tokyo', offset: 9, elementTime: 'time-tokyo', elementDate: 'date-tokyo' },
  'sydney': { name: 'Sydney', offset: 10, elementTime: 'time-sydney', elementDate: 'date-sydney' },
  'la': { name: 'Los Angeles', offset: -8, elementTime: 'time-la', elementDate: 'date-la' }
};

function formatTime(hours, minutes, seconds) {
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function formatDate(date) {
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

function getTimeInTimeZone(offset) {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const tzDate = new Date(utc + 3600000 * offset);
  return tzDate;
}

function updateClocks() {
  Object.keys(timeZones).forEach(key => {
    const tz = timeZones[key];
    const date = getTimeInTimeZone(tz.offset);

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Update time display
    const timeElement = document.getElementById(tz.elementTime);
    if (timeElement) {
      timeElement.textContent = formatTime(hours, minutes, seconds);
    }

    // Update date display
    const dateElement = document.getElementById(tz.elementDate);
    if (dateElement) {
      dateElement.textContent = formatDate(date);
    }
  });
}

// Wait for DOM to be fully loaded
function initClock() {
  console.log('🌍 Initializing Digital World Clock...');
  
  // Update clocks immediately on page load
  updateClocks();
  
  // Update clocks every second
  setInterval(updateClocks, 1000);
  
  console.log('✅ Digital World Clock is running! Times update every second.');
}

// Update theme based on time of day
function updateThemeBasedOnTime() {
  const now = new Date();
  const hours = now.getHours();
  const body = document.body;

  if (hours >= 5 && hours < 12) {
    // Morning: Blue to Purple gradient
    body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  } else if (hours >= 12 && hours < 18) {
    // Afternoon: Pink to Red gradient
    body.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
  } else {
    // Evening/Night: Deep Purple to Blue gradient
    body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    initClock();
    updateThemeBasedOnTime();
    setInterval(updateThemeBasedOnTime, 3600000);
  });
} else {
  // DOM is already loaded
  initClock();
  updateThemeBasedOnTime();
  setInterval(updateThemeBasedOnTime, 3600000);
}
