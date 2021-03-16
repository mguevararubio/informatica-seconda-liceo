let contador=0
localStorage.setltem ("visitas", contar)
let contarExistente=localStorage.getltem("visitas")
do{
    contar=contar+1
    localStorage.setltem("visitas", contar)
    contarExistente=localStorage.getltem("visitas")
    alert("Ha visitado esta página"+contar+"veces")
}
while(contarExistente==contar)