# Mis tareas
Misión M1 - El Despertar del DOM

# Como funciona
Se trata de uma pagina web que nos permite hacer un seguimiento de las tareas del
día a día, esta pagina nos permite introducir las tareas/cualquier cosa que queramos 
recordar, una vez introducida estas apareceran abajo, si hacemos click en nombre
la tacharemos indicando que ya se ha realizado y ha cumplido su proposito y tambien
podemos hacer clock en la X de la derecha para borrar la tarea.
Tambien dispone de un boton para cambiar el tema de la pagina de claro a orcuro con la letra "d".

# Uso de IA
He usado Claude como apoyo para estructurar el proyecto en fases y entender la 
manipulación del DOM la manipulación del DOM. Ejemplo de prompt real: "explícame paso
a paso cómo añadir una tarea a una lista usando JavaScript, línea a línea".
Tuve que verificar cada parte probándola en el navegador antes de seguir a la
siguiente fase. [Aquí añade qué escribiste o modificaste tú por tu cuenta,
aunque sea pequeño — por ejemplo los colores del CSS, algún texto, etc.]Además cambie todo el layaut
de la página, botones, textos, colores, etc...

# Autopsia
1. Primera decisió. Guardo las tareas en un array de objetos en vez de leerlas
   directamente del HTML, porque así es más fácil filtrar las completadas
   y contar cuántas quedan pendientes.
2. Segunda decisión. Reescribo toda lal lista cada vez que cambia algo(borro todo
   y lo vuelvo a crear ya actualizado), en vez de tocar unicamente el elemento
   que cambia. Seguramente sea menos eficiente pero es mas simple para entenderlo.