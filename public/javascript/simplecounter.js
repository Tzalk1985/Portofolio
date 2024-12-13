// select value and buttons
let value = document.querySelector('#value');
let plusElem = document.querySelector("#btn-plus")
let minusElem = document.querySelector("#btn-minus")
let resetElem = document.querySelector("#btn-reset")

// set initial count
let count = 0;

updateDisplay();

plusElem.addEventListener("click", () => {
  count++;
  updateDisplay();
  console.log(count);
});

minusElem.addEventListener("click", () => {
  count--;
  updateDisplay();
  console.log(count);
})

resetElem.addEventListener("click", () => {
  count = 0;
  updateDisplay();
  console.log(count);
})

function updateDisplay() {
  if (count > 0) {
    document.getElementById("number").style.backgroundColor = "rgb(96, 203, 14)";
  } else if (count < 0) {
    document.getElementById("number").style.backgroundColor = "red";
  } else {
    document.getElementById("number").style.backgroundColor = "white";
  }
  value.textContent = count;
}

