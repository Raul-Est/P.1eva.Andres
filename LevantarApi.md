## Descargar REPO

git clone https://github.com/andriufit/api-citas-flask.git
cd api-citas-flask
code .

## Montar docker

docker compose config
docker compose up --build -d
docker compose ps
docker compose logs -f

## Caracteristicas Api

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

**la documentación indica 400 para una cita inexistente, mientras que el código devuelve 404.**

- Registro e inicio de sesión:
  POST /register crea un usuario y POST /login devuelve un token JWT.

Autenticación: salvo el registro y el inicio de sesión, requieren cabecera Authorization: Bearer <token>.

Operaciones: el usuario puede consultar su perfil y citas, y la API ofrece operaciones para gestionar centros y reservar, consultar o cancelar citas.

Persistencia: MongoDB almacena usuarios, centros y citas. Docker añade Nginx y Gunicorn delante de la aplicación Flask.

Las fechas se envían como texto: DD/MM/YYYY o DD/MM/YYYY HH:00:00. Cancelación de citas lógica y un índice único impide que haya dos citas activas para el mismo día, hora y centro.
