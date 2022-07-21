const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(40, 40, 200, 100)

const p = document.createElement("p");

const body = document.querySelector("body");

document.write("Hola, mi nombre es Jhon")

body.appendChild(p);

p.innerText = "Soy el mejor programador del mundo"
p.classList.add("nuevo");


p.addEventListener("click", agregarClase);

function agregarClase() {
   p.classList.toggle("newClass")
}


const img = document.createElement("img");
img.setAttribute("src", "https://scontent-lim1-1.xx.fbcdn.net/v/t1.6435-1/84442968_2829750567255870_6740597755393081344_n.jpg?stp=dst-jpg_p240x240&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeHCK5ivZ7AE4ewJL8HtOyM5yqi4ayvwKBDKqLhrK_AoECYyOo1ydzRE2kVrR2GB0v18ApAVYoAElNWRNfsZ8P-O&_nc_ohc=niHqVOw3aNoAX-UGyu8&tn=TCo4ZphLFnxuw124&_nc_ht=scontent-lim1-1.xx&oh=00_AT9Zfktg0ah_u6af8ybWr-p9Ep4ANCoKft6ykjPqLSPvVw&oe=62FDF433")


body.appendChild(img)