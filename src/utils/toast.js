import Swal from 'sweetalert2'

const successIcon = require('../assets/success msg.png')
const errorIcon = require('../assets/error msg.png')

const successToast = Swal.mixin({
  toast: true,
  iconHtml: `<img src="${successIcon}">`,
  buttonsStyling: false,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})

const errorToast = Swal.mixin({
  toast: true,
  iconHtml: `<img src="${errorIcon}">`,
  buttonsStyling: false,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})

export { successToast, errorToast }