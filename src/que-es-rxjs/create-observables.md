# Funciones para crear observables

Existen distintas funciones para crear observables, de esta manera se evita gran parte del trabajo visto anteriormente, pues RxJS ya trae cubierta esa parte, los aquí mostrados son los más comunes, en caso de querer seguir investigando más se pueden encontrar en [la siguiente documentación](https://rxjs-dev.firebaseapp.com/api/index)

## of

Es una función que nos permite crear observables en base a un listado de elementos, pues este observable convierte los argumentos que recibe en una secuencia de valores.

Este operador emite los valores en secuencia de manera síncrona, tras emitir el ultimo valor o elemento del listado el observable se termina de manera automática.

Por ejemplo:

```js
import { of } from "rxjs";

const obs$ = of(1, 2, 3, 4, 5, 6);
obs$.subscribe(console.log);
```

Otra manera alternatva al mismo ejercicio es:

```js
import { of } from "rxjs";

const obs$ = of(...[1, 2, 3, 4, 5, 6]);
obs$.subscribe(console.log);
```

## from

Crea un observable de un array, por ejemplo usando el segundo caso del of con el from queda de la siguiente manera

```js
import { from } from "rxjs";

const obs$ = from([1, 2, 3, 4, 5, 6]);
obs$.subscribe(console.log);
```

Esto nos genera el mismo resultado que al usar el Spread Operator previamente al array mandado como argumento a la función of.

## fromEvent

Permite crear observables en base a un event target (es decir de cierto tipo que provienen del event target).

Por ejemplo:

```js
fromEvent < Event > (document, "scroll");
```

Aquí se emitirán eventos cada vez que se realice el scroll, pues es el evento que se esta escuchando.

## range

Emite una secuencia de números en base a un rango especifico, esta función recibe como parámetros

```js
range(start: number = 0, count?: number, scheduler? SchedulerLike): Observable<number>
```

Por ejemplo

```js
const src$ = range(1, 5, asyncScheduler);

src$.subscribe(console.log);
```

## interval

Crea un observable que emite una secuencia de números en un intervalo de tiempo especificado

```js
import { interval } from "rxjs";

const observer = {
  next: (val: any) => console.log("next:", val),
  complete: () => console.log("complete"),
};

const interval$ = interval(1000);

interval$.subscribe(observer);
```

Es importante destacar que aquí nunca se emite el complete, pues nunca se completa el observable.

## timer

Crea un observable que empieza a emitir valores después de cierto tiempo, una vez emitido el valor el observable se completa pero este continua emitiendo valores cada cierto tiempo indicado.

```js
import { timer } from "rxjs";

const observer = {
  next: (val: any) => console.log("next:", val),
  complete: () => console.log("complete"),
};

const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const timer$ = timer(hoyEn5);

timer$.subscribe(observer);
```

De esta manera se puede programar en que momento se desea la ejecución del valor en base al timer y su respectivo metodo complete del observable.

## asyncScheduler

Este no crea un observable sino una subscription, esta function puede tener la funcionalidad de un setTimeout o de un setInterval pero con bondades adicionales como la manipulación de la información como si se tratase de cualquier suscripción de rxjs.
Por ejemplo:

```js{7}
import { asyncScheduler } from "rxjs";

const subs = asyncScheduler.schedule(
  function(state) {
    console.log("state", state);

    this.schedule(state + 1, 1000);
  },
  3000,
  0
);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
```

En este caso el `asyncScheduler` funciona como setInterval gracias a la línea que se encuentra resaltada, pues a esta se le manda la instruccion de que vuelva a ejecutar el metodo `schedule()` cada segundo.
Adicionalmente a esto se le agrega la desuscripción del intervalo a los 6 segundos (3 segundos después de haber iniciado el intervalo).
