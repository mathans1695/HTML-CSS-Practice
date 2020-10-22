const customName = document.querySelector('#customname');
const US = document.querySelector('#us');
const UK = document.querySelector('#uk');

const randomize = document.querySelector('.randomize');;
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

randomize.onclick = function random() {
  let randomSrc = 0;

  let insertX = new Array();
  let insertY = new Array();
  let insertZ = new Array();

  insertX.push('Willy the Goblin');
  insertX.push('Big Daddy');
  insertX.push('Father Christmas');

  insertY.push('the soup kitchen');
  insertY.push('Disneyland');
  insertY.push('the White House');

  insertZ.push('spontaneously combusted');
  insertZ.push('melted into a puddle on the sidewalk');
  insertZ.push('turned into a slug and crawled away');
  
  tempX = randomValueFromArray(insertX);
  tempY = randomValueFromArray(insertY);
  tempZ = randomValueFromArray(insertZ);
  
  randomSrc = `It was 94 fahrenheit outside, so ${tempX} went for a walk. When they got to ${tempY}, they stared in horror for a few moments, then ${tempZ}. Bob saw the whole thing, but was not surprised — ${tempX} weighs 300 pounds, and it was a hot day.`;
  
  story.textContent = randomSrc;
  story.style.visibility = 'visible';
}