// TODO: Crear modelo de datos de Reserva

function reservaEntity () {
    const query = "CREATE TABLE IF NOT EXISTS reservas (  id INT AUTO_INCREMENT PRIMARY KEY,  cod_vuelo VARCHAR(10),  nombre_pasajero VARCHAR(100),  numero VARCHAR(10))";
}

export default reservaEntity;