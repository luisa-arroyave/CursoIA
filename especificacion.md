# Deployment Explorer

## Datos y especificacion para construir un dashboard comparativo

**Version:** 1.0\
**Fecha de verificacion:** 18 de noviembre de 2026\
**Audiencia:** directivos y trabajadores del conocimiento sin
experiencia previa en hosting o despliegue.\
**Proposito:** comparar plataformas para publicar y operar aplicaciones
digitales, y ayudar a elegir una alternativa segun las necesidades del
proyecto.

------------------------------------------------------------------------

## 1. Objetivo del dashboard

Crear una aplicacion web interactiva en espanol que permita:

1.  Explorar seis plataformas: ChatGPT Sites, Lovable, Vercel, GitHub
    Pages, Render y Cloudflare.
2.  Compararlas por proposito, crecimiento, dominio propio, acceso,
    seguridad, datos, usuarios, archivos, actividad, propiedad del
    codigo, flexibilidad y costo.
3.  Filtrar las plataformas segun lo que el usuario necesita.
4.  Seleccionar hasta tres plataformas y ver una comparacion lado a
    lado.
5.  Obtener una recomendacion inicial a partir del tipo de aplicacion
    que se quiere publicar.

**Principio editorial:** explicar las capacidades en lenguaje de
negocio. Evitar terminos tecnicos cuando exista una expresion sencilla.
Por ejemplo: usar "guardar informacion" en vez de "persistencia", "quien
puede entrar" en vez de "control de acceso", y "publicar una nueva
version" en vez de "deployment".

**No usar emojis.** Se pueden utilizar iconos de una biblioteca como
Lucide, siempre que sean discretos y consistentes.

------------------------------------------------------------------------

## 2. Como leer los datos

Los indicadores describen donde vive una capacidad y cuanto trabajo
adicional suele requerir. No son calificaciones de calidad ni una
clasificacion absoluta de las plataformas.

  -----------------------------------------------------------------------
  Estado                              Significado para el usuario
  ----------------------------------- -----------------------------------
  `included`                          La plataforma ofrece la capacidad
                                      como parte de su entorno. Puede
                                      tener limites o cargos por uso.

  `configurable`                      Se puede lograr, pero hay que
                                      configurarlo o conectar otro
                                      servicio.

  `external`                          Normalmente se resuelve con un
                                      proveedor externo.

  `limited`                           Existe, pero tiene limites de uso,
                                      compatibilidad o alcance.

  `not_native`                        La plataforma no ofrece esa
                                      capacidad por si sola.

  `conditional`                       Depende del plan, la cuenta, la
                                      region o la disponibilidad.
  -----------------------------------------------------------------------

### Criterios importantes

-   **Escala no es una nota:** una plataforma puede soportar mucho
    trafico, pero el resultado depende del diseño de la aplicacion, los
    servicios conectados y el presupuesto.
-   **Seguridad no es una garantia:** disponer de firewall, inicio de
    sesion o permisos no significa que una aplicacion este segura por
    defecto.
-   **Dominio propio no significa privacidad:** una direccion como
    `app.empresa.com` no restringe quien puede entrar.
-   **Repositorio privado no significa sitio privado:** GitHub Pages
    publica sitios accesibles desde internet, salvo configuraciones
    empresariales especificas.
-   **Propiedad del codigo no equivale a portabilidad completa:**
    tambien hay que considerar bases de datos, archivos, claves,
    configuraciones y servicios externos.
-   **Los precios no son directamente comparables:** unas plataformas
    cobran suscripcion, otras por usuario, consumo, recursos o
    combinacion de estos.

------------------------------------------------------------------------

## 3. Datos comparativos para la aplicacion

El siguiente bloque es la fuente principal de datos. Mantener las claves
y los valores de `status` para que Codex pueda utilizarlos directamente.

``` json
{
  "metadata": {
    "title": "Deployment Explorer",
    "version": "1.0",
    "verified_on": "2026-11-18",
    "currency": "USD",
    "language": "es",
    "audience": "Directivos y trabajadores del conocimiento",
    "methodology": "Comparacion cualitativa basada en documentacion oficial. No representa una prueba de rendimiento ni una auditoria de seguridad.",
    "platform_count": 6
  },
  "status_legend": {
    "included": {
      "label": "Incluido",
      "description": "La plataforma ofrece esta capacidad en su propio entorno."
    },
    "configurable": {
      "label": "Configurable",
      "description": "Se puede conseguir con configuracion o conectando otro servicio."
    },
    "external": {
      "label": "Servicio externo",
      "description": "Normalmente requiere un proveedor o componente independiente."
    },
    "limited": {
      "label": "Con limites",
      "description": "Existe, pero tiene limites de uso, compatibilidad o alcance."
    },
    "not_native": {
      "label": "No incluido",
      "description": "No es una capacidad propia de la plataforma."
    },
    "conditional": {
      "label": "Depende del plan",
      "description": "La disponibilidad depende del plan, cuenta, region o habilitacion."
    }
  },
  "platforms": [
    {
      "id": "chatgpt_sites",
      "name": "ChatGPT Sites",
      "short_name": "Sites",
      "category": "Crear y publicar",
      "purpose": "Crear, revisar, publicar y compartir sitios web interactivos y aplicaciones ligeras desde ChatGPT.",
      "default_address": "URL generada por ChatGPT Sites",
      "custom_domain": {
        "status": "conditional",
        "label": "Disponible donde la funcion este habilitada",
        "detail": "El propietario debe tener un dominio y poder modificar sus registros DNS."
      },
      "ideal_for": [
        "Dashboards de consulta",
        "Buscadores de documentos",
        "Herramientas internas ligeras",
        "Centros de recursos",
        "Prototipos interactivos"
      ],
      "not_ideal_for": [
        "Aplicaciones que necesitan cualquier framework o servicio sin restricciones",
        "Sistemas con procesos de fondo no compatibles",
        "Aplicaciones que procesen datos especialmente sensibles sin una revision previa"
      ],
      "scale": {
        "label": "Aplicaciones ligeras",
        "detail": "Puede alojar aplicaciones interactivas con datos y archivos. La capacidad depende de las cuotas, el entorno compatible y las funciones disponibles.",
        "documented_limits": [
          "La base de datos de cada Site admite hasta 10 GB.",
          "El uso de ejecucion, alojamiento, trafico y almacenamiento esta sujeto a limites compartidos.",
          "Algunos frameworks, redes privadas, bases de datos y servicios en segundo plano pueden no ser compatibles."
        ]
      },
      "access_control": {
        "status": "included",
        "label": "Privado por defecto",
        "detail": "Se puede compartir con personas seleccionadas, grupos, el espacio de trabajo o el publico cuando la configuracion lo permite. En Enterprise, la publicacion publica esta desactivada por defecto y requiere habilitacion administrativa.",
        "application_login_note": "El acceso al Site y el inicio de sesion dentro de la aplicacion son controles distintos. Revisar ambos."
      },
      "security": {
        "status": "limited",
        "label": "Controles de acceso del entorno",
        "detail": "Incluye opciones de privacidad y permisos para compartir. Las aplicaciones conectadas utilizan los permisos propios de cada visitante.",
        "caution": "No asumir que sustituye una arquitectura de seguridad empresarial. Revisar los datos permitidos, el entorno y las politicas del espacio de trabajo."
      },
      "backend_components": {
        "database": {
          "status": "included",
          "label": "Base de datos incluida",
          "detail": "Hasta 10 GB por Site."
        },
        "user_accounts": {
          "status": "limited",
          "label": "Acceso y autenticacion compatibles",
          "detail": "Incluye controles de acceso al Site y funciones de inicio de sesion compatibles con el entorno. No asumir que equivale a cualquier sistema empresarial de identidad."
        },
        "file_storage": {
          "status": "included",
          "label": "Almacenamiento de archivos",
          "detail": "Disponible con limites de uso y almacenamiento compartidos."
        },
        "background_work": {
          "status": "limited",
          "label": "Procesos adicionales segun compatibilidad",
          "detail": "Algunos servicios en segundo plano no son compatibles. Los tuneles a servicios privados estan disponibles para espacios de trabajo elegibles."
        }
      },
      "activity_records": {
        "status": "limited",
        "label": "Datos operativos del Site",
        "detail": "Puede incluir registros y datos operativos para alojar, proteger y depurar. No asumir que es una auditoria de negocio completa."
      },
      "code_and_portability": {
        "status": "configurable",
        "label": "Codigo exportable con Codex",
        "detail": "Se puede pedir a Codex que exporte el codigo. La base de datos y los archivos cargados no se respaldan juntos con el codigo; hay que tratarlos por separado."
      },
      "technology_flexibility": {
        "label": "Entorno compatible con Sites",
        "detail": "Permite aplicaciones web ligeras, pero algunos frameworks, servicios, bases de datos y patrones de alojamiento pueden no estar admitidos."
      },
      "publishing": {
        "label": "Crear, revisar y publicar desde ChatGPT",
        "detail": "Los nuevos Sites son privados por defecto. Se revisa una vista previa antes de publicar y se elige la audiencia."
      },
      "pricing": {
        "entry": "Incluido en planes elegibles de ChatGPT Plus, Pro, Business y Enterprise.",
        "model": "El uso de Codex para crear o editar se contabiliza segun el plan. El uso de ejecucion, alojamiento, trafico y almacenamiento se contabiliza por separado y esta sujeto a limites.",
        "enterprise_note": "Actualmente, el alojamiento de Sites en espacios Enterprise esta exento de cargos; los limites de uso y almacenamiento siguen aplicando.",
        "commercial_note": "Revisar permisos del espacio de trabajo, politicas internas y condiciones de uso antes de publicar."
      },
      "fit_tags": [
        "dashboard",
        "documentos",
        "herramienta_ligera",
        "aplicacion_interna",
        "chatgpt",
        "sin_backend_complejo"
      ],
      "source_ids": [
        "openai_sites",
        "openai_sites_workspace",
        "openai_sites_responsibilities"
      ]
    },
    {
      "id": "lovable",
      "name": "Lovable",
      "short_name": "Lovable",
      "category": "Crear aplicaciones",
      "purpose": "Construir, alojar y publicar aplicaciones web completas mediante instrucciones en lenguaje natural.",
      "default_address": "*.lovable.app",
      "custom_domain": {
        "status": "conditional",
        "label": "Disponible en planes de pago",
        "detail": "Se puede comprar un dominio desde Lovable o conectar uno existente."
      },
      "ideal_for": [
        "Portales internos",
        "Sistemas de reservas",
        "CRM y herramientas comerciales",
        "LMS y centros de aprendizaje",
        "Aplicaciones con usuarios, datos y archivos",
        "Productos SaaS que empiezan con una arquitectura integrada"
      ],
      "not_ideal_for": [
        "Proyectos que requieren libertad total sobre cualquier tecnologia o infraestructura",
        "Equipos que necesitan administrar cada componente en proveedores separados desde el primer dia"
      ],
      "scale": {
        "label": "Aplicaciones de produccion",
        "detail": "El alojamiento escala con el trafico. Se puede ajustar el tamano de la instancia y el almacenamiento de la base de datos.",
        "documented_limits": [
          "El crecimiento depende de la arquitectura, la configuracion de la base de datos y los creditos o recursos contratados.",
          "El uso de Cloud y de funciones de IA puede generar consumo adicional."
        ]
      },
      "access_control": {
        "status": "conditional",
        "label": "Usuarios, roles y permisos",
        "detail": "Pro incluye roles y permisos. Business agrega publicacion restringida a miembros del espacio de trabajo y SSO. Enterprise agrega controles organizacionales avanzados."
      },
      "security": {
        "status": "conditional",
        "label": "Controles segun el plan",
        "detail": "Business incluye Security Center y SSO. Enterprise agrega registros de auditoria, SCIM, controles de datos sensibles y analisis de seguridad programados.",
        "caution": "Las comprobaciones automatizadas de seguridad no equivalen por si solas a una auditoria integral de la aplicacion."
      },
      "backend_components": {
        "database": {
          "status": "included",
          "label": "Base de datos integrada",
          "detail": "Backend administrado basado en la tecnologia abierta de Supabase."
        },
        "user_accounts": {
          "status": "included",
          "label": "Registro e inicio de sesion",
          "detail": "Autenticacion y administracion de usuarios integradas."
        },
        "file_storage": {
          "status": "included",
          "label": "Archivos integrados",
          "detail": "Almacenamiento de documentos, imagenes y otros archivos."
        },
        "background_work": {
          "status": "included",
          "label": "Funciones y tareas",
          "detail": "Funciones de servidor, webhooks y tareas programadas."
        }
      },
      "activity_records": {
        "status": "conditional",
        "label": "Registros tecnicos y auditoria segun plan",
        "detail": "Incluye logs del backend. Los registros de auditoria organizacional son una funcion Enterprise."
      },
      "code_and_portability": {
        "status": "included",
        "label": "Codigo propio y sincronizacion con GitHub",
        "detail": "El usuario es propietario del codigo. La sincronizacion con GitHub es bidireccional. La descarga directa del codigo esta disponible en planes de pago."
      },
      "technology_flexibility": {
        "label": "Stack web guiado",
        "detail": "Lovable genera una arquitectura web definida. El codigo puede exportarse y continuarse fuera de Lovable, pero la plataforma no es un alojamiento universal para cualquier tipo de software."
      },
      "publishing": {
        "label": "Publicar desde Lovable",
        "detail": "Lovable aloja la aplicacion y su backend integrado. Los cambios se pueden sincronizar con GitHub."
      },
      "pricing": {
        "entry": "Free: US$0. Pro: US$25/mes. Business: US$50/mes. Enterprise: precio a medida.",
        "model": "Los planes incluyen creditos para construir y usar Cloud. El uso de alojamiento y funciones de IA consume creditos; aplicaciones con trafico o volumen significativo pueden requerir creditos adicionales.",
        "commercial_note": "Revisar el plan, el consumo de Cloud, las funciones empresariales y los requisitos de la organizacion."
      },
      "fit_tags": [
        "aplicacion_interna",
        "usuarios",
        "base_de_datos",
        "archivos",
        "crm",
        "reservas",
        "saas",
        "construccion_ia"
      ],
      "source_ids": [
        "lovable_backend",
        "lovable_github",
        "lovable_domains",
        "lovable_pricing"
      ]
    },
    {
      "id": "vercel",
      "name": "Vercel",
      "short_name": "Vercel",
      "category": "Publicar y operar",
      "purpose": "Publicar aplicaciones creadas con diferentes herramientas y mantener un flujo organizado de actualizaciones.",
      "default_address": "*.vercel.app",
      "custom_domain": {
        "status": "included",
        "label": "Si",
        "detail": "Permite conectar dominios propios. El plan Pro incluye dominio personalizado."
      },
      "ideal_for": [
        "Aplicaciones creadas con Codex, Lovable u otras herramientas",
        "Productos web y SaaS",
        "Aplicaciones con alto trafico",
        "Equipos que trabajan con GitHub y revisan cambios antes de publicar",
        "Proyectos que requieren libertad para elegir servicios y tecnologias"
      ],
      "not_ideal_for": [
        "Equipos que esperan que la plataforma incluya automaticamente una base de datos empresarial y toda la gestion de usuarios",
        "Proyectos comerciales alojados en el plan Hobby"
      ],
      "scale": {
        "label": "Aplicaciones web de alto trafico",
        "detail": "Ofrece red global, distribucion de contenido y funciones que pueden crecer con la demanda. El resultado depende de la arquitectura, los limites del plan y el consumo.",
        "documented_limits": [
          "El plan Hobby tiene limites de uso y es para proyectos personales y no comerciales.",
          "El plan Pro incluye creditos de uso; el consumo adicional se factura segun los recursos utilizados.",
          "Las garantias y capacidades empresariales avanzadas dependen del plan Enterprise."
        ]
      },
      "access_control": {
        "status": "configurable",
        "label": "Proteccion del sitio y de las versiones de prueba",
        "detail": "Vercel Authentication puede restringir despliegues de prueba. Pro y Enterprise permiten proteger tambien los dominios de produccion. El inicio de sesion y los permisos de los usuarios de la aplicacion se implementan por separado."
      },
      "security": {
        "status": "included",
        "label": "Proteccion de infraestructura",
        "detail": "Incluye mitigacion DDoS y firewall. Permite reglas de proteccion y observabilidad. Funciones de gobierno como SSO, SCIM y auditoria avanzada dependen del plan.",
        "caution": "El firewall de la plataforma no sustituye la autenticacion, autorizacion por roles ni validacion de datos dentro de la aplicacion."
      },
      "backend_components": {
        "database": {
          "status": "external",
          "label": "Conectar una base de datos",
          "detail": "Se conecta con proveedores de bases de datos y servicios disponibles en el ecosistema de integraciones."
        },
        "user_accounts": {
          "status": "external",
          "label": "Conectar autenticacion",
          "detail": "Normalmente se utiliza un proveedor de identidad o autenticacion independiente."
        },
        "file_storage": {
          "status": "configurable",
          "label": "Almacenamiento propio o conectado",
          "detail": "Puede utilizar Vercel Blob o servicios externos."
        },
        "background_work": {
          "status": "configurable",
          "label": "Funciones y servicios adicionales",
          "detail": "Ofrece funciones de servidor; procesos duraderos o flujos complejos pueden requerir productos o servicios adicionales."
        }
      },
      "activity_records": {
        "status": "conditional",
        "label": "Registros tecnicos y observabilidad",
        "detail": "Incluye logs y herramientas de observabilidad. Los registros de auditoria organizacional y algunas capacidades de gobierno dependen del plan."
      },
      "code_and_portability": {
        "status": "included",
        "label": "Codigo en repositorio propio",
        "detail": "Vercel despliega desde GitHub u otros flujos compatibles. El codigo permanece en el repositorio del equipo."
      },
      "technology_flexibility": {
        "label": "Amplia compatibilidad web",
        "detail": "Admite numerosos frameworks web y funciones de servidor. No significa que pueda ejecutar cualquier tipo de programa o servidor sin restricciones."
      },
      "publishing": {
        "label": "Publicacion automatica desde Git",
        "detail": "Al actualizar el repositorio se puede generar una nueva version. Tambien crea versiones de prueba para ramas y cambios en revision."
      },
      "pricing": {
        "entry": "Hobby: US$0, solo personal y no comercial. Pro: desde US$20/mes, con US$20 de credito de uso incluido. Enterprise: precio a medida.",
        "model": "El uso por encima de los recursos incluidos puede generar cargos adicionales. Revisar consumo, miembros y limites antes de usarlo en produccion.",
        "commercial_note": "No usar Hobby para aplicaciones comerciales o de la organizacion. Evaluar Pro o Enterprise y las politicas de TI."
      },
      "fit_tags": [
        "saas",
        "aplicacion_empresarial",
        "alto_trafico",
        "github",
        "codex",
        "control_tecnologico",
        "dominio",
        "previsualizaciones"
      ],
      "source_ids": [
        "vercel_pricing",
        "vercel_deployment_protection",
        "vercel_firewall",
        "vercel_domains",
        "vercel_plans"
      ]
    },
    {
      "id": "github_pages",
      "name": "GitHub Pages",
      "short_name": "GitHub Pages",
      "category": "Publicar paginas",
      "purpose": "Publicar paginas web directamente desde un repositorio de GitHub.",
      "default_address": "*.github.io",
      "custom_domain": {
        "status": "included",
        "label": "Si",
        "detail": "Permite utilizar un dominio propio."
      },
      "ideal_for": [
        "Paginas informativas",
        "Portafolios",
        "Manuales y documentacion",
        "Landing pages",
        "Demostraciones que funcionan en el navegador"
      ],
      "not_ideal_for": [
        "Aplicaciones que necesitan guardar datos de usuarios",
        "Sistemas con contrasenas y permisos propios",
        "Procesos que deben ejecutarse en un servidor",
        "Aplicaciones SaaS o informacion confidencial"
      ],
      "scale": {
        "label": "Paginas web estaticas",
        "detail": "Adecuado para sitios estaticos. No es un servicio para operar aplicaciones con servidor y base de datos.",
        "documented_limits": [
          "Sitio publicado: maximo 1 GB.",
          "Ancho de banda recomendado: limite flexible de 100 GB al mes.",
          "Limite flexible de 10 publicaciones por hora, salvo flujos de GitHub Actions personalizados."
        ]
      },
      "access_control": {
        "status": "not_native",
        "label": "Sitio publico",
        "detail": "No ofrece inicio de sesion ni permisos de usuario para proteger una aplicacion. Un repositorio privado no convierte automaticamente el sitio publicado en privado."
      },
      "security": {
        "status": "limited",
        "label": "HTTPS para paginas publicas",
        "detail": "Ofrece HTTPS y proteccion de la conexion. No proporciona por si solo proteccion de datos, login o permisos dentro de una aplicacion."
      },
      "backend_components": {
        "database": {
          "status": "not_native",
          "label": "Base de datos externa",
          "detail": "El sitio puede consumir una API externa, pero GitHub Pages no ejecuta el servidor que la gestiona."
        },
        "user_accounts": {
          "status": "not_native",
          "label": "Autenticacion externa",
          "detail": "Se necesita otro servicio para gestionar usuarios y permisos."
        },
        "file_storage": {
          "status": "not_native",
          "label": "Archivos estaticos publicos",
          "detail": "Puede publicar imagenes y archivos que forman parte del sitio, pero no ofrece almacenamiento dinamico para archivos que suben los usuarios."
        },
        "background_work": {
          "status": "not_native",
          "label": "Sin procesos de servidor",
          "detail": "No ejecuta funciones de servidor ni tareas de fondo."
        }
      },
      "activity_records": {
        "status": "not_native",
        "label": "Sin registros de uso de la aplicacion",
        "detail": "Puede mostrar registros del proceso de publicacion, pero no registra por si solo acciones de los usuarios dentro de la pagina."
      },
      "code_and_portability": {
        "status": "included",
        "label": "Codigo en GitHub",
        "detail": "El repositorio es la fuente del sitio y se puede clonar, descargar o trasladar."
      },
      "technology_flexibility": {
        "label": "HTML, CSS y JavaScript",
        "detail": "Puede publicar el resultado estatico de herramientas que generan archivos web. No ejecuta codigo de servidor."
      },
      "publishing": {
        "label": "Publicacion desde una rama o GitHub Actions",
        "detail": "Al actualizar la fuente de publicacion, GitHub genera una nueva version del sitio."
      },
      "pricing": {
        "entry": "US$0 para repositorios publicos con GitHub Free.",
        "model": "La publicacion desde repositorios privados requiere un plan compatible de GitHub. El sitio publicado sigue siendo publico en el uso habitual de Pages.",
        "commercial_note": "No utilizar como alojamiento de un SaaS, comercio electronico o aplicacion empresarial transaccional."
      },
      "fit_tags": [
        "pagina_estatica",
        "landing",
        "documentacion",
        "portafolio",
        "sin_backend",
        "bajo_costo"
      ],
      "source_ids": [
        "github_pages_about",
        "github_pages_limits",
        "github_pages_domains"
      ]
    },
    {
      "id": "render",
      "name": "Render",
      "short_name": "Render",
      "category": "Aplicaciones y servicios",
      "purpose": "Alojar aplicaciones, bases de datos y procesos que funcionan de forma continua.",
      "default_address": "*.onrender.com",
      "custom_domain": {
        "status": "included",
        "label": "Si",
        "detail": "Permite conectar dominios propios y ofrece certificados TLS administrados."
      },
      "ideal_for": [
        "Aplicaciones con servidor propio",
        "Productos SaaS",
        "Servicios privados",
        "Procesos que se ejecutan en segundo plano",
        "Aplicaciones con bases de datos administradas"
      ],
      "not_ideal_for": [
        "Quien solo necesita publicar una pagina estatica y quiere la infraestructura mas simple",
        "Produccion con instancias gratuitas"
      ],
      "scale": {
        "label": "Aplicaciones y procesos continuos",
        "detail": "Permite aumentar recursos manual o automaticamente. Tiene servicios web, servicios privados, trabajadores de fondo y tareas programadas.",
        "documented_limits": [
          "Las instancias gratuitas son para pruebas y no se recomiendan para produccion.",
          "Las capacidades de escalado y operacion dependen del tipo de servicio y del plan."
        ]
      },
      "access_control": {
        "status": "configurable",
        "label": "Servicios privados y permisos de la aplicacion",
        "detail": "Permite crear servicios privados. El inicio de sesion, los roles y los permisos de los usuarios finales se configuran en la aplicacion o con un proveedor externo."
      },
      "security": {
        "status": "included",
        "label": "HTTPS, proteccion DDoS y servicios privados",
        "detail": "Incluye certificados TLS, proteccion DDoS y opciones de red. Los controles de identidad y permisos de negocio requieren configuracion."
      },
      "backend_components": {
        "database": {
          "status": "configurable",
          "label": "Base de datos administrada",
          "detail": "Ofrece PostgreSQL administrado como servicio separado, con precio y recursos propios."
        },
        "user_accounts": {
          "status": "external",
          "label": "Autenticacion de la aplicacion",
          "detail": "Se implementa en la aplicacion o se conecta con un proveedor de identidad."
        },
        "file_storage": {
          "status": "configurable",
          "label": "Discos persistentes o servicio externo",
          "detail": "Puede utilizar discos persistentes; para almacenamiento de objetos y archivos de usuarios puede convenir un servicio especializado."
        },
        "background_work": {
          "status": "included",
          "label": "Trabajadores y tareas programadas",
          "detail": "Ofrece Background Workers, Cron Jobs y otros servicios para procesos continuos."
        }
      },
      "activity_records": {
        "status": "included",
        "label": "Logs y metricas del servicio",
        "detail": "Permite consultar registros y metricas tecnicas. La auditoria de acciones de negocio debe construirse en la aplicacion."
      },
      "code_and_portability": {
        "status": "included",
        "label": "Codigo en repositorio propio",
        "detail": "Se conecta a repositorios Git para construir y desplegar el servicio."
      },
      "technology_flexibility": {
        "label": "Varios lenguajes y contenedores",
        "detail": "Admite Node.js, Python, Go, Rust, Ruby, Elixir y contenedores Docker, entre otros flujos compatibles."
      },
      "publishing": {
        "label": "Publicacion conectada al repositorio",
        "detail": "Puede desplegar automaticamente al actualizar el repositorio y ofrece opciones de prueba y reversa."
      },
      "pricing": {
        "entry": "Servicios gratuitos para pruebas. Servicios web de pago desde aproximadamente US$7/mes.",
        "model": "Bases de datos, almacenamiento, transferencia y recursos adicionales pueden cobrarse por separado.",
        "commercial_note": "No usar instancias gratuitas como base de una aplicacion de produccion."
      },
      "fit_tags": [
        "saas",
        "servidor",
        "base_de_datos",
        "procesos_fondo",
        "api",
        "servicios_privados",
        "varios_lenguajes"
      ],
      "source_ids": [
        "render_web_services",
        "render_free",
        "render_pricing",
        "render_first_deploy"
      ]
    },
    {
      "id": "cloudflare",
      "name": "Cloudflare",
      "short_name": "Cloudflare",
      "category": "Infraestructura global",
      "purpose": "Publicar y ejecutar aplicaciones y servicios en una red global, con herramientas de rendimiento, datos y proteccion.",
      "default_address": "*.workers.dev o *.pages.dev",
      "custom_domain": {
        "status": "included",
        "label": "Si",
        "detail": "Permite conectar dominios propios a Pages y Workers."
      },
      "ideal_for": [
        "Aplicaciones con usuarios en distintos paises",
        "Servicios y APIs de alto volumen",
        "Aplicaciones que necesitan ejecutar procesos cerca de sus usuarios",
        "Productos que requieren proteccion de red y control de acceso",
        "Arquitecturas con varios tipos de almacenamiento"
      ],
      "not_ideal_for": [
        "Personas que buscan el camino mas simple sin aprender a conectar componentes",
        "Aplicaciones que dependen de un servidor tradicional sin adaptar su arquitectura"
      ],
      "scale": {
        "label": "Red global y aplicaciones distribuidas",
        "detail": "Workers ejecuta codigo en la red global de Cloudflare. La capacidad y el costo dependen del plan, las solicitudes y los servicios utilizados.",
        "documented_limits": [
          "Workers Free incluye hasta 100.000 solicitudes por dia.",
          "Workers Paid tiene un minimo de US$5/mes e incluye una cuota de uso mensual.",
          "Bases de datos y almacenamiento tienen limites y precios propios."
        ]
      },
      "access_control": {
        "status": "configurable",
        "label": "Control de acceso con Cloudflare Access",
        "detail": "Puede colocar una capa de acceso delante de aplicaciones propias y validar identidad, grupos y politicas. Los permisos dentro de la aplicacion pueden requerir su propia configuracion."
      },
      "security": {
        "status": "included",
        "label": "Proteccion de red y aplicaciones",
        "detail": "Ofrece mitigacion DDoS, firewall, WAF y Cloudflare Access. La proteccion de la infraestructura no reemplaza los permisos y controles de datos de la aplicacion."
      },
      "backend_components": {
        "database": {
          "status": "included",
          "label": "Bases de datos y conexiones",
          "detail": "D1 es una base de datos SQL administrada; Hyperdrive permite conectar bases existentes como PostgreSQL o MySQL."
        },
        "user_accounts": {
          "status": "configurable",
          "label": "Control de acceso e identidad",
          "detail": "Cloudflare Access puede proteger aplicaciones. La gestion de cuentas, perfiles y roles propios del producto puede requerir otro proveedor o codigo."
        },
        "file_storage": {
          "status": "included",
          "label": "Almacenamiento de archivos",
          "detail": "R2 permite almacenar documentos, imagenes y otros archivos."
        },
        "background_work": {
          "status": "included",
          "label": "Procesos, colas y tareas",
          "detail": "Workers, Queues y Cron Triggers permiten ejecutar procesos y tareas programadas."
        }
      },
      "activity_records": {
        "status": "included",
        "label": "Registros y analitica tecnica",
        "detail": "Dispone de registros y herramientas de observacion. La auditoria de acciones de negocio debe diseñarse en la aplicacion."
      },
      "code_and_portability": {
        "status": "included",
        "label": "Codigo en repositorio propio",
        "detail": "Puede conectar GitHub o GitLab y desplegar automaticamente al actualizar el codigo. El uso de servicios propios de Cloudflare puede requerir adaptaciones al migrar."
      },
      "technology_flexibility": {
        "label": "Runtime especializado para aplicaciones web",
        "detail": "Admite varios lenguajes y tecnologias compatibles con Workers. No equivale a un servidor tradicional sin limites."
      },
      "publishing": {
        "label": "Despliegue desde GitHub o GitLab",
        "detail": "Pages y Workers permiten conectar repositorios y automatizar despliegues. Pages ofrece versiones de prueba para ramas."
      },
      "pricing": {
        "entry": "Workers Free: hasta 100.000 solicitudes al dia. Workers Paid: desde US$5/mes.",
        "model": "El plan de pago incluye una cuota de uso; el consumo adicional se cobra segun solicitudes y recursos. D1, R2 y otros servicios tienen sus propias cuotas y precios.",
        "commercial_note": "Revisar los limites y el consumo de cada producto. No interpretar el plan gratuito como capacidad ilimitada."
      },
      "fit_tags": [
        "alto_trafico",
        "global",
        "api",
        "seguridad",
        "base_de_datos",
        "archivos",
        "procesos_fondo",
        "aplicacion_distribuida"
      ],
      "source_ids": [
        "cloudflare_workers_pricing",
        "cloudflare_workers_limits",
        "cloudflare_storage",
        "cloudflare_access",
        "cloudflare_git",
        "cloudflare_custom_domains"
      ]
    }
  ]
}
```

------------------------------------------------------------------------

## 4. Matriz de capacidades para filtros y comparaciones

Utilizar esta matriz para construir una tabla visual o un mapa de calor.
Los valores son los estados definidos en la leyenda.

  --------------------------------------------------------------------------------------------------------
  Capacidad         ChatGPT Sites  Lovable       Vercel         GitHub Pages Render         Cloudflare
  ----------------- -------------- ------------- -------------- ------------ -------------- --------------
  Dominio propio    conditional    conditional   included       included     included       included

  Base de datos     included       included      external       not_native   configurable   included

  Cuentas de        limited        included      external       not_native   external       configurable
  usuario                                                                                   

  Archivos de       included       included      configurable   not_native   configurable   included
  usuarios                                                                                  

  Procesos en       limited        included      configurable   not_native   included       included
  segundo plano                                                                             

  Control de acceso included       conditional   configurable   not_native   configurable   configurable

  Seguridad de      limited        conditional   included       limited      included       included
  infraestructura                                                                           

  Registros         limited        included      included       not_native   included       included
  tecnicos                                                                                  

  Auditoria de      limited        conditional   conditional    not_native   external       external
  negocio                                                                                   

  Codigo portable   configurable   included      included       included     included       included

  Libertad          limited        limited       included       limited      included       limited
  tecnologica                                                                               
  --------------------------------------------------------------------------------------------------------

**Importante:** "incluido" no significa gratuito ni ilimitado. Por
ejemplo, Lovable incluye backend, pero el uso de Cloud consume creditos;
Cloudflare ofrece varios servicios, cada uno con cuotas y precios
propios; Vercel permite conectar una base de datos, pero esta no viene
automaticamente incluida como una base de datos empresarial universal.

------------------------------------------------------------------------

## 5. Datos para los graficos interactivos

Los graficos deben ayudar a comprender diferencias, no producir una
clasificacion artificial de ganadores.

### Grafico A. ¿Que viene integrado y que hay que conectar?

**Tipo:** barras apiladas horizontales.

Contar, para cada plataforma, el estado de estas cuatro capacidades:

-   Base de datos.
-   Cuentas de usuario.
-   Archivos.
-   Procesos en segundo plano.

Agrupar los resultados en: - Incluido. - Configurable. - Servicio
externo. - Con limites o no disponible.

**Lectura:** muestra cuantas piezas vienen integradas y cuantas
requieren decisiones adicionales. No es una puntuacion de calidad.

### Grafico B. Mapa de capacidades

**Tipo:** matriz de calor o tabla interactiva.

Filas: - Dominio propio. - Acceso privado. - Usuarios y contrasenas. -
Guardar informacion. - Guardar documentos. - Procesos automaticos. -
Registro de actividad. - Auditoria. - Codigo portable. - Libertad para
elegir tecnologia.

Columnas: las seis plataformas.

Al seleccionar una celda, mostrar una explicacion breve y la fuente
oficial correspondiente.

### Grafico C. Perfil de crecimiento

**Tipo:** tarjetas comparativas o barras por categoria, sin puntuacion
numerica.

Categorias: - Paginas estaticas. - Aplicaciones ligeras. - Aplicaciones
con datos y usuarios. - Productos SaaS. - Servicios de alto trafico. -
Aplicaciones distribuidas globalmente.

Mostrar las plataformas que pueden servir para cada categoria y una nota
sobre sus limites. No presentar estas categorias como niveles absolutos
de capacidad.

### Grafico D. Modelo de costos

**Tipo:** tarjetas de precio, no un ranking numerico.

Mostrar: - Precio de entrada. - Que incluye. - Que puede generar cargos
adicionales. - Restricciones del plan gratuito. - Enlace a la pagina
oficial de precios.

No ordenar las plataformas solo por precio: sus modelos de cobro no son
equivalentes.

------------------------------------------------------------------------

## 6. Filtros y controles que debe tener el dashboard

### Filtros principales

1.  **¿Que quiero construir?**
    -   Pagina o micrositio.
    -   Herramienta ligera.
    -   Aplicacion interna.
    -   Aplicacion con usuarios y datos.
    -   Producto SaaS.
    -   Servicio de alto trafico o alcance global.
2.  **¿Que necesito que haga?**
    -   Usar dominio propio.
    -   Permitir inicio de sesion.
    -   Guardar informacion.
    -   Recibir y guardar archivos.
    -   Registrar actividad.
    -   Restringir el acceso.
    -   Conectar servicios externos.
    -   Tener libertad para elegir tecnologia.
3.  **¿Que modelo de costo prefiero?**
    -   Empezar gratis.
    -   Suscripcion mensual.
    -   Pago segun consumo.
    -   Plan empresarial.
4.  **¿Que quiero administrar?**
    -   Lo minimo posible.
    -   Algunos servicios por separado.
    -   Todos los componentes con mayor control.

### Comparacion seleccionable

-   Permitir elegir hasta tres plataformas para compararlas lado a lado.
-   Permitir quitar una plataforma sin reiniciar los filtros.
-   Incluir boton "Limpiar filtros".
-   Incluir buscador por nombre o tipo de solucion.
-   Mantener visible el numero de plataformas que coinciden con los
    filtros.

------------------------------------------------------------------------

## 7. Asistente de recomendacion

Incluir un flujo corto de preguntas:

**Pregunta 1. ¿Que quieres publicar?** - Una pagina o herramienta
sencilla. - Una aplicacion para uso interno. - Un producto digital para
clientes. - Un servicio que debe atender usuarios en muchos paises.

**Pregunta 2. ¿La aplicacion necesita guardar informacion y gestionar
usuarios?** - No. - Si, de forma sencilla. - Si, con permisos y datos
separados por usuario. - Si, con requisitos empresariales de seguridad y
auditoria.

**Pregunta 3. ¿Que prefieres?** - Tener todo integrado. - Elegir y
conectar servicios. - Tener el mayor control posible.

### Reglas orientativas de recomendacion

  -----------------------------------------------------------------------
  Necesidad                           Plataformas que conviene explorar
  ----------------------------------- -----------------------------------
  Pagina publica sencilla             GitHub Pages, Cloudflare Pages,
                                      Vercel

  Herramienta ligera creada desde     ChatGPT Sites
  ChatGPT                             

  Aplicacion con usuarios y datos,    Lovable
  con servicios integrados            

  Aplicacion con mayor libertad de    Vercel o Render
  arquitectura                        

  Aplicacion con procesos permanentes Render
  y base de datos administrada        

  Aplicacion distribuida globalmente  Cloudflare o Vercel

  Herramienta interna con acceso      Lovable Business/Enterprise,
  controlado                          ChatGPT Sites en espacio de trabajo
                                      compatible, o
                                      Vercel/Render/Cloudflare con
                                      autenticacion bien configurada
  -----------------------------------------------------------------------

**Regla de seguridad:** si el proyecto maneja informacion confidencial,
financiera, personal o regulada, no recomendar una plataforma
automaticamente. Mostrar una advertencia: "Antes de publicar, valida el
plan, el tratamiento de datos, la ubicacion, los permisos, la
autenticacion, los registros y las politicas de TI de tu organizacion".

El asistente debe explicar por que recomienda una opcion y mostrar
alternativas. No debe afirmar que una plataforma es segura o apta para
produccion solo por su nombre.

------------------------------------------------------------------------

## 8. Requisitos de experiencia y diseno

-   Idioma: espanol.
-   Audiencia: directivos y trabajadores del conocimiento.
-   Tono: claro, ejecutivo, didactico y no tecnico.
-   No usar emojis.
-   Usar iconos Lucide discretos si aportan claridad.
-   Diseno responsive para escritorio, tablet y movil.
-   Presentar primero una vista general y permitir profundizar al
    seleccionar una plataforma.
-   No mostrar mas de tres plataformas en la comparacion detallada a la
    vez.
-   Utilizar etiquetas textuales junto a los colores. Nunca depender
    solo del color.
-   Incluir explicaciones breves en tooltips o paneles de detalle.
-   Mostrar fecha de verificacion de los datos.
-   Incluir enlaces a fuentes oficiales.
-   No inventar puntuaciones, porcentajes de rendimiento ni garantias.
-   En los graficos, permitir filtrar y seleccionar plataformas; todos
    los graficos deben actualizarse con los mismos filtros.
-   Mostrar un estado vacio claro cuando no haya resultados.

### Navegacion sugerida

1.  **Explorar:** tarjetas de las seis plataformas.
2.  **Comparar:** matriz de capacidades y graficos.
3.  **Encontrar mi plataforma:** asistente de recomendacion.
4.  **Fuentes y limites:** precios, restricciones y documentacion
    oficial.

------------------------------------------------------------------------

## 9. Instruccion para Codex

Construye una aplicacion web responsive llamada **Deployment Explorer**
usando este documento como fuente de datos y especificacion funcional.

La aplicacion debe ser un dashboard comparativo interactivo, no una
pagina estatica. Implementa filtros, seleccion de hasta tres
plataformas, matriz comparativa, graficos interactivos y asistente de
recomendacion. Utiliza los datos del bloque JSON y conserva los estados
y las advertencias tal como estan definidos.

Prioriza una interfaz clara para directivos sin conocimientos tecnicos.
Evita jerga, emojis, puntuaciones inventadas y afirmaciones absolutas de
seguridad o escalabilidad. Los graficos deben explicar diferencias
reales y no convertir la comparacion en un ranking sin fundamento.

Si alguna informacion no esta confirmada por las fuentes, mostrar
"Verificar con el proveedor" en lugar de completar el dato por
inferencia.

------------------------------------------------------------------------

## 10. Fuentes oficiales

Fuentes consultadas el 18 de noviembre de 2026. Los planes, precios,
limites y disponibilidad pueden cambiar; el dashboard debe permitir
actualizarlos sin rehacer la interfaz.

### ChatGPT Sites

-   [Crear y usar ChatGPT
    Sites](https://help.openai.com/en/articles/20001339-creating-and-using-chatgpt-sites)
-   [Administrar ChatGPT Sites para tu espacio de
    trabajo](https://help.openai.com/es-419/articles/20001338-managing-chatgpt-sites-for-your-workspace)
-   [Entender tus responsabilidades para ChatGPT
    Sites](https://help.openai.com/es-419/articles/20001337-understanding-responsibilities-for-your-chatgpt-sites)

### Lovable

-   [Backend integrado](https://docs.lovable.dev/features/cloud)
-   [Sincronizar un proyecto con
    GitHub](https://docs.lovable.dev/integrations/github)
-   [Dominios
    personalizados](https://docs.lovable.dev/features/custom-domain)
-   [Planes y precios](https://lovable.dev/pricing)

### Vercel

-   [Planes y precios](https://vercel.com/pricing)
-   [Proteccion de
    despliegues](https://vercel.com/docs/deployment-protection)
-   [Firewall y proteccion](https://vercel.com/docs/vercel-firewall)
-   [Configurar un dominio
    propio](https://vercel.com/docs/domains/set-up-custom-domain)
-   [Planes de cuenta](https://vercel.com/docs/plans)

### GitHub Pages

-   [Que es GitHub
    Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
-   [Limites de GitHub
    Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)
-   [Dominios
    personalizados](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)

### Render

-   [Servicios web](https://render.com/docs/web-services)
-   [Desplegar gratis y limites](https://render.com/docs/free)
-   [Precios](https://render.com/pricing)
-   [Primer despliegue](https://render.com/docs/your-first-deploy)

### Cloudflare

-   [Precios de
    Workers](https://developers.cloudflare.com/workers/platform/pricing/)
-   [Limites de
    Workers](https://developers.cloudflare.com/workers/platform/limits/)
-   [Productos de datos y
    almacenamiento](https://developers.cloudflare.com/workers/platform/storage-options/)
-   [Cloudflare Access y tipos de
    aplicaciones](https://developers.cloudflare.com/cloudflare-one/access-controls/applications/choose-application-type/)
-   [Integracion Git de
    Pages](https://developers.cloudflare.com/pages/configuration/git-integration/)
-   [Dominios personalizados de
    Pages](https://developers.cloudflare.com/pages/configuration/custom-domains/)

------------------------------------------------------------------------

## 11. Nota de uso

Este documento es una base de trabajo para una demostracion educativa.
No reemplaza una evaluacion tecnica, contractual, legal o de seguridad.
Antes de utilizar una plataforma con informacion real de una
organizacion, revisar los terminos, el plan contratado, los controles
disponibles, la residencia de datos, los permisos, las copias de
seguridad y las politicas internas.
