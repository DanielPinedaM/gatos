# **Solución Prueba Tecnica Holafly**

---

## [1. Explicación Prueba Tecnica](https://github.com/holafly/interview-code-challenges/tree/main/react)

¡Hola!

¿Estás listo para crear una aplicación súper tierna con gatitos adorables?, Esto es lo que tendrás que hacer:

Use un lenguaje con el que se sienta cómodo (como NodeJS, Rails o Java) para crear una API REST simple con un único punto de conexión llamado /kittens. Este punto final debería devolver los datos "kittens.json" (o una versión similar). No tienes que preocuparte por almacenar los datos, solo haz una simulación por ahora.

Luego, use React para crear una aplicación que muestre los gatitos de la API. Puede usar una biblioteca como Axios para obtener los datos de la API. Su aplicación debe mostrar una lista de todos los gatitos al principio y luego permitir que el usuario seleccione un gatito específico para ver más detalles al respecto. Mientras la aplicación espera que finalice la solicitud de la API, muestre un componente giratorio o de marcador de posición. Asegúrese de que su aplicación sea Responsive, para que no se vea mal en los teléfonos móviles.

Finalmente, coloque su código en un repositorio público de Github con un archivo README.md que explica cómo ejecutar la API y la aplicación de interfaz.

### BONUS
Si te sientes más ambicioso:
- Dockerizar la aplicación
- Escriba pruebas unitarias/de extremo a extremo realistas para asegurarse de que todo funcione correctamente.

---

## 2. Tecnologías
* [TypeScript](https://www.typescriptlang.org/)
* [NodeJS](https://nodejs.org/)
* [ExpressJS](https://expressjs.com/)
* [ReactJS](https://es.reactjs.org/)
* [ViteJS](https://vitejs.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
****

## 3. Video tutorial
[https://youtu.be/HEgs3uVw-f0](https://youtu.be/HEgs3uVw-f0)

## 4. ¿Como ejecutar la aplicación?
Instalar [NodeJS](https://nodejs.org/)

Instalar [VS Code](https://code.visualstudio.com/)

Abrir VS Code e instalar la extension [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)

![install_thunder_client.png](/readme_img/install_thunder_client.png)

### 4.1 backend
Descargue la carpeta de este repositorio en su computadora local

Guarde (descomprima) la carpeta en la raiz del disco ``C:\gatos``

Situar la terminal en la ruta donde esta la carpeta **backend**

    cd C:\gatos\backend

![cd_backend.png](/readme_img/cd_backend.png)

Ejecuta los siguientes comandos:

Instalar TypeScript

    npm install -g typescript@4.9.4 @types/node@18.11.18

    npm install typescript@4.9.4 @types/node@18.11.18 -D

Instalar ts-node-dev

    npm install -g ts-node-dev@2.0.0

    npm install ts-node-dev@2.0.0 -D

Instalar ts-node

    npm install -g ts-node@10.9.1

    npm install ts-node@10.9.1 -D

Instalar ExpressJS

    npm install -g express@4.18.2 @types/express@4.17.16

    npm install express@4.18.2 @types/express@4.17.16 -D

Instalar linter de TypeScript

    npm install -g ts-standard@12.0.2

    npm install ts-standard@12.0.2 -D

Verificar que se hayan instalado todos los paquetes anteriores, en las versiones que aparecen en la siguiente imagen:

    npm list -D
![npm_list_backend.png](/readme_img/npm_list_backend.png)

Inicializar puerto 3000, muestra un mensaje que dice "servidor en el puerto 3000" con la fecha en que se ejecuto el comando

    npm run dev
![npm_run_dev.png](/readme_img/npm_run_dev.png)

Abrir un navegador, de preferencia que sea Google Chrome y en la barra del buscador escribir:
http://localhost:3000/kittens

En Chrome se muestra mensaje ``pong``, lo que significa que el servidor se esta ejecutando:

![kittens.png](/readme_img/kittens.png)

Tambien se muestra en la terminal el mensaje ``ping``

![ping.png](/readme_img/ping.png)

El archivo JSON llamado ``kittens.json`` esta en esta ruta:

    C:\gatos\backend\src\services\kittens.json

![kittens_json.png](/readme_img/kittens_json.png)

Para acceder a todos los gatos de ``kittens.json`` desde el servidor, abrir en Chrome:

http://localhost:3000/api/gatos
![api_gatos.png](/readme_img/api_gatos.png)

Para acceder a un gato en especifico por su ``id``, abrir en Chrome alguno de los siguientes links. Los ``id`` de los gatos van desde el 0 hasta el 6

http://localhost:3000/api/gatos/0
http://localhost:3000/api/gatos/1
http://localhost:3000/api/gatos/2
http://localhost:3000/api/gatos/3
http://localhost:3000/api/gatos/4
http://localhost:3000/api/gatos/5
http://localhost:3000/api/gatos/6

Esta imagen muestra http://localhost:3000/api/gatos/0 que es el gato id ``"id": 0,`` 

![api_gatos_0.png](/readme_img/api_gatos_0.png)

Las imagenes de los gatos estan en la carpeta:

    C:\gatos\backend\img

Aqui puedes ver los nombres de los gatos:
![ruta_img.png](/readme_img/ruta_img.png)

Para acceder a las imagenes de los gatos desde el servidor, abrir en Chrome alguno de los siguientes links, cada ruta contiene el nombre del gato:

http://localhost:3000/img/leo.jpeg
http://localhost:3000/img/jasmine.jpeg
http://localhost:3000/img/martha.jpeg
http://localhost:3000/img/toby.jpeg
http://localhost:3000/img/vienna.jpeg
http://localhost:3000/img/joey.jpeg
http://localhost:3000/img/mary.jpeg

Esta imagen muestra http://localhost:3000/img/leo.jpeg que es el gato llamado Leo

![img_leo.png](/readme_img/img_leo.png)

### 4.1.1 Testear backend
Abrir en VS Code la extension Thunder Client

Enviar peticion GET a http://localhost:3000/kittens para ver que el servidor se esta ejecutando
![get_kittens.png](/readme_img/get_kittens.png)

Enviar peticion GET a http://localhost:3000/api/gatos para ver el JSON de todos los gatos
![get_api_gatos.png](/readme_img/get_api_gatos.png)

Enviar peticion GET a http://localhost:3000/api/gatos/0 para ver gato con ``"id": 0,`` 
![get_api_gatos_0.png](/readme_img/get_api_gatos_0.png)

Enviar peticion GET a http://localhost:3000/img/leo.jpeg para ver la imagen del gato llamado Leo
![get_img_leo.png](/readme_img/get_img_leo.png)

Ahora vamos a guardar un nuevo gato, para ello copia el siguiente objeto:
```
{
    "name": "Leo",
    "gender": "male",
    "ImageFileName": "leojpeg",
    "description": "Lorem ipsum",
    "age": 99
}
```

Envia una peticion POST a http://localhost:3000/api/gatos con el tipo JSON 
![post_api_gatos.png](/readme_img/post_api_gatos.png)

##### **Validaciones:**
- El `id` es auto-incrementable, en el JSON los `id` estan desde 0 hasta 6, pero cuando agrego un nuevo gato se crea el `id` 7 y asi sucesivamente si continuo agregando nuevos gatos (7, 8, 9...)

- El punto anterior significa que en el POST no se puede enviar un `id`

- El nombre `name:` del gato tiene que ser Leo, Jasmine, Martha, Toby, Vienna, Joey o Mary, de lo contrario la peticion POST da error

- El genero `gender:` tiene que ser `"gender": "male"` o `"gender": "female"`, de lo contrario la peticion POST da error

- El nombre de la imagen `ImageFileName` tiene que ser `"ImageFileName": "leojpeg"`, `"ImageFileName": "jasminejpeg"`, `"ImageFileName": "marthajpeg"`, `"ImageFileName": "tobyjpeg"`, `"ImageFileName": "viennajpeg"`, `"joeyjpeg"` o `"ImageFileName": "maryjpeg"`, de lo contrario la peticion POST da error

- La descripcion `description` tiene que ser de tipo **string**, de lo contrario la peticion POST da error

- La edad `age` tiene que ser de tipo **number**, de lo contrario la peticion POST da error

Si envio una peticion POST a http://localhost:3000/api/gatos puedo ver el nuevo gato con ``"id": 7,`` 
![get_api_gatos_7.png](/readme_img/get_api_gatos_7.png)

### 4.2 frontend
Situar la terminal en la ruta donde esta la carpeta **frontend**

    cd C:\gatos\frontend
![cd_frontend.png](/readme_img/cd_frontend.png)

Instalar React

    npm install -g react@18.2.0 @types/react@18.0.27 react-dom@18.2.0 @types/react-dom@18.0.10
    npm install react@18.2.0 @types/react@18.0.27 react-dom@18.2.0 @types/react-dom@18.0.10 -D

Instalar ViteJS

    npm install -g create-vite@4.0.0 @vitejs/plugin-react-swc@3.0.1
    npm install create-vite@4.0.0 @vitejs/plugin-react-swc@3.0.1 -D
    npm i

Instalar Axios

    npm install -g axios@1.2.6
    npm install axios@1.2.6 -D

Instalar Tailwind CSS

    npm install -g tailwindcss@3.2.4 autoprefixer@10.4.13
    npm install tailwindcss@3.2.4 autoprefixer@10.4.13 -D

Esto va solucionar el error de CORS, hacer este tutorial https://youtu.be/KruSUqLdxQA para instalar la extension de Google Chrome llamada Allow CORS: Access-Control-Allow-Origin
https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf/related

Instalar TypeScript en carpeta frontend

    npm install typescript@4.9.4 @types/node@18.11.18 -D

Habilitar la extension:
![cors.png](/readme_img/cors.png)

Ejecutar frontend

    npm run dev

Despues de ejecutar el comando se muestra el puerto donde se inicializo el frontend, en este caso es http://localhost:5173/
![npm_run_dev_front.png](/readme_img/npm_run_dev_front.png)

Abrir http://localhost:5173/ en una nueva pestaña de Chrome 
![front.png](/readme_img/front.png)

Al inspeccionar elemento y hacer el viewport (pantalla) mas pequeño te puedes dar cuenta que la pagina web es Responsive:

1 columna:
![1_col.png](/readme_img/1_col.png)

2 columnas:
![2_col.png](/readme_img/2_col.png)

Al dar click en cualquier boton 'Ver mas' puedes ver toda la información del JSON (gato) en una ventana modal:

Click en ver mas
![ver_mas.png](/readme_img/ver_mas.png)

Si doy click en la **X**
![datos_completos.png](/readme_img/datos_completos.png)

Vuelvo a la pagina principal:
![front.png](/readme_img/front.png)
