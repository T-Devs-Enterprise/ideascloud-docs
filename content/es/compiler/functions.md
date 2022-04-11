---
title: Funciones API
description: ""
position: 5
fetchContributors: true
category: Compilador
---

## registerElement

Disponible en: Generales

Registra un elemento en la base de datos.

```json
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
```

<molecules-github-user-list :items="$contributors"></molecules-github-user-list>
