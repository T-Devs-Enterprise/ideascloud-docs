---
title: Demonios
description: ""
fetchContributors: true
position: 8
category: Conceptos
---

<alert type="danger">

Procura aun no usar este módulo, todavia esta en fase de pruebas

</alert>

Pipeline programado para ejecutarse en intervalos específicos.

Estructura:

- `key` : Identificador del demonio (camelCase)
- `trigger` :Condición para activar el demonio
- `enableMultipliers` : Habilitado cuando se ejecutarán varios elementos.
- `executionPipeline` : Lista de acciones a ejecutar (por multiplicador si está habilitado).

```json
{
  "key": "myDaemon",
  "trigger": {
    "weekDays": "0123456",
    "at": 1050
  },
  "enableMultipliers": false,
  "executionPipeline": [
    {
      "action": "resolveActionParams",
      "params": {
        "|&|item": "&.multiplierItem"
      }
    }
  ]
}
```

<molecules-github-user-list :items="$contributors"></molecules-github-user-list>
