function togglingAll(){
  const button = document.querySelector('.js-button');
  if (!button.classList.contains('is-toggled')){
   button.classList.add('is-toggled');

  }
  else {
   button.classList.remove('is-toggled');
  }

  const button2 = document.querySelector('.js-button2');
  if (!button2.classList.contains('is-toggled2')){
     button2.classList.add('is-toggled2');

    }
    else {
     button2.classList.remove('is-toggled2');
    }

    const button3 = document.querySelector('.js-button3');
    if (!button3.classList.contains('is-toggled3')){
    button3.classList.add('is-toggled3');

    }
    else {
    button3.classList.remove('is-toggled3');
    }


 }
 function toggleOne(){
   const button = document.querySelector('.js-button');
   if (!button.classList.contains('is-toggled')){
    button.classList.add('is-toggled');
 
   }
   else {
    button.classList.remove('is-toggled');
   }
   

 }
 function toggleTwo(){
   const button2 = document.querySelector('.js-button2');
   if (!button2.classList.contains('is-toggled2')){
      button2.classList.add('is-toggled2');
 
     }
     else {
      button2.classList.remove('is-toggled2');
     }
 }

 function toggleThree(){
   const button3 = document.querySelector('.js-button3');
   if (!button3.classList.contains('is-toggled3')){
   button3.classList.add('is-toggled3');

   }
   else {
   button3.classList.remove('is-toggled3');
   }

 }
