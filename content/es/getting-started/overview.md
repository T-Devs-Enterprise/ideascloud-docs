---
title: Configuración
position: 2
category: Empezando
fetchContributors: true
---

## Detalle de proyecto

La configuración de un proyecto esta inmersa dentro de la siguiente estructura:

- `globalVariables` : Almacena variables globales, accesibles en contexto posterior o frontal
- `models` : Definiciones de modelos de base de datos
- `services` : HTTP/Graphql Endpoints
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

<molecules-github-user-list :items="$contributors"></molecules-github-user-list>
