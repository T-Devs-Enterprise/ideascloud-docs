---
title: Funcionamiento
description: ""
position: 3
fetchContributors: true
category: Compilador
---

El compilador inyecta información de contexto en una especificación `RAW JSON`.

Para usar una variable de contexto agregue `|&|` antes del nombre del atributo y el compilador reemplazará el valor del atributo con la variable de contexto especificada.

Para usar una función agregar `|$|` antes del nombre del atributo y el compilador reemplazará el valor del atributo con la salida de la función. En este caso se requieren dos atributos, el nombre de la función `(fnKey)` y los parámetros de la función `(params)` .

## Ejemplo

Esta entrada:

```json[# RAW JSON]
{
  "|&|email": "&.clientParams.email",
  "|$|fullname": {
    "fnKey": "concatText",
    "params": {
      "joinKey": ", ",
      "items": [
        {
          "|&|text": "&.clientParams.lastname"
        },
        {
          "|&|text": "&.clientParams.firstname"
        }
      ]
    }
  }
}
```

Será transformada en:

```json[# Compiled JSON]
{
  "email": "demo@email.com",
  "fullname": "Smith, John"
}
```

<alert>

`concatText` es una de las tantas funciones que puedes ver en la sección [funciones del compilador](/compiler/functions)

</alert>

<molecules-github-user-list :items="$contributors"></molecules-github-user-list>
