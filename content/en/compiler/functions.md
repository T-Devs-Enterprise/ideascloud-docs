---
title: Funciones API
description: ""
position: 5
fetchContributors: true
category: Compilador
---

## generateRandomString

Disponible en: Generales.

Genera una cadena aleatoria solo con los caracteres indicados en `abc`.

| Nombre | Descripción                                      |
| ------ | ------------------------------------------------ |
| `abc`  | Nombre del modelo.                               |
| `size` | Atributos que se guardaran en el nuevo registro. |

```json[# Input]
{
  "fnKey": "generateRandomString",
  "params": {
    "abc": "abcdefghijklmnopqrstuvwxyz0123456789",
    "size": 6
  }
}
```

```[# Output]
"a59x0T"
```

## arrayMap#

Disponible en: Generales.
Función en el desarrollo experimental.
Resuelve una matriz con la estructura especificada que da como resultado una nueva matriz.

| Nombre    | Descripción                 |
| --------- | --------------------------- |
| `array`   | La lista a mapear.          |
| `mapping` | `key` : Tecla seleccionada. |

```json[# Input]
{
  "fnKey": "arrayMap#",
  "params": {
    "array": [
      {
        "x": 1
      },
      {
        "x": 2
      },
      {
        "x": 3
      }
    ],
    "mapping": [
      { "key": "x" }
    ]
  }
}
```

```[# Output]
[1,2,3]
```

## arrayRootMap

Disponible en: Generales.
Resuelve una matriz con la estructura especificada que da como resultado una nueva matriz.

| Nombre         | Descripción                                                  |
| -------------- | ------------------------------------------------------------ |
| `array`        | La lista a mapear.                                           |
| `mappingSetup` | `rootValue` : El valor elegido para cada objeto de la lista. |

```json[# Input]
{
  "fnKey": "arrayRootMap",
  "params": {
    "array": [
      {
        "x": 1
      },
      {
        "x": 2
      },
      {
        "x": 3
      }
    ],
    "mappingSetup": {
      "|&|rootValue": "&.item.x"
    }
  }
}
```

```[# Output]
[1,2,3]
```

## arrayMapToAttribute

Disponible en: Generales.
Función en el desarrollo experimental.
Resuelve una matriz con la estructura especificada que da como resultado una nueva matriz.

| Nombre          | Descripción                   |
| --------------- | ----------------------------- |
| `array`         | La lista a mapear.            |
| `attributePath` | Nombre del atributo a buscar. |

```json[# Input]
{
  "fnKey": "arrayMapToAttribute",
  "params": {
    "attributePath": "lastname"
    "array": [
      {
        "x": 1,
        "lastname": "García"
      },
      {
        "x": 2,
        "lastname": "Perez"
      },
      {
        "x": 3,
        "lastname": "Soto"
      }
    ],
  }
}
```

```[# Output]
["Garcia", "Perez", "Soto"]
```

## conditionalExecution

Disponible en: Generales.
Ejecuta la función especificada dependiendo de la condición (si se cumple o no).

| Nombre              | Descripción                                      |
| ------------------- | ------------------------------------------------ |
| `condition`         | Verdadero o falso.                               |
| `onConditionMet`    | Función a ejecutar si se cumple la condición.    |
| `onConditionNotMet` | Función a ejecutar si no se cumple la condición. |

```json[# Input]
{
  "fnKey": "conditionalExecution",
  "params": {
    "condition": true,
    "onConditionMet": {
      "fnKey": "consoleLog",
      "params": {
        "message": "Condition met"
      }
    },
    "onConditionNotMet": {
      "fnKey": "consoleLog",
      "params": {
        "message": "Condition not met"
      }
    }
  }
}
```

```json[# Output]
{
  "fnKey": "consoleLog",
  "params": {
    "message": "Condition met"
  }
},
```

## randomResolve

Disponible en: Generales.
Resuelve un elemento aleatorio de la matriz dada

| Nombre  | Descripción         |
| ------- | ------------------- |
| `items` | La lista a evaluar. |

```json[# Input]
{
  "fnKey": "randomResolve",
  "params": {
    "items": [
      {
        "value": 1
      },
      {
        "value": 2
      },
      {
        "value": 3
      }
    ]
  }
}
```

```json[# Output]
3
```

## resolveSwitchCase

Disponible en: Generales.
Resuelve el valor cuando se cumple la condición del caso

| Nombre         | Descripción                                 |
| -------------- | ------------------------------------------- |
| `defaultValue` | Responda si no se cumple ninguna condición. |
| `value`        | Valor a evaluar.                            |
| `cases`        | Una lista con las condiciones.              |

```json[# Input]
{
  "fnKey": "resolveSwitchCase",
  "params": {
    "defaultValue": "Invalid option",
    "value": 1,
    "cases": [
      {
        "condition": 1,
        "value": "Option 1"
      },
      {
        "condition": 2,
        "value": "Option 2"
      }
    ]
  }
}
```

```json[# Output]
"Option 1"
```

<molecules-github-user-list :items="$contributors"></molecules-github-user-list>
