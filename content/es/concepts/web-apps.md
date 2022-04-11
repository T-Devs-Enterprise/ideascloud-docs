---
title: Web Apps
description: ""
fetchContributors: true
position: 7
category: Conceptos
---

Aplicación web.

Estructura:

- `key` : Identificador de la aplicación web (camelCase)
- `middlewaresPipeline` :Lista de acciones a ejecutar antes de resolver la aplicación web (útil para la autenticación).
- `default` : Habilitado si es la aplicación web predeterminada.
- `template` : (Se requiere usar template) Clave de template
- `params` : (Se requiere usar template) Parámetros de template, cada template proporciona documentación para establecer este atributo
- `customWebappId` : (Obligatorio si se usan aplicaciones web personalizadas) ID de aplicación web personalizada

```json
{
  "key": "othe-test-web-app",
  "middlewaresPipeline": [],
  "default": false,
  "plugins": [],
  "template": "",
  "params": {}
}
```

<molecules-github-user-list :items="$contributors"></molecules-github-user-list>
