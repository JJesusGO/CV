"use strict";class PanelExperienciaContenido extends React.Component{constructor(e){super(e),this.state={educacion:[{fecha:"2011 - 2014",lugar:"Irapuato, Guanajuato",titulo:"GRADO Técnico en Mecánica Industrial.",subtitulo:"Centro de Bachillerato Tecnológico Industrial y de Servicios No. 65.",contenido:"Cédula Profesional 9207637"},{fecha:"2015 - 2020",lugar:"Salamanca, Guanajuato",titulo:"GRADO Licenciatura en Ingeniería en Mecatrónica.",subtitulo:"Universidad de Guanajuato, División de Ingenierías Campus Irapuato-Salamanca.",contenido:"Egresado con titulación en proceso"}],profesional:[{fecha:"Jun. 2013 – Dic. 2013",lugar:"Irapuato, Guanajuato",titulo:"CENTRO DE BACHILLERATO TECNOLÓGICO INDUSTRIAL Y DE SERVICIOS NO. 65.",subtitulo:"Servicio Social: Impartición de cursos de SolidWorks.",contenido:["Desarrollo e impartición de clases y tutorías a grupos de más de 30 personas.","Manejo de SolidWorks de manera intermedia-avanzada.","Desarrollo e implementación del temario del manejo y desarrollo de piezas mecánicas en SolidWorks."]},{fecha:"Ene. 2014 – May. 2014",lugar:"Irapuato, Guanajuato",titulo:'TRANSFORMACIONES Y PAILERÍA ESPECIALIZADA RICO "TYPER"',subtitulo:"Prácticas Profesionales: Ayudante como técnico en Mecánica Industrial.",contenido:["Mantenimiento de máquinas y herramientas.","Implementación de conocimientos en el apoyo a la creación de piezas mecánicas en torno, fresadora, pantógrafo CNC y cortadora mecánica.","Estudio y practica en soldadura con arco eléctrico y soldadura MIG (arco gas metal).","Logística de residuos, carga y descarga de equipo y material."]},{fecha:"Ene. 2016 – Jul. 2019",lugar:"Salamanca, Guanajuato",titulo:"DIVISIÓN DE INGENIERÍAS CAMPUS IRAPUATO - SALAMANCA",subtitulo:"Servicio Social: Ayudante en el área de investigación de óptica no lineal en el área de ingeniería.",contenido:["Análisis numérico de anillos de auto-difracción, análisis y simulación de patrones de interferencia, obtención y aproximación de graficas de z-scan de materiales no lineales y estudio numérico rejillas de difracción en medios no lineales.","Implementación de arreglos experimentales para el estudio de óptica no lineal aplicada.","Muestreo y adquisición de datos para el tratamiento e interpretación de fenómenos en el campo de la óptica.","Desarrollo e implementación de algoritmos, simulaciones y aplicaciones en el área de física de la óptica no lineal.","Creación de algoritmos de visión por computadora para realizar el análisis y reconocimiento de patrones en la formación de anillos de auto-difracción."]},{fecha:"Ago. 2019 – Feb. 2020",lugar:"Salamanca, Guanajuato",titulo:"DIVISIÓN DE INGENIERÍAS CAMPUS IRAPUATO - SALAMANCA",subtitulo:"Servicio Social Profesional: Desarrollo y estudio de Biosensores ópticos de fibra óptica plástica para detección de glucosa.",contenido:["Diseño del prototipo de un sistema de toma de muestras de biosensores ópticos.","Cableado y construcción del hardware.","Programación del software y controlador del sistema de muestreo.","Apoyo en la construcción y preparación de bio-sensores.","Capacitación en la interpretación de código (Matlab) del software encargado de los resultados."]},{fecha:"Dic. 2019 – Feb. 2020",lugar:"Irapuato, Guanajuato",titulo:"TIERRA DEL BAJÍO CONSTRUCCIONES",subtitulo:"Desarrollador de aplicaciones y sistemas: Prototipo de aplicación de control de inventario local y en la nube para dispositivos Android y Windows. Desarrollo de un recorrido virtual.",contenido:["Diseño, desarrollo y programación de un prototipo de un sistema para la administración de un inventario de un proyecto de construcción.","Implementación de una base de datos en la nube de un servidor con sistema de copiado local y sincronización por usuario.","Seguimiento de las actividades y activos que se manejan en el proyecto y almacén general.","Diseño, desarrollo, modelado y programación de un recorrido virtual de un proyecto en construcción."]},{fecha:"Jul. 2020 – Ene. 2021",lugar:"Irapuato, Guanajuato",titulo:"FREELANCER",subtitulo:"Desarrollador de software: Aplicación para el apoyo en el diseño de transformadores de alto voltaje. Análisis de regresión de variables mediante IA para la aproximación de peso en la construcción de transformadores.",contenido:["Diseño, desarrollo y programación de una aplicación que apoya al diseño de transformadores.","Interpretación de resultados mediante la interpretación de archivos generados por una aplicación de cálculos eléctricos.","Estructuración de las fases y bobinas en un transformador y distribución de los resultados en una proyección por nodos.","Diseño, desarrollo y programación de un lenguaje de descripción de la estructura de transformadores. NOST.","Aproximación de peso de la construcción de un transformador mediante la aplicación de ajustes (Regresión polinomial, Perceptrón Multicapa y Red Neuronal Probabilística)"]},{fecha:"Jul. 2020 – Feb. 2021",lugar:"Irapuato, Guanajuato",titulo:"FREELANCER",subtitulo:'Desarrollador web: Desarrollo de una plataforma web para la creación e implementación de encuestas del "Efecto de la cultura organizacional sobre los factores de riesgo psicosocial en Universidades e Instituciones de Educación Superior de Guanajuato."',contenido:["Diseño, desarrollo y programación de Backend y Frontend de una plataforma de encuestas.","Implementación del modelo MVC.","Diseño y estructuración de la página con JSX y SASS","Programación basada en Babel y React con JavaScript.","Base de datos de usuarios, encuestas, organizaciones y respuestas en MySQL.","Conexión con servidor mediante AJAX y PHP.","Diseño de multimedia, fuentes e iconografía SVG.","Mantenimiento y puesta en marcha de hosting, dominio, correos, certificado SSL."]},{fecha:"Mar. 2021 – Sep. 2021",lugar:"Irapuato, Guanajuato",titulo:"GRUPO FLOGO - Departamento IIoT, IT y Desarrollo de software",subtitulo:"Becario (Desarrollo web con especialización en IIoT): Desarrollador lider de un equipo encargado de la creación de una aplicación integral de IIoT enfocada en el análisis de la salud y estado actual de las maquinas mediante adquisición, almacenamiento y análisis de sus variables con sensores.",contenido:["Diseño, desarrollo y programación de Backend y Frontend de una plataforma de IIoT mediante el stack MERN.","Implementación del modelo MVC, SOLID y MICROSERVICIOS.","Diseño y estructuración de aplicaciones NODE con estructura de MICROSERVICIOS.","Comunicación con tarjetas LTE mediante WebSockets IP/TCP.","Diseño y estructuración de la página con HTML, JSX, CSS y SASS","Diseño y desarrollo de UI/UX e implementación mediante React con JavaScript.","Diseño, desarrollo e implementación de la base de datos en MongoDB ATLAS.","Comunicación mediante APIS con Express.","Diseño de multimedia, fuentes e iconografía SVG.","Mantenimiento y puesta en marcha de servidor VPN, dominio, correos, certificado SSL.","Versionado mediante Git y GitHub"]}],cursos:[{fecha:"Mar. 2018",lugar:"Salamanca, Guanajuato",titulo:"DIVISIÓN DE INGENIERÍAS CAMPUS IRAPUATO - SALAMANCA",subtitulo:'Curso: "Introducción a la programación del PLC Beckhoff Cx1010: Conexiones e interacción de datos."',contenido:["Instalación de software y hardware de un equipo de PLC Beckhoff.","Nomenclatura e introducción de un PLC Beckhoff.","Control de los puertos de entrada, salida y misceláneos.","Implementación de sensores y actuadores.","Programación del PLC por máquina de estados, diagrama de bloques y escalera."]},{fecha:"Ene. 2021",lugar:"Irapuato, Guanajuato",titulo:"SANTANDER, FUNDACIÓN EDUCACIÓN SUPERIOR EMPRESA",subtitulo:'Curso: "Introducción a las habilidades digitales."',contenido:["Curso digital introductorio para la beca 2021 de Full Stack Developer de Santander.","Comprende las siguientes habilidades digitales: La nube, Ciberseguridad, Big Data, Internet de las cosas, Inteligencia Artificial, Realidad virtual y aumentada, Impresión 3D, Biotecnología, Nanotecnología y Robótica avanzada.","Aplicación de 4 exámenes con resultados de 10/10."]},{fecha:"Ene. 2021",lugar:"Irapuato, Guanajuato",titulo:"UNIVERSIDAD DE GUANAJUATO",subtitulo:'Curso: "Aprendiendo a aprender"',contenido:["Implementación de una metodología de aprendizaje.","Aplicación de 1 examen con resultados 10/10"]},{fecha:"Abr. 2021 - WIP",lugar:"Irapuato, Guanajuato",titulo:"SANTANDER, DIGITAL HOUSE",subtitulo:'Curso: "Full Stack Node a distancia"',contenido:["Curso de actualización y certificación como desarrollador Full Stack.","Enfocado en profundizar en tecnologías como: Node, Express, HTML, CSS, Javascript, MySQL, API’s, CRUD, React, entre otras.","Certificación con modalidad de 4 clases a la semana (2 síncronas y dos asíncronas) a un plazo de más de 6 meses mediante una plataforma online.","Trabajo integrador en equipo con organización mediante Gi, Trello y Slack."]}],trabajos:[{fecha:"Jun. 2019 – Dic. 2020 ",lugar:"",titulo:"DIVISIÓN DE INGENIERÍAS CAMPUS IRAPUATO - SALAMANCA",subtitulo:'Tesis: "Simulación numérica de anillos de auto-difracción"',contenido:["Desarrollar una aplicación para graficar, muestrear y rastrear perfiles de patrones de anillos de auto-difracción con el fin de parametrizarlos mediante variables específicas.","Implementación de una metodología de aprendizaje.","Investigar y estudiar la óptica no lineal.","Investigar y simular modelos matemáticos para la generación de anillos de auto-difracción.","Aplicar algoritmos de visión por computadora en el desarrollo de software.","Desarrollo de una aplicación que permitan la simulación de un fenómeno físico a partir de un modelo matemático.","Estudio del campo de la experiencia de usuario e interfaz de usuario.","Diseñar y verificar el funcionamiento de una aplicación (creación de un benchmark)."]}]}}renderElementoBasico(e,a,o,t,i){let n=[];return n.push({contenido:React.createElement("div",{className:"w-100","data-aos":"fade-up"},React.createElement("h3",{className:"txt-izquierda txt-negro"},e),React.createElement("h4",{className:"txt-izquierda txt-terciario"},a)),ancho:[4]}),n.push({contenido:React.createElement("div",{className:"w-100","data-aos":"fade-up"},React.createElement("h3",{className:"txt-izquierda txt-negro"},o),React.createElement("h5",{className:"txt-izquierda txt-negro mt-3"},t),React.createElement("p",{className:"txt-izquierda  txt-negro"},i)),ancho:[8]}),React.createElement(Fila,{clases:"mt-5",columnas:n})}renderElementoLista(e,a,o,t,i){let n=[],c=i.map((e=>React.createElement("li",{className:"txt-negro my-0"},React.createElement("p",{className:"txt-izquierda my-0"},e))));return n.push({contenido:React.createElement("div",{className:"w-100","data-aos":"fade-up"},React.createElement("h3",{className:"txt-izquierda txt-negro"},e),React.createElement("h4",{className:"txt-izquierda txt-terciario"},a)),ancho:[4]}),n.push({contenido:React.createElement("div",{className:"w-100","data-aos":"fade-up"},React.createElement("h3",{className:"txt-izquierda txt-negro"},o),React.createElement("h5",{className:"txt-izquierda txt-negro mt-3"},t),React.createElement("ul",null,c)),ancho:[8]}),React.createElement(Fila,{clases:"mt-5",columnas:n})}renderEducacion(){let e=React.createElement("h1",{className:"txt-centrado txt-principal mt-basico","data-aos":"fade-up"},"Educación __"),a=this.state.educacion.map((e=>this.renderElementoBasico(e.fecha,e.lugar,e.titulo,e.subtitulo,e.contenido))),o=React.createElement("div",{className:"position-relative my-basicoi-3"},React.createElement("div",{className:"d-flex flex-column"},a),React.createElement("div",{className:"position-absolute bkg-principal",style:{left:"-15px",top:"0",bottom:"0",width:"8px"}}));return React.createElement(Panel,{tipo:PanelTipo.BASICO,contenido:[e,o],clases:"py-basico-2"})}renderExperienciaProfesional(){let e=React.createElement("h1",{className:"txt-centrado txt-principal mt-basico","data-aos":"fade-up"},"__ Profesional"),a=this.state.profesional.map((e=>this.renderElementoLista(e.fecha,e.lugar,e.titulo,e.subtitulo,e.contenido))),o=React.createElement("div",{className:"position-relative my-basicoi-3"},React.createElement("div",{className:"d-flex flex-column"},a),React.createElement("div",{className:"position-absolute bkg-principal",style:{left:"-15px",top:"0",bottom:"0",width:"8px"}}));return React.createElement(Panel,{tipo:PanelTipo.BASICO,contenido:[e,o],clases:"py-basico-2"})}renderCursosTalleres(){let e=React.createElement("h1",{className:"txt-centrado txt-principal mt-basico","data-aos":"fade-up"},"Cursos __"),a=this.state.cursos.map((e=>this.renderElementoLista(e.fecha,e.lugar,e.titulo,e.subtitulo,e.contenido))),o=React.createElement("div",{className:"position-relative my-basicoi-3"},React.createElement("div",{className:"d-flex flex-column"},a),React.createElement("div",{className:"position-absolute bkg-principal",style:{left:"-15px",top:"0",bottom:"0",width:"8px"}}));return React.createElement(Panel,{tipo:PanelTipo.BASICO,contenido:[e,o],clases:"py-basico-2"})}renderTrabajosInvestigaciones(){let e=React.createElement("h1",{className:"txt-centrado txt-principal mt-basico","data-aos":"fade-up"},"__ Trabajos"),a=this.state.trabajos.map((e=>this.renderElementoLista(e.fecha,e.lugar,e.titulo,e.subtitulo,e.contenido))),o=React.createElement("div",{className:"position-relative my-basicoi-3"},React.createElement("div",{className:"d-flex flex-column"},a),React.createElement("div",{className:"position-absolute bkg-principal",style:{left:"-15px",top:"0",bottom:"0",width:"8px"}}));return React.createElement(Panel,{tipo:PanelTipo.BASICO,contenido:[e,o],clases:"py-basico-2"})}render(){return React.createElement("main",{className:"container-fluid"},React.createElement("section",{id:"educacion",className:"container-fluid seccion-experienciacontenido "},this.renderEducacion()),React.createElement("section",{id:"experienciaprofesional",className:"container-fluid seccion-experienciacontenido "},this.renderExperienciaProfesional()),React.createElement("section",{id:"cursostalleres",className:"container-fluid seccion-experienciacontenido "},this.renderCursosTalleres()),React.createElement("section",{id:"trabajosinvestigaciones",className:"container-fluid seccion-experienciacontenido "},this.renderTrabajosInvestigaciones()))}}