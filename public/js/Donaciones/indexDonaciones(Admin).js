const data = [
    { "id": 1, "first_name": "Stinky", "last_name": "Kuschek", "donation": "Dinero", "type": "Efectivo", "total": "$1.000.000", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 2, "first_name": "Brand", "last_name": "Hatchell", "donation": "Alimentos", "type": "Perecedero", "total": "Papa 30(KG)", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 3, "first_name": "Beatriz", "last_name": "Rocco", "donation": "Tratamiento", "type": "Equinoterapia", "total": "2", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 4, "first_name": "Mary", "last_name": "Boost", "donation": "Medicamento", "type": "Sobre", "total": "Acetaminophen", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 5, "first_name": "Carlos", "last_name": "Gutierrez", "donation": "Ropa", "type": "No perecedero", "total": "Camisetas 10", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 6, "first_name": "Laura", "last_name": "Fernández", "donation": "Juguetes", "type": "Juguete educativo", "total": "5", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 7, "first_name": "Ricardo", "last_name": "Santos", "donation": "Libros", "type": "Infantil", "total": "Libros 8", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 8, "first_name": "Ana", "last_name": "Mendoza", "donation": "Dinero", "type": "Transferencia bancaria", "total": "$500,000", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 9, "first_name": "Gabriel", "last_name": "López", "donation": "Alimentos", "type": "No perecedero", "total": "Arroz 20(KG)", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 10, "first_name": "Isabel", "last_name": "Martínez", "donation": "Medicamento", "type": "Jarabe", "total": "Ibuprofeno", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 11, "first_name": "Javier", "last_name": "Ramírez", "donation": "Juguetes", "type": "Peluches", "total": "3", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 12, "first_name": "Carmen", "last_name": "Vega", "donation": "Ropa", "type": "Abrigos", "total": "Abrigos 5", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 13, "first_name": "Diego", "last_name": "Gómez", "donation": "Dinero", "type": "Cheque", "total": "$750,000", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 14, "first_name": "Fernanda", "last_name": "Gutiérrez", "donation": "Alimentos", "type": "No perecedero", "total": "Lentejas 15(KG)", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 15, "first_name": "Andrés", "last_name": "López", "donation": "Tratamiento", "type": "Fisioterapia", "total": "5 sesiones", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 16, "first_name": "María", "last_name": "Hernández", "donation": "Libros", "type": "Novela", "total": "Libros 6", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 17, "first_name": "Pedro", "last_name": "García", "donation": "Medicamento", "type": "Tabletas", "total": "Aspirina", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 18, "first_name": "Laura", "last_name": "Martínez", "donation": "Dinero", "type": "Efectivo", "total": "$1,200,000", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 19, "first_name": "Alejandro", "last_name": "Soto", "donation": "Alimentos", "type": "Perecedero", "total": "Pollo 20(KG)", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 20, "first_name": "Valentina", "last_name": "Gómez", "donation": "Ropa", "type": "Vestidos", "total": "Vestidos 7", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 21, "first_name": "Francisco", "last_name": "Rodríguez", "donation": "Juguetes", "type": "Juego de construcción", "total": "1", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 22, "first_name": "Marta", "last_name": "Gutiérrez", "donation": "Libros", "type": "Educación infantil", "total": "Libros 10", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 23, "first_name": "Roberto", "last_name": "Vega", "donation": "Dinero", "type": "Transferencia bancaria", "total": "$900,000", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 24, "first_name": "Gabriela", "last_name": "Hernández", "donation": "Alimentos", "type": "No perecedero", "total": "Harina 25(KG)", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 25, "first_name": "Eduardo", "last_name": "López", "donation": "Tratamiento", "type": "Terapia ocupacional", "total": "3 sesiones", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 26, "first_name": "Ana", "last_name": "Torres", "donation": "Libros", "type": "Poesía", "total": "Libros 4", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 27, "first_name": "Carlos", "last_name": "Sánchez", "donation": "Medicamento", "type": "Jarabe", "total": "Paracetamol", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 28, "first_name": "Isabel", "last_name": "Martínez", "donation": "Dinero", "type": "Cheque", "total": "$600,000", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 29, "first_name": "Luis", "last_name": "García", "donation": "Alimentos", "type": "Perecedero", "total": "Tomates 15(KG)", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 30, "first_name": "Silvia", "last_name": "Ríos", "donation": "Ropa", "type": "Zapatos", "total": "Zapatos 8", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 31, "first_name": "Andrés", "last_name": "Fernández", "donation": "Juguetes", "type": "Muñecas", "total": "2", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 32, "first_name": "Sara", "last_name": "Gómez", "donation": "Libros", "type": "Ciencia ficción", "total": "Libros 12", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 33, "first_name": "Ricardo", "last_name": "Hernández", "donation": "Dinero", "type": "Efectivo", "total": "$1,500,000", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 34, "first_name": "Laura", "last_name": "García", "donation": "Alimentos", "type": "No perecedero", "total": "Fideos 10(KG)", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 35, "first_name": "David", "last_name": "Soto", "donation": "Tratamiento", "type": "Musicoterapia", "total": "4 sesiones", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 36, "first_name": "Cecilia", "last_name": "Torres", "donation": "Libros", "type": "Biografía", "total": "Libros 7", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 37, "first_name": "Juan", "last_name": "Mendoza", "donation": "Medicamento", "type": "Píldoras", "total": "Ibuprofeno", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 38, "first_name": "Mónica", "last_name": "Martínez", "donation": "Dinero", "type": "Transferencia bancaria", "total": "$800,000", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 39, "first_name": "Raul", "last_name": "Gutiérrez", "donation": "Alimentos", "type": "Perecedero", "total": "Manzanas 12(KG)", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 40, "first_name": "Valeria", "last_name": "Hernández", "donation": "Ropa", "type": "Jeans", "total": "Jeans 6", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 41, "first_name": "José", "last_name": "López", "donation": "Juguetes", "type": "Rompecabezas", "total": "1", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 42, "first_name": "Ana", "last_name": "García", "donation": "Libros", "type": "Histórico", "total": "Libros 9", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 43, "first_name": "Pablo", "last_name": "Sánchez", "donation": "Dinero", "type": "Cheque", "total": "$700,000", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 44, "first_name": "Marina", "last_name": "Fernández", "donation": "Alimentos", "type": "No perecedero", "total": "Arvejas 8(KG)", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 45, "first_name": "Martín", "last_name": "Gómez", "donation": "Tratamiento", "type": "Logopedia", "total": "6 sesiones", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 46, "first_name": "Gabriela", "last_name": "Torres", "donation": "Libros", "type": "Fantasía", "total": "Libros 5", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 47, "first_name": "Andrea", "last_name": "Hernández", "donation": "Medicamento", "type": "Sobre", "total": "Ibuprofeno", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 48, "first_name": "Carlos", "last_name": "Soto", "donation": "Dinero", "type": "Efectivo", "total": "$1,000,000", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 49, "first_name": "Mónica", "last_name": "Gutiérrez", "donation": "Alimentos", "type": "Perecedero", "total": "Carne 15(KG)", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 50, "first_name": "José", "last_name": "Martínez", "donation": "Ropa", "type": "Camisas", "total": "Camisas 9", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 51, "first_name": "Ana", "last_name": "López", "donation": "Juguetes", "type": "Pelotas", "total": "2", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 52, "first_name": "Daniel", "last_name": "García", "donation": "Libros", "type": "Policial", "total": "Libros 8", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 53, "first_name": "Laura", "last_name": "Sánchez", "donation": "Dinero", "type": "Transferencia bancaria", "total": "$850,000", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 54, "first_name": "Javier", "last_name": "Fernández", "donation": "Alimentos", "type": "No perecedero", "total": "Arroz 18(KG)", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 55, "first_name": "María", "last_name": "Hernández", "donation": "Tratamiento", "type": "Psicoterapia", "total": "5 sesiones", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 56, "first_name": "Sergio", "last_name": "Torres", "donation": "Libros", "type": "Aventuras", "total": "Libros 6", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 57, "first_name": "Carmen", "last_name": "Martínez", "donation": "Medicamento", "type": "Jarabe", "total": "Paracetamol", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 58, "first_name": "Carlos", "last_name": "Gómez", "donation": "Dinero", "type": "Cheque", "total": "$950,000", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 59, "first_name": "Laura", "last_name": "Soto", "donation": "Alimentos", "type": "Perecedero", "total": "Manzanas 10(KG)", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 60, "first_name": "Diego", "last_name": "Hernández", "donation": "Ropa", "type": "Bufandas", "total": "Bufandas 5", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 61, "first_name": "Luisa", "last_name": "Torres", "donation": "Juguetes", "type": "Rompecabezas", "total": "1", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 62, "first_name": "Alejandro", "last_name": "García", "donation": "Libros", "type": "Ciencia", "total": "Libros 10", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 63, "first_name": "Valeria", "last_name": "Sánchez", "donation": "Dinero", "type": "Efectivo", "total": "$1,200,000", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 64, "first_name": "Miguel", "last_name": "Fernández", "donation": "Alimentos", "type": "No perecedero", "total": "Garbanzos 12(KG)", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 65, "first_name": "Natalia", "last_name": "Martínez", "donation": "Tratamiento", "type": "Masaje", "total": "3 sesiones", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 66, "first_name": "Gustavo", "last_name": "López", "donation": "Libros", "type": "Drama", "total": "Libros 7", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 67, "first_name": "Carolina", "last_name": "Gómez", "donation": "Medicamento", "type": "Tabletas", "total": "Aspirina", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 68, "first_name": "Santiago", "last_name": "Soto", "donation": "Dinero", "type": "Transferencia bancaria", "total": "$800,000", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 69, "first_name": "Diana", "last_name": "Hernández", "donation": "Alimentos", "type": "Perecedero", "total": "Tomates 15(KG)", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 70, "first_name": "Eduardo", "last_name": "Torres", "donation": "Ropa", "type": "Sombreros", "total": "Sombreros 4", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 71, "first_name": "Isabel", "last_name": "García", "donation": "Juguetes", "type": "Juego de construcción", "total": "1", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 72, "first_name": "Martín", "last_name": "Martínez", "donation": "Libros", "type": "Novela histórica", "total": "Libros 8", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 73, "first_name": "Fernanda", "last_name": "Sánchez", "donation": "Dinero", "type": "Cheque", "total": "$700,000", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 74, "first_name": "Gabriel", "last_name": "Fernández", "donation": "Alimentos", "type": "No perecedero", "total": "Arroz 20(KG)", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 75, "first_name": "Natalia", "last_name": "Torres", "donation": "Tratamiento", "type": "Terapia ocupacional", "total": "4 sesiones", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 76, "first_name": "Sergio", "last_name": "López", "donation": "Libros", "type": "Aventuras", "total": "Libros 6", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 77, "first_name": "Cecilia", "last_name": "Gómez", "donation": "Medicamento", "type": "Sobre", "total": "Paracetamol", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 78, "first_name": "Javier", "last_name": "Martínez", "donation": "Dinero", "type": "Efectivo", "total": "$1,000,000", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 79, "first_name": "Camila", "last_name": "Fernández", "donation": "Alimentos", "type": "Perecedero", "total": "Manzanas 10(KG)", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 80, "first_name": "Pablo", "last_name": "Hernández", "donation": "Ropa", "type": "Abrigos", "total": "Abrigos 5", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 81, "first_name": "Laura", "last_name": "Torres", "donation": "Juguetes", "type": "Muñecos de peluche", "total": "2", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 82, "first_name": "Juan", "last_name": "García", "donation": "Libros", "type": "Poesía", "total": "Libros 5", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 83, "first_name": "Marta", "last_name": "Sánchez", "donation": "Dinero", "type": "Transferencia bancaria", "total": "$900,000", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 84, "first_name": "Carlos", "last_name": "Fernández", "donation": "Alimentos", "type": "No perecedero", "total": "Garbanzos 12(KG)", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 85, "first_name": "Sofía", "last_name": "Martínez", "donation": "Tratamiento", "type": "Fisioterapia", "total": "5 sesiones", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 86, "first_name": "Alejandro", "last_name": "López", "donation": "Libros", "type": "Novela romántica", "total": "Libros 7", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 87, "first_name": "Diana", "last_name": "Gómez", "donation": "Medicamento", "type": "Tabletas", "total": "Ibuprofeno", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 88, "first_name": "Ricardo", "last_name": "Martínez", "donation": "Dinero", "type": "Cheque", "total": "$750,000", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 89, "first_name": "Valentina", "last_name": "Fernández", "donation": "Alimentos", "type": "Perecedero", "total": "Pollo 20(KG)", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 90, "first_name": "Jorge", "last_name": "Hernández", "donation": "Ropa", "type": "Zapatos", "total": "Zapatos 8", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 91, "first_name": "Liliana", "last_name": "Torres", "donation": "Juguetes", "type": "Pelotas", "total": "3", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 92, "first_name": "Rodrigo", "last_name": "García", "donation": "Libros", "type": "Histórico", "total": "Libros 8", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 93, "first_name": "Florencia", "last_name": "Sánchez", "donation": "Dinero", "type": "Efectivo", "total": "$1,200,000", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 94, "first_name": "Gustavo", "last_name": "Fernández", "donation": "Alimentos", "type": "No perecedero", "total": "Arroz 18(KG)", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 95, "first_name": "Mariana", "last_name": "Martínez", "donation": "Tratamiento", "type": "Equinoterapia", "total": "3 sesiones", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 96, "first_name": "Rafael", "last_name": "Gómez", "donation": "Libros", "type": "Ciencia ficción", "total": "Libros 4", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 97, "first_name": "Elena", "last_name": "López", "donation": "Medicamento", "type": "Jarabe", "total": "Paracetamol", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 98, "first_name": "Pablo", "last_name": "Sánchez", "donation": "Dinero", "type": "Transferencia bancaria", "total": "$850,000", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 99, "first_name": "Laura", "last_name": "Fernández", "donation": "Alimentos", "type": "No perecedero", "total": "Lentejas 15(KG)", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" },
    { "id": 100, "first_name": "Alejandra", "last_name": "Torres", "donation": "Ropa", "type": "Vestidos", "total": "Vestidos 6", "fechaDonado": "12/11/2023", "fechaRegistroDonacion": "14/11/2023" }
]

const table = document.getElementById('tblData');
const pagination = document.getElementById('pagination');
const prevPageButton = document.getElementById('prevPage');
const nextPageButton = document.getElementById('nextPage');
const currentPageSpan = document.getElementById('currentPage');
let currentPage = 1;
const itemsPerPage = 10; // Cambia esto para ajustar la total de filas por página

function showData(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = data.slice(startIndex, endIndex);

    table.tBodies[0].innerHTML = '';

    for (const item of paginatedData) {
        const row = table.tBodies[0].insertRow();
        row.insertCell(0).textContent = item.id;
        row.insertCell(1).textContent = item.first_name + " " + item.last_name;
        row.insertCell(2).textContent = item.donation + " - " + item.type;
        row.insertCell(3).textContent = item.total;
        row.insertCell(4).textContent = item.fechaDonado;


        const optionsCell = row.insertCell(5);
        optionsCell.className = 'Opciones';
        optionsCell.innerHTML = `
<div><img src="../images/indexDonaciones/eye-svgrepo-com.svg" alt="icon" class="opc_eyes"></div>
<div onclick="openModal()"><img src="../images/indexDonaciones/editar.png" alt="icon" class="opc_edit"></div>
`;
    }

    currentPage = page;
    currentPageSpan.textContent = currentPage;
    prevPageButton.disabled = currentPage === 1;
    nextPageButton.disabled = currentPage === Math.ceil(data.length / itemsPerPage);
}

prevPageButton.addEventListener('click', () => {
    if (currentPage > 1) {
        showData(currentPage - 1);
    }
});

nextPageButton.addEventListener('click', () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
        showData(currentPage + 1);
    }
});

showData(currentPage); // Mostrar la primera página al cargar la página

document.addEventListener("DOMContentLoaded", function () {
    const btnAbrirModal = document.querySelector("#btn-abrir-modal");
    const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
    const modal = document.querySelector("#modal");


    btnAbrirModal.addEventListener("click", () => {
        modal.showModal();
    });


    btnCerrarModal.addEventListener("click", () => {
        modal.close();
    });

    const btnAbrirModal1 = document.querySelector("#btn-abrir-modal");
    const btnCerrarModal1 = document.querySelector("#btn-cerrar-modal");
    const btnGuardarModal1 = document.querySelector("#btn-guardar-modal");
    const modal1 = document.querySelector("#modal1");

    btnAbrirModal1.addEventListener("click", () => {
        modal1.showModal();
    });

    btnGuardarModal1.addEventListener("click", () => {
        modal1.save();
    });

    btnCerrarModal1.addEventListener("click", () => {
        modal2.close();
    });

});

function cambioEstado(){
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Cambio de estado exitoso",
        showConfirmButton: false,
        timer: 1500
    });
};


function exportAllDataToExcel(tableID, filename = '') {
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);

    // Crear un objeto HTML para almacenar solo las columnas deseadas
    var filteredTable = document.createElement('table');

    // Agregar encabezados a la nueva tabla (puedes personalizar estos encabezados según tus necesidades)
    var headerRow = filteredTable.createTHead().insertRow(0);
    headerRow.innerHTML = "<th>ID</th><th>Nombre completo</th><th>Donacion</th><th>Cantidad</th><th>Fecha de donacion</th>";

    // Recorrer todas las páginas y recopilar los datos
    for (var page = 1; page <= Math.ceil(data.length / itemsPerPage); page++) {
        // Mostrar datos de la página actual en la tabla
        showData(page);

        // Obtener las filas visibles en la tabla (solo las de la página actual)
        var rows = [];
        for (var i = 0; i < tableSelect.rows.length; i++) {
            if (tableSelect.rows[i].style.display !== 'none') {
                rows.push(tableSelect.rows[i]);
            }
        }

        // Recorrer las filas de la tabla original y copiar solo las columnas deseadas a la nueva tabla
        for (var i = 0; i < rows.length; i++) {
            var cells = rows[i].getElementsByTagName('td');
            if (cells.length >= 5) { // Asegurarse de que haya al menos 5 celdas (las columnas deseadas)
                var newRow = filteredTable.insertRow(-1);
                for (var j = 0; j < 5; j++) { // Copiar solo las primeras 5 celdas (las columnas deseadas)
                    var newCell = newRow.insertCell(j);
                    newCell.innerHTML = cells[j].innerHTML;
                }
            }
        }
    }

    // Convertir la nueva tabla a HTML
    var tableHTML = filteredTable.outerHTML.replace(/ /g, '%20');

    // Especificar el nombre de archivo
    filename = filename ? filename + '.xls' : 'donaciones.xls';

    // Crear el elemento de enlace de descarga
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
        var blob = new Blob(['ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        // Crear un enlace al archivo
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        // Establecer el nombre de archivo
        downloadLink.download = filename;

        // Activar la función
        downloadLink.click();
    }
}


function validarFormulario() {
    // Obtener el valor del campo nombre
    var valorNombre = document.getElementById("nombre").value;


    // Verificar si el campo nombre está lleno
    if (valorNombre === "") {
        // Si no está lleno, mostrar un mensaje de error y evitar enviar el formulario
        alert("Por favor, completa el campo 'Nombre'.");
        return false;
    }


    // Si todos los campos están llenos, mostrar el mensaje de guardado exitoso
    guardadoExitoso();
    return true;
}


function guardadoExitoso() {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Informacion gurardada con exito",
        showConfirmButton: false,
        timer: 4500
    });
}

function mostrarAlerta() {
    Swal.fire({
        title: "Estas seguro?",
        text: "¡No podrás revertir esto!",
        icon: "advertencia",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, bórralo!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "¡Eliminado!",
                text: "Su archivo ha sido eliminado.",
                icon: "success"
            });
        }
    });
}

table.addEventListener("click", (event) => {
    if (event.target.classList.contains("opc_eyes")) {
        const rowIndex = event.target.closest("tr").rowIndex - 1 + (currentPage - 1) * itemsPerPage;

        if (rowIndex >= 0 && rowIndex < data.length) {
            const selectedItem = data[rowIndex];

            // Llenar campos del modal con los datos obtenidos
            document.getElementById("nombre").value = selectedItem.first_name + " " + selectedItem.last_name;
            document.getElementById("donacion").value = selectedItem.donation;
            document.getElementById("tipoDonacion").value = selectedItem.type;
            document.getElementById("cantidad").value = selectedItem.total;
            document.getElementById("fechaDonacion").value = selectedItem.fechaDonado;
            document.getElementById("fechaRegistro").value = selectedItem.fechaRegistroDonacion;

            // Muestra el modal
            const modal = document.getElementById("modal2");
            modal.showModal();
        }
    }
});

table.addEventListener("click", (event) => {
    if (event.target.classList.contains("opc_edit")) {
        const rowIndex = event.target.closest("tr").rowIndex - 1 + (currentPage - 1) * itemsPerPage;

        // Muestra el modal
        const modal = document.getElementById("modal1");
        modal.showModal();
    }
});

function search(event) {
    event.preventDefault(); // Evitar que el formulario se envíe y recargue la página

    // Obtener el valor de búsqueda desde el input
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();

    // Filtrar los resultados que coinciden con el término de búsqueda
    var results = data.filter(function (item) {
        return item.name.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm);
    });

    // Mostrar los resultados (puedes ajustar esto según tus necesidades)
    if (results.length > 0) {
        alert("Resultados encontrados:\n" + JSON.stringify(results, null, 2));
    } else {
        alert("No se encontraron resultados.");
    }
}