/**
 * Constant that defines the trophies for each level
 */
const trophies = ['🍓', '🌽', '🧱', '🐴', '🏆'];

/**
 * Constant that defines the monsterPicturesOnWebsite within this game
 */
const monsterImages = [
  'assets/img/horns_skull.png',
  'assets/img/fire_horns.png',
  'assets/img/green_blob.png',
  'assets/img/pink_monster.png',
  'assets/img/red_zombie.png'
];

/**
 * a Helper function that returns a random integer number between and 
 * including the lower and upper limits
 * 
 * @param {*} lower the lower limit of the possible result
 * @param {*} upper the upper limit of the possible result
 * @returns a random integer number between and including the lower and upper
 *   limits
 */
function randomIntBetween(lower, upper) {
  return Math.round(lower + (upper - lower) * Math.random());
}

/**
 * Initializes the app when the page is fully loaded.
 * 
 * Instead placing the code outside of a function, this ensures that all expected
 * DOM elements are loaded and available. It is a good practice in Javascript, 
 * and might prevent some funky errors.
 */
window.addEventListener('load', function() {
  const playfield = document.getElementById('playfield');
});

/* Added pictures to the website */

const container = document.getElementById('playfield');

for (let i = 0; i < monsterImages.length; i++) {
  const img = document.createElement('img');
  img.src = monsterImages[i];
  container.appendChild(img);
  img.className = 'playfield_item';
}

/* Added a click event listener for each image */

const monsterPicturesOnWebsite = document.getElementsByClassName('playfield_item');

for (let i = 0; i < monsterImages.length; i++) {
  monsterPicturesOnWebsite[i].addEventListener('click', onClickEvent);
}

function onClickEvent (event) {
  clicks++;
  monsterLocation(event.target);
  numberOfClicks();
}

let clicks = 0;

function monsterLocation (monsterPicturesOnWebsite) {
  monsterPicturesOnWebsite.style.left = randomIntBetween(0, window.innerWidth - window.innerHeight * 0.25) + 'px';
  monsterPicturesOnWebsite.style.top = randomIntBetween(0, window.innerHeight - window.innerHeight * 0.25) + 'px';
}

const trophiesSpan = document.getElementById('trophies');

function numberOfClicks () {
  if (clicks == 250) {
    trophiesSpan.innerHTML = trophies[0] + trophies[1] + trophies[2] + trophies[3] + trophies[4];
  }
  else {
    if (clicks == 150) {
      trophiesSpan.innerHTML = trophies[0] + trophies[1] + trophies[2] + trophies[3];
    }
    else {
      if (clicks == 100) {
        trophiesSpan.innerHTML = trophies[0] + trophies[1] + trophies[2];
      }
      else {
        if (clicks == 50) {
          trophiesSpan.innerHTML = trophies[0] + trophies[1];
        }
        else {
          if (clicks == 10) {
            trophiesSpan.innerHTML = trophies[0];
          }
        }
      }
    }
  }
}