const btnleft = document.querySelector(".btn-left"),
      btnright = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section");       
      
      btnleft.addEventListener("click", e => moveToLeft())
      btnright.addEventListener("click", e => moveToRight())

      setInterval(() =>{
        moveToRight()
      }, 6000);
      
      let operacion = 0;
          contador = 0;
          widthImg = 100 / sliderSection.length;
      function moveToRight() { 
        if (contador >= sliderSection.length-1){
            contador = 0;
            operacion = 0;
            slider.style.transform = `translate(-${operacion}%)`;
            slider.style.transition = "none"
        } else {
            contador++;
            operacion = operacion + widthImg;
            slider.style.transform = `translate(-${operacion}%)`;
            slider.style.transition = "all ease .6s"
        }
    }
    function moveToLeft() { 
        contador--;
        if (contador < 0) {
            contador = sliderSection.length-1;
            operacion = widthImg * (sliderSection.length-1)
            slider.style.transform = `translate(-${operacion}%)`;
            slider.style.transition = "none"
        } else {
            operacion = operacion - widthImg;
            slider.style.transform = `translate(-${operacion}%)`;
            slider.style.transition = "all ease .6s"  
        }
        
       }    