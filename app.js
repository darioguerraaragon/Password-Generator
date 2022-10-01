// todas las variables
const d = document
let caracteres = d.querySelector("#caracteres")
const danger = d.querySelector("#danger")
const danger2 = d.querySelector("#danger2")
const clave_generada = d.querySelector("#clave-generada")
const btn = d.querySelector("#btn")
const text = "Cerrar"
let PassArray = []


// Caracteres a generar
Mayuscula = ["@" , "B" , "()" , "D" , "$" , "F" , "_" , "h" , 
"1" , "/" , "K" , "L" , "?" , "N" , "*" , "p" , "Q" , "-" , "S" , "!" , 
"U" , "+" , "#" , "X" , "%" , "z"]


// funcionalidad
btn.addEventListener("click" , e =>{
    let contador = 0
    const Obtener = "Obtener"
    btn.classList.add("btn2")
    clave_generada.classList.toggle("none")  
    
    if(clave_generada.classList.contains("none")){
        btn.innerHTML = `<b>${Obtener}</b>`
        PassArray = []
        
    } else {
        btn.innerHTML = `<b>${text}</b>`
        PassArray = []
    }


    while(contador < caracteres.value){

        if(caracteres.value >= 15){
            danger.classList.remove("none")
            PassArray = []
            break
        }else{
            danger.classList.add("none")
        }

        if(caracteres.value % 2 === 0){
            let PassNum = Math.floor(Math.random()*11)
            let PassLet = Math.floor(Math.random()*27)
            let result = Mayuscula[PassLet]

            PassArray.push(PassNum , result)
            let keyhere = d.querySelector("#keyhere").innerHTML = `<h3><b>${PassArray}</b></h3>`

            contador += 2
            
        }else{
            if(contador % 2 != 0){
                let PassNum = Math.floor(Math.random()*11)
                PassArray.push(PassNum)
            }else{
                let PassLet = Math.floor(Math.random()*27)
                let result = Mayuscula[PassLet]
                PassArray.push(result)
            }
            // console.log(PassArray)
            let keyhere = d.querySelector("#keyhere").innerHTML = `<h3><b>${PassArray}</b></h3>`
            contador += 1
        }
    }})


// funcionalidad del btn github

d.addEventListener("click" , e =>{
    if(e.target.matches(".github")){
        window.location.href = "https://github.com/darioguerraaragon"
    }
})