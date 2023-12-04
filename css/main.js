const from = document.getElementById("novoItem")

form.addEventlistener("submit",(evento)=>{
    evento.preventDefault()

   evento.log(evento)
   evento.log(evento.target[0].value) 
   evento.log(evento.target[1].value)  
})