const numbers = document.querySelector("#amountNumbers");
const create = document.querySelector("#createBoxes");
const remove = document.querySelector("#removeBoxes")
const label = document.querySelector(".labelForm")
const inputCalc = document.querySelector("#calcular");
const result = document.querySelector(".result");

function removerInputs() {
   for(i = 0; i < 10000000000000; i++) {
      const input = document.querySelector(".casilla");
      input.remove()
   }
}

function crearInputs() {
   for(i = 0; i < parseInt(numbers.value); i++) {
      const input = document.createElement("input");
      let classNumber = "casilla" + i;
      input.classList.add(classNumber)
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

function calcularNumeroMayor() {
   const array = [];
   for(i = 0; i < 500; i++) {
      let classNumber = ".casilla" + i;
      const input = document.querySelector(classNumber);
      let value = input.value;
      value = parseInt(value);
      array.push(value);
   }
   const numeroMayor = encontrarNumeroMayor(array);
   result.innerText = numeroMayor;
}

create.addEventListener("click", crearInputs);
remove.addEventListener("click", removerInputs);
inputCalc.addEventListener("click", calcularNumeroMayor);



