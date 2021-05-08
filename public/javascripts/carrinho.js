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

function deleteItem(event, id) {
  event.preventDefault
}


let botoes = document.querySelectorAll(".delete-btn");
for (let index = 0; index < botoes.length; index++) {
  let btn = botoes[index];
  

  btn.addEventListener("click", function (event) {
    event.preventDefault();
    let form = document.getElementById(btn.getAttribute("form"))
    Swal.fire({
      title: 'Deseja excluir este item?',
  text: "",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Sim, apagar!'
    }).then((result) => {
      if (result.isConfirmed) {
        setTimeout(function() {
          form.submit()
        } , 5500);
          Swal.fire(
            'O item foi removido!',
            '',
            'success'
          );
          let botoesok = document.querySelectorAll(".swal2-confirm");
          for (let btnok of botoesok) {
            btnok.onclick = function(){
              form.submit()
            }
          }
      }
    })
  })
}
