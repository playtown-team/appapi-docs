---
id: por-id
title: Filtro por id
---

## Endpoint

** https://nombredominio/wp-json/api/v3/articles/id/:id **


## Path y parámetros


| Nombre        |   Descripción |
| ------------- | -----: |
| `https://nombredominio`     |*Este es el dominio del sitio que se quiere generar una API para React Native* |
| `/wp-json/`     |*Este es el path por default de wordpress para todas las api* |
| `/api/`      |  *Esta es la ruta definida por el plugin* |
| `/v3/` |     *Esta es la versión de la api, actualmente está en la versión 3* |
| `/articles/` |     *Todo lo relacionado a artículos se obtiene apartir de este path en adelante* |
| `/id/` |     *Indica que el parámetro de búsqueda será id y devolverá un resultado único* |

## Ejemplo de respuesta


```json
{
    "data": {
        "id": "11",
        "date": "hace 2 days",
        "title": "10 mejores pel\u00edculas de netflix",
        "slug": "cacacac",
        "author": " ",
        "author_avatar": "http:\/\/0.gravatar.com\/avatar\/c2b06ae950033b392998ada50767b50e?s=96&d=mm&r=g",
        "thumbnail": "http:\/\/multisitedemo.local\/cineba\/wp-content\/uploads\/sites\/10\/2020\/08\/photo-1521967906867-14ec9d64bee8-1200x800.jpeg",
        "content": [
            {
                "type": "p",
                "content": "Llevamos la mitad de un 2020 que nadie en su sano juicio habr\u00eda vaticinado jam\u00e1s. Con las salas cerradas desde hace m\u00e1s de dos meses,\u00a0el streaming ha servido como v\u00e1lvula de escape\u00a0para espectadores sedientos de estrenos de estrenos. Vamos a repescar alguno de los m\u00e1s llamativos que Netflix ha sacado en lo que llevamos de a\u00f1o.",
                "children": [
                    {
                        "type": "strong",
                        "content": "el streaming ha servido como v\u00e1lvula de escape"
                    }
                ]
            }
        ],
        "categories": [
            "cine",
            "drama"
        ],
        "tags": [
            "80s",
            "clasicos"
        ],
        "previous": 7,
        "next": 18,
        "comments": [
            {
                "author": "rabana",
                "content": "paco",
                "date": "hace 12 mins"
            }
        ],
        "related": [
            {
                "id": 18,
                "title": "Cl\u00e1sicos que deber\u00edas ver",
                "featured_image": "http:\/\/multisitedemo.local\/cineba\/wp-content\/uploads\/sites\/10\/2020\/08\/photo-1521967906867-14ec9d64bee8-150x150.jpeg"
            }
        ]
    },
    "status": "success",
    "code": 200,
    "message": "OK"
}
```