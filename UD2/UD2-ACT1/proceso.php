<?php
if(($_SERVER_['REQUEST_METHOD'] == 'POST')){
    echo "DATOS RECIBIDOS DEL FORMULARIO <br>";
    echo"<tr>Campo</tr><tr>Valor recibido</tr>";
    if(isset($_POST["nombre"])){
        echo "<tr><td>Nombre</td><td>". $_POST['nombre']. "</td></tr>";
    }
    else{
        echo "<tr><td>Nombre</td><td></td></tr>";
    }
    if(isset($_POST["descripcion"])){
        echo "<tr><td>Descripcion</td><td>".$_POST['descripcion']. "</td></tr>";
    }else{
        echo "<tr><td>Nombre</td><td></td></tr>";
    }
    if(isset($_POST["contador"])){
        echo "<tr><td>Contador de visitas</td><td>".$_POST['contador']."</td></tr>";
    }else{
        echo "<tr><td>Contador de visitas</td>p<td></td></tr>";
    }
    if(isset($_POST["descuento"])){
        echo "<tr><td>Descuento</td><td>".$_POST['descuento']."</td></tr>";
    }else{
        echo "<tr><td>Descuento</td>p<td></td></tr>";
    }
    if(isset($_POST["precio"])){
        echo "<tr><td>Precio</td><td>".$_POST['precio']."</td></tr>";
    }else{
        echo "<tr><td>Precio</td>p<td></td></tr>";
    }
     if(isset($_POST["impuesto"])){
        echo "<tr><td>Impuesto</td><td>".$_POST['impuesto']."</td></tr>";
    }else{
        echo "<tr><td>Precio</td>p<td></td></tr>";
    }
    if(isset($_POST["categoria"])){
        echo "<tr><td>Categoria</td><td>".$_POST['categoria']."</td></tr>";
    }else{
        echo "<tr><td>Categoria</td>p<td></td></tr>";
    }
    if(isset($_POST["promocion"])){
        echo "<tr><td>Promocion</td><td>".$_POST['promocion']."</td></tr>";
    }else{
        echo "<tr><td>Promocion</td>p<td></td></tr>";
    }
}
else{
    echo "No se han enviado los datos correctamente";
}

?>