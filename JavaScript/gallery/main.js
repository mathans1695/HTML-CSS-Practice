const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for(let i = 1; i <= 5; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/pic${i}.jpg`);
  thumbBar.appendChild(newImage);
}

thumbBar.onclick = function() {
  img = event.target;
  src = img.getAttribute('src');
  displayedImage.setAttribute('src', src);
}
/* Wiring up the Darken/Lighten button */

btn.onclick = function() {
  if(btn.textContent === 'Darken') {
    btn.textContent = 'Lighten';
	btn.setAttribute('class', 'light');
	overlay.style.backgroundColor = 'rgb(0,0,0,0.5)';
  } else {
	  btn.textContent = 'Darken';
	  btn.setAttribute('class', 'dark');
	  overlay.style.backgroundColor = 'rgb(0,0,0,0)';
    }
}