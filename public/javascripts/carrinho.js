function getInputElement(id) {
  return document.getElementById(`number-${id}`);
}

function decrement(id) {
  const input = getInputElement(id);
  if (input.value <= 1) {
    return;
  }
  input.value -= 1;
}

function increment(id) {
  const input = getInputElement(id);
  input.value++;
}
