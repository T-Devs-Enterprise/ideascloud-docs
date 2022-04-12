---
title: Atributos de contexto
description: ""
position: 6
fetchContributors: true
category: Compilador
---

Los atributos de contexto estan disponibles
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
