// Example starter JavaScript for disabling form submissions if there are invalid fields
;(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')
  var pass = document.querySelectorAll('password').value
  var cpass = document.querySelectorAll('cnpassword').value

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          if (pass != cpass) {
            alert('check password')
          }
        }

        form.classList.add('was-validated')
      },
      false
    )
  })
})()

// $(function () {
//   $('#submit').on('click', function (event) {
//     event.preventDefault()
//   })
// })
// $(function () {
//   $("form[name='registration']").validate({
//     rules: {
//       firstname: "required",
//       lastname: "required",
//       department: "required",
//       matno: "required",
//       phone: "required",
//       email: {
//         required: true,
//         email: true
//       },
//       password: {
//         require: true,
//         minlenght: 5
//       },
//       cnpassword: {
//         require: true,
//         minlenght: 5,
//         equalTo: "#password"
//       }
//     },
//     messages: {
//       firstname: "Please enter your first name",
//       lastname: "Please enter your last name",
//       department: "Please enter your department",
//       matno: "Please enter your first name",
//       phone: "Please enter your first name",
//       password: {
//         required: "please provide a password",
//         minlenght: "your must be at least 5 character"
//       },
//       cnpassword: {
//         required: "please provide a password",
//         minlenght: "your must be at least 5 character",
//         equalTo: "please enter the same password as above"
//       },
//       email: "please enter a valid email"
//     },
//     submitHandler: function (form) {
//       form.submit()
//     }
//   })
// })

$(function () {
  $('#log').on('click', function () {
    location = 'userlogin.html'
  })
  $('#sign').on('click', function () {
    location = '#account'
  })
})
