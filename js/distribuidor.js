//Implementación de API pública - Usuarios/Dummy
function mostrarDistrib(){
    let url="https://jsonplaceholder.typicode.com/users";
    //implementado el fetch para la informacion de los distribuidores
    fetch(url)
    .then(response=> response.json())
    .then(data => mostrarDistrib(data))
    .catch(error=> console.log(error))

    const mostrarDistrib=(data)=>{
        console.log(data)
        let distrib=""
        for(var i=0;i<data.length;i++){
            distrib+=`<tr>
            <td>${data[i].id}</td>
            <td>${data[i].name}</td>
            <td>${data[i].address.city}</td>
            <td>${data[i].address.zipcode}</td>
            <td>${data[i].phone}</td>
            </tr>`
        }
        document.getElementById('distribuidores').innerHTML=distrib;
    }
}

function buscarDistrib(){
    let url="https://jsonplaceholder.typicode.com/users";
    let distrib_dir=document.getElementById('distrib_dir').value;
    fetch(url)
    .then(response => response.json())
    .then(data => buscarDistrib(data))
    .catch(error => console.log(error))

    const buscarDistrib=(data)=>{
        console.log(data)
        let buscar=""
        if(document.getElementById('distrib_dir').selectedIndex==0){
            mostrarDistrib();
        }
        else{
            for(var i=0;i<data.length;i++){
                if(distrib_dir==data[i].address.city)
                    {
                        buscar+=`<tr>
                        <td>${data[i].id}</td>
                        <td>${data[i].name}</td>
                        <td>${data[i].address.city}</td>
                        <td>${data[i].address.zipcode}</td>
                        <td>${data[i].phone}</td>
                        </tr>`
                    }
            }
            document.getElementById('distribuidores').innerHTML=buscar;
        }
    }
}

//Funcion para regresar al menú principal
function redirectIndex(){
    location.replace('index.html');
}