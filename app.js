// todas las variables
const d = document
let caracteres = d.querySelector("#caracteres")
let danger = d.querySelector("#danger")
let clave_generada = d.querySelector("#clave-generada")
let btn = d.querySelector("#btn")
let text = "Cerrar"
let PassArray = []



// Caracteres a generar
Mayuscula = ["A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , 
"I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , 
"U" , "V" , "W" , "X" , "Y" , "Z"]


let Numeros = [1 ,2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 0]

// funcionalidad
btn.addEventListener("click" , e =>{
    let contador = 0
    let Obtener = "Obtener"
    btn.classList.add("btn2")
    clave_generada.classList.toggle("none")
    
    
    if(clave_generada.classList.contains("none")){
        btn.innerHTML = `<b>${Obtener}</b>`
        // console.log("vaciar el array")

        PassArray = []
        // console.log(PassArray)
        
    } else {
        btn.innerHTML = `<b>${text}</b>`
        // console.log("dejarlo")
        PassArray = []
    }

    while(contador < caracteres.value){
        if(caracteres.value % 2 === 0){
            let PassNum = Math.floor(Math.random()*11)
            // console.log(PassNum)
            let PassLet = Math.floor(Math.random()*27)
            let result = Mayuscula[PassLet]
    
            // console.log(result)

            PassArray.push(PassNum , result)
            // PassArray.split("-")
            let keyhere = d.querySelector("#keyhere").innerHTML = `<h3><b>${PassArray}</b></h3>`

            contador += 2
            
        }else{
            if(contador % 2 != 0){
                let PassNum = Math.floor(Math.random()*11)
                PassArray.push(PassNum)
                // console.log(PassNum)
            }else{
                let PassLet = Math.floor(Math.random()*27)
                let result = Mayuscula[PassLet]
                PassArray.push(result)
                // console.log(result)
            }
            // console.log(PassArray)
            let keyhere = d.querySelector("#keyhere").innerHTML = `<h3><b>${PassArray}</b></h3>`
            contador += 1
        }
    }})