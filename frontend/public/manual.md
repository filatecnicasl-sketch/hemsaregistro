# Manual de Usuario — Hemsa Gestión Documental

> Sistema de Gestión Documental Integral
> Hemsa — Servicios Públicos Municipales · San Fernando
> Versión 1.0

---

## Índice

1. [Introducción](#1-introducción)
2. [Acceso al sistema](#2-acceso-al-sistema)
3. [Roles y permisos](#3-roles-y-permisos)
4. [Panel de control](#4-panel-de-control)
5. [Registrar documentación](#5-registrar-documentación)
6. [Listado y búsqueda](#6-listado-y-búsqueda)
7. [Detalle del documento](#7-detalle-del-documento)
8. [Reparto a departamentos](#8-reparto-a-departamentos)
9. [Asignación a personas](#9-asignación-a-personas)
10. [Estados y flujo de trabajo](#10-estados-y-flujo-de-trabajo)
11. [Archivos adjuntos](#11-archivos-adjuntos)
12. [Comentarios e historial](#12-comentarios-e-historial)
13. [Mi bandeja](#13-mi-bandeja)
14. [Notificaciones](#14-notificaciones)
15. [Plantillas de respuesta](#15-plantillas-de-respuesta)
16. [Firma digital](#16-firma-digital)
17. [Imprimir respuesta firmada](#17-imprimir-respuesta-firmada)
18. [Gestión de usuarios](#18-gestión-de-usuarios)
19. [Buenas prácticas](#19-buenas-prácticas)
20. [Preguntas frecuentes](#20-preguntas-frecuentes)
21. [Soporte](#21-soporte)

---

## 1. Introducción

El sistema centraliza toda la documentación que entra en la organización (correo
electrónico, registro físico, fax, web, teléfono, mensajería) y permite repartirla
a los departamentos competentes (Administración, Dirección, Técnico, Coordinación),
asignarla a personas concretas, anexar archivos, comentarla, generar respuestas a
partir de plantillas y firmarlas digitalmente. Cada documento mantiene una
**trazabilidad completa** de todas las acciones realizadas.

**Conceptos clave:**

- **Documento de entrada**: cualquier escrito recibido en la organización que se registra para su tramitación.
- **Reparto**: asignación del documento al departamento competente.
- **Asignación**: asignación del documento a una persona concreta.
- **Respuesta firmada**: documento de salida generado a partir de una plantilla y firmado digitalmente.

---

## 2. Acceso al sistema

1. Abre el navegador en la dirección que proporciona Hemsa.
2. Introduce tu correo electrónico corporativo y tu contraseña.
3. Pulsa **Entrar**.

> ⚠️ Por seguridad, tras 5 intentos de acceso erróneos consecutivos la cuenta queda bloqueada durante 15 minutos.

Para cerrar sesión usa el menú desplegable de la esquina superior derecha o el botón
**Cerrar sesión** en la parte inferior del menú lateral.

---

## 3. Roles y permisos

| Rol | Permisos principales |
|---|---|
| **Administrador** | Acceso total. Gestiona usuarios. Crea/elimina plantillas. |
| **Recepcionista** | Registra entradas. Reparte a departamentos. Ve toda la documentación. |
| **Jefe de Departamento** | Ve la documentación de su departamento. Asigna a personas de su equipo. Crea/edita plantillas. |
| **Personal** | Ve la documentación que le ha sido asignada. Cambia estados, comenta y genera respuestas. |

---

## 4. Panel de control

El panel resume la actividad de la organización en tiempo real:

- **Total documentos** en tu ámbito de visibilidad.
- **Pendientes**: recibidos + repartidos + asignados.
- **En proceso** y **Finalizados**.
- **Actividad — Últimos 7 días**: gráfica con el volumen diario.
- **Estados**: distribución completa por estado.
- **Por departamento** y **Actividad reciente**: últimos documentos creados.

---

## 5. Registrar documentación

> Solo los roles **Administrador** y **Recepcionista** pueden registrar nuevos documentos.

1. Pulsa **Registrar entrada** (en el menú lateral o en el panel).
2. Cumplimenta los datos:
   - **Asunto** (obligatorio): descripción breve del documento.
   - **Remitente** (obligatorio): persona o entidad que envía.
   - **Fecha de recepción**: por defecto la fecha actual.
   - **Medio de recepción**: email, físico, fax, web, teléfono, mensajería u otro.
   - **Prioridad**: baja, media, alta o urgente.
   - **Descripción / Notas**: contenido o comentarios adicionales.
   - **Archivo adjunto** (opcional): PDF, imagen, Office hasta 25 MB.
3. Pulsa **Registrar entrada**. El sistema asignará un número con formato `REG-AAAA-NNNNN`.

> Nada más registrar, el documento aparece en estado **Recibido**.
> El siguiente paso lógico es repartirlo al departamento competente.

---

## 6. Listado y búsqueda

La sección **Documentos** muestra todos los documentos accesibles a tu rol, ordenados
por fecha de creación descendente.

- **Búsqueda**: el campo superior busca por número, asunto, remitente y descripción.
- **Filtros**: estado y departamento.
- **Indicadores**: cada fila muestra estado, prioridad y un icono de clip si tiene archivo adjunto.
- Haz clic en cualquier fila para abrir el detalle.

---

## 7. Detalle del documento

La pantalla de detalle se compone de:

- **Cabecera**: número de entrada, asunto, remitente, fecha, estado y prioridad.
- **Datos**: departamento, persona asignada, registrado por, última actualización.
- **Archivo adjunto**: visualización, descarga y reemplazo.
- **Pestañas**: Comentarios · Respuestas · Historial.
- **Panel lateral**: acciones de reparto, asignación, cambio de estado y eliminación.

---

## 8. Reparto a departamentos

Disponible para **Administrador** y **Recepcionista**.

1. Abre el documento.
2. En el panel lateral derecho, sección **Repartir a departamento**, pulsa el departamento competente.
3. El estado cambia a **Repartido**.
4. El jefe del departamento recibirá una notificación automática.

> Puedes cambiar de departamento las veces que sea necesario hasta que se asigne a una persona.
> Cada cambio queda reflejado en el historial.

---

## 9. Asignación a personas

Disponible para **Administrador**, **Recepcionista** y **Jefe de Departamento** (este
último solo dentro de su propio departamento).

1. En el panel lateral, sección **Asignar a persona**, despliega el selector.
2. Elige a la persona destinataria.
3. El estado cambia automáticamente a **Asignado**.
4. La persona asignada recibe una notificación.

---

## 10. Estados y flujo de trabajo

```
RECIBIDO → REPARTIDO → ASIGNADO → EN PROCESO → FINALIZADO → ARCHIVADO
```

Los cambios de estado se realizan desde el panel lateral, sección **Cambiar estado**.
La persona asignada (Personal) puede mover el documento entre estados según avance la
tramitación.

---

## 11. Archivos adjuntos

Cada documento puede tener un archivo adjunto. Para subir o reemplazar uno, usa el
enlace **Subir** / **Reemplazar** en la sección "Archivo adjunto" del detalle. Para
descargarlo, pulsa **Descargar**.

- Tamaño máximo: **25 MB** por archivo.
- Formatos admitidos: PDF, imágenes (PNG, JPG, WebP), Office (DOCX, XLSX, PPTX), TXT, CSV.
- Los archivos se almacenan de forma cifrada en almacenamiento de objetos.

---

## 12. Comentarios e historial

En la pestaña **Comentarios** cualquier persona con acceso al documento puede dejar
notas internas. La pestaña **Historial** registra automáticamente cada acción
realizada (registro, reparto, asignación, cambio de estado, subida de archivo,
creación y firma de respuestas).

---

## 13. Mi bandeja

Acceso rápido a todos los documentos asignados a ti. Útil para Personal y Jefes de
Departamento, equivale a tu "bandeja de tareas pendientes".

---

## 14. Notificaciones

La campana de la barra superior muestra el número de notificaciones sin leer.
Recibirás notificaciones cuando:

- Un documento sea repartido a tu departamento (Jefes).
- Un documento te sea asignado personalmente (Personal/Jefes).

Pulsa la campana para abrir el centro de notificaciones, donde puedes marcar
individualmente o todas como leídas.

---

## 15. Plantillas de respuesta

Las plantillas son modelos reutilizables que aceleran la generación de respuestas.
La sección **Plantillas** muestra las disponibles agrupadas por categoría:

- **Acuse** de recibo
- **Requerimiento** de subsanación
- **Resolución** (concesión / denegación)
- **Notificación** general / citación / convocatoria
- **Informe** técnico
- **Otro**: traslados, comunicaciones internas...

### Marcadores dinámicos

En el cuerpo y en el asunto puedes incluir marcadores con doble llave que se
sustituyen automáticamente al usar la plantilla:

| Marcador | Sustituido por |
|---|---|
| `{{numero_entrada}}` | Nº de registro del documento |
| `{{remitente}}` | Persona/entidad emisora |
| `{{asunto}}` | Asunto del documento |
| `{{fecha_recepcion}}` | Fecha de recepción |
| `{{fecha_actual}}` | Fecha de hoy |
| `{{usuario}}` | Tu nombre completo |
| `{{departamento}}` | Tu departamento |

### Crear o editar una plantilla

1. Ve a **Plantillas** en el menú.
2. Pulsa **Nueva plantilla**.
3. Indica nombre, categoría, asunto y cuerpo.
4. Usa los botones **Insertar** para añadir marcadores rápidamente.
5. Pulsa **Crear**.

> Solo el rol **Administrador** puede eliminar plantillas. Jefes y Recepcionistas pueden crear y editar.

---

## 16. Firma digital

Las respuestas se generan dentro del propio documento, en la pestaña **Respuestas**.
Cada respuesta tiene dos estados: **Borrador** (editable) y **Firmada** (inmutable,
con sello de integridad).

### Crear y firmar una respuesta

1. Abre el documento y selecciona la pestaña **Respuestas**.
2. Pulsa **Nueva respuesta**.
3. Opcional: elige una plantilla. Los marcadores se sustituyen automáticamente.
4. Edita el asunto y el cuerpo si es necesario.
5. Pulsa **Guardar borrador**.
6. Cuando esté lista, pulsa **Firmar**.
7. Dibuja tu firma en el lienzo (ratón, lápiz táctil o dedo).
8. Pulsa **Confirmar firma**.

### Integridad y validez

Al firmar, el sistema:

- Almacena la imagen manuscrita de tu firma.
- Registra tu identidad y la fecha y hora exactas.
- Genera un **hash SHA-256** derivado del contenido íntegro de la respuesta, tu
  identidad y el momento de firma. Cualquier alteración posterior haría que el hash
  dejara de coincidir.
- La respuesta deja de ser editable y queda marcada como **FIRMADA**.

> ⚠️ Esta firma manuscrita digitalizada tiene valor probatorio y de control interno.
> Para resoluciones con plena validez jurídica administrativa puede integrarse en
> una próxima versión la firma con certificado electrónico (DNIe / FNMT).

---

## 17. Imprimir respuesta firmada

En cada respuesta firmada aparece el botón **Imprimir**. Al pulsarlo se abre una
ventana con el documento formateado: membrete Hemsa, contenido íntegro, firma
manuscrita, identidad del firmante, fecha y hash SHA-256 de integridad. Desde el
navegador puedes imprimirla en papel o guardarla como PDF.

---

## 18. Gestión de usuarios

> Solo administradores.

La sección **Usuarios** permite al administrador:

- Crear nuevos usuarios indicando email, nombre, contraseña inicial, rol y departamento.
- Editar nombre, rol, departamento o contraseña de usuarios existentes.
- Eliminar usuarios (no es posible eliminar la propia cuenta).

**Recomendaciones de seguridad:**

- Las contraseñas se almacenan cifradas con bcrypt.
- Tras 5 intentos fallidos consecutivos, la cuenta se bloquea 15 minutos.
- Reasigna el rol de "Personal" a "Jefe" solo cuando proceda y siempre con un departamento concreto.

---

## 19. Buenas prácticas

- Registra la documentación el mismo día de su recepción para mantener trazabilidad cronológica.
- Sé descriptivo en el campo **Asunto**: ayuda a las búsquedas posteriores.
- Adjunta siempre el archivo original (PDF preferentemente) cuando esté disponible.
- Usa la prioridad **Urgente** con criterio: refleja un plazo crítico real.
- Cuando finalices un trámite, cambia el estado a **Finalizado**; archiva al cabo del periodo establecido.
- Genera siempre acuse de recibo automático al recibir documentos formales.
- Firma digitalmente todas las respuestas oficiales antes de imprimirlas o enviarlas.
- Si te asignan un documento por error, comenta el motivo y pide al jefe que lo reasigne.

---

## 20. Preguntas frecuentes

**¿Puedo modificar un documento después de registrarlo?**
La identidad básica (asunto, remitente) no se edita una vez registrada para garantizar
trazabilidad. Sí puedes cambiar departamento, persona asignada, prioridad
indirectamente vía estado, comentar y subir archivos.

**¿Y si registro un documento por error?**
Cambia su estado a **Archivado** con un comentario justificativo, o pide al
administrador/recepcionista que lo elimine. Las eliminaciones quedan registradas en
los logs del sistema.

**¿Cómo recupero mi contraseña?**
Contacta con el administrador. El restablecimiento es manual: se enviará una nueva
contraseña temporal que deberás cambiar al primer inicio.

**¿Qué ocurre si firmo una respuesta y detecto un error?**
Las respuestas firmadas no se editan. Crea una nueva respuesta con la corrección
oportuna, indicando expresamente que sustituye/anula la anterior, fírmala y archívala.
La trazabilidad permite reconstruir cualquier expediente.

**¿Puedo trabajar desde el móvil?**
Sí. La interfaz es responsive y la firma manuscrita funciona con pantalla táctil.
Para volúmenes altos de registro se recomienda el uso desde ordenador.

---

## 21. Soporte

Para cualquier incidencia técnica o de usabilidad, contacta con el administrador del
sistema en tu organización. Aporta el número de expediente afectado, una descripción
del problema y, si es posible, una captura de pantalla.

---

© Hemsa — Servicios Públicos Municipales · San Fernando.
Sistema de Gestión Documental. Manual de usuario v1.0.
