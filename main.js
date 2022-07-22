function removerInputs() {
   input.remove()
}

function crearInputs() {
   for(i = 0; i < parseInt(numbers.value); i++) {
      const input = document.createElement("input");
      input.classList.add("casilla")
      label.appendChild(input);
   }
}


function encontrarNumeroMayor(array) {
   let numeroMayor = array[0];
   for(i = 0; i < array.length; i++) {
      if(numeroMayor < array[i]) {
         numeroMayor = array[i];
      } else {
         numeroMayor = numeroMayor;
      }
   }
   return numeroMayor;

}



const numbers = document.querySelector("#amountNumbers");
const create = document.querySelector("#createBoxes");
const remove = document.querySelector("#removeBoxes")
const label = document.querySelector(".labelForm")
const input = document.querySelector(".casilla");


create.addEventListener("click", crearInputs);
remove.addEventListener("click", removerInputs);

