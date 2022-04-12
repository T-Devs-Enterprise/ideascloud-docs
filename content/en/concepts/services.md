---
title: Servicios
description: ""
position: 4
category: Conceptos
fetchContributors: true
---

Endpoint para acceder a su proyecto usando HTTP o Graphql

Estructura:

- `key` : Identificador de servicio (camelCase)
- `schema` : Esquema de los parámetros del servicio, utiliza [JSON Schema engine](https://json-schema.org)
- `pipeline` : Lista de acciones a ejecutar.

```json
{
  "key": "user",
  "schema": {
    "properties": {
      "name": { "type": "string" },
      "email": { "type": "string" },
      "phone": { "type": "string" }
    },
    "required": ["name", "email"]
  },
  "pipeline": [
    {
      "action": "registerElement",
      "params": {
        "modelKey": "user",
        "mappingSetup": {
          "|&|name": "&.clientParams.name",
          "|&|email": "&.clientParams.email",
          "|&|phone": "&.clientParams.phone"
        }
      }
    }
  ]
}
```

<molecules-github-user-list :items="$contributors"></molecules-github-user-list>
