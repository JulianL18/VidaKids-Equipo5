  const data =
            [
              { "id": "1", "nombre": "Conor McGregor", "direccion": "St One Avenew 234, Miami-Florida", "telefono": "+1 3476834543", "email": "conorsito@gmail.com", "tipo_Donante": "Persona Jurídica", "documento_Identidad": "NIT. 176.28317.40-3", "fecha_Registro": "12/06/2020", "entidad_Asociada": "ConorsitoKids" },
              { "id": "2", "nombre": "Alan Harper", "direccion": "Calle 23 #45 a 34 Medellín-Colombia", "telefono": "+57 3144355434", "email": "alanquiroprac@gmail.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "CC. 1036475687", "fecha_Registro": "1/11/2022", "entidad_Asociada": "" },
              { "id": "3", "nombre": "Luisa Pérez", "direccion": "Av. Principal 567, Lima-Perú", "telefono": "+51 1 2345678", "email": "luisaperez@gmail.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "CC. 87654321", "fecha_Registro": "08/18/2021", "entidad_Asociada": "" },
              { "id": "4", "nombre": "Emily Johnson", "direccion": "123 Birch St, Anyplace, USA", "telefono": "+1 5558901234", "email": "emily.johnson@gmail.com", "tipo_Donante": "Persona Jurídica", "documento_Identidad": "NIT. 543.21098.76-5", "fecha_Registro": "02/14/2022", "entidad_Asociada": "EmilyCorp" },
              { "id": "5", "nombre": "Carlos Martínez", "direccion": "Carrera 34 #56-78, Cali-Colombia", "telefono": "+57 3228765432", "email": "carlos.martinez@gmail.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "CC. 876543210", "fecha_Registro": "06/25/2023", "entidad_Asociada": "" },
              { "id": "6", "nombre": "Sophia Lee", "direccion": "678 Pine St, Another Village, USA", "telefono": "+1 5557890123", "email": "sophia.lee@gmail.com", "tipo_Donante": "Persona Jurídica", "documento_Identidad": "NIT. 876.54321.90-8", "fecha_Registro": "11/05/2020", "entidad_Asociada": "SophiaCorp" },
              { "id": "7", "nombre": "Rafaela Hernández", "direccion": "Calle 45 #67-89, Medellín-Colombia", "telefono": "+57 3007654321", "email": "rafaela.hernandez@gmail.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "CC. 654321098", "fecha_Registro": "03/12/2021", "entidad_Asociada": "" },
              { "id": "8", "nombre": "Diego Pérez", "direccion": "Rua das Flores 789, São Paulo-Brasil", "telefono": "+55 11 876543210", "email": "diego.perez@gmail.com", "tipo_Donante": "Persona Jurídica", "documento_Identidad": "CNPJ. 12.345.678/0001-90", "fecha_Registro": "09/29/2022", "entidad_Asociada": "DiegoCorp" },
              { "id": "9", "nombre": "Emma White", "direccion": "567 Cedar St, Another Town, USA", "telefono": "+1 5556789012", "email": "emma.white@gmail.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "SSN. 876-54-3210", "fecha_Registro": "05/07/2023", "entidad_Asociada": "" },
              { "id": "10", "nombre": "Martín Rodríguez", "direccion": "Av. Libertadores 123, Quito-Ecuador", "telefono": "+593 2 3456789", "email": "martin.rodriguez@gmail.com", "tipo_Donante": "Persona Jurídica", "documento_Identidad": "RUC. 987654321-1", "fecha_Registro": "01/14/2020", "entidad_Asociada": "MartínCorp" },
              { "id": "11", "nombre": "Grace Kim", "direccion": "234 Maple St, Another City, USA", "telefono": "+1 5553456789", "email": "grace.kim@gmail.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "SSN. 543-21-0987", "fecha_Registro": "08/02/2021", "entidad_Asociada": "" },
              { "id": "12", "nombre": "Rafael Pérez", "direccion": "Calle 56 #78-90, Barranquilla-Colombia", "telefono": "+57 3109876543", "email": "rafael.perez@gmail.com", "tipo_Donante": "Persona Jurídica", "documento_Identidad": "NIT. 765.43210.09-8", "fecha_Registro": "04/19/2022", "entidad_Asociada": "RafaelCorp" },
              { "id": "13", "nombre": "Laura Fernández", "direccion": "Rua das Oliveiras 567, Lisboa-Portugal", "telefono": "+351 21 9876543", "email": "laura.fernandez@gmail.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "BI. 12345678", "fecha_Registro": "12/08/2019", "entidad_Asociada": "" },
              { "id": "14", "nombre": "Benjamin Smith", "direccion": "789 Birch St, Another Place, USA", "telefono": "+1 5558765432", "email": "benjamin.smith@gmail.com", "tipo_Donante": "Persona Jurídica", "documento_Identidad": "NIT. 654.32109.87-6", "fecha_Registro": "03/25/2020", "entidad_Asociada": "BenjaminCorp" },
              { "id": "15", "nombre": "Isabella López", "direccion": "Carrera 56 #78-90, Bogotá-Colombia", "telefono": "+57 3187654321", "email": "isabella.lopez@gmail.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "CC. 876543210", "fecha_Registro": "07/15/2021", "entidad_Asociada": "" },
              { "id": "16", "nombre": "Sebastian Morales", "direccion": "Rua Principal 456, São Paulo-Brasil", "telefono": "+55 11 876543210", "email": "sebastian.morales@gmail.com", "tipo_Donante": "Persona Jurídica", "documento_Identidad": "CNPJ. 34.567.890/0001-23", "fecha_Registro": "07/18/2020", "entidad_Asociada": "SebastianCorp" },
              { "id": "17", "nombre": "Ava Davis", "direccion": "678 Oak St, Someplace, USA", "telefono": "+1 5557890123", "email": "ava.davis@gmail.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "SSN. 876-54-3210", "fecha_Registro": "04/05/2021", "entidad_Asociada": "" },
              { "id": "18", "nombre": "Carlos Sánchez", "direccion": "Av. Libertadores 789, Santiago-Chile", "telefono": "+56 2 3456789", "email": "carlos.sanchez@gmail.com", "tipo_Donante": "Persona Jurídica", "documento_Identidad": "RUT. 12.345.678-9", "fecha_Registro": "10/12/2022", "entidad_Asociada": "CarlosCorp" },
              { "id": "19", "nombre": "Oliver Johnson", "direccion": "123 Maple St, Another City, USA", "telefono": "+1 5552345678", "email": "oliver.johnson@gmail.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "SSN. 987-65-4321", "fecha_Registro": "05/27/2023", "entidad_Asociada": "" },
              { "id": "20", "nombre": "María García", "direccion": "Calle 34 #56-78, Medellín-Colombia", "telefono": "+57 3118765432", "email": "maria.garcia@gmail.com", "tipo_Donante": "Persona Jurídica", "documento_Identidad": "NIT. 765.43210.09-8", "fecha_Registro": "11/14/2021", "entidad_Asociada": "MaríaCorp" },
              { "id": "21", "nombre": "Liam Turner", "direccion": "Rua das Flores 567, Lisboa-Portugal", "telefono": "+351 21 8765432", "email": "liam.turner@gmail.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "BI. 87654321", "fecha_Registro": "08/20/2020", "entidad_Asociada": "" },
              { "id": "22", "nombre": "Mariana Fernández", "direccion": "789 Birch St, Another Place, USA", "telefono": "+1 5558765432", "email": "mariana.fernandez@gmail.com", "tipo_Donante": "Persona Jurídica", "documento_Identidad": "NIT. 654.32109.87-6", "fecha_Registro": "04/11/2021", "entidad_Asociada": "MarianaCorp" },
              { "id": "23", "nombre": "Diego Rodríguez", "direccion": "Carrera 56 #78-90, Bogotá-Colombia", "telefono": "+57 3154321098", "email": "diego.rodriguez@gmail.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "CC. 765432109", "fecha_Registro": "09/27/2022", "entidad_Asociada": "" },
              { "id": "24", "nombre": "Sophia Chen", "direccion": "456 Pine St, Another Village, USA", "telefono": "+1 5552345678", "email": "sophia.chen@gmail.com", "tipo_Donante": "Persona Jurídica", "documento_Identidad": "NIT. 890.12345.67-8", "fecha_Registro": "07/04/2023", "entidad_Asociada": "SophiaCorp" },
              { "id": "25", "nombre": "Lucas Ramírez", "direccion": "Av. Principal 123, Lima-Perú", "telefono": "+51 1 2345678", "email": "lucas.ramirez@gmail.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "DNI. 98765432", "fecha_Registro": "02/15/2019", "entidad_Asociada": "" },
              { "id": "26", "nombre": "Eva Morales", "direccion": "Rua Principal 456, São Paulo-Brasil", "telefono": "+55 11 876543210", "email": "eva.morales@gmail.com", "tipo_Donante": "Persona Jurídica", "documento_Identidad": "CNPJ. 45.678.901/0001-34", "fecha_Registro": "07/25/2020", "entidad_Asociada": "EvaCorp" },
              { "id": "27", "nombre": "Noah Davis", "direccion": "678 Oak St, Someplace, USA", "telefono": "+1 5557890123", "email": "noah.davis@gmail.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "SSN. 876-54-3210", "fecha_Registro": "04/18/2021", "entidad_Asociada": "" },
              { "id": "28", "nombre": "Valeria Sánchez", "direccion": "Av. Libertadores 789, Santiago-Chile", "telefono": "+56 2 3456789", "email": "valeria.sanchez@gmail.com", "tipo_Donante": "Persona Jurídica", "documento_Identidad": "RUT. 12.345.678-9", "fecha_Registro": "10/25/2022", "entidad_Asociada": "ValeriaCorp" },
              { "id": "29", "nombre": "Jack Johnson", "direccion": "123 Maple St, Another City, USA", "telefono": "+1 5552345678", "email": "jack.johnson@gmail.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "SSN. 987-65-4321", "fecha_Registro": "06/01/2023", "entidad_Asociada": "" },
              { "id": "30", "nombre": "Camila García", "direccion": "Calle 34 #56-78, Medellín-Colombia", "telefono": "+57 3118765432", "email": "camila.garcia@gmail.com", "tipo_Donante": "Persona Jurídica", "documento_Identidad": "NIT. 765.43210.09-8", "fecha_Registro": "11/18/2021", "entidad_Asociada": "CamilaCorp" },
              { "id": "31", "nombre": "Mia Turner", "direccion": "Rua das Flores 567, Lisboa-Portugal", "telefono": "+351 21 8765432", "email": "mia.turner@gmail.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "BI. 87654321", "fecha_Registro": "08/25/2020", "entidad_Asociada": "" },
              { "id": "32", "nombre": "Lucas Fernández", "direccion": "789 Birch St, Another Place, USA", "telefono": "+1 5558765432", "email": "lucas.fernandez@gmail.com", "tipo_Donante": "Persona Jurídica", "documento_Identidad": "NIT. 654.32109.87-6", "fecha_Registro": "04/24/2021", "entidad_Asociada": "LucasCorp" },
              { "id": "33", "nombre": "Gabriela Rodríguez", "direccion": "Carrera 56 #78-90, Bogotá-Colombia", "telefono": "+57 3145432109", "email": "gabriela.rodriguez@gmail.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "CC. 765432109", "fecha_Registro": "09/30/2022", "entidad_Asociada": "" },
              { "id": "34", "nombre": "Daniel Chen", "direccion": "456 Pine St, Another Village, USA", "telefono": "+1 5552345678", "email": "daniel.chen@gmail.com", "tipo_Donante": "Persona Jurídica", "documento_Identidad": "NIT. 890.12345.67-8", "fecha_Registro": "07/11/2023", "entidad_Asociada": "DanielCorp" },
              { "id": "35", "nombre": "Isabella Ramírez", "direccion": "Av. Principal 123, Lima-Perú", "telefono": "+51 1 2345678", "email": "isabella.ramirez@gmail.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "DNI. 98765432", "fecha_Registro": "02/20/2019", "entidad_Asociada": "" },
              { "id": "36", "nombre": "Henry Turner", "direccion": "Rua Principal 456, São Paulo-Brasil", "telefono": "+55 11 876543210", "email": "henry.turner@gmail.com", "tipo_Donante": "Persona Jurídica", "documento_Identidad": "CNPJ. 56.789.012/0001-45", "fecha_Registro": "08/01/2020", "entidad_Asociada": "HenryCorp" },
              { "id": "37", "nombre": "Sophie Davis", "direccion": "678 Oak St, Someplace, USA", "telefono": "+1 5557890123", "email": "sophie.davis@gmail.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "SSN. 876-54-3210", "fecha_Registro": "04/11/2021", "entidad_Asociada": "" },
              { "id": "38", "nombre": "Juan Sánchez", "direccion": "Av. Libertadores 789, Santiago-Chile", "telefono": "+56 2 3456789", "email": "juan.sanchez@gmail.com", "tipo_Donante": "Persona Jurídica", "documento_Identidad": "RUT. 12.345.678-9", "fecha_Registro": "10/15/2022", "entidad_Asociada": "JuanCorp" },
              { "id": "39", "nombre": "Emma Johnson", "direccion": "123 Maple St, Another City, USA", "telefono": "+1 5552345678", "email": "emma.johnson@gmail.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "SSN. 987-65-4321", "fecha_Registro": "06/07/2023", "entidad_Asociada": "" },
              { "id": "40", "nombre": "Mateo García", "direccion": "Calle 34 #56-78, Medellín-Colombia", "telefono": "+57 3118765432", "email": "mateo.garcia@gmail.com", "tipo_Donante": "Persona Jurídica", "documento_Identidad": "NIT. 765.43210.09-8", "fecha_Registro": "11/22/2021", "entidad_Asociada": "MateoCorp" },
              { "id": "41", "nombre": "Chloe Turner", "direccion": "Rua das Flores 567, Lisboa-Portugal", "telefono": "+351 21 8765432", "email": "chloe.turner@gmail.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "BI. 87654321", "fecha_Registro": "08/15/2020", "entidad_Asociada": "" },
              { "id": "42", "nombre": "Liam Fernández", "direccion": "789 Birch St, Another Place, USA", "telefono": "+1 5558765432", "email": "liam.fernandez@gmail.com", "tipo_Donante": "Persona Jurídica", "documento_Identidad": "NIT. 654.32109.87-6", "fecha_Registro": "04/14/2021", "entidad_Asociada": "LiamCorp" },
              { "id": "43", "nombre": "Valentina Rodríguez", "direccion": "Carrera 56 #78-90, Bogotá-Colombia", "telefono": "+57 3175432109", "email": "valentina.rodriguez@gmail.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "CC. 765432109", "fecha_Registro": "10/21/2022", "entidad_Asociada": "" },
              { "id": "44", "nombre": "David Chen", "direccion": "456 Pine St, Another Village, USA", "telefono": "+1 5552345678", "email": "david.chen@gmail.com", "tipo_Donante": "Persona Jurídica", "documento_Identidad": "NIT. 890.12345.67-8", "fecha_Registro": "07/06/2023", "entidad_Asociada": "DavidCorp" },
              { "id": "45", "nombre": "Aria Ramírez", "direccion": "Av. Principal 123, Lima-Perú", "telefono": "+51 1 2345678", "email": "aria.ramirez@gmail.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "DNI. 98765432", "fecha_Registro": "02/22/2019", "entidad_Asociada": "" },
              { "id": "46", "nombre": "Elena Rodriguez", "direccion": "Avenida Primavera 789, Barcelona-España", "telefono": "+34 678901234", "email": "elena.rodriguez@example.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "DNI. 12345678X", "fecha_Registro": "15/09/2021", "entidad_Asociada": "AyudaSolidaria" },
              { "id": "47", "nombre": "Samuel Thompson", "direccion": "123 Oak Street, New York, USA", "telefono": "+1 9876543210", "email": "samuel.thompson@example.com", "tipo_Donante": "Persona Jurídica", "documento_Identidad": "EIN. 987654321", "fecha_Registro": "02/04/2022", "entidad_Asociada": "CommunityBuilders" },
              { "id": "48", "nombre": "Marie Dupont", "direccion": "Rue de la Paix 456, Paris-France", "telefono": "+33 612345678", "email": "marie.dupont@example.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "IDF. 87654321A", "fecha_Registro": "19/11/2022", "entidad_Asociada": "AideHumanitaire" },
              { "id": "49", "nombre": "John Smith", "direccion": "10 Downing Street, London-UK", "telefono": "+44 7700123456", "email": "john.smith@example.com", "tipo_Donante": "Persona Jurídica", "documento_Identidad": "CRN. 543210987", "fecha_Registro": "05/08/2023", "entidad_Asociada": "GlobalAidFoundation" },
              { "id": "50", "nombre": "Ana Martinez", "direccion": "Calle Mayor 567, Madrid-España", "telefono": "+34 612345678", "email": "ana.martinez@example.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "NIF. 11223344B", "fecha_Registro": "14/02/2023", "entidad_Asociada": "AyudaHumanitariaESP" },
              { "id": "51", "nombre": "Emily Johnson", "direccion": "123 Maple Avenue, Toronto-Canada", "telefono": "+1 4167890123", "email": "emily.johnson@example.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "SIN. 987654321", "fecha_Registro": "07/06/2022", "entidad_Asociada": "CanadianAid" },
              { "id": "52", "nombre": "Carlos Fernandez", "direccion": "Carrera 45 #67-89, Bogotá-Colombia", "telefono": "+57 3109876543", "email": "carlos.fernandez@example.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "CC. 8765432109", "fecha_Registro": "23/01/2023", "entidad_Asociada": "AyudaColombia" },
              { "id": "53", "nombre": "Sophie Müller", "direccion": "Unter den Linden 123, Berlin-Germany", "telefono": "+49 1701234567", "email": "sophie.mueller@example.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "PAS. AB123456", "fecha_Registro": "11/12/2021", "entidad_Asociada": "DeutscheHilfe" },
              { "id": "54", "nombre": "Miguel González", "direccion": "Calle 8 #56-34, Medellín-Colombia", "telefono": "+57 3008765432", "email": "miguel.gonzalez@example.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "CC. 7654321098", "fecha_Registro": "30/04/2022", "entidad_Asociada": "" },
              { "id": "55", "nombre": "Lily Chen", "direccion": "123 Bamboo Lane, Beijing-China", "telefono": "+86 13800112233", "email": "lily.chen@example.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "ID. 987654321", "fecha_Registro": "18/08/2023", "entidad_Asociada": "ChinaAid" },
              { "id": "56", "nombre": "Alexandre Dubois", "direccion": "Rue de la Liberté 789, Paris-France", "telefono": "+33 612345678", "email": "alexandre.dubois@example.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "IDF. 11223344C", "fecha_Registro": "02/03/2023", "entidad_Asociada": "AideMondiale" },
              { "id": "57", "nombre": "Isabella Rossi", "direccion": "Via Roma 567, Rome-Italy", "telefono": "+39 3334445555", "email": "isabella.rossi@example.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "COD. AB123456", "fecha_Registro": "15/09/2022", "entidad_Asociada": "AiutoItalia" },
              { "id": "58", "nombre": "James Anderson", "direccion": "45 Maple Street, Sydney-Australia", "telefono": "+61 412345678", "email": "james.anderson@example.com", "tipo_Donante": "Persona Jurídica", "documento_Identidad": "ACN. 987654321", "fecha_Registro": "10/11/2021", "entidad_Asociada": "AussieAid" },
              { "id": "59", "nombre": "Camila Oliveira", "direccion": "Rua das Flores 123, Sao Paulo-Brazil", "telefono": "+55 11 987654321", "email": "camila.oliveira@example.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "CPF. 87654321098", "fecha_Registro": "27/05/2022", "entidad_Asociada": "" },
              { "id": "60", "nombre": "William Turner", "direccion": "10 Downing Street, London-UK", "telefono": "+44 7700123456", "email": "william.turner@example.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "CRN. 543210987", "fecha_Registro": "03/01/2023", "entidad_Asociada": "GlobalAidFoundation" },
              { "id": "61", "nombre": "Sofia Garcia", "direccion": "Carrera 10 #20-30, Bogotá-Colombia", "telefono": "+57 3101234567", "email": "sofia.garcia@example.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "CC. 7654321098", "fecha_Registro": "12/07/2022", "entidad_Asociada": "AyudaColombia" },
              { "id": "62", "nombre": "Nikolai Ivanov", "direccion": "Ulitsa Pushkina 123, Moscow-Russia", "telefono": "+7 9261234567", "email": "nikolai.ivanov@example.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "ID. 87654321", "fecha_Registro": "28/04/2023", "entidad_Asociada": "RussianAid" },
              { "id": "63", "nombre": "Emma Taylor", "direccion": "5th Avenue 456, New York, USA", "telefono": "+1 2123456789", "email": "emma.taylor@example.com", "tipo_Donante": "Persona Jurídica", "documento_Identidad": "EIN. 654321987", "fecha_Registro": "17/10/2021", "entidad_Asociada": "USRelief" },
              { "id": "64", "nombre": "Rafael dos Santos", "direccion": "Rua das Palmeiras 789, Rio de Janeiro-Brazil", "telefono": "+55 21 987654321", "email": "rafael.dos.santos@example.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "CPF. 12345678901", "fecha_Registro": "09/02/2022", "entidad_Asociada": "BrazilAid" },
              { "id": "65", "nombre": "Olivia White", "direccion": "10 Main Street, London-UK", "telefono": "+44 7700123456", "email": "olivia.white@example.com", "tipo_Donante": "Persona Natural", "documento_Identidad": "CRN. 543210987", "fecha_Registro": "06/06/2023", "entidad_Asociada": "GlobalAidFoundation" }
            ]

        const table = document.getElementById("tblData");
        const pagination = document.getElementById("pagination");
        const prevPageButton = document.getElementById("prevPage");
        const nextPageButton = document.getElementById("nextPage");
        const currentPageSpan = document.getElementById("currentPage");
        let currentPage = 1;
        const itemsPerPage = 10; // Cambia esto para ajustar la total de filas por página

        function showData(page) {
          const startIndex = (page - 1) * itemsPerPage;
          const endIndex = startIndex + itemsPerPage;
          const paginatedData = data.slice(startIndex, endIndex);
          table.tBodies[0].innerHTML = "";

          for (const item of paginatedData) {
            const row = table.tBodies[0].insertRow();
            row.insertCell(0).textContent = item.id;
            row.insertCell(1).textContent = item.nombre;
            row.insertCell(2).textContent = item.documento_Identidad;
            row.insertCell(3).textContent = item.telefono;
            row.insertCell(4).textContent = item.email;
            const optionsCell = row.insertCell(5);
            optionsCell.className = "Opciones";
            optionsCell.innerHTML = `
                <div><img src="../images/eye-svgrepo-com.svg" alt="icon" class="opc_eyes" id="btn-abrir-modal2"></div>
                <div><img src="../images/editar.png" alt="icon" class="opc_edit"></div>
                <div><img src="../images/borrar.png" alt="icon" class="opc_delete" onclick="mostrarAlerta()"></div>`;
          }

          currentPage = page;
          currentPageSpan.textContent = currentPage;
          prevPageButton.disabled = currentPage === 1;
          nextPageButton.disabled =
            currentPage === Math.ceil(data.length / itemsPerPage);
        }

        prevPageButton.addEventListener("click", () => {
          if (currentPage > 1) {
            showData(currentPage - 1);
          }
        });

        nextPageButton.addEventListener("click", () => {
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
        });

        document.addEventListener("DOMContentLoaded", function () {
          const btnAbrirModal2 = document.querySelector("#btn-abrir-modal2");
          const btnCerrarModal2 = document.querySelector("#btn-cerrar-modal2");
          const modal2 = document.querySelector("#modal2");

          btnAbrirModal2.addEventListener("click", () => {
            modal2.showModal();
          });

          btnCerrarModal2.addEventListener("click", () => {
            modal2.close();
          });
        });

        //------------------------ASIGNAR LOS CAMPOS DE DETALLE---------------------------------

        

        function exportTableToExcel(tableID, filename = "") {
          var downloadLink;
          var dataType = "application/vnd.ms-excel";
          var tableSelect = document.getElementById(tableID);

          // Obtén las filas de la tabla
          var rows = tableSelect.getElementsByTagName("tr");

          // Crear un objeto HTML para almacenar solo las columnas deseadas
          var filteredTable = document.createElement("table");

          // Agregar encabezados a la nueva tabla
          var headerRow = filteredTable.createTHead().insertRow(0);
          headerRow.innerHTML =
            "<th>id_Donante</th><th>nombre_Donante</th><th>documento_Identidad</th><th>telefono_Donante</th><th>email_Donante</th>";

          // Recorrer las filas de la tabla original y copiar solo las columnas deseadas a la nueva tabla
          for (var i = 0; i < rows.length; i++) {
            var cells = rows[i].getElementsByTagName("td");
            if (cells.length >= 5) {
              // Asegurarse de que haya al menos 5 celdas (las columnas deseadas)
              var newRow = filteredTable.insertRow(-1);
              for (var j = 0; j < 5; j++) {
                // Copiar solo las primeras 5 celdas (las columnas deseadas)
                var newCell = newRow.insertCell(j);
                newCell.innerHTML = cells[j].innerHTML;
              }
            }
          }

          // Convertir la nueva tabla a HTML
          var tableHTML = filteredTable.outerHTML.replace(/ /g, "%20");

          // Especificar el nombre de archivo
          filename = filename ? filename + ".xls" : "Listado_Donantes.xls";

          // Crear el elemento de enlace de descarga
          downloadLink = document.createElement("a");

          document.body.appendChild(downloadLink);

          if (navigator.msSaveOrOpenBlob) {
            var blob = new Blob(["ufeff", tableHTML], {
              type: dataType,
            });
            navigator.msSaveOrOpenBlob(blob, filename);
          } else {
            // Crear un enlace al archivo
            downloadLink.href = "data:" + dataType + ", " + tableHTML;

            // Establecer el nombre de archivo
            downloadLink.download = filename;

            // Activar la función
            downloadLink.click();
          }
        }

        //   <!-- __________________________SCRIPT VALIDACIONES__________________________ -->

        const formulario = document.getElementById("form");
        const nombre_Donante = document.getElementById("nombre_Donante");
        const email_Donante = document.getElementById("email_Donante");
        const contraseña_Donante =
          document.getElementById("contraseña_Donante");
        const contraseñaC_Donante = document.getElementById('confirContra');
        const direccion_Donante = document.getElementById("direccion_Donante");
        const telefono_Donante = document.getElementById("telefono_Donante");
        const tipo_Documento = document.getElementById("tipo_Documento");
        const documento_Identidad = document.getElementById(
          "documento_Identidad"
        );
        const fecha_Registro = document.getElementById("datetime");
        const entidad_Asociada = document.getElementById("entidad_Asociada");

        // TRAE LA FECHA Y HORA ACTUAL AL CAMPO DATE TIME
        const fechaHoraActual = new Date().toISOString().slice(0, 16);
        datetime.value = fechaHoraActual;

        formulario.addEventListener("submit", (e) => {
          e.preventDefault();
          validateInputs();
        });

        const setError = (element, message) => {
          const inputControl = element.parentElement;
          const errorDisplay = inputControl.querySelector(".error");

          errorDisplay.innerText = message;
          inputControl.classList.add("error");
          inputControl.classList.remove("success");
        };

        const setSuccess = (elemento) => {
          const inputControl = elemento.parentElement;
          const errorDisplay = inputControl.querySelector(".error");

          errorDisplay.innerText = "";
          inputControl.classList.add("success");
          inputControl.classList.remove("error");
        };

        // VALIDA QUE EL FORMATO DEL CORREO ESTE BIEN(TEXTO @ TEXTO . TEXTO)
        const validarCorreo = (email) => {
          const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(String(email).toLowerCase());
        };

        // VALIDA QUE TENGA ALMENOS 8 CARACTERES
        const validarContraseña = (pass) => {
          const re = /^.{8,}$/;
          return re.test(pass);
        };

        // VALIDA QUE SOLO SEAN LETRAS(SE PUEDEN ESPACIOS Y LETRAS CON ACENTOS)
        const validarTexto = (text) => {
          const re = /^[A-Za-zÁáÉéÍíÓóÚú Ññ\s]*$/;
          return re.test(String(text));
        };

        // VALIDA QUE SOLO SE INGRESEN LETRAS Y QUE LA PRIMERA SEA MAYUSCULA (LA PUEDEN USAR PARA CAMPOS COMO NOMBRES)
        const validarNombre = (nombre_Donante) => {
          const re =
            /^[A-Z\u00C0-\u00D6\u00D8-\u00DE][a-zA-Z\u00C0-\u00D6\u00D8-\u00DE ]*$/;

          // /^[A-Z\u00C0-\u00D6\u00D8-\u00DE][a-z\u00DF-\u00F6\u00F8-\u00FF ]*$/ (ESTA LINEA VALIDA QUE LA PRIMERA SEA MAYUSCULA PERO SI PONES TODAS MAYUSCULA TE MUESTRA ERROR DEPRONTO A ALGUIEN LE SIRVA POR ESO LA DEJO)
          return re.test(nombre_Donante);
        };

        // VALIDA QUE SOLO SE PUEDAN INGRESAR NUMEROS
        const validarNumero = (telefono_Donante) => {
          const re = /^\d+$/;
          return re.test(telefono_Donante);
        };

        const validateInputs = () => {
          const nombre_DonanteValue = nombre_Donante.value.trim();
          const email_DonanteValue = email_Donante.value.trim();
          const contraseña_DonanteValue = contraseña_Donante.value.trim();
          const contraseñaC_DonanteValue = contraseñaC_Donante.value.trim();
          const direccion_DonanteValue = direccion_Donante.value.trim();
          const telefono_DonanteValue = telefono_Donante.value.trim();
          const tipo_DocumentoValue = tipo_Documento.value.trim();
          const documento_IdentidadValue = documento_Identidad.value.trim();
          const fecha_RegistroValue = fecha_Registro.value.trim();

          if (nombre_DonanteValue === "") {
            setError(nombre_Donante, "No puedes dejar este campo vacio.");
          } else if (!validarNombre(nombre_DonanteValue)) {
            setError(
              nombre_Donante,
              "Inicie con mayúscula, no admite caracretes especiales"
            );
          } else {
            setSuccess(nombre_Donante);
          }

          if (email_DonanteValue === "") {
            setError(email_Donante, "No puedes dejar este campo vacio.");
          } else if (!validarCorreo(email_DonanteValue)) {
            setError(
              email_Donante,
              "Debes ingresar un correo electrónico válido"
            );
          } else {
            setSuccess(email_Donante);
          }

          if (contraseña_DonanteValue === "") {
            setError(contraseña_Donante, "No puedes dejar este campo vacio.");
          } else if (!validarContraseña(contraseña_DonanteValue)) {
            setError(
              contraseña_Donante,
              "La contraseña debe de tener al menos 8 caracteres."
            );
          } else {
            setSuccess(contraseña_Donante);
          }

          if (contraseñaC_DonanteValue === "") {
            setError(contraseñaC_Donante, "No puedes dejar este campo vacio.");
          } else if (contraseñaC_DonanteValue != contraseña_DonanteValue) {
            setError(
              contraseñaC_Donante,
              "Las contraseñas no coinciden"
            );
          } else {
            setSuccess(contraseñaC_Donante);
          }

          if (direccion_DonanteValue === "") {
            setError(direccion_Donante, "No puedes dejar este campo vacio");
          } else {
            setSuccess(direccion_Donante);
          }

          if (telefono_DonanteValue === "") {
            setError(
              telefono_Donante,
              "El campo teléfono debe de ser llenado."
            );
          } else if (!validarNumero(telefono_DonanteValue)) {
            setError(telefono_Donante, "Sólo debes ingresar números");
          } else {
            setSuccess(telefono_Donante);
          }

          if (tipo_DocumentoValue === "seleccionar") {
            setError(tipo_Documento, "Debes de seleccionar una opción valida");
          } else {
            setSuccess(tipo_Documento);
          }

          if (documento_IdentidadValue === "") {
            setError(
              documento_Identidad,
              "El campo de documento de identidad es obligatorio"
            );
          } else {
            setSuccess(documento_Identidad);
          }
        };