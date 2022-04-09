---
title: Estructura de Configuración
description: ""
position: 3
category: Guide
---

Componentes de configuración:

- `globalVariables` : Almacena variables globales, accesibles en contexto posterior o frontal
- `models` : Definiciones de modelos de base de datos
- `services` : HTTP Endpoints
- `functions` : Stored pipelines, útiles para evitar DRY
- `daemons` : Ejecuciones scheduled pipelines
- `webapps` : Definiciones de aplicaciones web
- `mobileapps` : Definiciones de aplicaciones móviles

```json
{
  "globalVariables": {},
  "models": [],
  "services": [],
  "functions": [],
  "daemons": [],
  "webapps": [],
  "mobileapps": []
}
```

## Models

Representación de un tipo específico de información en la base de datos.

Estructura:

- `key` : Identificador de modelo (camelCase)
- `name` : Nombre del modelo
- `schema` : Esquema del modelo, utiliza el motor [JSON Schema](https://json-schema.org)

```json
{
  "key": "user",
  "name": "user",
  "schema": {
    "properties": {
      "name": { "type": "string" },
      "email": { "type": "string" },
      "phone": { "type": "string" }
    },
    "required": ["name", "email"]
  }
}
```

## Functions

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

## Services

Endpoint para acceder a su proyecto usando HTTP

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
}
```

## Daemons

Pipleline programada para ejecutarse en intervalos especificados.

Estructura:

- `key` : Identificador de Daemon (camelCase)
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
}
```
