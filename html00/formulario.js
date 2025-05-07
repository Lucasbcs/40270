console.log("inicio")

function muestra() {
let user= document.getElementById("user")
let password= document.getElementById("password")

console.log(user.value)
console.log(password.value)
}

//ejemplo de funcion calback
const boton = document.getElementById("boton")
//boton.addEventListener("click", muestra)

boton.addEventListener("click",
    () => {
        let user= document.getElementById("user")
        let password= document.getElementById("password")

        console.log(user.value)
        console.log(password.value)
    }
)

