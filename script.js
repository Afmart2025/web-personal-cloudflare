/**
 * Allan Flores Martínez - Portfolio Personal
 * JavaScript Interactivo: Temas, Traducción ES/EN, Terminal Interactiva,
 * Menú Móvil, Toast Notifications y Validación de Formularios.
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. DICCIONARIO DE TRADUCCIÓN (ESPAÑOL / ENGLISH)
  // =========================================================================
  const translations = {
    es: {
      nav_home: "Inicio",
      nav_about: "Sobre Mí",
      nav_services: "Servicios",
      nav_projects: "Proyectos",
      nav_experience: "Experiencia",
      nav_contact: "Contacto",
      btn_cv: "Ver CV",

      hero_status: "Disponible para nuevos retos y proyectos",
      hero_subtitle: "Administrador de Servidores Linux & Especialista en Soporte",
      hero_description: "Especialista en administración de servidores GNU/Linux, monitorización de entornos con Splunk y optimización de infraestructura operativa. Comprometido con la alta disponibilidad, la resolución ágil de incidencias técnicas y el cumplimiento riguroso de SLAs y SLOs en Costa Rica y de forma remota.",
      hero_cta_contact: "Contactar Ahora",
      hero_cta_cv: "Descargar CV (PDF)",
      hero_copy_email: "Copiar Correo",
      hero_find_me: "Redes & Conexiones:",

      term_run: "Ejecutar comando:",

      about_tag: "Perfil Profesional",
      about_title: "Sobre Mí",
      about_subtitle: "Compromiso con la excelencia técnica, optimización continua de procesos y trabajo enfocado a resultados.",
      about_statement_title: "Extracto Profesional",
      about_extract_text: '"A lo largo de mi trayectoria profesional he elevado de manera consistente el estándar en cada responsabilidad asignada, demostrando no solo compromiso riguroso en mis funciones, sino buscando continuamente formas de optimizar procesos y asumiendo desafíos técnicos que permiten alcanzar metas operativas de alto impacto."',
      about_p1: "Con formación técnica certificada por la <strong>Universidad Nacional de Costa Rica (UNA)</strong> en Administración de Servidores GNU/Linux y capacitación en <strong>Python & Cisco Networking</strong> por el INA, cuento con experiencia sólida brindando soporte de primer nivel para entornos críticos basados en <strong>Splunk</strong> y servidores Linux en modalidad remota y corporativa.",
      about_p2: "Mi enfoque une el rigor técnico en la resolución de incidencias, el cumplimiento estricto de acuerdos de nivel de servicio (<strong>SLAs & SLOs</strong>) y una comunicación asertiva bilingüe para interactuar con clientes, usuarios y equipos multidisciplinarios.",
      about_pillars_title: "Aptitudes Principales",
      pillar1_title: "Dedicación y Confianza",
      pillar1_desc: "Puntualidad, responsabilidad total en las tareas asignadas y consistencia en entregar resultados de alta calidad bajo cualquier circunstancia.",
      pillar2_title: "Actitud Positiva & Proactividad",
      pillar2_desc: "Búsqueda constante de optimizaciones y mejoras continuas de procesos con una mentalidad orientada a superar obstáculos técnicos y organizacionales.",
      pillar3_title: "Compromiso Ético",
      pillar3_desc: "Rigurosidad en el tratamiento seguro de datos confidenciales, transparencia operativa y alineación estricta con las mejores prácticas corporativas.",
      pillar4_title: "Cumplimiento de SLAs y SLOs",
      pillar4_desc: "Capacidad probada para resolver incidencias críticas de clientes bajo tiempos exigentes y priorizar tickets con base en severidad e impacto.",

      meta_location: "Ubicación",
      meta_languages: "Idiomas",
      meta_lang_val: "Español (Nativo) / Inglés (Profesional)",
      meta_status_label: "Disponibilidad",
      meta_status_val: "Remoto / Híbrido / Presencial",
      meta_cv_label: "Currículum Vitae",
      meta_cv_val: "Descargar Profile.pdf ↗",

      services_tag: "Capacidades Técnicas",
      services_title: "Servicios & Especialidades",
      services_subtitle: "Soluciones en administración de infraestructura Linux, soporte analítico de logs y automatización.",
      srv1_title: "Administración & Hardening Linux",
      srv1_desc: "Instalación, configuración y mantenimiento de servidores GNU/Linux (Ubuntu, Debian, CentOS/RHEL). Aplicación de directivas de seguridad, configuración de cortafuegos (iptables, UFW), gestión de accesos SSH y políticas de permisos.",
      srv2_title: "Soporte & Monitorización Splunk",
      srv2_desc: "Soporte técnico integral para entornos empresariales Splunk sobre Linux. Diagnóstico de agentes Universal Forwarder, ingestión de eventos, auditoría de logs y verificación del estado operativo de los índices.",
      srv3_title: "Automatización & Scripting",
      srv3_desc: "Desarrollo de scripts en Bash y Python para optimizar tareas operativas de rutina, automatizar copias de respaldo seguras, rotación periódica de logs y supervisión proactiva del estado de los servicios.",
      srv4_title: "Redes & Infraestructura Conectada",
      srv4_desc: "Conocimientos en fundamentos de redes Cisco y protocolos TCP/IP, direccionamiento, servicios DNS, DHCP, conectividad VPN y diagnóstico de cuellos de botella con utilidades como netstat, ss, traceroute y curl.",
      srv5_title: "Gestión de Clientes & Negociación",
      srv5_desc: "Experiencia sólida en interacción multicanal con clientes (llamadas inbound/outbound y soporte escrito), manejo estratégico de objeciones, negociación de acuerdos y actualización exhaustiva de información en sistemas.",
      srv6_title: "Mejora Continua de Operaciones",
      srv6_desc: "Capacidad demostrada para identificar puntos de ineficiencia operativa, proponer soluciones prácticas para simplificar flujos de trabajo y documentar procedimientos técnicos para asegurar la repetibilidad.",

      projects_tag: "Demostraciones Prácticas",
      projects_title: "Proyectos Destacados",
      projects_subtitle: "Casos de estudio e implementaciones en servidores Linux, monitorización y seguridad.",
      proj_impact: "Impacto:",
      proj1_type: "Monitorización & Observabilidad",
      proj1_title: "Entorno de Ingesta y Diagnóstico de Logs con Splunk",
      proj1_desc: "Despliegue y configuración de agentes Universal Forwarder en servidores GNU/Linux para recolección centralizada de logs del sistema (syslog, auth.log, audit.log) hacia Splunk Enterprise, con dashboards de monitoreo de disponibilidad y cumplimiento de SLAs.",
      proj2_type: "Seguridad & Administración",
      proj2_title: "Línea Base de Hardening y Seguridad para Servidores Linux",
      proj2_desc: "Automatización de directivas de seguridad para servidores de producción: configuración restrictiva de SSH con llaves criptográficas, reglas de firewall con UFW e iptables, deshabilitación de servicios innecesarios y protección contra ataques de fuerza bruta.",
      proj3_type: "Automatización & Respaldo",
      proj3_title: "Suite Automatizada de Respaldos y Monitoreo de Recursos",
      proj3_desc: "Conjunto de scripts en Python y Bash para verificación periódica del estado de discos (I/O y capacidad), consumo de memoria y demonios activos de systemd. Incluye generación de respaldos comprimidos tar.gz con sincronización remota y logs rotados.",
      proj4_type: "Infraestructura Web & CDN",
      proj4_title: "Despliegue Web de Alto Rendimiento con Cloudflare",
      proj4_desc: "Arquitectura y despliegue del portal web personal optimizado para Cloudflare Pages, con compresión de activos, cabeceras de seguridad HTTP, soporte móvil responsivo, tiempos de carga ultrarrápidos y alta disponibilidad global garantizada.",

      exp_tag: "Trayectoria y Estudios",
      exp_title: "Experiencia & Formación",
      exp_subtitle: "Historial profesional, certificaciones especializadas y educación formal.",
      exp_heading: "Experiencia Laboral",
      exp1_task1: "Gestión multicanal de llamadas inbound y outbound para coordinación y acuerdos de pago.",
      exp1_task2: "Negociación efectiva de términos y resolución estratégica de objeciones de clientes.",
      exp1_task3: "Revisión profunda del estado de cuentas para comprender con exactitud las consultas del usuario.",
      exp1_task4: "Actualización rigurosa de bases de datos y registros en los canales de comunicación correspondientes.",
      exp2_task1: "Soporte técnico de clase mundial y expertise especializado para clientes con entornos <strong>Splunk</strong>.",
      exp2_task2: "Participación y asistencia en reuniones directas con clientes para análisis y resolución de incidencias.",
      exp2_task3: "Revisión constante de backlogs y auditoría de casos para asegurar su progreso y resolución oportuna.",
      exp2_task4: "Garantía de cumplimiento riguroso de acuerdos de nivel de servicio (<strong>SLAs y SLOs</strong>).",
      exp3_role: "Servicios Autónomos / Chofer",
      exp3_task1: "Gestión independiente de tiempo y logística, garantizando máxima puntualidad y seguridad.",
      exp3_task2: "Atención al cliente de primer nivel y resolución ágil de imprevistos sobre la marcha.",
      exp3_task3: "Manejo de itinerarios y optimización de rutas bajo estándares de alta eficiencia.",

      edu_heading: "Educación & Certificaciones",
      edu1_title: "Administrador de servidores GNU/Linux",
      edu1_desc: "Especialización en administración de sistemas operativos GNU/Linux, informática y comunicaciones. Formación en configuración de redes, administración de servicios, seguridad y shell scripting.",
      edu2_desc: "Administración de redes y sistemas, fundamentos de direccionamiento IP, protocolos de enrutamiento y desarrollo de scripts esenciales en Python para entornos Cisco y DevOps.",
      edu3_desc: "Capacitación en comunicación en inglés para entornos corporativos, atención a clientes internacionales y documentación técnica en tecnología.",
      edu4_desc: "Bachillerato en Educación Media.",

      contact_tag: "Canales Directos",
      contact_title: "Contacto",
      contact_subtitle: "¿Tienes una vacante, consulta técnica o proyecto en servidores e infraestructura? Hablemos directamente.",
      c_email_label: "Correo Electrónico",
      c_phone_label: "Teléfono / WhatsApp",
      c_loc_label: "Ubicación",

      form_title: "Enviar un Mensaje",
      form_subtitle: "Completa el formulario y te responderé a la brevedad posible.",
      form_name_label: "Tu Nombre *",
      form_email_label: "Tu Correo Electrónico *",
      form_subject_label: "Asunto *",
      form_message_label: "Mensaje *",
      form_btn_send: "Enviar Mensaje",

      footer_tagline: "Allan Flores Martínez — Administrador de Servidores Linux & Especialista en Soporte.",
      footer_cloudflare: "Diseñado para alto rendimiento y desplegado en Cloudflare Pages."
    },

    en: {
      nav_home: "Home",
      nav_about: "About Me",
      nav_services: "Services",
      nav_projects: "Projects",
      nav_experience: "Experience",
      nav_contact: "Contact",
      btn_cv: "View Resume",

      hero_status: "Available for new opportunities & projects",
      hero_subtitle: "Linux Systems Administrator & Technical Support Specialist",
      hero_description: "Specialized in GNU/Linux server administration, enterprise Splunk monitoring, and infrastructure optimization. Strongly committed to high availability, rapid incident resolution, and strict SLAs & SLOs compliance both remotely and in Costa Rica.",
      hero_cta_contact: "Contact Me",
      hero_cta_cv: "Download Resume (PDF)",
      hero_copy_email: "Copy Email",
      hero_find_me: "Socials & Direct Channels:",

      term_run: "Run command:",

      about_tag: "Professional Profile",
      about_title: "About Me",
      about_subtitle: "Commitment to technical excellence, continuous process improvement, and results-oriented execution.",
      about_statement_title: "Executive Summary",
      about_extract_text: '"During my professional experience I have been able to raise the bar in all the tasks that I have assigned showing not only that I’m responsible in my duties but also seeking for ways to improve processes, constantly looking for challenges that allow me to deliver great results and capable of reaching goals professionally and in different personal matters."',
      about_p1: "Certified by the <strong>Universidad Nacional de Costa Rica (UNA)</strong> in GNU/Linux Server Administration with additional training in <strong>Python & Cisco Networking</strong> from INA. Proven hands-on track record providing world-class technical expertise for mission-critical customer environments running <strong>Splunk</strong> and Linux servers.",
      about_p2: "My approach blends technical troubleshooting rigor, strict commitment to service agreements (<strong>SLAs & SLOs</strong>), and assertive bilingual communication when collaborating with clients and cross-functional teams.",
      about_pillars_title: "Core Competencies",
      pillar1_title: "Dedication and Trust",
      pillar1_desc: "Punctuality, complete accountability for all assigned duties, and consistent high-quality execution under demanding circumstances.",
      pillar2_title: "Positive Attitude & Proactivity",
      pillar2_desc: "Continually seeking process optimizations and workflow enhancements with a solution-oriented mindset to overcome complex bottlenecks.",
      pillar3_title: "Ethic Compromise & Integrity",
      pillar3_desc: "Strict adherence to confidentiality, corporate security policies, and transparent operational practices.",
      pillar4_title: "SLAs & SLOs Compliance",
      pillar4_desc: "Proven ability to resolve critical customer tickets within tight timeframes while prioritizing by severity and business impact.",

      meta_location: "Location",
      meta_languages: "Languages",
      meta_lang_val: "Spanish (Native) / English (Professional)",
      meta_status_label: "Availability",
      meta_status_val: "Remote / Hybrid / On-site",
      meta_cv_label: "Curriculum Vitae",
      meta_cv_val: "Download Profile.pdf ↗",

      services_tag: "Technical Capabilities",
      services_title: "Services & Expertise",
      services_subtitle: "Enterprise solutions for Linux server infrastructure, Splunk log analytics, and systems automation.",
      srv1_title: "Linux Administration & Hardening",
      srv1_desc: "Installation, maintenance, and hardening of GNU/Linux servers (Ubuntu, Debian, CentOS/RHEL). Security policy implementation, firewalling (iptables, UFW), SSH hardening, and user permissions management.",
      srv2_title: "Splunk Support & Observability",
      srv2_desc: "World-class technical support for Splunk environments running on Linux. Universal Forwarder agent troubleshooting, log ingestion pipelines, index health verification, and SPL log analytics.",
      srv3_title: "Automation & Scripting",
      srv3_desc: "Custom Bash and Python scripts designed to automate repetitive operational tasks, perform automated scheduled backups, rotate logs, and monitor server health status.",
      srv4_title: "Networking & Infrastructure",
      srv4_desc: "Strong foundation in Cisco Networking and TCP/IP protocols, subnetting, DNS/DHCP configuration, secure VPN connections, and network diagnostic tools (netstat, ss, traceroute, curl).",
      srv5_title: "Customer Support & Negotiation",
      srv5_desc: "Extensive experience handling multichannel communications (inbound/outbound calls, written tickets), overcoming consumer objections, negotiating terms, and updating account records thoroughly.",
      srv6_title: "Continuous Process Improvement",
      srv6_desc: "Demonstrated aptitude for identifying operational friction points, designing streamlined workflows, and documenting standard operating procedures (SOPs).",

      projects_tag: "Hands-on Deployments",
      projects_title: "Featured Projects",
      projects_subtitle: "Real-world implementations in Linux server administration, log management, and automation.",
      proj_impact: "Impact:",
      proj1_type: "Monitoring & Observability",
      proj1_title: "Enterprise Splunk Log Aggregation & Analysis",
      proj1_desc: "Deployment and tuning of Universal Forwarders on Linux servers to stream syslog, auth.log, and audit logs into Splunk Enterprise, accompanied by operational dashboards and SLA health metrics.",
      proj2_type: "Security & Hardening",
      proj2_title: "Linux Production Security Hardening Baseline",
      proj2_desc: "Automated configuration script for production Linux instances: restricted SSH keys authentication, UFW/iptables rules, brute-force mitigation, and attack surface reduction.",
      proj3_type: "Automation & Reliability",
      proj3_title: "Automated Backup & Server Healthcheck Engine",
      proj3_desc: "Python and Bash tool suite for periodic monitoring of CPU, RAM, disk I/O, and critical systemd daemons, generating compressed archives with automated remote synchronization and alerting.",
      proj4_type: "Web Infrastructure & CDN",
      proj4_title: "High-Performance Web Portal on Cloudflare Pages",
      proj4_desc: "Architecture and deployment of personal portfolio optimized for Cloudflare Pages, with asset compression, HTTP security headers, responsive design, and global low-latency CDN delivery.",

      exp_tag: "Career & Education",
      exp_title: "Experience & Education",
      exp_subtitle: "Professional background, specialized certifications, and formal education.",
      exp_heading: "Professional Experience",
      exp1_task1: "Handled inbound and outbound calls to arrange payment terms and agreements.",
      exp1_task2: "Negotiated payment terms and effectively overcame consumer objections.",
      exp1_task3: "Reviewed account status thoroughly to understand customer needs and inquiries.",
      exp1_task4: "Diligent multichannel support and accurate updates across internal database systems.",
      exp2_task1: "Provided world-class technical expertise for enterprise customer Splunk environments.",
      exp2_task2: "Participated in and supported customer meetings to analyze and resolve complex technical issues.",
      exp2_task3: "Conducted continuous backlog reviews to verify case progress and accelerate resolutions.",
      exp2_task4: "Ensured successful resolution of critical tickets within tight SLAs & SLOs.",
      exp3_role: "Independent Logistics & Transportation",
      exp3_task1: "Independent scheduling, route optimization, and maximum punctuality and road safety.",
      exp3_task2: "High-touch customer service and fast resolution of unforeseen logistical hurdles.",
      exp3_task3: "Efficient itinerary planning maintaining consistently high customer satisfaction.",

      edu_heading: "Education & Certifications",
      edu1_title: "GNU/Linux Server Administrator",
      edu1_desc: "Specialization in GNU/Linux operating systems, computer networking, and communications. Hands-on configuration of servers, services, security, and shell scripting.",
      edu2_desc: "Networking and systems administration, Cisco IP routing fundamentals, and core Python scripting for networking and infrastructure automation.",
      edu3_desc: "Corporate English language training focused on international customer communication and technical IT documentation.",
      edu4_desc: "High School Bachelor Degree.",

      contact_tag: "Direct Channels",
      contact_title: "Contact",
      contact_subtitle: "Have an opening, technical question, or infrastructure project? Let's talk directly.",
      c_email_label: "Email Address",
      c_phone_label: "Phone / WhatsApp",
      c_loc_label: "Location",

      form_title: "Send a Direct Message",
      form_subtitle: "Fill out the form below and I will get back to you promptly.",
      form_name_label: "Your Name *",
      form_email_label: "Your Email Address *",
      form_subject_label: "Subject *",
      form_message_label: "Message *",
      form_btn_send: "Send Message",

      footer_tagline: "Allan Flores Martínez — Linux Server Administrator & Support Specialist.",
      footer_cloudflare: "Engineered for high performance and hosted on Cloudflare Pages."
    }
  };

  let currentLang = localStorage.getItem('site_lang') || 'es';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('site_lang', lang);
    document.documentElement.lang = lang;

    const langIndicator = document.getElementById('lang-indicator');
    if (langIndicator) {
      langIndicator.textContent = lang === 'es' ? 'EN' : 'ES';
    }

    const langToggleBtn = document.getElementById('lang-toggle-btn');
    if (langToggleBtn) {
      langToggleBtn.setAttribute('aria-label', lang === 'es' ? 'Cambiar idioma a Inglés' : 'Switch language to Spanish');
      langToggleBtn.setAttribute('title', lang === 'es' ? 'Cambiar idioma (ES/EN)' : 'Switch language (ES/EN)');
    }

    // Traducir todos los elementos marcados con data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
  }

  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'es' ? 'en' : 'es';
      applyLanguage(nextLang);
      showToast(nextLang === 'en' ? 'Language switched to English' : 'Idioma cambiado a Español', 'success');
    });
  }

  // Inicializar idioma
  if (currentLang !== 'es') {
    applyLanguage(currentLang);
  }

  // =========================================================================
  // 2. MODO OSCURO / MODO CLARO (THEME TOGGLE)
  // =========================================================================
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const storedTheme = localStorage.getItem('site_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = storedTheme ? storedTheme : (prefersDark ? 'dark' : 'dark'); // Por defecto tema oscuro moderno

  document.documentElement.setAttribute('data-theme', initialTheme);

  function updateThemeButtonAria(theme) {
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute(
        'aria-label',
        theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'
      );
    }
  }

  updateThemeButtonAria(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('site_theme', nextTheme);
      updateThemeButtonAria(nextTheme);
      showToast(nextTheme === 'dark' ? 'Modo oscuro activado' : 'Modo claro activado');
    });
  }

  // =========================================================================
  // 3. MENÚ DE NAVEGACIÓN MÓVIL
  // =========================================================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileMenuBtn.classList.toggle('active');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Cerrar al hacer click en cualquier enlace del menú
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // =========================================================================
  // 4. INDICADOR ACTIVO EN NAVBAR SEGÚN SCROLL
  // =========================================================================
  const sections = document.querySelectorAll('section[id]');
  const navLinksList = document.querySelectorAll('.nav-link');

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinksList.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  // =========================================================================
  // 5. TERMINAL INTERACTIVA DE LINUX
  // =========================================================================
  const terminalBody = document.getElementById('terminal-body');
  const terminalChips = document.querySelectorAll('.t-chip');

  const commandResponses = {
    skills: `
<div class="t-line"><span class="t-prompt">allan@server:~$</span> <span class="t-cmd">skills</span></div>
<div class="t-output">
  <strong>Competencias Técnicas:</strong><br>
  • GNU/Linux: Ubuntu Server, Debian, CentOS/RHEL, systemd, SSH, IPTables/UFW<br>
  • Monitoreo & Logs: Splunk Enterprise, Universal Forwarder, SPL queries<br>
  • Lenguajes & Scripting: Bash Shell Scripting, Python (Cisco Essentials)<br>
  • Redes: Protocolos TCP/IP, DNS, DHCP, Enrutamiento Cisco, VPNs<br>
  • Estándares: SLAs & SLOs 100%, ITIL foundations, Incident RCA
</div>`,
    splunk: `
<div class="t-line"><span class="t-prompt">allan@server:~$</span> <span class="t-cmd">splunk</span></div>
<div class="t-output highlight-emerald">
  <strong>Experiencia con Splunk en Sitel Group:</strong><br>
  • Soporte técnico de clase mundial a clientes enterprise.<br>
  • Auditoría y análisis de incidentes en tiempo real para servidores Linux.<br>
  • Gestión y reducción continua de backlog de tickets bajo SLAs/SLOs.
</div>`,
    contact: `
<div class="t-line"><span class="t-prompt">allan@server:~$</span> <span class="t-cmd">contact</span></div>
<div class="t-output">
  <strong>Datos de Contacto:</strong><br>
  • Correo: <a href="mailto:kratos3366@gmail.com" style="color:#38bdf8;text-decoration:underline;">kratos3366@gmail.com</a><br>
  • Teléfono/WhatsApp: +506 6351 4209<br>
  • Ubicación: Montes de Oca, San José, Costa Rica<br>
  • LinkedIn: linkedin.com/in/allan-floresmartínez-6b59a5279
</div>`,
    clear: ""
  };

  terminalChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      if (cmd === 'clear') {
        terminalBody.innerHTML = `
          <div class="t-line"><span class="t-prompt">allan@server:~$</span> <span class="t-cmd">clear</span></div>
          <div class="t-output">Terminal despejada. Selecciona un comando rápido abajo.</div>
        `;
      } else if (commandResponses[cmd]) {
        terminalBody.insertAdjacentHTML('beforeend', commandResponses[cmd]);
        terminalBody.scrollTop = terminalBody.scrollHeight;
      }
    });
  });

  // Reloj de SLA en terminal
  const termClock = document.getElementById('term-clock');
  if (termClock) {
    function updateTermClock() {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      termClock.textContent = `CR: ${timeStr} | SLA 100%`;
    }
    updateTermClock();
    setInterval(updateTermClock, 1000);
  }

  // =========================================================================
  // 6. SISTEMA DE TOAST NOTIFICATIONS
  // =========================================================================
  const toastContainer = document.getElementById('toast-container');

  function showToast(message, type = 'info') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type === 'success' ? 'toast-success' : ''}`;
    
    const iconSvg = type === 'success' 
      ? '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>'
      : '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#0284c7" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';

    toast.innerHTML = `${iconSvg}<span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-closing');
      setTimeout(() => {
        if (toast.parentElement) toast.parentElement.removeChild(toast);
      }, 250);
    }, 3200);
  }

  // =========================================================================
  // 7. COPIAR CORREO Y CAMPOS AL PORTAPAPELES
  // =========================================================================
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = copyEmailBtn.getAttribute('data-email') || 'kratos3366@gmail.com';
      copyTextToClipboard(email, '¡Correo copiado al portapapeles!');
    });
  }

  const copyFields = document.querySelectorAll('.copy-field');
  copyFields.forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.getAttribute('data-copy');
      if (val) {
        copyTextToClipboard(val, `Copiado: ${val}`);
      }
    });
  });

  function copyTextToClipboard(text, successMsg) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg, 'success');
      }).catch(() => fallbackCopy(text, successMsg));
    } else {
      fallbackCopy(text, successMsg);
    }
  }

  function fallbackCopy(text, successMsg) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast(successMsg, 'success');
    } catch (err) {
      showToast('No se pudo copiar automáticamente', 'info');
    }
    document.body.removeChild(tempInput);
  }

  // =========================================================================
  // 8. FORMULARIO DE CONTACTO (VALIDACIÓN & MAILTO)
  // =========================================================================
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const subjectInput = document.getElementById('form-subject');
      const messageInput = document.getElementById('form-message');

      let isValid = true;

      // Limpiar errores previos
      document.querySelectorAll('.field-error').forEach(el => el.textContent = '');

      if (!nameInput.value.trim()) {
        document.getElementById('name-error').textContent = currentLang === 'es' ? 'Por favor ingresa tu nombre.' : 'Please enter your name.';
        isValid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        document.getElementById('email-error').textContent = currentLang === 'es' ? 'Ingresa un correo electrónico válido.' : 'Please enter a valid email.';
        isValid = false;
      }

      if (!subjectInput.value.trim()) {
        document.getElementById('subject-error').textContent = currentLang === 'es' ? 'Indica el asunto de tu mensaje.' : 'Please provide a subject.';
        isValid = false;
      }

      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        document.getElementById('message-error').textContent = currentLang === 'es' ? 'Por favor escribe un mensaje de al menos 10 caracteres.' : 'Please enter at least 10 characters.';
        isValid = false;
      }

      if (!isValid) return;

      // Generar enlace mailto
      const recipient = 'kratos3366@gmail.com';
      const mailSubject = encodeURIComponent(`[Contacto Web] ${subjectInput.value.trim()} - de ${nameInput.value.trim()}`);
      const mailBody = encodeURIComponent(
        `Nombre: ${nameInput.value.trim()}\n` +
        `Correo: ${emailInput.value.trim()}\n` +
        `Asunto: ${subjectInput.value.trim()}\n\n` +
        `Mensaje:\n${messageInput.value.trim()}`
      );

      const mailtoUrl = `mailto:${recipient}?subject=${mailSubject}&body=${mailBody}`;

      showToast(currentLang === 'es' ? 'Abriendo cliente de correo...' : 'Opening email client...', 'success');
      
      // Abrir cliente de correo del usuario
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 400);

      contactForm.reset();
    });
  }

  // =========================================================================
  // 9. BOTÓN VOLVER AL INICIO (BACK TO TOP)
  // =========================================================================
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 380) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
