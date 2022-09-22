const loginForm = document.querySelector("#login-form");
const input = loginForm.querySelector("input");
const helloname = document.querySelector("#helloname");
const HIDDEN = "hidden";
const USERNAME_KEY = "username";
const del = document.querySelector("#del");

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

function helloName() {
    const savedUsername = localStorage.getItem(USERNAME_KEY);
    helloname.innerText = `Hello ${savedUsername}`;
    $('#helloname').fadeIn(2000);
    helloname.classList.remove(HIDDEN);
    $('#del').fadeIn(800);
    del.classList.remove(HIDDEN);
    del.addEventListener("click", DelName);
}

function SubmitName(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN);
    const siteUserName = input.value;
    localStorage.setItem(USERNAME_KEY, input.value);
    helloName();
}

function DelName() {
    Swal.fire({
        title: 'Are you sure?',
        text: "Your Todo list will be deleted",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your Todo list has been deleted.',
            'success'
          ).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem(USERNAME_KEY);
                localStorage.removeItem("todolist");
                location.reload();
            }
          })
        }
      })

}


const local = localStorage.getItem(USERNAME_KEY)

if(local === null) {
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", SubmitName);
    
} else {
    helloName();
    del.classList.remove(HIDDEN);
    del.addEventListener("click", DelName);
}
  
