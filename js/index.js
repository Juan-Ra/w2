
window.onscroll = function (){
    
  let header = document.getElementById('header');
  
  header.classList.add('scroll-header');
  
  if (window.scrollY == 0){
    header.classList.remove('scroll-header');
    
  }
}
     

$(function(){
  $('[data-toggle="tooltip"]').tooltip()
})