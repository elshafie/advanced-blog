document.addEventListener('DOMContentLoaded', () => {
  const toTop = document.getElementById('to-top')

  // create scroll event to show the button or hide it
  document.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      toTop.style.display= 'block'
      } else {
        toTop.style.display = "none";
      }
  })


  // add click event to the to top button
  toTop.addEventListener('click', (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
})