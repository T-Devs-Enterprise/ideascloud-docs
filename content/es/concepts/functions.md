---
title: Funciones
description: ""
position: 4
category: Conceptos
fetchContributors: true
---

Stored pipeline, se puede ejecutar desde cualquier tubería pipeline.

Estructura:

- `key` : Identificador de modelo (camelCase)
- `paramsSchema` :Esquema de los parámetros de la función, utiliza [JSON Schema engine](https://json-schema.org)
- `pipeline` : Lista de acciones a ejecutar.

```json
{
  "key": "myFunction",
  "paramsSchema": {
    "properties": {
      "details": { "type": "string" }
    },
    "required": ["details"]
  },
  "pipeline": [
    {
      "action": "registerElement",
      "params": {
        "modelKey": "log",
        "mappingSetup": {
          "|&|details": "&.functionParams.details"
        }
      }
    }
  ]
}
```

<molecules-github-user-list :items="$contributors"></molecules-github-user-list>
