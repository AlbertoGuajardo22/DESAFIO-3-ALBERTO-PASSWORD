
var generateBtn = document.querySelector("#generate");
console.log (generateBtn)

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var datos = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = datos;
  console.log(datos)

  //variables
var letras = "abcdefghijklmnopqrstuvwxyz"
var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeros = "0123456789"
var simbolos = "!$,%&'()*+,-./:;<=>?@[:]`{|}~"
var criterio = ""

if(datos.letras === 'No' && datos.simbolos === 'No' && datos.numeros === 'No' && datos.mayusculas === 'No') {
  alert("Debe seleccionar al menos un elemento")
  return
}

if(datos.letras === 'Si') criterio+= letras
if(datos.mayusculas === 'Si') criterio+= mayusculas
if(datos.simbolos === 'Si') criterio+= simbolos
if(datos.numeros ==='Si') criterio+= numeros

var newPassword = ""

for (var i = 0; i <= datos.esEntero; i++){ 

  var random = Math.floor(Math.random() * (criterio.length - 0 + 1))
  

  newPassword += criterio[random]
    
  }
passwordText.value = newPassword

}




function generatePassword () {
  
  const letras = prompt("Deseas incluir letras? (Si o No )", "")
  var mayusculas = "No"
  
  if(letras !== "Si" && letras !== "No") {
    alert("Debe ingresar Si o No") 
    return
}
  if(letras === "Si"){ 
    mayusculas = prompt("Deseas incluir letras mayuculas? (Si o No )", "")
    console.log(mayusculas) 
    if(mayusculas !== "Si" && mayusculas !== "No") {
      alert("Debe ingresar Si o No") 
     return
    }
  }
  const numeros = prompt("Deseas incluir numeros? (Si o No )", "")
  if(numeros !== "Si" && numeros !== "No") {
    alert("Debe ingresar Si o No") 
  
    return
  }
  const simbolos = prompt("Deseas incluir caracteres especiales? (Si o No )", "")
  if(simbolos !== "Si" && simbolos !== "No") {
    alert("Debe ingresar Si o No") 
  
   return 
  }
  const longitud = prompt ("Ingrese la longitud de su contraseña (Elige un numero del 8 al 128)")
  const esEntero = parseInt(longitud)

  if (!esEntero ||  esEntero <8 || esEntero >128) {
    alert("Debe ser un numero del 8 al 128")

    return    
   }   
  
console.log ({ letras, mayusculas, numeros, simbolos, esEntero})
  return { letras, mayusculas, numeros, simbolos, esEntero}
  


}




