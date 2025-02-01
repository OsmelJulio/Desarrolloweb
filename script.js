document.addEventListener('DOMContentLoaded',function(){
   const button = document.getElementById ('changeTextButton');
   button.addEventListener('click', function(){
       const introSection=document.getElementById('intro');
       document.getElementById('intro').innerHTML ='<p>el texto a cambiado despues de hacer clik </p>';
   });
});
