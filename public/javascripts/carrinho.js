const btnPlus = document.querySelector(".plus-btn");
const btnMinus = document.querySelector(".minus-btn");
const inputNumber = document.querySelector(".number");
const btnDelete = document.querySelector(".delete-btn");

function mais() {
  btnPlus.addEventListener("click", () => {
    inputNumber.value++;
  });
}

btnMinus.addEventListener("click", () => {
  if (inputNumber.value <= 1) {
    inputNumber.value = 1;
  } else {
    inputNumber.value--;
  }
});
btnDelete.addEventListener("click", () => {
  btnDelete.value = true;
});

function getInputElement(id) {
  return document.getElementById(`number-${id}`);
}

function decrement(id) {
  const input = getInputElement(id);
  if (input.value <= 1) {
    return;
  }
  input.value--;
}

function increment(id) {
  const input = getInputElement(id);
  input.value++;
}
