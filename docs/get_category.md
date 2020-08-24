---
id: category
title: Obtener por nombre
---


## Endpoint

** https://nombredominio/wp-json/api/v3/categories **


## Ejemplo de respuesta


```json
{
    "data": [
        {
            "id": 1,
            "name": "Uncategorized",
            "key": "uncategorized",
            "image": "https:\/\/cineba.space\/wp-content\/plugins\/appapi\/public\/images\/default_image.png"
        },
        {
            "id": 3,
            "name": "Cl\u00e1sicos",
            "key": "clasicos",
            "image": "https:\/\/cineba.space\/wp-content\/plugins\/appapi\/public\/images\/default_image.png"
        },
        {
            "id": 2,
            "name": "cine",
            "key": "cine",
            "image": "https:\/\/cineba.space\/wp-content\/plugins\/appapi\/public\/images\/default_image.png"
        }
    ],
    "status": "success",
    "code": 200,
    "message": "OK"
}
```