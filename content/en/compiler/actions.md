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

| Nombre         | Descripción                                      |
| -------------- | ------------------------------------------------ |
| `modelKey`     | Nombre del modelo.                               |
| `mappingSetup` | Atributos que se guardaran en el nuevo registro. |

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

| Nombre            | Descripción                               |
| ----------------- | ----------------------------------------- |
| `match`           | Valor booleano de coincidiencia evaluado. |
| `targetWhenMatch` | Ruta o URL de redirección.                |

```json
{
  "action": "redirectWhenMatch",
  "params": {
    "|&|match": "&.clientParams.data",
    "targetWhenMatch": "/url-to-redirect"
  }
}
```

## updateElementById

Disponible en: `webapp-middlewares` `services` `functions`

Actualiza un elemento de la base de datos por id.

| Nombre       | Descripción                                        |
| ------------ | -------------------------------------------------- |
| `modelKey`   | Identificador del modelo                           |
| `itemId`     | Identificador del elemento a actualizar            |
| `updateData` | Atributos que se actualizaran en el nuevo registro |

```json
{
  "action": "updateElementById",
  "params": {
    "modelKey": "user",
    "itemId": "&.clientParams.userId",
    "updateData": {
      "|&|phone": "&.clientParams.phone"
    }
  }
}
```

<alert>

El atributo `itemId` acepta directamente variables de contexto (`&.any`) no es necesario agregar `|&|` al nombre del atributo.

</alert>

## updateElement

Disponible en: `webapp-middlewares` `services` `functions`

Actualiza el elemento que coincide con los criterios aprobados (si se aprobó la opción múltiple, se actualizarán varios elementos)

| Nombre           | Descripción                                          |
| ---------------- | ---------------------------------------------------- |
| `modelKey`       | Identificador del modelo                             |
| `updateData`     | Atributos que se actualizaran en los registros       |
| `updateCriteria` | Criterio para seleccionar los registros a actualizar |
| `updateOptions`  | Opciones de actulizacion soportadas por mongodb      |

Puedes ver mas detalle de `updateOptions` en la [documentación de Mongo](https://www.mongodb.com/docs/manual/reference/method/db.collection.update/).

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

Disponible en: `webapp-middlewares` `services` `functions`

Elimina un elemento en la base de datos por id

| Nombre     | Descripción                           |
| ---------- | ------------------------------------- |
| `modelKey` | Identificador del modelo              |
| `itemId`   | Identificador del elemento a eliminar |

```json
{
  "action": "removeElementById",
  "params": {
    "modelKey": "user",
    "itemId": "&.clientParams.userId"
  }
}
```

<alert>

El atributo `itemId` acepta directamente variables de contexto (`&.any`) no es necesario agregar `|&|` al nombre del atributo.

</alert>

## findOneElement

Disponible en: `webapp-middlewares` `services` `functions`

Encuentre el elemento que coincida con los criterios

| Nombre         | Descripción                      |
| -------------- | -------------------------------- |
| `modelKey`     | Identificador del modelo         |
| `mappingSetup` | Objeto con criterios de busqueda |

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

Disponible en: `webapp-middlewares` `services` `functions`

Resuelve la agregación especificada (ejecuta una agregación mongodb al modelo especificado)

| Nombre                | Descripción                      |
| --------------------- | -------------------------------- |
| `modelKey`            | Identificador del modelo         |
| `aggregationPipeline` | Objeto con criterios de busqueda |

Puedes ver mas información sobre las agregaciones [aquí.](https://www.mongodb.com/docs/manual/aggregation/)

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

Disponible en: `webapp-middlewares` `services` `functions`

Resuelve el primer elemento de la salida de un arrat por ejemplo la salida de [elementsAggregation](#elementsaggregation)

```json
{
  "action": "resolveFirstElementOfOutputArray",
  "params": {}
}
```

## randomizeOutputArray

Disponible en: `webapp-middlewares` `services` `functions`

Resuelve un elemento aleatorio del resultado previo si es un array.

```json
{
  "action": "randomizeOutputArray",
  "params": {}
}
```

## stopIfDoesntMatch

Disponible en: `webapp-middlewares` `services` `functions`

Detiene la ejecución del pipeline si no se cumple la condición.

| Nombre            | Descripción                                  |
| ----------------- | -------------------------------------------- |
| `match`           | Criterio de busqueda                         |
| `onError`         | Objeto con detalle de respuesta si hay error |
| `onError.status`  | Codigo de respuesta                          |
| `onError.details` | Mensaje de respuesta                         |

```json
{
  "match": true,
  "onError": {
    "status": 401,
    "details": "Invalid session"
  }
}
```

## resolveActionParams

Disponible en: `webapp-middlewares` `services` `functions`

Resuelve parámetros de acción analizados, útiles para mapear salidas de pipeline.

<alert type="success">

Los parámetros son dinámicos.

</alert>

```json [#Input]
{
  "action": "resolveActionParams",
  "params": {
    "|&|title": "&.clientParams.title"
  }
}
```

```json [#Output]
{
  "title": "The title!"
}
```

## replaceRoot

Disponible en: `webapp-middlewares` `services` `functions`

Resuelve el atributo newRoot, útil para el mapeo

| Nombre    | Descripción                |
| --------- | -------------------------- |
| `newRoot` | La nueva raíz del pipeline |

```json
{
  "action": "replaceRoot",
  "params": {
    "newRoot": "&.outputsMap.foundUser"
  }
}
```

## sendRAWEmail

Disponible en: `webapp-middlewares` `services` `functions`

Envía un correo electrónico con contenido HTML, utiliza el módulo Nodemailer

| Nombre                                | Descripción                              |
| ------------------------------------- | ---------------------------------------- |
| `emailTransporterSetup`               | Configuración del transportador de email |
| `emailTransporterSetup.host`          | Host                                     |
| `emailTransporterSetup.port`          | Port                                     |
| `emailTransporterSetup.secure`        | Booleano                                 |
| `emailTransporterSetup.auth`          | Objeto con autentificación               |
| `emailTransporterSetup.auth.email`    | Email                                    |
| `emailTransporterSetup.auth.password` | Password                                 |
| `emailSetup`                          | Configuración de destino                 |
| `emailSetup.subject`                  | Asunto                                   |
| `emailSetup.to`                       | Email destinatario                       |
| `emailSetup.html`                     | Cuerpo del mensaje                       |

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

Disponible en: `webapp-middlewares` `services` `functions`

Envía un mensaje de Slack.

| Nombre              | Descripción                    |
| ------------------- | ------------------------------ |
| `webhookUrl`        | Url del webhook                |
| `message`           | Objeto con detalle del mensaje |
| `message.title`     | Título del mensaje             |
| `message.text`      | Cuerpo del mensaje             |
| `message.smallText` | Submensaje                     |
| `message.color`     | Color del mensaje              |

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

<alert>

Puedes ver mas información en la [API de Slack](https://api.slack.com/)

</alert>

## sshExecution

Disponible en: `webapp-middlewares` `services` `functions`

Ejecuta un comando ssh a la conexión especificada.

| Nombre               | Descripción              |
| -------------------- | ------------------------ |
| `config`             | Objecto de configuracion |
| `config.host`        | Host                     |
| `config.user`        | Usuario                  |
| `config.pass`        | Contraseña               |
| `commands`           | List de comandos         |
| `[commands].command` | Comando                  |
| `[commands].options` | Opciones del comando     |

```json
{
  "action": "sshExecution",
  "params": {
    "config": {
      "host": "xxxxx",
      "user": "xxxxx",
      "pass": "xxxxx"
    },
    "commands": [
      {
        "command": "ls",
        "options": {}
      },
      {
        "command": "echo hello",
        "options": {}
      },
      {
        "command": "echo world",
        "options": {}
      }
    ]
  }
}
```

## httpRequest

Disponible en: `webapp-middlewares` `services` `functions`

Realiza y resuelve una llamada HTTP.

| Nombre    | Descripción                      |
| --------- | -------------------------------- |
| `url`     | Url a la que se hara la petición |
| `method`  | Metodo de la petición            |
| `headers` | Cabecera de la peticion          |
| `body`    | Cuerpo de la petición            |

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

Disponible en: `webapp-middlewares` `services` `functions`

Ejecuta una canalización específica cuando se cumple la condición.

| Nombre                 | Descripción                                                                   |
| ---------------------- | ----------------------------------------------------------------------------- |
| `defaultPipeline`      | Lista de acciones que se ejecutarán por defecto si no se cumple la condición. |
| `pipelines`            | Lista de casos                                                                |
| `[pipelines]condition` | Condición del caso                                                            |
| `[pipelines]pipeline`  | Pipeline a ejecutar si la condición es verdadera                              |

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

Disponible en: `webapp-middlewares` `services` `functions`

Ejecuta una [función almacenada](/concepts/functions).

| Nombre        | Descripción          |
| ------------- | -------------------- |
| `functionKey` | Nombre de la función |
| `params`      | Parámetros           |

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

Disponible en: `webapp-middlewares` `services` `functions`

Establece cookies cuando el cliente lo ha habilitado.

| Nombre         | Descripción     |
| -------------- | --------------- |
| `mappingSetup` | Mapa de cookies |

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
