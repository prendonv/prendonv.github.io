import { create } from 'zustand';

const esContent = {
  hero: {
    title: "Portafolio Pablo Rendón Vásquez",
    description: [
      "Si estás acá es porque buscas a alguien como yo, con más de 4 años de experiencia en el mundo UX y más de una década en la creación de contenido escrito digital.",
      "Mi metodología de trabajo integra el storytelling con la inteligencia artificial generativa para diseñar interfaces intuitivas.",
      "Además, mi background laboral me da la capacidad para diseñar contenidos en múltiples formatos, que ayudan a impulsar los objetivos de negocio."
    ],
    services: [
      { title: "UX writing", description: "Diseño la narrativa de la interfaz de un producto con microcopy que guíe al usuario, disminuyendo la carga cognitiva para asegurar conversiones." },
      { title: "Technical writer", description: "Traduzco procesos complejos en guías estructuradas, para garantizar la transferencia de conocimiento técnico." },
      { title: "Research", description: "Recolecto y analizo datos para validar hipótesis y fundamentar decisiones de diseño basadas en evidencia." },
      { title: "Copy creative", description: "Conceptualizo y ejecuto mensajes persuasivos orientados a generar engagement y construir identidad de marca." }
    ]
  },
  disclaimer: {
    paragraphs: [
      "La información de este portafolio es confidencial y privilegiada y está plasmada aquí con el único interés de mostrar mi trabajo.",
      "Para mantener la reserva, algunos contenidos y diseños no reflejan la versión final del entregable.",
      "Por favor no uses ni compartas esta información con fines diferentes a los de llevar a cabo un proceso de selección."
    ]
  },
  uiLabels: {
    backToHome: "Volver al inicio",
    context: "Contexto",
    challenge: "El reto",
    achievements: "Logros y aprendizajes",
    team: "Trabajé con:",
    impact: "Impactos de contenido",
    how: "Qué hice",
    downloadCV: "Descargar CV",
    servicesHeading: "En qué puedo trabajar",
    featuredHeading: "Proyectos destacados",
    strategicHeading: "Proyectos complementarios",
    viewMore: "Ver caso",
    disclaimerHeading: "Antes de iniciar (Disclaimer)",
    copyrightText: "Todos los derechos reservados."
  },
  projects: {
    featured: [
      {
        id: "research-ia",
        title: "Cómo hacer un research más rápido con IA",
        pageRef: 8,
        tags: ["Research", "IA Generativa", "Automatización", "Métricas"],
        image: "/images/research-ia-cover.png",
        detailImage: "/images/research-ia-detail.png",
        layout: "sidebar",
        highlightAchievements: true,
        summary: "Con un agente de inteligencia artificial logré reducir en un 87% el tiempo de análisis de un research que derivó en un MVP que ahorró miles de dólares a la compañía.",
        content: {
          context: "La compañía utiliza una herramienta interna para crear campañas en los real estates de la app.\n\nEl equipo de Producto propuso diseñar una experiencia con soporte de la inteligencia artificial para agilizar este proceso y garantizar consistencia.",
          challenge: "Identificar si efectivamente los usuarios internos podrían aprovechar esta herramienta potenciada con IA y cuál sería su alcance.",
          challenges_title: "Los desafíos",
          challenges_extra: "¿Cómo podríamos saber cuál era la percepción de los usuarios sobre una herramienta potenciada con IA?\n\n- Necesitábamos entender cómo los usuarios de la herramienta estaban creando sus contenidos.\n- Queríamos evaluar cómo la IA podría optimizar este proceso.",
          how_i_did_it: "Antes de diseñar una propuesta, iniciamos, como equipo, una etapa de entendimiento y concluimos que el mejor camino era un research interno.\n\n- Utilicé los mismos datos de la herramienta para identificar heavy users en múltiples contextos y con IA extraje un listado de potenciales usuarios para reclutar.\n- Diseñé el cuestionario basado en las hipótesis que nos entregó Producto.\n- Hice el proceso de reclutamiento de usuarios para entrevistar.\n- Participé y lideré las entrevistas.\n- Diseñé y entrené un agente de Gemini para procesar y analizar la información recolectada.",
          achievements: "Este research fue clave y derivó en un proyecto MVP que simplificó el proceso de creación de campañas, generando un ahorro de 70 dólares por cada pieza producida y más de 3.500 dólares al mes.\n\n- El proceso de reclutamiento tuvo una efectividad del 90% gracias a la identificación correcta de los usuarios.\n- El agente que diseñé sirvió para reducir el tiempo de análisis en un 87%, pasando de 2 semanas a un día y medio.\n- Con el agente identificamos patrones de tareas repetitivas que se podrían automatizar.\n- Identificamos oportunidades para disminuir la tasa de errores frecuentes por parte de las agencias de marketing.\n- Encontramos otras oportunidades de mejora que no estaban asociadas al objetivo inicial y que detonaron nuevas conversaciones.",
          team: "Project leader.\nUX Designer."
        }
      },
      {
        id: "sinergia-it",
        title: "Sinergia con el equipo IT",
        pageRef: 18,
        tags: ["Sinergia", "IT", "UX Writing", "Gestión de stakeholders"],
        image: "/images/sinergia-it-cover.png",
        detailImage: "/images/sinergia-it-detail.png",
        summary: "Identificamos una fricción crítica en el flujo de trabajo y diseñamos una solución autogestionable que eliminó el 100% de los tickets de soporte relacionados.",
        highlightAchievements: false,
        layout: "bottom",
        content: {
          intro: "El equipo IT de la herramienta para crear landings me invitó a participar en un proyecto que no estaba planeado, pero que querían ejecutar como parte de sus objetivos de carrera.",
          context: "El proceso de edición de una landing dependía exclusivamente del owner, no existía una función nativa para reclamar la propiedad o gestionar permisos de propiedad. Lo que se traducía en un tráfico alto para soporte.",
          challenge: "La idea era diseñar una experiencia que permitiera obtener la propiedad de una landing de forma autogestionada.",
          challenges_title: "Impactos de contenido",
          challenges_extra: "- Botón para tomar la propiedad de una landing.\n- Modal de confirmación.\n- Snackbar de éxito.\n- Mensajes de error.\n- Email para notificar al usuario que perdió la propiedad de la landing.",
          how_i_did_it: "- Tuve una primer acercamiento con el equipo para entender la necesidad.\n- Discutimos las posibles soluciones, contemplando casos de usos, lógicas y bloqueantes.\n- Diseñé un workflow para facilitar el proceso de diseño.\n- Diseñé la experiencia completa, desde la UI hasta el microcopy de todo el flujo.",
          achievements: "- Este proyecto evidenció cómo la sinergia entre los equipos de IT y UX permitió capitalizar una fricción crítica de manera ágil, incluso fuera del roadmap planificado.\n- El soporte por el cambio de owner se eliminó en un 100%.",
          team: "Developers (x2)."
        }
      },
      {
        id: "lenguaje-stakeholders",
        title: "Cómo usar el lenguaje de los stakeholders en una negociación difícil",
        pageRef: 10,
        tags: ["Estrategia", "Negociación", "Consistencia", "Gobernanza"],
        image: "/images/stakeholders-cover.png",
        summary: "El equipo de IT quería libertad total, en UX queríamos gobernanza. Así fue como usé un documento sencillo para destrabar una negociación compleja y asegurar calidad.",
        layout: "zigzag",
        highlightAchievements: true,
        content: {
          intro: "Este caso cuenta cómo una acción básica puede solucionar un bloqueante en la ejecución de un proyecto.",
          context: "La herramienta para crear campañas de gamification necesitaba una funcionalidad para construir experiencias personalizadas.\n\nPara lograrlo, debíamos diseñar un builder que permitiera a las personas crear pantallas a medida utilizando los componentes del design system.",
          challenge: "El equipo de IT pretendía dar total libertad para que los usuarios crearan experiencias sin ningún tipo de estructura. Desde el equipo de UX argumentamos que esta decisión iba en contravía de lograr consistencia y tener gobernanza sobre la estrategia.",
          challenges_title: "El desafío",
          challenges_extra: "Encontrar un equilibrio y llegar a un acuerdo con IT para mantener la idea de la construcción a medida con un límite a la libertad creativa.\n\nA pesar de exponer unos argumentos claros, el equipo de IT mantenía su posición, lo que abría la puerta a la posibilidad de crear experiencias que afectaran la imagen de la marca.",
          how_i_did_it: "Para revertir esta situación, creé un archivo con el listado de todos los componentes que podía tener una pantalla de gamification en sus múltiples estados (Optin, in progress, win, win reward, lost y lost claim).\n\nEn una siguiente columna documenté todas las características de estos componentes, por ejemplo:\n- Por qué era obligatorio ese componente.\n- Qué función comunicativa cumplía.\n- Por qué se debía usar solo una vez por estado.\n- Por qué tenía que estar en determinada parte de la pantalla.\n\nCon este documento volvimos al equipo de IT, presentamos los datos y logramos convencerlos de que no era posible dar una libertad total. Así regulamos el uso de los componentes y continuamos con el diseño de la funcionalidad.",
          impact: "En una segunda etapa, diseñé una matriz de contenidos que sirviera como estándar para toda la experiencia.\n\nLos usuarios solo tendrían que editar las variables y nosotros podríamos asegurar consistencia en toda las campañas de gamification, sin importar la unidad de negocio que usara la herramienta.",
          achievements: "¡Llevamos la experiencia final al administrador de Gamification sin romper la calidad y asegurando la consistencia!\n\n- Existen bloqueantes que pueden sortearse de manera creativa.\n- Los argumentos deben venderse en la forma cómo los consumen y entienden mejor los stakeholders.\n- Antes de avanzar en el proyecto para después iterar, las soluciones económicas pueden resultar más efectivas.",
          team: "UX Project leader.\nUX Designer.\nIT Manager.\nIT Project leader."
        },
        images: {
          how: "/images/stakeholders-ui.jpg",
          achievements: "/images/stakeholders-excel.png"
        }
      },
      {
        id: "rebranding-consistencia",
        title: "Del rebranding a la consistencia",
        pageRef: 2,
        tags: ["Storytelling", "Stakeholders", "Gestión", "Pensamiento sistémico", "Estrategia"],
        image: "/images/rebranding-cover.png",
        detailImage: "/images/rebranding-cover.png",
        summary: "Así fusioné la voz de la marca con la de una influencer top, para articular una narrativa que impulsó las instalaciones de la app.",
        layout: "rebranding-custom",
        highlightAchievements: false,
        content: {
          intro: null,
          context: "Para el rebranding de la marca en Brasil, se utilizó una influencer top, con una comunidad de más de 5 millones de personas en WhatsApp.\n\nEl objetivo: lanzar la nueva imagen junto a un beneficio tan atractivo que aumentara el número de instalaciones de la app, a través del programa de referidos.\n\nUna de las campañas más grandes en la historia de la compañía, con varios equipos de diferentes verticales involucrados.",
          challenge: "Articular los contenidos del programa de referidos con la voz y tono de la influencer para crear una comunicación clara y contundente que se pudiera transmitir a su comunidad de WhatsApp.",
          challenges_title: "Los desafíos",
          challenges_extra: "- La dinámica del programa de referidos para esta estrategia se modificó y ajustó a la participación de la influencer.\n- El tono y voz debía estar equilibrado entre la forma como habla la marca y como habla la influencer.\n- Los stakeholders participantes tenían intereses diferentes para priorizar en la campaña.\n- Escribir los contenidos en portugués y no en español neutro como normalmente se hacía.",
          how_i_did_it: "- Entender el objetivo de Negocio y el contexto: una campaña con múltiples touchpoints.\n- Entender el scope: de dónde viene el usuario y a dónde tiene que llegar.\n- Bajar el flujo completo con sus diferentes casos de uso.\n- Buscar acuerdos y cocrear con los diseñadores de contenido de otras verticales.",
          execution: "La estrategia estuvo enfocada en hacer las preguntas correctas, dar visibilidad permanente junto a mi dupla de diseño a través de un Figjam donde documentamos los entendimientos, hicimos propuestas con el claim de campaña y las value props a resaltar y posteriormente ajustamos y entregamos.",
          impact: "La estrategia punta a punta incluyó la creación de contenidos para:\n\n- Usuario sin cuenta en la app (Happy path).\n- Usuario con cuenta en la app (Unhappy path).\n\nTouchpoints:\n- Hub del promotor.\n- Hub de invitado.\n- Hub de beneficios.\n- Banner recordatorio.\n- Mensaje de WhatsApp (Comunidad influencer).\n- Landing page.",
          achievements: "- Diseño de los contenidos para toda la estrategia en tiempo record.\n- Alineación estratégica de stakeholders para unificar el storytelling en todos los touchpoints.\n- Consistencia en todas las pantallas donde se comunicó el rebranding.\n- Manejo de los diferentes stakeholders, llevando con éxito conversaciones difíciles.",
          team: "UX Project leader.\nUX Designer.\nTechnical leader de contenido."
        },
        images: {
          flow: "/images/rebranding-flow.png"
        }
      }
    ],
    strategic: [
      {
        id: "regional-consistency",
        title: "Pensar en la consistencia regional",
        pageRef: 6,
        tags: ["Localización", "SEO", "Stakeholders", "Negociación", "Estrategia"],
        image: null,
        detailImage: "/images/regional-consistency-cover.png",
        layout: "bottom",
        summary: "Esta fue la estrategia para unificar el discurso en 4 países con diferentes matices culturales y múltiples stakeholders.",
        content: {
          context: "El programa de referidos de la marca necesitaba una renovación de su landing promocional en los 4 países donde tenía presencia: Brasil, Argentina, México y Chile.",
          challenge: "Generar consistencia entre las landings de los 4 países, tanto en diseño como en contenido, con la intención de aumentar las descargas de la app.",
          challenges_title: "Los desafíos",
          challenges_extra: "- Identificar patrones que se podían repetir en cada país y encontrar las value props de cada producto que se querían resaltar en la landing para diseñar el contenido.\n- Negociar con cada Product owner las características a mencionar y encontrar un equilibrio en la historia a contar.",
          how_i_did_it: "- Hice un relevamiento de los contenidos actuales para validar qué se podía mantener y qué era necesario actualizar o descartar.\n- Identifiqué los términos que se podían utilizar en cada país en un proceso de localización.\n- Participé en el proceso de rediseño visual junto a mi dupla de diseño.\n- Diseñé e iteré propuestas de contenido después de socializarlas con los stakeholders.\n- Durante el proceso de creación de contenidos simplifiqué la información, para apuntarle a un contenido preciso, relevante y claro.\n- Junto a mi dupla de contenido elaboré una propuesta de posicionamiento SEO.",
          impact: "Rediseño de la landing del programa de referidos “Invita y gana” de los 4 países donde la estrategia tiene presencia",
          achievements: "- Aumento considerable del conversion rate del programa de referidos.\n- En actualizaciones de este tipo es importante considerar todos los aspectos, incluso los legales.\n- Entender cómo navegar entre stakeholders con intereses disímiles hace parte de la estrategia.",
          team: "UX Project leader.\nUX Writer (x2).\nUX Designer.\nProduct owner (x4)."
        }
      },
      {
        id: "low-code-efficiency",
        title: "Soluciones económicas, eficiencia low-code",
        pageRef: 12,
        tags: ["Arquitectura de la información", "Estrategia", "Documentación", "Métricas", "Negocio"],
        summary: "Sin recursos de desarrollo, la creatividad es la clave. Con un simple template de Google Sheets logramos reducir los pedidos de soporte al equipo de IT en un 85%.",
        content: {
          context: "La herramienta para crear landings page tenía un módulo para agregar formularios. Sin embargo, cada vez que un usuario quería agregar un formulario necesitaba construirlo desde cero.\n\nEste proceso implicaba crear los campos y conectarlos a una base de datos, generando un soporte constante en el equipo de IT.",
          challenge: "Diseñar una experiencia que permitiera reutilizar formularios creados previamente para agilizar el proceso de configuración y minimizar los pedidos de soporte.",
          challenges_title: "Los desafíos",
          challenges_extra: "Necesitábamos entender la lógica de configuración de los formularios e idear una solución que permitiera su reutilización a través de un proceso simple.\n\nEl equipo de IT no tenía suficiente músculo para desarrollar la experiencia.",
          how_title: "Cómo lo hice",
          how_i_did_it: "En el proceso de entendimiento, diseñamos el workflow e identificamos que la experiencia podría resultar muy costosa.\n\nPensamos en soluciones más económicas para un MVP: era necesario idear la forma de que los usuarios le indicaran al equipo de IT qué campos debía tener el formulario y qué restricciones podría tener.\n\n- Creé un content prototype para identificar claramente cuál debía ser el contenido de este template.\n- Diseñé una primera versión en Google Forms, pero me di cuenta que no era escalable.\n- Diseñé una segunda versión a través de un template en Google Sheets.\n\nEl template en Google Sheets funcionó perfectamente y fue 100% funcional.\nEl usuario tenía que completar los campos del template para que el equipo de IT lo disponibilizara a través de un listado con su respectivo consecutivo.",
          impact: "* El archivo tenía 3 pestañas:\n\n- Instrucciones.\n- Template para rellenar con las indicaciones según el tipo de campo.\n- Formulario de ejemplo.\n\n* Comunicación en la herramienta, específicamente en el módulo de formularios.\n\n* Actualización en la wiki de la herramienta y guideline sobre cómo usar el template, para proveer una solución integral.",
          achievements: "- Disminuimos el pedido de soporte a IT para este proceso en un 85%.\n- Los usuarios de la herramienta que necesitaban crear formularios siguieron el proceso ajustados 100% a las indicaciones.\n- Aprendimos estratégicamente que no se trata de hacer desarrollos, sino de alcanzar los objetivos con las herramientas que están a la mano.",
          team: "UX Project leader.\nUX Designer.\nIT Project leader.\nDeveloper."
        },
        layout: "low-code-custom",
        images: {
          how: "/images/low-code-excel.png",
          results: "/images/low-code-results.png"
        }
      },
      {
        id: "storytelling-visibility",
        title: "Cómo ganar visibilidad con una historia",
        pageRef: 4,
        tags: ["Creatividad", "Technical writing", "Storytelling", "Cultura UX"],
        summary: "Nuestro trabajo técnico era invisible para los demás equipos de la vertical. Así diseñamos una analogía creativa que transformó la percepción interna y el valor del equipo.",
        content: {
          context: "Como parte de un equipo transversal, uno de nuestros mayores retos era contar lo que hacíamos en un entorno B2E dentro de una vertical con foco B2C.\n\nEntre la mayoría de personas no estaba claro cuál era nuestro rol y aporte a la vertical y compañía.\n\nEsta distinción limitaba las oportunidades para dar visibilidad e incluso complejizaba los pedidos de feedback.",
          challenge: "Diseñar una estrategia de comunicación para visibilizar nuestro trabajo y enfoque laboral con el fin de posicionarnos y aumentar el entendimiento de nuestros entregables.",
          challenges_title: "Los desafíos",
          challenges_extra: "- Bajar a un lenguaje sencillo los conceptos técnicos que usamos en el equipo.\n- Conceptualizar el mensaje.",
          how_title: "Cómo lo hice",
          how_i_did_it: "- Partí de la identificación del problema.\n- Lideré la conversación con el equipo acerca de la situación.\n- Hicimos sesiones de brainstorming.\n- Cocreamos la estrategia.",
          impact: "Partimos de una premisa: “Las tools que administramos hacen posible el trabajo de los demás equipos”.\n\nCon la premisa clara diseñamos un contenido tipo analogía, en donde nuestro equipo se convirtió en el detrás de cámaras necesario para llevar a cabo una producción cinematográfica.\n\nLe asignamos un rol a cada tool. Cada rol tenía su propia personalidad y características esenciales.\n\nContamos la historia a través de este hilo conductor, evidenciamos su importancia dentro del equipo y lo respaldamos con métricas de impacto.",
          achievements: "- Aumentó la percepción positiva del equipo dentro de la vertical.\n- Mejoró el entendimiento de nuestros entregables.\n- Mejoró la calidad del feedback recibido.\n- Posicionamos las herramientas internas y aumentó su engagement.",
          team: "UX Writer (X2).\nUX Designers (X2)."
        },
        layout: "storytelling-custom",
        images: {
          main: "/images/storytelling-main.png"
        }
      }
    ],
  },
  footer: {
    title: "¡Conversemos!",
    contact: {
      phone: "+57 3006128312",
      email: "pablorendon@gmail.com",
      linkedin: "https://www.linkedin.com/in/pablo-rend%C3%B3n/"
    }
  }
};

const enContent = {
  hero: {
    title: "Portfolio Pablo Rendón Vásquez",
    description: [
      "If you're here, it's because you're looking for someone like me, with over 4 years of experience in the UX world and more than a decade in digital written content creation.",
      "My work methodology integrates storytelling with generative artificial intelligence to design intuitive interfaces.",
      "Additionally, my professional background gives me the ability to design content in multiple formats that help drive business objectives."
    ],
    services: [
      { title: "UX writing", description: "I design the interface narrative of a product with microcopy that guides the user, reducing cognitive load to ensure conversions." },
      { title: "Technical writer", description: "I translate complex processes into structured guides to ensure the transfer of technical knowledge." },
      { title: "Research", description: "I collect and analyze data to validate hypotheses and base design decisions on evidence." },
      { title: "Copy creative", description: "I conceptualize and execute persuasive messages oriented to generate engagement and build brand identity." }
    ]
  },
  disclaimer: {
    paragraphs: [
      "The information in this portfolio is confidential and privileged and is reflected here for the sole purpose of showing my work.",
      "To maintain confidentiality, some content and designs do not reflect the final version of the deliverable.",
      "Please do not use or share this information for purposes other than carrying out a selection process."
    ]
  },
  uiLabels: {
    backToHome: "Back to home",
    context: "Context",
    challenge: "The Challenge",
    achievements: "Achievements & Learnings",
    team: "I worked with:",
    impact: "Content Impacts",
    how: "What I Did",
    downloadCV: "Download CV",
    servicesHeading: "How I can help",
    featuredHeading: "Featured Projects",
    strategicHeading: "Strategic Projects",
    viewMore: "View case",
    disclaimerHeading: "Before starting (Disclaimer)",
    copyrightText: "All rights reserved."
  },
  projects: {
    featured: [
      {
        id: "research-ia",
        title: "How to speed up research with AI",
        pageRef: 8,
        tags: ["Research", "Generative AI", "Automation", "Metrics"],
        image: "/images/research-ia-cover.png",
        detailImage: "/images/research-ia-detail.png",
        layout: "sidebar",
        highlightAchievements: true,
        summary: "Using an AI agent, I reduced research analysis time by 87%, leading to an MVP that saved the company thousands of dollars.",
        content: {
          context: "The company uses an internal tool to create campaigns in the app's real estate.\n\nThe Product team proposed designing an AI-supported experience to streamline this process and ensure consistency.",
          challenge: "Identify if internal users could effectively leverage this AI-powered tool and what its scope would be.",
          challenges_title: "The challenges",
          challenges_extra: "How could we know what users' perception was of an AI-powered tool?\n\n- We needed to understand how tool users were creating their content.\n- We wanted to evaluate how AI could optimize this process.",
          how_i_did_it: "Before designing a proposal, as a team, we started an understanding phase and concluded that the best path was internal research.\n\n- I used tool data to identify heavy users across multiple contexts and used AI to extract a list of potential users to recruit.\n- I designed the questionnaire based on the hypotheses provided by Product.\n- I managed the user recruitment process for interviewing.\n- I participated in and led the interviews.\n- I designed and trained a Gemini agent to process and analyze the collected information.",
          achievements: "This research was key and led to an MVP project that simplified the campaign creation process, generating savings of $70 per piece produced and over $3,500 per month.\n\n- The recruitment process had 90% effectiveness thanks to correct user identification.\n- The agent I designed reduced analysis time by 87%, from 2 weeks to a day and a half.\n- With the agent, we identified repetitive task patterns that could be automated.\n- We identified opportunities to decrease frequent error rates by marketing agencies.\n- We found other improvement opportunities not associated with the initial goal that sparked new conversations.",
          team: "Project leader.\nUX Designer."
        }
      },
      {
        id: "sinergia-it",
        title: "Synergy with the IT team",
        pageRef: 18,
        tags: ["Synergy", "IT", "UX Writing", "Stakeholder Management"],
        image: "/images/sinergia-it-cover.png",
        detailImage: "/images/sinergia-it-detail.png",
        summary: "We identified a critical friction in the workflow and designed a self-managed solution that eliminated 100% of related support tickets.",
        highlightAchievements: false,
        layout: "bottom",
        content: {
          intro: "The IT team of the landing creation tool invited me to participate in an unplanned project they wanted to execute as part of their career goals.",
          context: "The landing editing process relied exclusively on the owner; there was no native function to claim ownership or manage ownership permissions. This translated into high traffic for support.",
          challenge: "The idea was to design an experience that allowed claiming ownership of a landing in a self-managed way.",
          challenges_title: "Content Impacts",
          challenges_extra: "- Button to take ownership of a landing.\n- Confirmation modal.\n- Success snackbar.\n- Error messages.\n- Email to notify the user who lost ownership of the landing.",
          how_i_did_it: "- I had a first meeting with the team to understand the need.\n- We discussed possible solutions, considering use cases, logic, and blockers.\n- I designed a workflow to facilitate the design process.\n- I designed the complete experience, from the UI to the microcopy of the entire flow.",
          achievements: "- This project highlighted how synergy between IT and UX teams allowed for agile capitalization on a critical friction, even outside the planned roadmap.\n- Support for owner changes was 100% eliminated.",
          team: "Developers (x2)."
        }
      },
      {
        id: "lenguaje-stakeholders",
        title: "Using stakeholder language in difficult negotiations",
        pageRef: 10,
        tags: ["Strategy", "Negotiation", "Consistency", "Governance"],
        image: "/images/stakeholders-cover.png",
        summary: "The IT team wanted total freedom, UX wanted governance. Here's how I used a simple document to unblock a complex negotiation and ensure quality.",
        layout: "zigzag",
        highlightAchievements: true,
        content: {
          intro: "This case shows how a basic action can solve a blocker in project execution.",
          context: "The gamification campaign tool needed a functionality to build customized experiences.\n\nTo achieve this, we had to design a builder that allowed people to create custom screens using design system components.",
          challenge: "The IT team intended to give total freedom for users to create experiences without any structure. From the UX team, we argued that this decision went against achieving consistency and having governance over the strategy.",
          challenges_title: "The Challenge",
          challenges_extra: "Find a balance and reach an agreement with IT to maintain the idea of custom construction with a limit on creative freedom.\n\nDespite presenting clear arguments, the IT team maintained their position, which opened the door to creating experiences that could affect the brand image.",
          how_i_did_it: "To reverse this situation, I created a file with a list of all components a gamification screen could have in its multiple states (Optin, in progress, win, win reward, lost, and lost claim).\n\nIn the next column, I documented all the characteristics of these components, for example:\n- Why that component was mandatory.\n- What communicative function it fulfilled.\n- Why it should only be used once per state.\n- Why it had to be in a certain part of the screen.\n\nWith this document, we went back to the IT team, presented the data, and managed to convince them that total freedom wasn't possible. This way, we regulated the use of components and continued with the functionality design.",
          impact: "In a second stage, I designed a content matrix to serve as a standard for the entire experience.\n\nUsers would only have to edit the variables, and we could ensure consistency across all gamification campaigns, regardless of the business unit using the tool.",
          achievements: "We brought the final experience to the Gamification administrator without breaking quality and ensuring consistency!\n\n- There are blockers that can be bypassed creatively.\n- Arguments must be sold in the way stakeholders consume and understand them best.\n- Before advancing in the project to iterate later, cost-effective solutions can be more effective.",
          team: "UX Project leader.\nUX Designer.\nIT Manager.\nIT Project leader."
        },
        images: {
          how: "/images/stakeholders-ui.jpg",
          achievements: "/images/stakeholders-excel.png"
        }
      },
      {
        id: "rebranding-consistencia",
        title: "From rebranding to consistency",
        pageRef: 2,
        tags: ["Storytelling", "Stakeholders", "Management", "Systemic Thinking", "Strategy"],
        image: "/images/rebranding-cover.png",
        detailImage: "/images/rebranding-cover.png",
        summary: "How I fused the brand's voice with a top influencer's to articulate a narrative that boosted app installs.",
        layout: "rebranding-custom",
        highlightAchievements: false,
        content: {
          intro: null,
          context: "For the brand's rebranding in Brazil, a top influencer with a community of over 5 million people on WhatsApp was used.\n\nThe goal: launch the new image alongside a benefit so attractive it would increase app installs through the referral program.\n\nOne of the largest campaigns in company history, with various teams from different verticals involved.",
          challenge: "Articulate the referral program content with the influencer's voice and tone to create clear and compelling communication for her WhatsApp community.",
          challenges_title: "The challenges",
          challenges_extra: "- The referral program dynamics for this strategy were modified and adjusted to the influencer's participation.\n- Tone and voice had to be balanced between how the brand speaks and how the influencer speaks.\n- Participating stakeholders had different interests to prioritize in the campaign.\n- Writing content in Portuguese rather than neutral Spanish as was usually done.",
          how_i_did_it: "- Understand the business objective and context: a campaign with multiple touchpoints.\n- Understand the scope: where the user comes from and where they need to go.\n- Map the complete flow with its different use cases.\n- Seek agreements and co-create with content designers from other verticals.",
          execution: "The strategy focused on asking the right questions, providing permanent visibility alongside my design partner through a Figjam where we documented understandings, made proposals with the campaign claim and value props to highlight, and subsequently adjusted and delivered.",
          impact: "The end-to-end strategy included content creation for:\n\n- User without an app account (Happy path).\n- User with an app account (Unhappy path).\n\nTouchpoints:\n- Promoter Hub.\n- Guest Hub.\n- Benefits Hub.\n- Reminder Banner.\n- WhatsApp message (Influencer community).\n- Landing page.",
          achievements: "- Design of content for the entire strategy in record time.\n- Strategic alignment of stakeholders to unify storytelling across all touchpoints.\n- Consistency in all screens where rebranding was communicated.\n- Management of different stakeholders, successfully leading difficult conversations.",
          team: "UX Project leader.\nUX Designer.\nContent technical leader."
        },
        images: {
          flow: "/images/rebranding-flow.png"
        }
      }
    ],
    strategic: [
      {
        id: "regional-consistency",
        title: "Thinking about regional consistency",
        pageRef: 6,
        tags: ["Localization", "SEO", "Stakeholders", "Negotiation", "Strategy"],
        image: null,
        detailImage: "/images/regional-consistency-cover.png",
        layout: "bottom",
        summary: "This was the strategy to unify the discourse across 4 countries with different cultural nuances and multiple stakeholders.",
        content: {
          context: "The brand's referral program needed a renewal of its promotional landing in the 4 countries where it had a presence: Brazil, Argentina, Mexico, and Chile.",
          challenge: "Generate consistency between the landings of the 4 countries, both in design and content, with the intention of increasing app downloads.",
          challenges_title: "The challenges",
          challenges_extra: "- Identify patterns that could be repeated in each country and find the value props of each product to highlight on the landing to design content.\n- Negotiate with each Product owner the features to mention and find a balance in the story to tell.",
          how_i_did_it: "- I conducted a survey of current contents to validate what could be kept and what needed to be updated or discarded.\n- I identified terms that could be used in each country in a localization process.\n- I participated in the visual redesign process with my design partner.\n- I designed and iterated content proposals after socializing them with stakeholders.\n- During the content creation process, I simplified information to aim for precise, relevant, and clear content.\n- Together with my content partner, I developed an SEO positioning proposal.",
          impact: "Redesign of the “Invite and Win” referral program landing in the 4 countries where the strategy has a presence.",
          achievements: "- Considerable increase in the referral program's conversion rate.\n- In updates of this type, it's important to consider all aspects, even legal ones.\n- Understanding how to navigate stakeholders with dissimilar interests is part of the strategy.",
          team: "UX Project leader.\nUX Writer (x2).\nUX Designer.\nProduct owner (x4)."
        }
      },
      {
        id: "low-code-efficiency",
        title: "Cost-effective solutions, low-code efficiency",
        pageRef: 12,
        tags: ["Information Architecture", "Strategy", "Documentation", "Metrics", "Business"],
        summary: "Without development resources, creativity is key. With a simple Google Sheets template, we reduced support requests to the IT team by 85%.",
        content: {
          context: "The landing page creation tool had a module to add forms. However, every time a user wanted to add a form, they needed to build it from scratch.\n\nThis process involved creating fields and connecting them to a database, generating constant support for the IT team.",
          challenge: "Design an experience that allowed reusing previously created forms to speed up the configuration process and minimize support requests.",
          challenges_title: "The challenges",
          challenges_extra: "We needed to understand form configuration logic and devise a solution that allowed reuse through a simple process.\n\nThe IT team didn't have enough muscle to develop the experience.",
          how_title: "How I did it",
          how_i_did_it: "In the understanding process, we designed the workflow and identified that the experience could be very expensive.\n\nWe thought of cheaper solutions for an MVP: it was necessary to devise a way for users to indicate to the IT team what fields the form should have and what restrictions it might have.\n\n- I created a content prototype to clearly identify what the content of this template should be.\n- I designed a first version in Google Forms but realized it wasn't scalable.\n- I designed a second version through a template in Google Sheets.\n\nThe Google Sheets template worked perfectly and was 100% functional.\nThe user had to fill in the template fields for the IT team to make it available through a list with its respective consecutive number.",
          impact: "* The file had 3 tabs:\n\n- Instructions.\n- Template to fill in with indications according to field type.\n- Example form.\n\n* Communication in the tool, specifically in the form module.\n\n* Update in the tool wiki and guidelines on how to use the template to provide an integrated solution.",
          achievements: "- We reduced support requests to IT for this process by 85%.\n- Tool users needing to create forms followed the process adjusted 100% to indications.\n- We learned strategically that it's not about making developments, but about achieving objectives with the tools at hand.",
          team: "UX Project leader.\nUX Designer.\nIT Project leader.\nDeveloper."
        },
        layout: "low-code-custom",
        images: {
          how: "/images/low-code-excel.png",
          results: "/images/low-code-results.png"
        }
      },
      {
        id: "storytelling-visibility",
        title: "Gaining visibility with a story",
        pageRef: 4,
        tags: ["Creativity", "Technical Writing", "Storytelling", "UX Culture"],
        summary: "Our technical work was invisible to other teams in the vertical. So we designed a creative analogy that transformed internal perception and the team's value.",
        content: {
          context: "As part of a cross-functional team, one of our biggest challenges was telling what we did in a B2E environment within a vertical with a B2C focus.\n\nAmong most people, it wasn't clear what our role and contribution to the vertical and company was.\n\nThis distinction limited opportunities to provide visibility and even complicated feedback requests.",
          challenge: "Design a communication strategy to visualize our work and professional focus in order to position ourselves and increase understanding of our deliverables.",
          challenges_title: "The challenges",
          challenges_extra: "- Simplify technical concepts we use in the team into simple language.\n- Conceptualize the message.",
          how_title: "How I did it",
          how_i_did_it: "- I started by identifying the problem.\n- I led the conversation with the team about the situation.\n- We did brainstorming sessions.\n- We co-created the strategy.",
          impact: "We started from a premise: 'The tools we manage make the work of other teams possible.'\n\nWith a clear premise, we designed analogy-type content, where our team became the necessary behind-the-scenes for carrying out a film production.\n\nWe assigned a role to each tool. Each role had its own personality and essential characteristics.\n\nWe told the story through this common thread, showed its importance within the team, and backed it up with impact metrics.",
          achievements: "- Positive perception of the team within the vertical increased.\n- Understanding of our deliverables improved.\n- Quality of received feedback improved.\n- We positioned internal tools and increased their engagement.",
          team: "UX Writer (X2).\nUX Designers (X2)."
        },
        layout: "storytelling-custom",
        images: {
          main: "/images/storytelling-main.png"
        }
      }
    ],
  },
  footer: {
    title: "Let's talk!",
    contact: {
      phone: "+57 3006128312",
      email: "pablorendon@gmail.com",
      linkedin: "https://www.linkedin.com/in/pablo-rend%C3%B3n/"
    }
  }
};

const translations = {
  es: esContent,
  en: enContent
};

export const useContentStore = create((set, get) => ({
  language: 'es',
  content: esContent,
  translations: translations,

  setLanguage: (lang) => set((state) => ({
    language: lang,
    content: state.translations[lang] || state.translations.es
  })),
}));
