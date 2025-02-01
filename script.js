document.addEventListener('changeTextbutton',function(){
   const button = document.getElementById ('changeTextbutton');
   button.addEventListener('click', function(){
   const introSection=document.getElementById('intro');
     introSection.innerHTML='<p>el texto a cambiado despues de hacer clik </p>';
   });
});
