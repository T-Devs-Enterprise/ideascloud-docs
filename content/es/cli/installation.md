---
title: Instalación
position: 6
category: "CLI"
fetchContributors: true
---

Añade la dependencia `ideascloud-cli` en tu dispositivo de forma global:

<code-group>
  <code-block label="Yarn" active>

```bash
yarn global add ideascloud-cli
```

  </code-block>
  <code-block label="NPM">

```bash
npm install -g ideascloud-cli
```

  </code-block>
</code-group>

Añade una variable global que tenga el valor del `Id` de tu proyecto de `ideascloud`

<code-group>
  <code-block label="Windows" active>

```bash
yarn add -g ideascloud-cli
```

  </code-block>
  <code-block label="Linux">

```bash
npm install -g ideascloud-cli
```

  </code-block>
</code-group>

<molecules-github-user-list :items="$contributors"></molecules-github-user-list>
