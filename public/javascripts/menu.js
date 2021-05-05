// window.location.reload(true);

const forms = document.querySelectorAll(".form");
for (let form of forms) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        Swal.fire (
            {
                toast: true,
                iconColor: 'white',
                background: '#a5dc86',
                color: 'white',
                icon: 'success',
                title: 'Adicionado!',
                customClass: {
                    popup: 'colored-toast'
                  },
                  showConfirmButton: false,
                  timer: 1000,
                  timerProgressBar: true,
                });
                setTimeout(function() {
                    form.submit()
                } , 1000)
 });
}


