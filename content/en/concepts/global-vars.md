---
title: Variables globales
description: ""
fetchContributors: true
position: 8
category: Conceptos
---

Disponible en `webapp-middlewares` `services` `functions`

Este modulo te permite declarar variables de forma global a las que podras acceder mediante `&.globalVars`

```json [globalVars.json]
{
  "stripeEndpoint": "https://api.stripe.com/v3",
  "palette": {
    "primary": "#ffffff"
  }
}
```

<molecules-github-user-list :items="$contributors"></molecules-github-user-list>
