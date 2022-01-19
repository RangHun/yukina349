Swal.fire({
  imageUrl: 'https://www.yukina349.com/instagram_icon.jpg',
  imageWidth: 100,
  imageHeight: 100,
  imageAlt: 'instagram',
  confirmButtonColor: '#d33',
  html:
    '更多美食即時資訊在IG：<a href="https://www.instagram.com/yukina349/" target="_blank" style="color:blue !important;" class="sweetalertIGIcon">@yukina349</a></br> ',
  showCloseButton: true,
  showCancelButton: true,
  focusConfirm: false,
  confirmButtonText:
    '<a href="https://www.instagram.com/yukina349/" target="_blank" style="color:white;" class="sweetalertIGIcon"> 進入instagram！</a>',
  cancelButtonText:
    '下次再說',
  showClass: {
    popup: 'animate__animated animate__fadeInDown'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
  }
})