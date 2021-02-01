# ¿Qué es RxJS?

[RxJS](http://reactivex.io/) es una librería de programación reactiva cuyo fin es simplificar la composición de código asíncrono y basado en eventos a través de secuencias observables.

RxJS provee una estructura de datos llamada **Observable**, estructuras derivadas como **Observer**, **Scheduler**, **Subject** y **Operators** para manipular estas estructuras, inspirados en los métodos que podemos encontrar en Array.prototype.

::: tip En pocas palabras
Las extensiones reactivas nos permiten disponer de la data de una aplicación web en tiempo real.
:::

## ¿Cuándo usar extensiones reactivas?

Al permitirnos disponer de la data o información en tiempo real se recomienda su uso en zonas de la aplicación que necesiten notificar cambios sin la necesidad de hacer un refresh del navegador. Entre estos casos los más comunes son:

- Eventos en la interfaz del usuario
- Cuando es necesario notificar sobre cambios en un objeto(s)
- Comunicación por sockets
- Cuando se trabaja con flujos (streams) de información

<br/><br/>

Entre los beneficios de las extensiones reactivas se encuentran:

- Evitar el "Callback Hell"
- Trabajar de forma simple tareas sincronas y asincronas
- Uso de operadores para reducir y simplificar el trabajo
- Es fácil transformar los flujos (streams) de informacion
- Codigo mas limpio de mantener y mas facil de leer
- Fácil de interpretar
- Fácil de anexar procedimientos sin alterar el producto final
