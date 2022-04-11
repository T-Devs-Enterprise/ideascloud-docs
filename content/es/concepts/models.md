---
title: Modelos
description: ""
position: 4
fetchContributors: true
category: Conceptos
---

Representación de un tipo específico de información en la base de datos.

Estructura:

- `key` : Identificador de modelo (camelCase)
- `name` : Nombre del modelo
- `schema` : Esquema del modelo, utiliza el motor [JSON Schema](https://json-schema.org)

```json[models/user.json]
{
  "key": "user",
  "name": "user",
  "schema": {
    "properties": {
      "name": { "type": "string" },
      "email": { "type": "string" },
      "phone": { "type": "string" }
    },
    "required": ["name", "email"]
  }
}
```

<molecules-github-user-list :items="$contributors"></molecules-github-user-list>
