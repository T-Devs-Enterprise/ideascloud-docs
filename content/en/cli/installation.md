---
title: Instalación
position: 6
category: "CLI"
fetchContributors: true
---

Añade la dependencia `ideascloud-cli` en tu dispositivo de forma global:

<alert type="warning">

Node.js debe estar instalado en tu sistema ([Instalar Node.js](https://nodejs.org/es/download/))

</alert>

<code-group>
  
  <code-block label="NPM">

```bash
npm install -g ideascloud-cli
```

  </code-block>
  <code-block label="Yarn" active>

```bash
yarn global add ideascloud-cli
```

  </code-block>
</code-group>

Añade la siguiente propiedad a tus variables de entorno

```bash
export IC_PROJECT_ACCESS_TOKEN=gasdkjr332....
```

<molecules-github-user-list :items="$contributors"></molecules-github-user-list>
