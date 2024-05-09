function Mostrarproductos(){
    let url="http://localhost:3000/productosDestacados";
    //implementado el fetch para la informacion de los productos
    fetch(url)
    .then(response=> response.json())
    .then(data => Mostrardestacados(data))
    .catch(error=> console.log(error))

    const Mostrardestacados=(data)=>{
        console.log(data)
        let producto=""
        for(var i=0;i<data.length;i++){
            producto+=`<tr>
            <td>${data[i].id}</td>
            <td>${data[i].nombre}</td>
            <td>${data[i].precio}</td>
            <td>${data[i].descripcion}</td>
            <td>${data[i].producto}</td>
            </tr>`
        }
        document.getElementById('productosDestacados').innerHTML=producto;
    }
}

function buscarProducto(){
    let url="http://localhost:3000/productosDestacados";
    let producto=document.getElementById('producto').value;
    fetch(url)
    .then(response => response.json())
    .then(data => buscardestacado(data))
    .catch(error => console.log(error))

    const buscardestacado=(data)=>{
        console.log(data)
        let destacado=""
        if(document.getElementById('producto').selectedIndex==0){
            Mostrarproductos();
        }
        else{
            for(var i=0;i<data.length;i++){
                if(producto==data[i].producto)
                    {
                        destacado+=`<tr>
                        <td>${data[i].id}</td>
                        <td>${data[i].nombre}</td>
                        <td>${data[i].precio}</td>
                        <td>${data[i].descripcion}</td>
                        <td>${data[i].producto}</td>
                        </tr>`
                    }     
            }
            document.getElementById('productosDestacados').innerHTML=destacado;
        }
    }
}
