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

```json[# Output]
"a59x0T"
```

## arrayMap#

Disponible en: Generales.

Función en el desarrollo experimental.

Resuelve una matriz con la estructura especificada que da como resultado una nueva matriz.

| Nombre        | Descripción         |
| ------------- | ------------------- |
| `array`       | La lista a mapear.  |
| `mapping.key` | Tecla seleccionada. |

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

```json[# Output]
[1,2,3]
```

## arrayRootMap

Disponible en: Generales.

Resuelve una matriz con la estructura especificada que da como resultado una nueva matriz.

| Nombre                   | Descripción                                    |
| ------------------------ | ---------------------------------------------- |
| `array`                  | La lista a mapear.                             |
| `mappingSetup.rootValue` | El valor elegido para cada objeto de la lista. |

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

```json[# Output]
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

```json[# Output]
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

| Nombre            | Descripción                                 |
| ----------------- | ------------------------------------------- |
| `defaultValue`    | Responda si no se cumple ninguna condición. |
| `value`           | Valor a evaluar.                            |
| `cases`           | Una lista con las condiciones.              |
| `cases.condition` | Valor a comparar.                           |
| `cases.value`     | Respuesta.                                  |

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

## generateObjectFromArrayWithConditional

Disponible en: Generales.
Resuelve un objeto con las claves que cumple la condición (si existe la condición)

| Nombre            | Descripción                                                            |
| ----------------- | ---------------------------------------------------------------------- |
| `array`           | Si es verdadero se devolverá el objeto relacionado con esta condición. |
| `array.condition` | El valor que se devolverá.                                             |
| `array.value`     | Una lista con las condiciones.                                         |
| `array.key`       | La clave de objeto con la que se devolverá el objeto.                  |

```json[# Input]
{
  "fnKey": "generateObjectFromArrayWithConditionalAttributes",
  "params": {
    "array": [
      {
        "condition": true,
        "value": "Tim",
        "key": "name"
      },
      {
        "condition": false,
        "value": "Roberto",
        "key": "name"
      }
    ]
  }
}
```

```json[# Output]
{
  "name": "Tim"
}
```

## generateRandomColor

Disponible en: Generales.

Genera un color aleatorio.

| Nombre                      | Descripción                    |
| --------------------------- | ------------------------------ |
| `representation (Opcional)` | `rgb` (Predeterminado) o `hsl` |

```json[# Input]
{
  "fnKey": "generateRandomColor",
  "params": {
    "representation": "rgb"
  }
}
```

```json[# Output]
"rgb( 59, 93, 13 )"
```

## generateRandomColorsArray

Disponible en: Generales.

Genera un array con colores aleatorios.

| Nombre                      | Descripción                    |
| --------------------------- | ------------------------------ |
| `itemsNumber`               | Número de items a generar      |
| `representation (Opcional)` | `rgb` (Predeterminado) o `hsl` |

```json[# Input]
{
  "fnKey": "generateRandomColorsArray",
  "params": {
    "itemsNumber": 3,
    "representation": "rgb"
  }
}
```

```json[# Output]
[
  "rgb( 59, 93, 13 )",
  "rgb( 23, 43, 14 )",
  "rgb( 24, 12, 67 )"
]
```

## conditionalResolve

Disponible en: Generales.

Resuelve el valor en función del estado de la condición (si se cumple o no)

| Nombre                   | Descripción                                   |
| ------------------------ | --------------------------------------------- |
| `condition`              | Número de items a generar.                    |
| `valueOnConditionMet`    | Si la respuesta es si condition es verdadero. |
| `valueOnConditionNotMet` | Si la respuesta es no condition es falso.     |

```json[# Input]
{
  "fnKey": "conditionalResolve",
  "params": {
    "condition": true,
    "valueOnConditionMet": "Condition met",
    "valueOnConditionNotMet": "Condition not met"
  }
}
```

```json[# Output]
"Condition met"
```

## consoleLog

Disponible en: Front-End

Parámetros de registros (analizados y sin procesar) (Solo Web)

| Nombre | Descripción      |
| ------ | ---------------- |
| `asd`  | Valor a mostrar. |

```json
{
  "fnKey": "consoleLog",
  "params": {
    "asd": 123
  }
}
```

## httpStatusCodeIsError

Disponible en: Back-End

Resuelve verdadero cuando el valor de estado pasado es un error

| Nombre       | Descripción                                              |
| ------------ | -------------------------------------------------------- |
| `statusCode` | Un número que representa el código de la respuesta http. |

```json[# Input]
{
  "fnKey": "httpStatusCodeIsError",
  "params": {
    "statusCode": 201
  }
}
```

```json[# Output]
false
```

## default

Disponible en: Generales.

Resuelve el valor pasado, si el valor no está disponible, resuelve el valor predeterminado.

| Nombre         | Descripción                                                                    |
| -------------- | ------------------------------------------------------------------------------ |
| `value`        | Se mostrará el valor a mostrar, si es nulo, falso o indefinido `defaultValue`. |
| `defaultValue` | Valor mostrado por defecto.                                                    |

```json[# Input]
{
  "fnKey": "default",
  "params": {
    "value": "testing"
    "defaultValue": "mydefault"
  }
}
```

```json[# Output]
"testing"
```

## mathFloor

Disponible en: Generales.

Aplica la operación `floor` matemático al valor dado

| Nombre  | Descripción         |
| ------- | ------------------- |
| `value` | El valor a evaluar. |

```json[# Input]
{
  "fnKey": "mathFloor",
  "params": {
    "value": 12.99
  }
}
```

```json[# Output]
12
```

## mathCeil

Disponible en: Generales.

Aplica la operación `ceil ` matemático al valor dado.

| Nombre  | Descripción         |
| ------- | ------------------- |
| `value` | El valor a evaluar. |

```json[# Input]
{
  "fnKey": "mathCeil",
  "params": {
    "value": 12.1
  }
}
```

```json[# Output]
13
```

## mathRound

Disponible en: Generales.

Aplica la operación `ceil ` matemático al valor dado

| Nombre  | Descripción         |
| ------- | ------------------- |
| `value` | El valor a evaluar. |

```json[# Input]
{
  "fnKey": "mathRound",
  "params": {
    "value": 12.1
  }
}
```

```json[# Output]
12
```

## mathOperation

Disponible en: Generales.

Resuelve la operación matemática con los valores dados

| Nombre      | Descripción                                  |
| ----------- | -------------------------------------------- |
| `operation` | La operación puede ser `*`, `+`, `/` o `pow` |
| `items`     | Lista de valores a evaluar.                  |

```json[# Input]
{
  "fnKey": "mathOperation",
  "params": {
    "operation": "*",
    "items": [
      { "value": 5 },
      { "value": 3 },
      { "value": 2 }
    ]
  }
}
```

```json[# Output]
30
```

## resolveItem#

Disponible en: General.

Función en el desarrollo experimental.

```json[# Input]
{
  "fnKey": "resolveItem#",
  "params": {
    "context": "Context",
  }
}
```

```json[# Output]

```

## changeCase

Disponible en: Generales.

Cambia el caso del texto.

| Nombre | Descripción               |
| ------ | ------------------------- |
| `text` | Texto a evaluar.          |
| `case` | `upperCase` o `lowerCase` |

```json[# Input]
{
  "fnKey": "changeCase",
  "params": {
    "text": "I am the best",
    "case": "upperCase"
  }
}
```

```json[# Output]
"I AM THE BEST"
```

## jsonStringify

Disponible en: Generales.

Convierte un objeto en una cadena de texto JSON.

| Nombre                   | Descripción        |
| ------------------------ | ------------------ |
| `data`                   | Objeto a procesar. |
| `indentation (Opcional)` | Texto a evaluar.   |

```json[# Input]
{
  "fnKey": "jsonStringify",
  "params": {
    "data": { "example": "This Will be parsed" },
    "indentation": 2
  }
}
```

```json[# Output]
"{ \"example\": \"This Will be parsed\" }"
```

## breakDownObjectByAttributes

Disponible en: Generales.

Transforme el objeto en una matriz con valor y clave.

| Nombre      | Descripción        |
| ----------- | ------------------ |
| `object`    | Objeto de entrada. |
| `skipEntry` | `true` o `false`.  |

```json[# Input]
{
  "fnKey": "breakDownObjectByAttributes",
  "params": {
    "object": {
      "a": "test",
      "b": "test",
      "c": "test",
      "d": "test"
    },
    "skipEmpty": true
  }
}
```

```json[# Output]
[
  {
    "key": "a",
    "value": "test"
  },
  {
    "key": "b",
    "value": "test"
  },
  {
    "key": "c",
    "value": "test"
  },
  {
    "key": "d",
    "value": "test"
  }
]
```

## getBaseTextSelector

Disponible en: Generales.

Eliminar selectores en el texto de entrada.

| Nombre | Descripción       |
| ------ | ----------------- |
| `text` | Texto de entrada. |

```json[# Input]
{
  "fnKey": "getBaseTextSelector",
  "params": {
    "text": "This is an example text?. & I am very happy."
  }
}
```

```json[# Output]
"this is an example text i am very happy"
```

## jsonParse

Disponible en: Generales.

Analiza la cadena pasada

| Nombre | Descripción        |
| ------ | ------------------ |
| `data` | Objeto a procesar. |

```json[# Input]
{
  "fnKey": "jsonParse",
  "params": {
    "data": "{ \"example\": \"This Will be parsed\" }"
  }
}
```

```json[# Output]
{
  "example": "This Will be parsed"
}
```

## arrayEvery

Disponible en: Generales.

Determina si todos los elementos de la matriz cumplen una condición.

| Nombre            | Descripción                    |
| ----------------- | ------------------------------ |
| `array`           | Lista de elementos a procesar. |
| `array.condition` | Condición a evaluar.           |

```json[# Input]
{
  "fnKey": "arrayEvery",
  "params": {
    "array": [
      {
        "condition": true
      },
      {
        "condition": false
      }
    ]
  }
}
```

```json[# Output]
false
```

## arraySome

Disponible en: Generales.

Devuelve verdadero si se cumplen algunas condiciones.

| Nombre            | Descripción                    |
| ----------------- | ------------------------------ |
| `array`           | Lista de elementos a procesar. |
| `array.condition` | Condición a evaluar.           |

```json[# Input]
{
  "fnKey": "arrayEvery",
  "params": {
    "array": [
      {
        "condition": true
      },
      {
        "condition": false
      }
    ]
  }
}
```

```json[# Output]
true
```

## arrayReverse

Disponible en: Generales.

Devuelve la matriz dada con reversa

| Nombre  | Descripción                    |
| ------- | ------------------------------ |
| `array` | Lista de elementos a procesar. |

```json[# Input]
{
  "fnKey": "arrayReverse",
  "params": {
    "array": [1,2,3,4,5,6,7]
  }
}
```

```json[# Output]
[7,6,5,4,3,2,1]
```

## splitText

Disponible en: Generales.

Divide el texto dado

| Nombre                   | Descripción                    |
| ------------------------ | ------------------------------ |
| `text`                   | Texto a procesar.              |
| `splitKey`               | (O splitRegExp)Separador.      |
| `splitRegExp (Opcional)` | (O splitKey) separador RegExp. |
| `array (Opcional)`       | Banderas RegExp.               |

```json[# Input]
{
  "fnKey": "splitText",
  "params": {
    "splitKey": ".",
    "splitRegExp": "",
    "splitRegExpFlags": "",
    "text": "This is a example Text. Thanks for supporting our community"

  }
}
```

```json[# Output]
[
  "This is a example Text",
  " Thanks for supporting our community"
]
```

## toDateObject

Disponible en: Generales.

Devuelve un tipo de fecha con la fecha dada

| Nombre | Descripción       |
| ------ | ----------------- |
| `date` | Fecha de entrada. |

```json[# Input]
{
  "fnKey": "toDateObject",
  "params": {
    "date": 12212434123
  }
}
```

```json[# Output]
"1970-05-22T08:20:34.123Z"
```

## textMatchesExpression

Disponible en: Generales.

Devuelve verdadero si el texto coincide con la expresión

| Nombre                        | Descripción                                     |
| ----------------------------- | ----------------------------------------------- |
| `text`                        | Fecha de entrada.                               |
| `matchKey (Opcional)`         | (O matchRegExp) Cadena a buscar en el texto.    |
| `matchRegExp (Opcional)`      | (O matchKey) RegExp que se buscará en el texto. |
| `matchRegExpFlags (Opcional)` | Banderas RegExp.                                |

```json[# Input]
{
  "fnKey": "textMatchesExpression",
  "params": {
    "text": "This is a example Text. Thanks for supporting our community",
    "matchKey": "T",
    "matchRegExp": "",
    "matchRegExpFlags": ""
  }
}
```

```json[# Output]
false
```

## multipleActions

Disponible en: Generales.

Ejecutar múltiples acciones

| Nombre           | Descripción                      |
| ---------------- | -------------------------------- |
| `actions`        | Lista de acciones.               |
| `actions.action` | Objeto que contiene una función. |

```json[# Input]
{
  "fnKey": "multipleActions",
  "params": {
    "actions": [
      {
        "action": {
          "fnKey": "arrayReverse",
          "params": {
            "array": [1,2,3,4]
          }
        }
      },
      {
        "action": {
          "fnKey": "not",
          "params": {
            "value": false
          }
        }
      }
    ]
  }
}
```

```json[# Output]
null
```

## assignItemInArrayPosition

Disponible en: Generales.

Asigne un valor en la posición de matriz dada

| Nombre  | Descripción                         |
| ------- | ----------------------------------- |
| `array` | La lista que será analizada.        |
| `index` | Posición del elemento a reemplazar. |
| `item`  | Nuevo valor en la matriz.           |

```json[# Input]
{
  "fnKey": "assignItemInArrayPosition",
  "params": {
    "array": [1,2,3,4,5,6,7],
    "index": 3,
    "item": 999
  }
}
```

```json[# Output]
[
  1,
  2,
  3,
  999,
  5,
  6,
  7
]
```

## removeItemInArrayPosition

Disponible en: Generales.

Elimina el elemento en la posición de matriz dada

| Nombre  | Descripción                       |
| ------- | --------------------------------- |
| `array` | La lista que será analizada.      |
| `index` | Posición del elemento a eliminar. |

```json[# Input]
{
  "fnKey": "removeItemInArrayPosition",
  "params": {
    "array": [1,2,3,4,5,6,7],
    "index": 3
  }
}
```

```json[# Output]
[
  1,
  2,
  3,
  5,
  6,
  7
]
```

## pushItemInArray

Disponible en: Generales.

Empuja un elemento a la matriz dada y lo devuelve

| Nombre  | Descripción                  |
| ------- | ---------------------------- |
| `array` | La lista que será analizada. |
| `item`  | Nuevo valor en la matriz.    |

```json[# Input]
{
  "fnKey": "pushItemInArray",
  "params": {
    "array": [1,2,3,4],
    "item": 5
  }
}
```

```json[# Output]
[1,2,3,4,5]
```

## assignItemInObject

Disponible en: Generales.

Asigna un elemento en clave

| Nombre   | Descripción                                       |
| -------- | ------------------------------------------------- |
| `object` | El objeto que será analizado.                     |
| `key`    | Nombre de la propiedad que se agregará al objeto. |
| `item`   | Valor de la nueva propiedad.                      |

```json[# Input]
{
  "fnKey": "assignItemInObject",
  "params": {
    "object": { "name": "John" },
    "key": "lastname",
    "item": "Doe"
  }
}
```

```json[# Output]
{
  "name": "John",
  "lastname": "Doe"
}
```

## generateDateFromMSDifferenceFromNow

Disponible en: Generales.

Genera una fecha aplicando la diferencia de la marca de tiempo de la marca de tiempo actual

| Nombre         | Descripción      |
| -------------- | ---------------- |
| `msDifference` | Marca de tiempo. |

```json[# Input]
{
  "fnKey": "generateDateFromMSDifferenceFromNow",
  "params": {
    "msDifference": 3600
  }
}
```

```json[# Output]
"2021-04-20T00:35:51.360Z"
```

## getArrayItemAtIndex

Disponible en: Generales.

Resuelve el elemento en el índice dado de la matriz

| Nombre  | Descripción            |
| ------- | ---------------------- |
| `array` | Matriz a evaluar.      |
| `index` | Posición del elemento. |

```json[# Input]
{
  "fnKey": "getArrayItemAtIndex",
  "params": {
    "array": ["Hello","Do","You","Have","Some","Money"],
    "index": 2
  }
}
```

```json[# Output]
"You"
```

## concatArray

Disponible en: Generales.

Concats dadas matrices

| Nombre        | Descripción          |
| ------------- | -------------------- |
| `items`       | Lista a evaluar.     |
| `items.array` | Matriz a concatenar. |

```json[# Input]
{
  "fnKey": "concatArray",
  "params": {
    "items": [
      { "array": [1,2,3,4,5] },
      { "array": [6,7,8,9,10] }
    ]
  }
}
```

```json[# Output]
[1,2,3,4,5,6,7,8,9,10]
```

## toDateString

Disponible en: Generales.

Devuelve una cadena de la fecha dada

| Nombre | Descripción                  |
| ------ | ---------------------------- |
| `date` | La fecha que será analizada. |

```json[# Input]
{
  "fnKey": "toDateString",
  "params": {
    "date": 9999912399
  }
}
```

```json[# Output]
"Sun Apr 26 1970"
```

## toTimeString

Disponible en: Generales.

Resuelve el tiempo de la hora dada

| Nombre | Descripción           |
| ------ | --------------------- |
| `time` | El tiempo en minutos. |

```json[# Input]
{
  "fnKey": "toTimeString",
  "params": {
    "time": 3600
  }
}
```

```json[# Output]
"60:00 hrs"
```

## getMsFromDate

Disponible en: Generales.

Resuelve los milisegundos a partir de la fecha dada.

| Nombre | Descripción                  |
| ------ | ---------------------------- |
| `date` | La fecha que será analizada. |

```json[# Input]
{
  "fnKey": "getMsFromDate",
  "params": {
    "date": "Sun Apr 26 1970"
  }
}
```

```json[# Output]
9936000000
```

## setUTCTimeForDate

Disponible en: Generales.

Devuelve el valor UTC de la fecha dada

| Nombre         | Descripción                   |
| -------------- | ----------------------------- |
| `date`         | La fecha que será analizada.  |
| `time`         | El tiempo que será analizado. |
| `time.hours`   | Horas.                        |
| `time.minutes` | Minutos.                      |
| `time.seconds` | Segundos.                     |

```json[# Input]
{
  "fnKey": "setUTCTimeForDate",
  "params": {
    "date": "Sun Apr 26 1970",
    "time": {
      "hours": 1,
      "minutes": 10,
      "seconds": 30
    }
  }
}
```

```json[# Output]
9940230000
```

## fillWithLeftZerosWhenRequired

Disponible en: Generales.

Devuelve una cadena con el número dado con 0 si falta

| Nombre  | Descripción                   |
| ------- | ----------------------------- |
| `value` | El número que será analizado. |
| `size`  | El tamaño del nuevo número.   |

```json[# Input]
{
  "fnKey": "fillWithLeftZerosWhenRequired",
  "params": {
    "value": 12.2,
    "size": 10
  }
}
```

```json[# Output]
"00000012.2"
```

## conditional

Disponible en: Generales.

Resuelve el resultado de la operación condicional

| Nombre     | Descripción                                                  |
| ---------- | ------------------------------------------------------------ |
| `operator` | Puede ser `and`, `or`, `eq`, `neq`, `gt`, `gte`, `lt`,``lte` |
| `items`    | La lista que será analizada.                                 |

```json[# Input]
{
  "fnKey": "conditional",
  "params": {
    "operator": "eq",
    "items": [
      { "value": 1 },
      { "value": 4 }
    ]
  }
}
```

```json[# Output]
false
```

## not

Disponible en: Generales.

Lleva la verdad a la falsedad y viceversa.

| Nombre  | Descripción                  |
| ------- | ---------------------------- |
| `value` | El valor que será analizado. |
| `items` | La lista que será analizada. |

```json[# Input]
{
  "fnKey": "not",
  "params": {
    "value": true
  }
}
```

```json[# Output]
false
```

## concatText

Disponible en: Generales.

Une todos los elementos de `items` en una cadena y devuelve esta cadena

| Nombre    | Descripción                                                          |
| --------- | -------------------------------------------------------------------- |
| `joinKey` | Es una cadena que sirve para separar cada uno de los elementos.      |
| `items`   | Es la lista que contiene todos los elementos que serán concatenados. |

```json[# Input]
{
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
```

```json[# Output]
"Smith, John"
```

## openLink

Disponible en: Front-End.

Abre una URL en la pestaña actual o una nueva si se especifica

| Nombre        | Descripción                                                                           |
| ------------- | ------------------------------------------------------------------------------------- |
| `url`         | Url que será procesada.                                                               |
| `externalTab` | Condicional que evalúa si la URL se abre en la pestaña actual o en una pestaña nueva. |

```json[# Input]
{
  "fnKey": "openLink",
  "params": {
    "url": "https://ideascloud.io",
    "externalTab": true
  }
}
```

```json[# Output]
null
```

## showPrompt

Disponible en: Front-End.

Mostrar un prompten la página web

| Nombre    | Descripción                                           |
| --------- | ----------------------------------------------------- |
| `message` | Mensaje rápido.                                       |
| `value`   | Valor predeterminado si no hay respuesta en el aviso. |

```json[# Input]
{
  "fnKey": "showPrompt",
  "params": {
    "message": "Insert a value example",
    "value": "default value"
  }
}
```

```json[# Output]
null
```

## showConfirm

Disponible en: Front-End.

Muestra un cuadro de diálogo con un mensaje específico, junto con un botón Aceptar y Cancelar

| Nombre    | Descripción     |
| --------- | --------------- |
| `message` | Mensaje rápido. |

```json[# Input]
{
  "fnKey": "showConfirm",
  "params": {
    "message": "Are you sure ?",
  }
}
```

```json[# Output]
null
```

## showAlert

Disponible en: Front-End.

Muestra un cuadro de diálogo con un mensaje específico, junto con un botón Aceptar

| Nombre    | Descripción     |
| --------- | --------------- |
| `message` | Mensaje rápido. |

```json[# Input]
{
  "fnKey": "showAlert",
  "params": {
    "message": "The email is invalid.",
  }
}
```

```json[# Output]
null
```

## decodeURIComponent

Disponible en: Front-End.

Decodifica un componente URI.

| Nombre | Descripción        |
| ------ | ------------------ |
| `text` | El Uri codificado. |

```json[# Input]
{
  "fnKey": "decodeURIComponent",
  "params": {
    "text": "https%3A%2F%2Fw3schools.com%2Fmy%20test.asp%3Fname%3Dst%C3%A5le%26car%3Dsaab"
  }
}
```

```json[# Output]
"https://w3schools.com/my test.asp?name=ståle&car=saab"
```

## encodeURIComponent

Disponible en: Front-End.

Codifica un componente URI.

| Nombre | Descripción           |
| ------ | --------------------- |
| `text` | El Uri sin codificar. |

```json[# Input]
{
  "fnKey": "encodeURIComponent",
  "params": {
    "text": "https://w3schools.com/my test.asp?name=ståle&car=saab"
  }
}
```

```json[# Output]
"https%3A%2F%2Fw3schools.com%2Fmy%20test.asp%3Fname%3Dst%C3%A5le%26car%3Dsaab"
```

## translate

Disponible en: Front-End.

Devuelve el idioma actual del sistema.

```json[# Input]
{
  "fnKey": "translate",
  "params": {}
}
```

```json[# Output]
"es"
```

## redirect

Disponible en: Front-End.

Redirigir a una nueva página.

| Nombre | Descripción |
| ------ | ----------- |
| `url`  |             |

```json[# Input]
{
  "fnKey": "redirect",
  "params": {
    "url": "www.google.com",
  }
}
```

```json[# Output]
null
```

## getLastWeekDaysArray

Disponible en: Front-End.

Devuelve información de los últimos 7 días transcurridos

```json[# Input]
{
  "fnKey": "getLastWeekDaysArray",
  "params": {}
}
```

```json[# Output]
[
  {
      "date": "2021-04-14T21:09:26.761Z",
      "label": "Miercoles",
      "index": 3
  },
  {
      "date": "2021-04-15T21:09:26.761Z",
      "label": "Jueves",
      "index": 4
  },
  {
      "date": "2021-04-16T21:09:26.761Z",
      "label": "Viernes",
      "index": 5
  },
  {
      "date": "2021-04-17T21:09:26.761Z",
      "label": "Sabado",
      "index": 6
  },
  {
      "date": "2021-04-18T21:09:26.761Z",
      "label": "Domingo",
      "index": 0
  },
  {
      "date": "2021-04-19T21:09:26.761Z",
      "label": "Lunes",
      "index": 1
  },
  {
      "date": "2021-04-20T21:09:26.761Z",
      "label": "Martes",
      "index": 2
  }
]
```

## playNotificationSound

Disponible en: Front-End.

Reproduce el sonido predeterminado o un sonido personalizado.

| Nombre             | Descripción    |
| ------------------ | -------------- |
| `sound (Opcional)` | URL de sonido. |

```json[# Input]
{
  "fnKey": "playNotificationSound",
  "params": {
    "sound": "https://test.com/miau.mp3
  }
}
```

```json[# Output]
null
```

## playSound

Disponible en: Front-End.

Reproduce un sonido personalizado.

| Nombre             | Descripción    |
| ------------------ | -------------- |
| `sound (Opcional)` | URL de sonido. |

```json[# Input]
{
  "fnKey": "playSound",
  "params": {
    "sound": "https://test.com/miau.mp3
  }
}
```

```json[# Output]
null
```

## setupSocketChannel

Disponible en: Front-End.

Establecer el canal del zócalo.

| Nombre       | Descripción             |
| ------------ | ----------------------- |
| `channelKey` | Identificador de canal. |
| `onData`     |                         |

```json[# Input]
{
  "fnKey": "setupSocketChannel",
  "params": {
    "channelKey": "socketkey",
    "onData": {}
  }
}
```

```json[# Output]
null
```

## removeSocketChannel

Disponible en: Front-End.

Retire el canal del zócalo.

| Nombre       | Descripción             |
| ------------ | ----------------------- |
| `channelKey` | Identificador de canal. |

```json[# Input]
{
  "fnKey": "removeSocketChannel",
  "params": {
    "channelKey": "socketkey"
  }
}
```

```json[# Output]
null
```

## createPushNotification

Crear una notificación de inserción.

| Nombre    | Descripción                       |
| --------- | --------------------------------- |
| `title`   | Título de la notificación.        |
| `body`    | Cuerpo de notificación.           |
| `icon`    | URL del icono de notificación.    |
| `timeout` | Tiempo de espera de notificación. |
| `onClick` | Controlador en el evento de clic. |

```json[# Input]
{
  "fnKey": "createPushNotification",
  "params": {
    "title": "Lorem",
    "body": "Lorem ipsum",
    "icon": "www.test.com/icon.png",
    "timeout": 3600,
    "onClick": {}
  }
}
```

```json[# Output]
null
```

## downloadFromJSONToExcel

Disponible en: Front-End.

Convierta una lista de objetos JSON en un archivo de Excel.

| Nombre    | Descripción           |
| --------- | --------------------- |
| `data`    | Lista de datos.       |
| `options` | Opciones adicionales. |

```json[# Input]
{
  "fnKey": "downloadFromJSONToExcel",
  "params": {
    "data": [],
    "options": {},
  }
}
```

```json[# Output]
null
```

## callService

Disponible en: Front-End.

Invocar un servicio.

| Nombre          | Descripción                                  |
| --------------- | -------------------------------------------- |
| `serviceName`   | Identificador del servicio a invocar.        |
| `serviceParams` | Parámetros de la función invocada.           |
| `onError`       | Función a ejecutar si hay un error.          |
| `onSuccess`     | Función a ejecutar si el proceso es exitoso. |

```json[# Input]
{
  "fnKey": "callService",
  "params": {
    "serviceName": "deleteTodo",
    "serviceParams": {
      "|&|id": "&.item.id"
    },
    "onError": {
      "fnKey": "consoleLog",
      "params": {
        "message": "onError"
      }
    },
    "onSuccess" {
      "fnKey": "consoleLog",
      "params": {
        "message": "onSuccess"
      }
    }
  }
}
```

```json[# Output]
null
```

## callHTTPService

Disponible en: Front-End.

Invocar un servicio.

| Nombre          | Descripción                                  |
| --------------- | -------------------------------------------- |
| `serviceName`   | Identificador del servicio a invocar.        |
| `serviceParams` | Parámetros de la función invocada.           |
| `onError`       | Función a ejecutar si hay un error.          |
| `onSuccess`     | Función a ejecutar si el proceso es exitoso. |

```json[# Input]
{
  "fnKey": "callHTTPService",
  "params": {
    "method": "POST",
    "url": "www.pokemonapi/postPokemon",
    "body": { "name": "Charmander" } ,
    "onError": {
      "fnKey": "consoleLog",
      "params": {
        "message": "onError"
      }
    },
    "onSuccess" {
      "fnKey": "consoleLog",
      "params": {
        "message": "onSuccess"
      }
    }
  }
}
```

```json[# Output]
null
```

## parseData

Disponible en: Front-End.

Analiza el atributo de datos pasado al tipo especificado, tipos disponibles: `objectid`, `número`, `fecha`.

| Nombre | Descripción                                                              |
| ------ | ------------------------------------------------------------------------ |
| `type` | El tipo de datos que desea como resultado `objectid`, `número`, `fecha`. |
| `data` | Los datos que serán analizados.                                          |

```json[# Input]
{
  "fnKey": "parseData",
  "params": {
    "type" : "objectid",
    "data": "123451234512345123451234"
  }
}
```

```json[# Output]
ObjectId("123451234512345123451234")
```

<molecules-github-user-list :items="$contributors"></molecules-github-user-list>
