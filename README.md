# Shopping Cart React

## Requerimientos mínimos

Node 14.15.0

## Instalar y Correr la aplicación

Instalar API (backend) y la aplicacion React (front):

1. En la carpeta `root` de la aplicacion correr:
   `npm install`
2. Navega al directorio `front` y vuelve a correr el comando:
   `npm install`
3. Regresa al directorio root `cd ..`.

La aplicación está compuesta de un servidor Express y una instalación básica de Create-React-App (CRA). Todo está configurado para correr con un solo comando

`npm run dev`

Esto correrá ambas aplicaciones (Express y CRA) al mismo tiempo.

- CRA se encuentra en:
  `http://localhost:3000/`
 y se ve de la siguiente forma:
 ![Running app](/img/home.png)


- El servidor se encuentra en:
  `http://localhost:5000/`

- La lista de productos se encuentra:
  `http://localhost:5000/api/products`

- Puedes encontrar cada producto por su ID:
  `http://localhost:5000/api/products/1`

- Las imágenes se encuentran en:|
  `http://localhost:5000/images/{{nombre-de-la-imagen}}`

## Descripción

Implementación de un carrito de compras simple que trae toda la info del API local, cuenta con las siguientes secciones.

- Una lista de ítems mostrando el catálogo de productos. (Product List Page)
- Página de producto mostrando detalle de producto. (Product Display Page)
- Un carrito de compras que tiene todos los ítems que serán comprados por el usuario. (Cart Page)
- Espacio donde se muestre la sincronización de los ítems añadidos al carrito. (Mini cart) ![mini cart example](/img/minicart-example.png)

## Uso

Una vez este corriendo todo lo requerido se encontrara con una pagina de bienvenida la cual tendra un boton para listar los productos y ya estando alli podras interactuar con la tienda,agregar al carro, ver detalles del producto individual, eliminar producto del carrito e ir al chechout para terminar la compra la cual te llevara a una ventana de exito y alli te podras redireccionar de nuevo  a lapantalla de bienvenida.

## Pagina de lista de productos PLP.

![PLP](/img/PLP.png)

## Pagina de producto PDP

![PDP](/img/PDP.png)

## Modal Carrito de Compras

![PLP](/img/cart.png)

## Carrito de Compras

![Cart Shopping](/img/Checkout.png)
