---
title: Introducción
description: "Bienvenido a la documentación de instalación de IdeasCloud. Aquí encontrarás activos útiles para crear cualquier tipo de proyecto."
position: 1
category: "Empezando"
features:
  - Facil de aprender
  - Admite desarrollo en JavaScript
  - Conexión con base de datos NoSql
  - Manejo de modelos y relaciones dentro de la BD
  - Hosteo de paginas web (ReactJS, Vue, Nativo)
  - Creación y manejo de endpoints (API Rest)
  - Facil desarrollo dentro del Editor Web y en VSCode
concepts:
  - Setup =>
    Configuración del proyecto estructurada y definida en formato JSON.
  - Compiler =>
    Herramienta para aplicar información de contexto a una especificación RAW JSON.
  - Action =>
    Paso de un flujo de back-end (canalización) que ejecuta un trabajo específico, por ejemplo, registrar un elemento en un modelo de base de datos.
  - Pipeline =>
    Conjunto de acciones para ser ejecutadas secuencialmente, utilizadas en componentes de back-end.
fetchContributors: true
---

Bienvenido a la documentación de instalación de IdeasCloud. Aquí encontrarás activos útiles para crear cualquier tipo de proyecto.

IdeasCloud es una plataforma lowcode para crear aplicaciones serverless que sean eficientes y escalables. Principalmente utiliza archivos de tipo JSON con una sintaxis especial (que es facil de aprender y con una curva de aprendizaje baja) que son compilados por nuestro motor, tambien permite a los desarrolladores codificar en `JavaScript` y `Python` (no es estrictamente necesario saber de estos lenguajes de programación, entendiendo la sintaxis JSON usada por el motor ya tiene la libertad de realizar muchas cosas).

Debajo del capó, IdeasCloud se encarga de toda la infraestructura del servidor, facilitanto gran parte del proceso de DevOps, y permitiendote escalar facilmente de manera horizontal, sin tener que preocuparte de temas como el balance de cargas, costos de mantenimiento y fallas del servidor.

IdeasCloud proporciona un nivel de abstracción por encima de los lenguajes de programación utilizando una nueva forma de desarrollar en archivos JSON. Esto les da a los desarrolladres la libertad de programar sea cual sea el lenguaje de programacion que dominen y a terceros que no estan relacionados con el mundo del desarrollo de software a entender e incluso desarrollar de una forma bastante intuitiva.

## Filosofía

[Module]() for [NuxtJS](https://nuxtjs.org).

## Características

<list :items="concepts"></list>

<alert>

Puede ver mas detalle de nuestra de extension de VSCode [aquí](https://marketplace.visualstudio.com/items?itemName=IdeasCloud.icextension)!

</alert>

## Tutorial

[Learn to develop your first project with IdeasCloud](https://tiare-llanten.medium.com/learn-to-develop-your-first-project-with-ideascloud-25cb7aeaa479)

<p class="flex items-center">Disfruta del modo claro y oscuro:&nbsp;<app-color-switcher class="inline-flex ml-2"></app-color-switcher></p>

<molecules-github-user-list :items="$contributors"></molecules-github-user-list>
