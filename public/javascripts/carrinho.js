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

function getElement(id) {
  return document.getElementById(`deleteBtn-${id}`);
}

function deleteItem(id) {
  const item = getElement(id);
  const valor = confirm("Deseja excluir este item ?");
  if (!valor) {
    item.removeAttribute("form");
  }
}
