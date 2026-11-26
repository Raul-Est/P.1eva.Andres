| Ruta                 | Para qué sirve                 |
| -------------------- | ------------------------------ |
| GET /profile         | Consultar el propio perfil     |
| GET /centers         | Listar centros                 |
| POST /centers        | Crear un centro                |
| POST /date/create    | Reservar una cita              |
| `POST`/date/getByDay | Consultar citas de un día      |
| GET /date/getByUser  | Consultar las citas propias    |
| POST /date/delete    | Cancelar una cita              |
| GET /dates           | Listar todas las citas activas |

## register

### Mínimo

{
"username": "raul",
"password": "1234"
}

### Completo

{
"username": "Posadilla",
"password": "1234",
"name": "Raúl",
"lastname": "Pruebas",
"email": "raul@yo.es",
"phone": "123456789",
"date": "16/09/1976"
}

### Respuesta

{
"msg": "Usuario creado correctamente"
}

## Login

{
"username": "raul",
"password": "1234"
}

### Respuesta Login

{
"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTc5NTcxNjI2OCwianRpIjoiYjU1ODU0NTctMGNjNi00YTczLTkxYWQtNzk3YWY0MzlmMTc2IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6InJhdWwiLCJuYmYiOjE3OTU3MTYyNjgsImNzcmYiOiJjMWU3YmQzNi1mYzI4LTQ5ZDUtOWEzOC02Y2U4NzFiYWZmNDciLCJleHAiOjE3OTU3MTcxNjh9.-GTw1g5wkBupoHFlFHVDImJB9XYRI_Tu0DW4skn9_CQ"
}

### ERROR

{
"msg": "Token has expired"
}

## profile

{
"date": "16/09/1976",
"email": "raul@yo.es",
"lastname": "Pruebas",
"name": "Raúl",
"phone": "123456789",
"username": "Posadilla"
}

## centers

[
{
"address": "Calle de la Salud, 123, Madrid",
"name": "Centro de Salud Madrid Norte"
},
{
"address": "Avenida de la Medicina, 456, Madrid",
"name": "Centro Médico Madrid Sur"
}
]

## POST centers

{
"address": "13, Rue del Percebe, Madrid",
"name": "Centro de Salud 13, Rue del Percebe"
}

### Respuesta

{
"msg": "Centro creado correctamente"
}

### Error se espera un json

<!doctypehtml><htmllang=en><title>500InternalServerError</title><h1>InternalServerError</h1><p>Theserverencounteredaninternalerrorandwasunabletocompleteyourrequest.Eithertheserverisoverloadedorthereisanerrorintheapplication.</p>

## Reservar una cita

{
"center": "Centro de Salud 13, Rue del Percebe",
"date": "27/11/2026 12:00:00"
}

### Response

{
"msg": "Cita creada correctamente"
}

## **Post** ByDay Consultar citas de un día

{
"day": "27/11/2026"
}

### Respuesta

[]

### ERROR

{
"error": "El parámetro day es requerido"
}

## GET date/getByUser Consultar las citas propias

### Response

[]

### ERROR 1

{
"msg": "Invalid payload padding"
}

### ERROR 2

<!doctypehtml><htmllang=en><title>405MethodNotAllowed</title><h1>MethodNotAllowed</h1><p>ThemethodisnotallowedfortherequestedURL.</p>

## Post Cancelar Cita http://localhost:5001/date/delete

{
"center": "Centro de Salud 13, Rue del Percebe",
"date": "27/11/2026 12:00:00"
}

### RESPUESTA 1

{
"error": "Cita no encontrada"
}

### RESPUESTA 2

{
"msg": "Cita cancelada correctamente"
}

### ERROR 1

{
"error": "JSON requerido"
}

### ERROR 2

{
"error": "center y date son requeridos"
}

### ERROR 3

{
"error": "Formato de fecha inválido. Usar DD/MM/YYYY HH:00:00"
}

## GET/dates Listar todas las citas activas

[
{
"cancel": 0,
"center": "Centro de Salud 13, Rue del Percebe",
"created_at": "26/11/2026 19:13:57",
"date": "27/11/2026 12:00:00",
"username": "Posadilla"
},
{
"cancel": 0,
"center": "Centro de Salud 13, Rue del Percebe",
"created_at": "26/11/2026 19:14:02",
"date": "28/11/2026 12:00:00",
"username": "Posadilla"
},
{
"cancel": 0,
"center": "Centro de Salud 13, Rue del Percebe",
"created_at": "26/11/2026 19:14:07",
"date": "29/11/2026 12:00:00",
"username": "Posadilla"
},
{
"cancel": 0,
"center": "Centro de Salud 13, Rue del Percebe",
"created_at": "26/11/2026 19:14:11",
"date": "30/11/2026 12:00:00",
"username": "Posadilla"
}
]
