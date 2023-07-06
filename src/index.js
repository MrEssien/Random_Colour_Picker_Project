import "./styles.css";

//Add event handler to the button//
const el = document.getElementById("btn");
const pe = document.getElementById("bkcs");
const lo = document.getElementById("p1");
el.addEventListener("click", name);
//Work on the logic in the event handler to change the background colour//

function name() {
  console.log("Philip");
  //Change background to fix colour//
  let r = getRandomInt(256);
  let g = getRandomInt(256);
  let b = getRandomInt(256);

  pe.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  console.log(pe);

  lo.innerHTML = pe.style.backgroundColor;
  //Change the fix coloir to a random colour generator
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
