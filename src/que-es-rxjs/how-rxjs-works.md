# ¿Cómo funciona RxJS y la programación reactiva?

La programación reactiva cuenta con tres aspectos fundamentales, los **Observables**, los **Subscribers** y los **Operators**

## Observables

- Son la fuente de informacion

- Pueden emitir multiples valores, solo uno o ninguno

- Pueden emitir errores

- Pueden ser infinitos, o finitos en caso de llegar a completarse

- Pueden ser síncronos o asíncronos

## Subscribers

- Se suscriben a un observable (estan pendientes de todo lo que realiza el observable)

- Consumen/observan la data del observable

- Pueden recibir los errores y eventos del observable

- Desconocen lo que se encuentra detras del observable (es decir como se maneja la data y si es que esta viene filtrada o no, etc)

## Operators

- Son utilizados para transformar los observables (como por ejemplo map, group, scan)

- Son utilizados para filtrar observables (filter, distinct, skip, debounce)

- Se utilizan para combinar observables

- Crear nuevos observables

<br/><br/>

RxJS combina patrones de diseño de software como el Patrón del Observador, el Patrón de Iterador y conceptos de programación funcional, utilizando colecciones para modelar una forma ideal de manejar secuencias de eventos.

<br/>

## Observer Pattern

Es un patron de diseño de software que define una dependencia del tipo uno a muchos entre objetos, de manera que cuando uno de los objetos cambia su estado, notifica este cambio a todos los dependientes.

## Iterator Pattern

En la POO el patron iterador define una interfaz que declara los metodos necesarios para acceder secuencialmente a un grupo de objetos de una coleccion

## Programación funcional

Es crear un conjunto de funciones que tengan un objetivo especifico, es decir que siempre que se llamen a esas funciones realizaran una única función ya definida, sin efectos secundarios y sin mutar la data.

<br/>

::: tip En resumen

El patron Observer notifica cuando suceden cambios en relacion uno a muchos

El patron Iterador Ejecuta las operaciones secuenciales

Programación funcional: Tener funciones con tareas especificas que reciban argumentos y no muten la información
:::

<br/>

Como estándar y una buena práctica a la hora de definir un observable se utiliza el símbolo \$ al final de la declaración del mismo para indicar que es un observable.
Por ejemplo: `observable$`

<img src="https://www.notion.so/RxJS-4edc72ff063e4c24aa0a3563dd1fe550#46c6b67c6e5746a9aa9c39d44cd76006" alt="">
