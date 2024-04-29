create database restapi_website_shoes;

use restapi_website_shoes;

CREATE TABLE Productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    descripcion VARCHAR(255),
    precio DECIMAL(10, 2),
    stock INT
);

show tables;

insert into productos values(1, "Zapato", "descripcion", 12.00, 10);

INSERT INTO productos (nombre, descripcion, precio, stock) VALUES
('Zapato 1', 'Descripción del zapato 1', 12.00, 5),
('Zapato 2', 'Descripción del zapato 2', 12.00, 8),
('Zapato 3', 'Descripción del zapato 3', 12.00, 12),
('Zapato 4', 'Descripción del zapato 4', 12.00, 15),
('Zapato 5', 'Descripción del zapato 5', 12.00, 20),
('Zapato 6', 'Descripción del zapato 6', 12.00, 7),
('Zapato 7', 'Descripción del zapato 7', 12.00, 11),
('Zapato 8', 'Descripción del zapato 8', 12.00, 9),
('Zapato 9', 'Descripción del zapato 9', 12.00, 14),
('Zapato 10', 'Descripción del zapato 10', 12.00, 6);