# Enunciado

1. Objetivo General
   Desarrollar una aplicación web completa y funcional que consuma e interactúe con una API RESTful, aplicando buenas prácticas de arquitectura frontend, gestión de dependencias y flujo de datos asíncrono.

2. Modalidades de Implementación (Elegir una)
   El estudiante deberá seleccionar una de las siguientes tres vías para el desarrollo del backend/consumo de datos. La calificación máxima alcanzable dependerá de la complejidad de la opción elegida:
   Opción A (Nivel Base): Consumo de API Pública
   Integrar una API pública externa de libre elección que soporte operaciones CRUD reales (no simuladas).
   Requisitos mínimos de consumo:
   Implementar al menos 10 peticiones sin cuerpo (body) utilizando métodos GET y DELETE.
   Implementar al menos 7 peticiones con cuerpo (body) utilizando métodos POST, PUT y PATCH.
   Opción B (Nivel Intermedio - Mayor Valoración): API del Proyecto de Gabriel
   Consumir e integrar la API desarrollada para el proyecto de Gabriel.
   Debe cumplir exactamente con los mismos requisitos de volumen de peticiones que la Opción A (10 sin body y 7 con body).
   Opción C (Nivel Avanzado - Máxima Valoración): API de Citas en Flask
   Desplegar, explorar e integrar en su totalidad todos los endpoints disponibles en el repositorio oficial: [https://github.com/andriufit/api-citas-flask](https://github.com/andriufit/api-citas-flask).
   Requisito adicional: Entregar documentación técnica detallando el proceso de instalación, puesta en marcha (levantamiento del servidor) y exploración de los endpoints del proyecto.
   Nota técnica sobre compatibilidad HTTP: En caso de utilizar lenguajes, frameworks o servidores que presenten restricciones con verbos HTTP modernos (PUT, PATCH, DELETE), se permitirá adaptar las peticiones con body a POST y las peticiones sin body a GET, siempre que la lógica de negocio quede debidamente justificada.

3. Requisitos Técnicos del FrontendTecnologías y Arquitectura
   Stack Base: Desarrollo mediante HTML5, CSS3 y JavaScript siguiendo la estructura y estándares vistos en clase.
   Buenas Prácticas (Valoración Positiva): Separación de responsabilidades (capa de servicios para las llamadas a la API, componentes/vistas, utilidades), nomenclatura estándar y limpia, y código modular.
   Empaquetador / Compilador (Valoración Positiva): Uso de Vite como entorno de desarrollo y empaquetado, especialmente recomendado si se integran preprocesadores CSS como Sass/SCSS.
   Frameworks (Opcional - Valoración Positiva): Se permite y valora el uso de React para la construcción de la interfaz.
   Gestión de Dependencias (Obligatorio)
   El proyecto debe inicializarse y gestionarse mediante NPM.
   Es obligatorio instalar y utilizar al menos 3 librerías externas vía NPM que aporten funcionalidad real al proyecto.
   Restricciones:
   axios no computa dentro de las 3 librerías obligatorias.
   react (en caso de usarse) tampoco computa dentro de las 3 librerías obligatorias.
   Bonus: Se valorará positivamente la investigación e integración de librerías que no hayan sido vistas previamente en clase.

4. Evaluación y Defensa en Vivo
   La entrega del código no garantiza el aprobado; el proyecto deberá ser defendido de forma presencial/en vivo ante el docente bajo los siguientes criterios:Resolución de Incidencias en Tiempo Real: El docente introducirá fallos o modificaciones intencionadas en el código durante la defensa. El alumno deberá diagnosticar y resolver el problema demostrando dominio sobre su propio desarrollo.Trazabilidad y Arquitectura: El alumno deberá argumentar y explicar paso a paso el flujo de ejecución, el orden de las llamadas a las funciones y la comunicación con los distintos endpoints de la API.Autoría y Uso de Inteligencia Artificial:
   Se permite el uso de herramientas de IA como apoyo durante el desarrollo.
   Queda estrictamente prohibida la entrega de proyectos generados al 100% por IA. El docente podrá emplear herramientas de detección de código generado por IA; si se demuestra falta de autoría o incapacidad para defender la lógica implementada, el proyecto será invalidado.

# Api

https://github.com/andriufit/api-citas-flask.git

git clone https://github.com/andriufit/api-citas-flask.git
cd api-citas-flask

## En local (Desarrollo)

pip install -r requirements.txt

- Crear un .env o exportar las variables
  export MONGODB_URI="mongodb://localhost:27017/"
  export MONGO_DB_NAME="Clinica"

python migrations/001_init_clinica.py

python application.py

### Autenticación y Swagger

La API utiliza JWT. Para probar los endpoints protegidos en Swagger:

Registra un usuario en POST /register.
Inicia sesión en POST /login para obtener el access_token.
Haz clic en el botón "Authorize" (arriba a la derecha).
Introduce: Bearer <tu_token> (incluyendo la palabra "Bearer").
¡Ya puedes probar todos los endpoints!
🏗️ Arquitectura del Proyecto
application.py: Punto de entrada de la aplicación Flask.
config.py: Gestión centralizada de configuración y secretos.
migrations/: Scripts de inicialización de base de datos e índices.
nginx.conf: Configuración del proxy inverso.
Dockerfile / docker-compose.yml: Infraestructura como código para despliegues.
📝 Características Principales
✅ Autenticación Robusta con JWT.
✅ Inicialización automática de Base de Datos.
✅ Documentación interactiva con Swagger UI v3.
✅ Proxy Inverso con Nginx para mejor rendimiento y seguridad.
✅ Configuración flexible mediante variables de entorno.
