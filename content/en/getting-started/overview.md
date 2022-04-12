---
title: Configuración
position: 2
category: Empezando
fetchContributors: true
---

La configuración de un proyecto esta inmersa dentro de la siguiente estructura:

- `globalVariables` : Almacena variables globales, accesibles en contexto posterior o frontal
- `models` : Definiciones de modelos de base de datos.
- `services` : HTTP/Graphql Endpoints.
- `functions` : Stored pipelines, utiles para reutilizar lógica.
- `daemons` : Ejecuciones progamadas.
- `webapps` : Definiciones de aplicaciones web.
- `mobileapps` : Definiciones de aplicaciones móviles.

```json[setup.json]
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

<alert>

`mobileapps` y `daemons` son módulos que continuan aún en fase de desarrollo

</alert>

<molecules-github-user-list :items="$contributors"></molecules-github-user-list>
