# BANCA 4.0 

Este proyecto fue realizado con la finalidad de darle solucion a una problematica en la enseñanza de los aprendices de banca, la cual era de forma mas dinamica mostrar y enseñar como se realizan los procesos bancarios, todo desde un simulador que sirva  de muestra para su proceso de aprendizaje y que puedan entrar preparados al mundo laboral.

## Instalación
##### Paso 1
###### 1 forma. 
Dar clic en Code y luego en Donwload Zip 

###### 2 forma. 
Crear una carpeta, ingresar cd desktop a git bash si es el caso que la carpeta quede en tu escritorio o escoger el directorio de tu preferencia  y ejecutar el codigo

git clone https://github.com/CristianPro2002/Presentacion.git 

##### Paso 2
Crear una base de datos con el nombre banca4.0 (o el nombre que deseen) en phpmyadmin por medio del localhost de xampp (si el puerto fue cambiado por favor cambiarlo es los archivos que sea necesaria la conexion con el mismo)  Luego restaurar la base de datos "bancaadsi.sql".

##### Paso 3
Configurar Host, Usuario, contraseña y nombre de la base de datos en el archivo BD.php de la carpeta bd_crud, tambien configurar de la misma manera los archivos bd.php de la carpeta bd_sesion y el archivo index.php de la carpeta documen.

Listo para ejecutar el proyecto correctamente.

## Presentacion previa del proyecto
#### Inicio de sesion
Aqui se realiza el inicio de sesion con el usuario que te asigno el administrador (si eres administrador tendrias que ingresar con el super usuario "ADMIN"  y contraseña "ADMIN")
![](https://i.postimg.cc/hv6qmDHG/login.png)

#### Apartado de seleccion de rol
Selecciona el rol al que fuiste asignado (si eres administrador tienes entrada a todos los roles)
![](https://i.postimg.cc/3NdTW4f6/roles.png)

#### Director Operativo
Este rol solo puede ser seleccionado por el administrador y es el rol encargado de administrar las solicitudes y el control de usuarios 
![](https://i.postimg.cc/6QfwPNGH/director.png)

#### Asesor
Este rol es el encargado de rellenar el formulario con la informacion otorgada por el cliente y tambien tiene la posibilidad de actualizarla y consultarla
![](https://i.postimg.cc/2jKYMGVf/asesor.png)

#### Cajero
Este rol es el encargado de realizar la transaccion de la actividad que se va a realizar ejemplo: "Apertura de cuenta de ahorro, Apertura de cuenta corriente"
![](https://i.postimg.cc/1tWS9cBw/cajero.png)

#### Cajero Principal
Este rol es el encargado de visualizar y administrar la informacion registrada por los cajeros, puede visualizar el valor total o individual de los cajeros asi como reiniciar estos valores cada dia
![](https://i.postimg.cc/DzTn5zmJ/cajero-P.png)

Este proyecto sigue en desarrollo por lo cual el rol gerente no se encuentra disponible y muchas funcionalidades estan en proceso de realizacion.

#### Este proyecto es realizado por:

###### Cristian Andres Castaño Salas
###### Juan Pablo Rojas Usuga
###### Kelly Yulieth Garcia Londoño
###### Andres Felipe Perez Urriago


