export default function initHeaderFixo() {
    window.addEventListener('scroll', function(){
        var menu = document.querySelector('header');
        menu.classList.toggle('sticky', window.scrollY > 0);
      })
}