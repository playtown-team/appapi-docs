---
id: por-categorias
title: Filtro por categorías
---

## Endpoint

** https://nombredominio/wp-json/api/v3/articles/category/:category **


## Path y parámetros


| Nombre        |   Descripción |
| ------------- | -----: |
| `https://nombredominio`     |*Este es el dominio del sitio que se quiere generar una API para React Native* |
| `/wp-json/`     |*Este es el path por default de wordpress para todas las api* |
| `/api/`      |  *Esta es la ruta definida por el plugin* |
| `/v3/` |     *Esta es la versión de la api, actualmente está en la versión 3* |
| `/articles/` |     *Todo lo relacionado a artículos se obtiene apartir de este path en adelante* |
| `/category/` |     *Indica que el parámetro de búsqueda será un `string` y devolverá un array de artículos* |

## Ejemplo de respuesta


```json
{
    "data": [
        {
            "id": 18,
            "type": "article",
            "template": null,
            "date": "hace 24 mins",
            "title": "Cl\u00e1sicos que deber\u00edas ver",
            "slug": "clasicos-que-deberias-ver",
            "short_description": "Cl\u00e1sicos que deber\u00edas ver",
            "author": null,
            "author_avatar": "http:\/\/0.gravatar.com\/avatar\/c2b06ae950033b392998ada50767b50e?s=96&d=mm&r=g",
            "thumbnail": "http:\/\/multisitedemo.local\/cineba\/wp-content\/uploads\/sites\/10\/2020\/08\/photo-1521967906867-14ec9d64bee8-1200x800.jpeg"
        },
        {
            "id": 11,
            "type": "article",
            "template": null,
            "date": "hace 2 days",
            "title": "10 mejores pel\u00edculas de netflix",
            "slug": "cacacac",
            "short_description": "Llevamos la mitad de un 2020 que nadie en su sano juicio habr\u00eda vaticinado jam\u00e1s. Con las salas cerradas desde hace m\u00e1s de dos meses, el streaming ha servido como v\u00e1lvula de escape para espectadores sedientos de estrenos de estrenos. Vamos a repescar alguno de los m\u00e1s llamativos que Netflix ha sacado en lo que llevamos de ",
            "author": null,
            "author_avatar": "http:\/\/0.gravatar.com\/avatar\/c2b06ae950033b392998ada50767b50e?s=96&d=mm&r=g",
            "thumbnail": "http:\/\/multisitedemo.local\/cineba\/wp-content\/uploads\/sites\/10\/2020\/08\/photo-1521967906867-14ec9d64bee8-1200x800.jpeg"
        },
        {
            "id": "ad-7",
            "type": "normal-ad"
        },
        {
            "id": 7,
            "type": "article",
            "template": null,
            "date": "hace 2 days",
            "title": "Las 10 comedias de culto que todo el mundo deber\u00eda ver",
            "slug": "test",
            "short_description": "En esta nota, una selecci\u00f3n de pel\u00edculas que se encuentran en las diferentes plataformas de streaming y que incluye desde los Monty Python y los hermanos Coen a Tim Burton o los Muppets. Una gu\u00eda ideal para ir tras el efecto sanador de la risa en estos tiempos inciertos",
            "author": null,
            "author_avatar": "http:\/\/0.gravatar.com\/avatar\/c2b06ae950033b392998ada50767b50e?s=96&d=mm&r=g",
            "thumbnail": "http:\/\/multisitedemo.local\/cineba\/wp-content\/uploads\/sites\/10\/2020\/08\/photo-1568876694728-451bbf694b83-1200x675.jpeg"
        }
    ],
    "limit": 10,
    "category": "cine",
    "previous": "http:\/\/multisitedemo.local\/cineba\/wp-json\/content\/v3\/articles\/category\/cine&limit=10&page=0",
    "next": "http:\/\/multisitedemo.local\/cineba\/wp-json\/content\/v3\/articles\/category\/cine&limit=10&page=1",
    "status": "success",
    "code": 200,
    "message": "OK"
}
```