---
title: Acciones API
description: ""
position: 4
fetchContributors: true
category: Compilador
---

## registerElement

Disponible en: `webapp-middlewares` `services` `functions`

Registra un elemento dentro de la base de datos.

| Nombre       | Descripción                                      |
| ------------ | ------------------------------------------------ |
| modelKey     | Nombre del modelo.                               |
| mappingSetup | Atributos que se guardaran en el nuevo registro. |

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

## redirectWhenMatch

Disponible en: `webapp-middlewares` `services` `functions`

Redirige a una ruta específica cuando el valor de coincidencia es verdadero

```json
{
  "action": "redirectWhenMatch",
  "params": {
    "|&|match": "&.clientParams.data",
    "targetWhenMatch": "/url-to-redirect"
  }
}
```

| Nombre          | Descripción                               |
| --------------- | ----------------------------------------- |
| match           | Valor booleano de coincidiencia evaluado. |
| targetWhenMatch | Ruta o URL de redirección.                |

ElementById

Disponible en: middleware de aplicaciones web, servicios, funciones

Actualiza un elemento de la base de datos por id.

- Parámetros
  - `modelKey` : Identificador del modelo.
  - `itemId` : Identificador del elemento a actualizar.
  - `updateData` : Datos del objeto a actualizar.

```json
{
  "action": "updateElementById",
  "params": {
    "modelKey": "user",
    "itemId": "&.clientParams.userId",
    "updateData": {
      "phone": "&.clientParams.phone"
    }
  }
}
```

## updateElement

Disponible en: Web app middlewares, servicios, funciones

Actualiza el elemento que coincide con los criterios aprobados (si se aprobó la opción múltiple, se actualizan varios elementos)

- Parámetros
  - `modelKey` : Model identifier.
  - `updateData` : Object data to be updated.
  - `updateCriteria` : Criteria for selecting the records to update.
  - `updateOptions` : Update options supported by mongodb.

```json
{
  "action": "updateElement",
  "params": {
    "modelKey": "user",
    "updateData": {
      "phone": "&.clientParams.phone"
    },
    "updateCriteria": {
      "email": null
    },
    "updateOptions": {
      "multi": true
    }
  }
}
```

## removeElementById

Disponible en: Web app middlewares, servicios, funciones

Elimina un elemento por id

- Parámetros
  - `modelKey` : Identificador del modelo.
  - `itemId` : Identificador del elemento a actualizar.

```json
{
  "action": "removeElementById",
  "params": {
    "modelKey": "user",
    "itemId": "&.clientParams.userId"
  }
}
```

## findOneElement

Disponible en: Web app middlewares, servicios, funciones

Encuentre el elemento que coincida con los criterios

- Parámetros
  - `modelKey` : Identificador del modelo.
  - `mappingSetup` : Un objeto que tiene los criterios para la búsqueda.

```json
{
  "action": "findOneElement",
  "params": {
    "modelKey": "user",
    "mappingSetup": {
      "|&|email": "&.clientParams.email"
    }
  }
}
```

## elementsAggregation

Disponible en: Web app middlewares, servicios, funciones

Resuelve la agregación especificada (ejecuta una agregación mongodb al modelo especificado)

- Parámetros
  - `modelKey` : Identificador del modelo.
  - `aggregationPipeline` : Una lista con los criterios de agregación.

```json
{
  "action": "elementsAggregation",
  "params": {
    "modelKey": "user",
    "aggregationPipeline": [
      {
        "$match": {
          "|&|email": "&.clientParams.email"
        }
      },
      {
        "$lookup": {
          "from": "session",
          "localField": "_id",
          "foreignField": "userId",
          "as": "session"
        }
      }
    ]
  }
}
```

## resolveFirstElementOfOutputArray

Disponible en: Web app middlewares, servicios, funciones

Resuelve el primer elemento de la salida de [elementsAggregation](#elementsaggregation)

```json
{
  "action": "resolveFirstElementOfOutputArray",
  "params": {}
}
```

## randomizeOutputArray

Disponible en: Web app middlewares, servicios, funciones

Resuelve una lista aleatoria de [resolvefirstelementofoutputarray](#resolvefirstelementofoutputarray)

```json
{
  "action": "randomizeOutputArray",
  "params": {}
}
```

## randomizeOutputArray

Disponible en: Web app middlewares, servicios, funciones

Detiene la ejecución de la canalización si no se cumple la condición.

- Parámetros:
  - `match` : Criterio de búsqueda.
  - `onError` : Respuesta si hay error.
    - `status` : Código de respuesta.
    - `details` : Mensaje de respuesta.

```json
{
  "action": "randomizeOutputArray",
  "params": {}
}
```

## resolveActionParams

Disponible en: Web app middlewares, servicios, funciones

Resuelve parámetros de acción analizados, útiles para mapear salidas de canalización.

- Parámetros: Los parámetros son dinámicos.

```json[#Input]
{
  "action": "resolveActionParams",
  "params": {
    "|&|clientParams": "&.clientParams.title"
  }
}
```

```json[#Output]
{
  "clientParams": "The title!"
}
```

## replaceRoot

Disponible en: Web app middlewares, servicios, funciones

Resuelve el atributo newRoot, útil para el mapeo

- Parámetros:
  - `newRoot` : Aquí se especifica la nueva raíz del objeto.

```json
{
  "action": "replaceRoot",
  "params": {
    "newRoot": "&.outputsMap.foundUser"
  }
}
```

## sendRAWEmail

Disponible en: Web app middlewares, servicios, funciones

Envía un correo electrónico con contenido HTML, utiliza el módulo Nodemailer

- Parámetros:
  - `emailTransporterSetup`
    - `host`
    - `port`
    - `secure`
    - `auth`
    - `email`
    - `password`
  - `emailSetup`
    - `subject`
    - `to`
    - `html`

```json
{
  "action": "sendRAWEmail",
  "params": {
    "emailTransporterSetup": {
      "host": "..",
      "port": "465",
      "secure": true,
      "auth": {
        "email": "myemail@domain.com",
        "passwoord": "password"
      }
    },
    "emailSetup": {
      "subject": "Hello!",
      "|&|to": "&.clientParams.email",
      "html": "<h1>Welcome!</h1>"
    }
  }
}
```

## sendSlackMessage

Disponible en: Web app middlewares, servicios, funciones

Envía un mensaje de Slack.

- Parámetros:
  - `webhookUrl`
  - `message`
    - `title`
    - `text`
    - `smallText`
    - `color`

```json
{
  "action": "sendSlackMessage",
  "params": {
    "webhookUrl": "SLACK_WEBHOOK",
    "message": {
      "title": "Title",
      "text": "Hello!",
      "smallText": "Hello!",
      "color": "#555555"
    }
  }
}
```

## sshExecution

Disponible en: Web app middlewares, servicios, funciones

Ejecuta un comando ssh a la conexión especificada.

```json
{
  "action": "sshExecution",
  "params": {}
}
```

## httpRequest

Disponible en: Web app middlewares, servicios, funciones

Realiza y resuelve una llamada HTTP.

- Parámetros:
  - `url`
  - `method`
  - `headers`
  - `body`
    - `content`

```json
{
  "action": "httpRequest",
  "params": {
    "url": "https://mydomain.com/api",
    "method": "POST",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": {
      "content": "Hello World"
    }
  }
}
```

## conditionalPipelineExecution

Disponible en: Web app middlewares, servicios, funciones

Ejecuta una canalización específica cuando se cumple la condición.

- Parámetros:
  - `defaultPipeline` : Lista de acciones que se ejecutarán por defecto si no se cumple la condición.
  - `pipelines`
    - `condition` : Condición a evaluar para ejecutar la tubería.
    - `pipeline` : Lista de acciones a ejecutar.

```json
{
  "action": "conditionalPipelineExecution",
  "params": {
    "defaultPipeline": [
      {
        "action": "resolveActionParams",
        "params": {
          "text": "Ops, try again"
        }
      }
    ],
    "pipelines": [
      {
        "|$|condition": {
          "fnKey": "conditional",
          "params": {
            "operator": "eq",
            "items": [
              {
                "|&|value": "&.clientParams.selectedOption"
              },
              {
                "value": "a"
              }
            ]
          }
        },
        "pipeline": [
          {
            "action": "resolveActionParams",
            "params": {
              "text": "You selected option a"
            }
          }
        ]
      },
      {
        "|$|condition": {
          "fnKey": "conditional",
          "params": {
            "operator": "eq",
            "items": [
              {
                "|&|value": "&.clientParams.selectedOption"
              },
              {
                "value": "b"
              }
            ]
          }
        },
        "pipeline": [
          {
            "action": "resolveActionParams",
            "params": {
              "text": "You selected option b"
            }
          }
        ]
      }
    ]
  }
}
```

## executeFunction

Disponible en: Web app middlewares, servicios, funciones

Ejecutar una función almacenada.

- Parámetros:
  - `functionKey` : Identificador de función.
  - `params` : Parámetros

```json
{
  "action": "executeFunction",
  "params": {
    "functionKey": "functionKey",
    "params": {
      "text": "Test"
    }
  }
}
```

## setCookiesWhenRequired

Disponible en: Web app middlewares, servicios, funciones

Establece cookies cuando el cliente lo ha habilitado.

- Parámetros:
  - `mappingSetup` : Mapa de cookies.

```json
{
  "action": "setCookiesWhenRequired",
  "params": {
    "mappingSetup": {
      "|&|sessionKey": "&.outputsMap.newSession.key"
    }
  }
}
```

<molecules-github-user-list :items="$contributors"></molecules-github-user-list>
