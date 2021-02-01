# Subject

El subject es una especie de observer y observable, ya que contiene características de ambos, como observer este puede suscribirse a uno o mas observables y como observable este puede realizar el casteo multiple.

En este el subject tendrá suscritos varios observables a el y se encargara de distribuir la misma información entre todas estas.

Adicionalmente el subject es capaz de emitir nuevos eventos.

Cuando la data es producida por el observable en si mismo es considerado un **cold observable**, pero cuando la data es producida fuera del observable es llamado **hot observable**.

El subject nos permite transformar un cold observable en un hot observable.
