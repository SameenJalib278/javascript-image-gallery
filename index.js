const panels= document.querySelectorAll('.panel');
function toggleopen(){
    console.log("as");
this.classList.toggle('open');
}



    function toggleactive(e) {
        console.log(e.propertyName);
        if (e.propertyName.includes('flex-grow')) {
          this.classList.toggle('open-active');
        }
      }

panels.forEach(panel=>panel.addEventListener('click',toggleopen));
panels.forEach(panel=>panel.addEventListener('transitionend',toggleactive));