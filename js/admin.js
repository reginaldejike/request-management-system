// JavaScript for disabling form submissions if there are invalid fields
;(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          // let pass = document.getElementById('password').value
          // let cpass = document.getElementById('cnpassword').value
          // if (pass === cpass) {
          //   console.log('pass')
          // } else {
          //   console.log('check password')
          // }
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      },
      false
    )
  })
})()

//home page
$(function () {
  $('#log').on('click', function () {
    location = 'userlogin.html'
  })
  $('#sign').on('click', function () {
    location = '#account'
  })
  $('.btn').on('click', function (e) {
    // e.preventDefault()
    let pass = $('#password').val()
    let cpass = $('#cnpassword').val()

    if (pass === cpass) {
      console.log('pass')
    } else {
      console.log('check password')
    }
  })
})
