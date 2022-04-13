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
yarn add -g ideascloud-cli
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

<div style="background-color: rgb(45, 55, 72);border-radius: 0px 0px 5px 5px;">
<div style="padding: 1.25em 1em;">
Primero tenemos que identificar cual es el Id del proyecto, este la podemos encontrar en la url del proyecto
<img src="/tuto-1.png" class="light-img" width="1000" alt="Logo light" />
<img src="/tuto-1.png" class="dark-img"  width="1000" alt="Logo dark" />
Una vez reconocido el Id del projecto, tendremos que crear una variable de entorno para esto buscaremos esta opción en el buscador de nuestro sistema.
<img src="/tuto-2.png" class="light-img" width="1000" alt="Logo light" />
<img src="/tuto-2.png" class="dark-img"  width="1000" alt="Logo dark" />
Esta opción nos abrira una ventana en donde tendremos que presionar el boton que dice variables de entorno.
<img src="/tuto-3.png" class="light-img" width="1000" alt="Logo light" />
<img src="/tuto-3.png" class="dark-img"  width="1000" alt="Logo dark" />
Se nos abrira una nueva ventana, nos ubicaremos en donde dice variables del sistema y buscaremos la que dice Path y presionaremos el boton de Nueva.
<img src="/tuto-4.png" class="light-img" width="1000" alt="Logo light" />
<img src="/tuto-4.png" class="dark-img"  width="1000" alt="Logo dark" />
Se nos abrira otra ventana en donde tendremos que poner el nombre de la variable y el Id del proyecto y guardaremos.
<img src="/tuto-5.png" class="light-img" width="1000" alt="Logo light" />
<img src="/tuto-5.png" class="dark-img"  width="1000" alt="Logo dark" />

Adicionalmente tendremos que obtener el CUSTOM_WEBAPP_ID en donde queremos que se suba el proyecto.
Esta la podremos encontrar en seccion de Custom Web App.
<img src="/tuto-6.png" class="light-img" width="1000" alt="Logo light" />
<img src="/tuto-6.png" class="dark-img"  width="1000" alt="Logo dark" />

Si queremos hacer deploy de nuestro proyecto, se tendra que ejecutar el siguiente comando:

</div>

```bash
ic-cli project IC-Token upload-custom-webapp-version --custom-webapp-id=CUSTOM_WEBAPP_ID --description="Version from cli" --folder-path=build
```

</div>
  </code-block>
  <code-block label="Linux">

```bash
npm install -g ideascloud-cli
```

  </code-block>
</code-group>

<molecules-github-user-list :items="$contributors"></molecules-github-user-list>
