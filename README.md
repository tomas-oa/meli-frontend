# Test Práctico - Frontend

Bienvenido al test práctico para aspirantes al área de frontend de Mercado Libre.

A continuación presentamos el diseño y la descripción funcional de una pequeña aplicación que será la base del trabajo que deberás desarrollar.

La aplicación consta de tres componentes principales: la caja de búsqueda, la visualización de resultados, y la descripción del detalle del producto.

Tenés que usar el siguiente stack tecnológico para construir la aplicación:

- Cliente:
  - HTML
  - JS + CSS
- Servidor:
  - Node >= 6
  - Express

<u> Para resolverlo, te pedimos que tengas en cuenta: </u>

- Usabilidad
- SEO
- Performance
- Escalabilidad

<u> Primero, te presentamos las vistas de las pantallas que tenés que hacer: </u>

1. Caja de búsqueda

![](/public/search.png)

2. Resultado de la búsqueda y Detalle del producto

![](/public/results-details.png)

<u> Te pedimos: </u>

- En base a los diseños dados, construir las tres vistas:
  - Caja de búsqueda
  - Resultados de la búsqueda
  - Detalle del producto

- Las vistas son navegables de manera independiente y cuentan con su propia url:
  - Caja de búsqueda: ​"/​"
  - Resultados de la búsqueda: ​"/items?search=​"
  - Detalle del producto: ​"/items/​:id"

- Construir los siquientes endpoints para ser utilizados desde las vistas:
  - ​/api/items?q=​:query

    - Debe consultar el siguiente endpoint:

      https://api.mercadolibre.com/sites/MLA/search?q=​:query

      Y devolver los resultados en el formato indicado:

      ```json
      {
        "author": {
          "name": String,
          "lastname": String
        },
        "categories": [String, String, String, ...],
        "items": [
          {
            "id": String,
            "title": String,
            "price": {
              "currency": String,
              "amount": Number,
              "decimals": Number
            },
            "picture": String,
            "condition": String,
            "free_shipping": Boolean
          },
          {...},
          {...},
          {...}
        ]
      }
      ```

  - ​/api/items/​:id
  
      - Debe consultar los siguientes endpoints:
  
        https://api.mercadolibre.com/items/​:id
        https://api.mercadolibre.com/items/​:id​/description
  
        Y devolver los resultados en el formato indicado:
  
        ```json
        {
          "author": {
            "name": String,
            "lastname": String
          },
          "item": {
            "id": String,
            "title": String,
            "price": {
              "currency": String,
              "amount": Number,
              "decimals": Number
            },
            "picture": String,
            "condition": String,
            "free_shipping": Boolean,
            "sold_quantity": Number,
            "description": String
          }
        }
        ```

<u> Descripción funcional de la aplicación </u>

- En la vista de caja de búsqueda, debería poder ingresar el producto a buscar y al enviar el formulario navegar a la vista de resultados de búsqueda, visualizando solo 4 productos. Luego, al hacer click sobre uno de ellos, debería navegar a la vista de Detalle de Producto.

- Dado un id de producto, debería poder ingresar directamente a la vista de detalle de producto.

<u> Entregable </u>

- Código fuente en un repositorio público
- Enviar el link al repositorio por e-mail

<u> Notas </u>

- La firma del json en el campo author se refiere a tu nombre y apellido. Deberás agregar esta firma en el manejo de datos entre la API y el frontend.
- El repositorio puede ser público o privado, como prefieras.
- No es necesario implementar la paginación, ni el filtro por categorías.
- El breadcrumb que se muestra en el listado de búsqueda debe armarse basado en la categoría que más resultados obtuvo (dicha información está disponible en la API de Search). (Obviamente, el breadcrumb de la página de detalle del ítem debe armarse con la categoría propia del ítem).
- Podés usar el listado de search la imagen que devuelve la API (90x90) aunque esta se vea pixeleada al estirarla para ajustarse al diseño del test. (A fines del test, no hace falta que busques la imagen en el tamaño exacto).