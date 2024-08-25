const seconds = document.querySelector(".seconds .number"),
  minutes = document.querySelector(".minutes .number"),
  hours = document.querySelector(".hours .number"),
  days = document.querySelector(".days .number");

// Set the target date and time (Jan 5, 2024, 15:37:25)
const targetDate = new Date("2024-09-10T00:00:00").getTime();

const timeFunction = setInterval(() => {
  // Get the current date and time
  const currentDate = new Date().getTime();

  // Find the time remaining between the current time and the target date
  const timeRemaining = targetDate - currentDate;

  if (timeRemaining <= 0) {
    clearInterval(timeFunction);
    // You can add some message or action when the countdown expires
    return;
  }

  // Time calculations for days, hours, minutes, and seconds
  const secondsRemaining = Math.floor((timeRemaining / 1000) % 60);
  const minutesRemaining = Math.floor((timeRemaining / (1000 * 60)) % 60);
  const hoursRemaining = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
  const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

  // Update the HTML elements with the remaining time
  seconds.textContent =
    secondsRemaining < 10 ? `0${secondsRemaining}` : secondsRemaining;
  minutes.textContent =
    minutesRemaining < 10 ? `0${minutesRemaining}` : minutesRemaining;
  hours.textContent =
    hoursRemaining < 10 ? `0${hoursRemaining}` : hoursRemaining;
  days.textContent = daysRemaining < 10 ? `0${daysRemaining}` : daysRemaining;
}, 1000);


particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);