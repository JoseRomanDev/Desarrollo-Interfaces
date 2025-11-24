<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "<h1>Resumen del Registro</h1>";
    echo "<table border='1' cellpadding='8' cellspacing='0'>";
    echo "<tr><th>Campo</th><th>Valor</th></tr>";

    
    function mostrar($campo, $nombre) {
        if (isset($_POST[$campo])) {
            $valor = $_POST[$campo];
            if (is_array($valor)) $valor = implode(", ", $valor);
            echo "<tr><td><strong>$nombre</strong></td><td>$valor</td></tr>";
        }
    }

    mostrar("nombre", "Nombre completo");
    mostrar("color", "Color de acreditación");
    mostrar("email", "Correo electrónico");
    mostrar("teléfono", "Teléfono");
    mostrar("fecha_Nac", "Fecha de nacimiento");
    mostrar("paísresidente", "País de residencia");
    mostrar("genero", "Género");
    mostrar("profesion", "Profesión / Ocupación");
    mostrar("educacion", "Nivel educativo");
    mostrar("dieta", "Preferencias dietéticas");
    mostrar("transporte", "Medio de transporte");
    mostrar("idioma", "Idioma preferido");
    mostrar("conferencias", "Conferencias elegidas");
    mostrar("talleres", "Talleres elegidos");
    mostrar("alojamiento", "Alojamiento requerido");
    mostrar("fecha_llegada", "Fecha de llegada");
    mostrar("fecha_salida", "Fecha de salida");
    mostrar("acompanantes", "Nº de acompañantes");
    mostrar("preferencias", "Preferencias especiales");

    echo "<tr><td><strong>Ocupación del congreso</strong></td><td>60%</td></tr>";
    echo "</table>";

    echo "<br><a href='formulario.html'>Volver al formulario</a>";

} else {
    echo "<p>Acceso no permitido. Por favor, envíe el formulario desde <a href='formulario.html'>aquí</a>.</p>";
}
?>
