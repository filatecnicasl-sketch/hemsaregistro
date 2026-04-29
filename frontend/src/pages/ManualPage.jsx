import { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import { LOGO_URL, BRAND } from "../lib/brand";
import {
  BookOpen,
  Printer,
  Download,
  ChevronRight,
} from "lucide-react";

const sections = [
  { id: "introduccion", label: "1. Introducción" },
  { id: "acceso", label: "2. Acceso al sistema" },
  { id: "roles", label: "3. Roles y permisos" },
  { id: "panel", label: "4. Panel de control" },
  { id: "registro", label: "5. Registrar documentación" },
  { id: "listado", label: "6. Listado y búsqueda" },
  { id: "detalle", label: "7. Detalle del documento" },
  { id: "reparto", label: "8. Reparto a departamentos" },
  { id: "asignacion", label: "9. Asignación a personas" },
  { id: "estados", label: "10. Estados y flujo de trabajo" },
  { id: "adjuntos", label: "11. Archivos adjuntos" },
  { id: "comentarios", label: "12. Comentarios e historial" },
  { id: "bandeja", label: "13. Mi bandeja" },
  { id: "notificaciones", label: "14. Notificaciones" },
  { id: "plantillas", label: "15. Plantillas de respuesta" },
  { id: "firma", label: "16. Firma digital" },
  { id: "imprimir", label: "17. Imprimir respuesta firmada" },
  { id: "usuarios", label: "18. Gestión de usuarios" },
  { id: "buenas-practicas", label: "19. Buenas prácticas" },
  { id: "faq", label: "20. Preguntas frecuentes" },
  { id: "soporte", label: "21. Soporte" },
];

function H({ id, children, level = 2 }) {
  const Tag = `h${level}`;
  return (
    <Tag
      id={id}
      className={
        level === 2
          ? "font-display text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mt-12 mb-3 scroll-mt-24"
          : "font-display text-lg font-medium text-slate-900 mt-6 mb-2 scroll-mt-24"
      }
    >
      {children}
    </Tag>
  );
}

function P({ children }) {
  return <p className="text-[15px] leading-relaxed text-slate-700 my-3">{children}</p>;
}

function UL({ children }) {
  return <ul className="list-disc list-outside ml-6 my-3 space-y-1.5 text-[15px] text-slate-700 leading-relaxed">{children}</ul>;
}

function OL({ children }) {
  return <ol className="list-decimal list-outside ml-6 my-3 space-y-1.5 text-[15px] text-slate-700 leading-relaxed">{children}</ol>;
}

function Code({ children }) {
  return <code className="font-mono text-[13px] bg-slate-100 px-1.5 py-0.5 rounded-sm text-slate-800">{children}</code>;
}

function Box({ kind = "info", title, children }) {
  const styles = {
    info: "bg-[#E6F8EF] border-[#A7E5C7] text-slate-800",
    warn: "bg-amber-50 border-amber-200 text-amber-900",
    note: "bg-slate-50 border-slate-200 text-slate-700",
  }[kind];
  return (
    <div className={`my-4 border ${styles} px-4 py-3 rounded-sm`}>
      {title && <div className="font-semibold mb-1">{title}</div>}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export default function ManualPage() {
  const [active, setActive] = useState(sections[0].id);
  const observers = useRef([]);

  useEffect(() => {
    observers.current.forEach((o) => o.disconnect());
    observers.current = [];
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(s.id);
          });
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.current.push(obs);
    });
    return () => observers.current.forEach((o) => o.disconnect());
  }, []);

  return (
    <Layout>
      <style>{`
        @media print {
          [data-testid="app-sidebar"], [data-testid="app-topbar"], .manual-toc, .manual-actions { display: none !important; }
          main { padding: 0 !important; }
          body { background: #fff !important; }
          .manual-content { max-width: none !important; }
          h2, h3 { page-break-after: avoid; }
          .page-break { page-break-after: always; }
        }
      `}</style>

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
        {/* TOC */}
        <aside className="manual-toc lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto self-start">
          <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500 font-semibold mb-3 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" /> Índice
          </div>
          <nav className="space-y-0.5">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                data-testid={`manual-toc-${s.id}`}
                className={`block text-sm py-1.5 px-2 rounded-sm transition-colors border-l-2 ${
                  active === s.id
                    ? "border-brand text-slate-900 font-medium bg-slate-50"
                    : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {s.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <article className="manual-content max-w-3xl pb-20">
          <div className="manual-actions flex items-center justify-between gap-3 flex-wrap mb-6">
            <div className="flex items-center gap-3">
              <img src={LOGO_URL} alt="Hemsa" className="w-12 h-12 object-contain" />
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-brand font-semibold">
                  {BRAND.name} · Manual
                </div>
                <h1 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mt-1">
                  Manual de usuario
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                data-testid="manual-download-md"
                href="/manual.md"
                target="_blank"
                rel="noreferrer"
                className="border border-border bg-white hover:bg-slate-50 text-slate-700 px-3 py-2 text-xs rounded-sm flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" /> Markdown
              </a>
              <button
                data-testid="manual-print-btn"
                onClick={() => window.print()}
                className="btn-primary px-3 py-2 text-xs rounded-sm flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" /> Imprimir / PDF
              </button>
            </div>
          </div>

          <P>
            Este manual describe el funcionamiento del <strong>Sistema de Gestión Documental Hemsa</strong>,
            la plataforma para el registro de entrada y reparto de la documentación de
            Hemsa — Servicios Públicos Municipales (San Fernando). Está organizado por
            secciones; usa el índice de la izquierda para navegar.
          </P>

          {/* 1. Introducción */}
          <H id="introduccion">1. Introducción</H>
          <P>
            El sistema centraliza toda la documentación que entra en la organización
            (correo electrónico, registro físico, fax, web, teléfono, mensajería) y
            permite repartirla a los departamentos competentes (Administración,
            Dirección, Técnico, Coordinación), asignarla a personas concretas, anexar
            archivos, comentarla, generar respuestas a partir de plantillas y firmarlas
            digitalmente. Cada documento mantiene una <strong>trazabilidad completa</strong>
            de todas las acciones realizadas.
          </P>
          <Box kind="info" title="Conceptos clave">
            <UL>
              <li><strong>Documento de entrada</strong>: Cualquier escrito recibido en la organización que se registra para su tramitación.</li>
              <li><strong>Reparto</strong>: Asignación del documento al departamento competente.</li>
              <li><strong>Asignación</strong>: Asignación del documento a una persona concreta dentro del departamento.</li>
              <li><strong>Respuesta firmada</strong>: Documento de salida generado a partir de una plantilla y firmado digitalmente.</li>
            </UL>
          </Box>

          {/* 2. Acceso */}
          <H id="acceso">2. Acceso al sistema</H>
          <OL>
            <li>Abre el navegador en la dirección que proporciona Hemsa.</li>
            <li>Introduce tu correo electrónico corporativo y tu contraseña.</li>
            <li>Pulsa <Code>Entrar</Code>.</li>
          </OL>
          <Box kind="warn" title="Bloqueo por intentos fallidos">
            Por seguridad, tras 5 intentos de acceso erróneos consecutivos la cuenta queda
            bloqueada durante 15 minutos. Espera o contacta con el administrador.
          </Box>
          <P>
            Para cerrar sesión usa el menú desplegable de la esquina superior derecha
            (o el botón <Code>Cerrar sesión</Code> en la parte inferior del menú lateral).
          </P>

          {/* 3. Roles */}
          <H id="roles">3. Roles y permisos</H>
          <P>El sistema cuenta con cuatro roles. Cada uno ve y opera sobre lo que le corresponde:</P>
          <div className="overflow-x-auto my-4">
            <table className="min-w-full text-sm border border-border">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left py-2 px-3 font-semibold text-xs uppercase tracking-wider text-slate-600 border-b border-border">Rol</th>
                  <th className="text-left py-2 px-3 font-semibold text-xs uppercase tracking-wider text-slate-600 border-b border-border">Permisos principales</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/40">
                  <td className="py-2 px-3 font-medium">Administrador</td>
                  <td className="py-2 px-3 text-slate-700">Acceso total. Gestiona usuarios. Crea/elimina plantillas.</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="py-2 px-3 font-medium">Recepcionista</td>
                  <td className="py-2 px-3 text-slate-700">Registra entradas. Reparte a departamentos. Ve toda la documentación.</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="py-2 px-3 font-medium">Jefe de Departamento</td>
                  <td className="py-2 px-3 text-slate-700">Ve la documentación de su departamento. Asigna a personas de su equipo. Crea/edita plantillas.</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-medium">Personal</td>
                  <td className="py-2 px-3 text-slate-700">Ve la documentación que le ha sido asignada. Cambia estados, comenta y genera respuestas.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 4. Panel */}
          <H id="panel">4. Panel de control</H>
          <P>
            El panel resume la actividad de la organización en tiempo real:
          </P>
          <UL>
            <li><strong>Total documentos</strong> en tu ámbito de visibilidad.</li>
            <li><strong>Pendientes</strong>: recibidos + repartidos + asignados.</li>
            <li><strong>En proceso</strong> y <strong>Finalizados</strong>.</li>
            <li><strong>Actividad — Últimos 7 días</strong>: gráfica con el volumen diario.</li>
            <li><strong>Estados</strong>: distribución completa por estado.</li>
            <li><strong>Por departamento</strong> y <strong>Actividad reciente</strong>: últimos documentos creados.</li>
          </UL>

          {/* 5. Registro */}
          <H id="registro">5. Registrar documentación</H>
          <P>Solo los roles <strong>Administrador</strong> y <strong>Recepcionista</strong> pueden registrar nuevos documentos.</P>
          <OL>
            <li>Pulsa <Code>Registrar entrada</Code> (en el menú lateral o en el panel).</li>
            <li>Cumplimenta los datos:
              <UL>
                <li><strong>Asunto</strong> (obligatorio): descripción breve del documento.</li>
                <li><strong>Remitente</strong> (obligatorio): persona o entidad que envía el documento.</li>
                <li><strong>Fecha de recepción</strong>: por defecto la fecha actual.</li>
                <li><strong>Medio de recepción</strong>: email, físico, fax, web, teléfono, mensajería u otro.</li>
                <li><strong>Prioridad</strong>: baja, media, alta o urgente.</li>
                <li><strong>Descripción / Notas</strong>: contenido o comentarios adicionales.</li>
                <li><strong>Archivo adjunto</strong> (opcional): PDF, imagen, Office hasta 25 MB.</li>
              </UL>
            </li>
            <li>Pulsa <Code>Registrar entrada</Code>. El sistema asignará un número de entrada con formato <Code>REG-AAAA-NNNNN</Code>.</li>
          </OL>
          <Box kind="info">
            Nada más registrar, el documento aparece en estado <strong>Recibido</strong>.
            El siguiente paso lógico es repartirlo al departamento competente.
          </Box>

          {/* 6. Listado */}
          <H id="listado">6. Listado y búsqueda</H>
          <P>
            La sección <Code>Documentos</Code> muestra todos los documentos accesibles a tu rol,
            ordenados por fecha de creación descendente.
          </P>
          <UL>
            <li><strong>Búsqueda</strong>: el campo superior busca por número, asunto, remitente y descripción.</li>
            <li><strong>Filtros</strong>: estado y departamento.</li>
            <li><strong>Indicadores</strong>: cada fila muestra el estado, la prioridad y un icono de clip si tiene archivo adjunto.</li>
            <li>Haz clic en cualquier fila para abrir el detalle.</li>
          </UL>

          {/* 7. Detalle */}
          <H id="detalle">7. Detalle del documento</H>
          <P>La pantalla de detalle se compone de:</P>
          <UL>
            <li><strong>Cabecera</strong>: número de entrada, asunto, remitente, fecha, estado y prioridad.</li>
            <li><strong>Datos</strong>: departamento asignado, persona asignada, registrado por, última actualización.</li>
            <li><strong>Archivo adjunto</strong>: visualización, descarga y reemplazo (subir nuevo).</li>
            <li><strong>Pestañas</strong>: Comentarios · Respuestas · Historial.</li>
            <li><strong>Panel lateral</strong>: acciones de reparto, asignación, cambio de estado y eliminación.</li>
          </UL>

          {/* 8. Reparto */}
          <H id="reparto">8. Reparto a departamentos</H>
          <P>Disponible para <strong>Administrador</strong> y <strong>Recepcionista</strong>.</P>
          <OL>
            <li>Abre el documento.</li>
            <li>En el panel lateral derecho, sección <Code>Repartir a departamento</Code>, pulsa el departamento competente: Administración, Dirección, Técnico o Coordinación.</li>
            <li>El estado cambia a <strong>Repartido</strong>.</li>
            <li>El jefe del departamento recibirá una notificación automática.</li>
          </OL>
          <Box kind="note">
            Puedes cambiar de departamento las veces que sea necesario hasta que se asigne
            a una persona. Cada cambio queda reflejado en el historial.
          </Box>

          {/* 9. Asignación */}
          <H id="asignacion">9. Asignación a personas</H>
          <P>
            Disponible para <strong>Administrador</strong>, <strong>Recepcionista</strong> y
            <strong> Jefe de Departamento</strong> (este último solo dentro de su propio
            departamento).
          </P>
          <OL>
            <li>En el panel lateral, sección <Code>Asignar a persona</Code>, despliega el selector.</li>
            <li>Elige a la persona destinataria.</li>
            <li>El estado cambia automáticamente a <strong>Asignado</strong>.</li>
            <li>La persona asignada recibe una notificación.</li>
          </OL>

          {/* 10. Estados */}
          <H id="estados">10. Estados y flujo de trabajo</H>
          <P>El ciclo de vida típico de un documento:</P>
          <div className="my-4 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-medium">
            {[
              { k: "recibido", l: "RECIBIDO" },
              { k: "repartido", l: "REPARTIDO" },
              { k: "asignado", l: "ASIGNADO" },
              { k: "en_proceso", l: "EN PROCESO" },
              { k: "finalizado", l: "FINALIZADO" },
              { k: "archivado", l: "ARCHIVADO" },
            ].map((s, i) => (
              <div
                key={s.k}
                className={`px-3 py-2 text-center rounded-sm badge-${s.k} flex items-center justify-center gap-1`}
              >
                {s.l} {i < 5 && <ChevronRight className="w-3 h-3 hidden sm:inline" />}
              </div>
            ))}
          </div>
          <P>
            Los cambios de estado se realizan desde el panel lateral, sección{" "}
            <Code>Cambiar estado</Code>. La persona asignada (Personal) puede mover el
            documento entre estados según avance la tramitación.
          </P>

          {/* 11. Adjuntos */}
          <H id="adjuntos">11. Archivos adjuntos</H>
          <P>
            Cada documento puede tener un archivo adjunto. Para subir o reemplazar uno,
            usa el enlace <Code>Subir</Code> / <Code>Reemplazar</Code> en la sección
            "Archivo adjunto" del detalle. Para descargarlo, pulsa{" "}
            <Code>Descargar</Code>.
          </P>
          <UL>
            <li>Tamaño máximo: <strong>25 MB</strong> por archivo.</li>
            <li>Formatos admitidos: PDF, imágenes (PNG, JPG, WebP), Office (DOCX, XLSX, PPTX), TXT, CSV, etc.</li>
            <li>Los archivos se almacenan de forma cifrada en almacenamiento de objetos.</li>
          </UL>

          {/* 12. Comentarios */}
          <H id="comentarios">12. Comentarios e historial</H>
          <P>
            En la pestaña <Code>Comentarios</Code> cualquier persona con acceso al documento
            puede dejar notas internas. La pestaña <Code>Historial</Code> registra
            automáticamente cada acción realizada (registro, reparto, asignación, cambio
            de estado, subida de archivo, creación y firma de respuestas).
          </P>

          {/* 13. Bandeja */}
          <H id="bandeja">13. Mi bandeja</H>
          <P>
            Acceso rápido a todos los documentos asignados a ti. Útil para Personal y
            Jefes de Departamento, equivale a tu "bandeja de tareas pendientes".
          </P>

          {/* 14. Notificaciones */}
          <H id="notificaciones">14. Notificaciones</H>
          <P>
            La campana de la barra superior muestra el número de notificaciones sin leer.
            Recibirás notificaciones cuando:
          </P>
          <UL>
            <li>Un documento sea repartido a tu departamento (Jefes).</li>
            <li>Un documento te sea asignado personalmente (Personal/Jefes).</li>
          </UL>
          <P>
            Pulsa la campana para abrir el centro de notificaciones, donde puedes
            marcar individualmente o todas como leídas.
          </P>

          {/* 15. Plantillas */}
          <H id="plantillas">15. Plantillas de respuesta</H>
          <P>
            Las plantillas son modelos reutilizables que aceleran la generación de
            respuestas. La sección <Code>Plantillas</Code> muestra las disponibles
            agrupadas por categoría:
          </P>
          <UL>
            <li><strong>Acuse</strong> de recibo</li>
            <li><strong>Requerimiento</strong> de subsanación</li>
            <li><strong>Resolución</strong> (concesión / denegación)</li>
            <li><strong>Notificación</strong> general / citación / convocatoria</li>
            <li><strong>Informe</strong> técnico</li>
            <li><strong>Otro</strong>: traslados, comunicaciones internas...</li>
          </UL>
          <H id="plantillas-marcadores" level={3}>Marcadores dinámicos</H>
          <P>
            En el cuerpo y en el asunto puedes incluir marcadores con doble llave que
            se sustituyen automáticamente al usar la plantilla:
          </P>
          <div className="my-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            {[
              ["{{numero_entrada}}", "Nº de registro del documento"],
              ["{{remitente}}", "Persona/entidad emisora"],
              ["{{asunto}}", "Asunto del documento"],
              ["{{fecha_recepcion}}", "Fecha de recepción"],
              ["{{fecha_actual}}", "Fecha de hoy"],
              ["{{usuario}}", "Tu nombre completo"],
              ["{{departamento}}", "Tu departamento"],
            ].map(([k, v]) => (
              <div key={k} className="border border-border/60 px-3 py-2 bg-slate-50/60">
                <Code>{k}</Code>
                <div className="text-xs text-slate-600 mt-1">{v}</div>
              </div>
            ))}
          </div>
          <H id="plantillas-crear" level={3}>Crear o editar una plantilla</H>
          <OL>
            <li>Ve a <Code>Plantillas</Code> en el menú.</li>
            <li>Pulsa <Code>Nueva plantilla</Code>.</li>
            <li>Indica nombre, categoría, asunto y cuerpo.</li>
            <li>Usa los botones <Code>Insertar</Code> para añadir marcadores rápidamente.</li>
            <li>Pulsa <Code>Crear</Code>.</li>
          </OL>
          <Box kind="note">
            Solo el rol <strong>Administrador</strong> puede eliminar plantillas. Jefes y
            Recepcionistas pueden crear y editar.
          </Box>

          {/* 16. Firma digital */}
          <H id="firma">16. Firma digital</H>
          <P>
            Las respuestas se generan dentro del propio documento, en la pestaña{" "}
            <Code>Respuestas</Code>. Cada respuesta tiene dos estados: <strong>Borrador</strong>
            (editable) y <strong>Firmada</strong> (inmutable, con sello de integridad).
          </P>
          <H id="firma-crear" level={3}>Crear y firmar una respuesta</H>
          <OL>
            <li>Abre el documento y selecciona la pestaña <Code>Respuestas</Code>.</li>
            <li>Pulsa <Code>Nueva respuesta</Code>.</li>
            <li>Opcional: elige una plantilla. Los marcadores se sustituyen automáticamente.</li>
            <li>Edita el asunto y el cuerpo si es necesario.</li>
            <li>Pulsa <Code>Guardar borrador</Code>.</li>
            <li>Cuando esté lista, pulsa <Code>Firmar</Code>.</li>
            <li>Dibuja tu firma en el lienzo (con ratón, lápiz táctil o dedo).</li>
            <li>Pulsa <Code>Confirmar firma</Code>.</li>
          </OL>
          <H id="firma-integridad" level={3}>Integridad y validez</H>
          <P>
            Al firmar, el sistema:
          </P>
          <UL>
            <li>Almacena la imagen manuscrita de tu firma.</li>
            <li>Registra tu identidad y la fecha y hora exactas.</li>
            <li>Genera un <strong>hash SHA-256</strong> derivado del contenido íntegro de la
              respuesta, tu identidad y el momento de firma. Cualquier alteración
              posterior haría que el hash dejara de coincidir.</li>
            <li>La respuesta deja de ser editable y queda marcada como <strong>FIRMADA</strong>.</li>
          </UL>
          <Box kind="warn" title="Aviso legal">
            Esta firma manuscrita digitalizada tiene valor probatorio y de control
            interno. Para resoluciones con plena validez jurídica administrativa puede
            integrarse en una próxima versión la firma con certificado electrónico
            (DNIe / FNMT).
          </Box>

          {/* 17. Imprimir */}
          <H id="imprimir">17. Imprimir respuesta firmada</H>
          <P>
            En cada respuesta firmada aparece el botón <Code>Imprimir</Code>. Al
            pulsarlo se abre una ventana con el documento formateado con membrete
            Hemsa, contenido íntegro de la respuesta, firma manuscrita, identidad del
            firmante, fecha y hash SHA-256 de integridad. Desde el navegador puedes
            imprimirla en papel o guardarla como PDF (<Code>Guardar como PDF</Code> en el
            cuadro de impresión del navegador).
          </P>

          {/* 18. Usuarios */}
          <H id="usuarios">18. Gestión de usuarios <span className="text-sm text-slate-500 font-normal">(solo administradores)</span></H>
          <P>La sección <Code>Usuarios</Code> permite al administrador:</P>
          <UL>
            <li>Crear nuevos usuarios indicando email, nombre, contraseña inicial, rol y departamento.</li>
            <li>Editar nombre, rol, departamento o contraseña de usuarios existentes.</li>
            <li>Eliminar usuarios (no es posible eliminar la propia cuenta).</li>
          </UL>
          <Box kind="info" title="Recomendaciones de seguridad">
            <UL>
              <li>Las contraseñas se almacenan cifradas con bcrypt.</li>
              <li>Tras 5 intentos fallidos consecutivos, la cuenta se bloquea 15 minutos.</li>
              <li>Reasigna el rol de "Personal" a "Jefe" solo cuando proceda y siempre con un departamento concreto.</li>
            </UL>
          </Box>

          {/* 19. Buenas prácticas */}
          <H id="buenas-practicas">19. Buenas prácticas</H>
          <UL>
            <li>Registra la documentación el mismo día de su recepción para mantener trazabilidad cronológica.</li>
            <li>Sé descriptivo en el campo Asunto: ayuda a las búsquedas posteriores.</li>
            <li>Adjunta siempre el archivo original (PDF preferentemente) cuando esté disponible.</li>
            <li>Usa la prioridad <strong>Urgente</strong> con criterio: refleja un plazo crítico real, no la importancia subjetiva.</li>
            <li>Cuando finalices un trámite, cambia el estado a <strong>Finalizado</strong>; archiva al cabo del periodo establecido.</li>
            <li>Genera siempre acuse de recibo automático al recibir documentos formales — refuerza la transparencia.</li>
            <li>Firma digitalmente todas las respuestas oficiales antes de imprimirlas o enviarlas.</li>
            <li>Si te asignan un documento por error, comenta el motivo y pide al jefe que lo reasigne.</li>
          </UL>

          {/* 20. FAQ */}
          <H id="faq">20. Preguntas frecuentes</H>
          <H id="faq-1" level={3}>¿Puedo modificar un documento después de registrarlo?</H>
          <P>
            La identidad básica del documento (asunto, remitente) no se edita una vez
            registrada para garantizar trazabilidad. Sí puedes cambiar departamento,
            persona asignada, prioridad indirectamente vía estado, comentar y subir
            archivos.
          </P>
          <H id="faq-2" level={3}>¿Y si registro un documento por error?</H>
          <P>
            Cambia su estado a <strong>Archivado</strong> con un comentario justificativo, o pide
            al administrador/recepcionista que lo elimine. Las eliminaciones quedan
            registradas en los logs del sistema.
          </P>
          <H id="faq-3" level={3}>¿Cómo recupero mi contraseña?</H>
          <P>
            Contacta con el administrador. Por seguridad, el restablecimiento de
            contraseñas en el panel administrativo es manual; se enviará una nueva
            contraseña temporal que deberás cambiar al primer inicio.
          </P>
          <H id="faq-4" level={3}>¿Qué ocurre si firmo una respuesta y detecto un error?</H>
          <P>
            Las respuestas firmadas no se editan. Crea una nueva respuesta con la
            corrección oportuna, indicando expresamente que sustituye/anula la
            anterior, fírmala y archívala. La trazabilidad permite reconstruir
            cualquier expediente.
          </P>
          <H id="faq-5" level={3}>¿Puedo trabajar desde el móvil?</H>
          <P>
            Sí. La interfaz es responsive y la firma manuscrita funciona con pantalla
            táctil. Para volúmenes altos de registro se recomienda el uso desde
            ordenador.
          </P>

          {/* 21. Soporte */}
          <H id="soporte">21. Soporte</H>
          <P>
            Para cualquier incidencia técnica o de usabilidad, contacta con el
            administrador del sistema en tu organización. Aporta el número de
            expediente afectado, una descripción del problema y, si es posible, una
            captura de pantalla.
          </P>

          <div className="mt-16 pt-8 border-t border-border text-xs text-slate-500">
            © Hemsa — Servicios Públicos Municipales · San Fernando.
            Sistema de Gestión Documental. Manual de usuario v1.0.
          </div>
        </article>
      </div>
    </Layout>
  );
}
