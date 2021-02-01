# Observer y subscriber

Para que un observable se ejecute debe tener una subscripcion

El metodo `.next()` emitira el valor que yo quiero a las personas suscritas al observer

Al usar el método `.complete()` se finalizara la suscripción al observable, por lo que ninguna emisión de data posterior sera notificada

Existen tres posibles argumentos que se le pueden mandar a un subscribe

- next (recibe un valor)
- error (recibe un error)
- complete (no recibe argumentos)

```js
observable$.subscribe(
  valor => console.log("Next:", valor),
  error => console.warn("Error:", error),
  () => console.log("Completado")
);
```

<br/>

Adicionalmente a esta, hay otra manera para poder mandarle estos argumentos al subscriber, haciendo uso de una propiedad llamada **observer**

```js
const observer: Observer<any> = {
  next: value => console.log("siguiente [next]:", value),
  error: error => console.warn("error [obs]:", error),
  complete: () => console.info("completado [obs]"),
};

observable$.subscribe(observer);
```
