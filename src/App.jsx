import { useState, useEffect } from 'react'
import './App.css'
import { FaIndustry, FaHeartbeat, FaFlask, FaLightbulb, FaGraduationCap } from "react-icons/fa";
import { FaChartLine, FaProductHunt, FaBullhorn, FaCalendarAlt } from "react-icons/fa";
import { FaUser, FaBriefcase, FaHeart, FaLaptopCode, FaPhone, FaEnvelope, FaArrowUp, FaCheckCircle, FaClock, FaRocket, FaShieldAlt, FaStar, FaBars, FaTimes, FaQuestionCircle, FaHandshake, FaUsers, FaAward, FaChevronDown, FaChevronUp } from "react-icons/fa";

const projectsData = [
  {
    title: "Технопарк",
    description: "Присвоение статуса технопарка промышленному предприятию.",
    buttonLabel: "Contact Me",
    color: "#2D5D4E",
  },
  {
    title: "Пилотное тестирование",
    description: "Получение гранта на пилотное тестирование медицинского изделия.",
    buttonLabel: "Learn More",
    color: "#1F4237",
  },
  {
    title: "Программы лояльности",
    description: "Разработка и внедрение Программы лояльности для дилеров.",
    buttonLabel: "Contact Me",
    color: "#3D7A68",
  },
  {
    title: "Фирменный стиль",
    description: "Разработка с нуля концепции фирменного стиля.",
    buttonLabel: "Discover More",
    color: "#245044",
  },
  {
    title: "Презентации",
    description: "Подготовка презентаций Компании, Продуктов, Проектов.",
    buttonLabel: "Contact Me",
    color: "#2D5D4E",
  },
  {
    title: "Связи с общественностью",
    description: "Формирование имиджа компании в профессиональной среде.",
    buttonLabel: "Learn More",
    color: "#4A9B85",
  },
  {
    title: "Запуск",
    description: "Лонч медицинского изделия и лечебной косметики.",
    buttonLabel: "Explore Services",
    color: "#3D7A68",
  },
];


const servicesData = [
  {
    title: "Маркетинговые стратегии",
    description: "Разработка и реализация маркетинговых стратегий для B2B и B2C сегментов.",
    icon: <FaChartLine />,
    color: "#2D5D4E",
  },
  {
    title: "Выведение продуктов на рынок",
    description: "Организация исследований и пилотных тестирований, лонч, повышение ROI.",
    icon: <FaProductHunt />,
    color: "#245044",
  },
  {
    title: "Брендинг и реклама",
    description: "Продвижение и реклама в социальных сетях, SEO-оптимизация.",
    icon: <FaBullhorn />,
    color: "#3D7A68",
  },
  {
    title: "Организация мероприятий",
    description: "Организация мероприятий и PR-поддержка, event-маркетинг.",
    icon: <FaCalendarAlt />,
    color: "#4A9B85",
  },
];


const personalInfoData = [
  {
    title: "Личные качества",
    icon: <FaUser />,
    items: [
      "Контактность",
      "Умение грамотно излагать мысли",
      "Интерес ко всему новому",
      "Честность",
      "Инициативность",
      "Эрудиция",
      "Целеустремленность",
      "Лидерское мышление",
      "Дружелюбие",
      "Эмпатия",
    ],
    color: "#2D5D4E",
  },
  {
    title: "Деловые качества",
    icon: <FaBriefcase />,
    items: [
      "Быстрая обучаемость",
      "Клиентоориентированность",
      "Ответственность",
      "Ориентация на результат",
      "Навыки публичных выступлений",
    ],
    color: "#3D7A68",
  },
  {
    title: "Навыки",
    icon: <FaLaptopCode />,
    items: [
      "Photoshop",
      "Adobe Illustrator",
      "Adobe Indesign",
      "Битрикс24",
      "1C Предприятие",
    ],
    color: "#245044",
    
  },
  {
    title: "Увлечения",
    icon: <FaHeart />,
    items: [
      "Танцы",
      "Спорт",
      "Автопутешествия",
      "Медицина",
      "Биохакинг",
      "Современная наука",
      "Живопись",
      "История",
      "Психология",
    ],
    color: "#4A9B85",
  },
];


const recommendationsData = [
  {
    name: "Хлебников В.Н.",
    title: "Генеральный Директор",
    company: "Парус Электро",
  },
  {
    name: "Краус О.",
    title: "Генеральный Директор",
    company: "ЗАО РТС",
  },
  {
    name: "Устинович А.А.",
    title: "Директор",
    company: "РА Белая Карона",
  },
  {
    name: "Рыкова Ирина Юрьевна",
    title: "Директор",
    company: "Компания ЭНЕРГОТЕПЛОМАШ",
  },
];


function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [contactMethod, setContactMethod] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    // CREATE Action Funnel: TIMING - Smart scroll-based triggers
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
      
      setScrollProgress(scrollPercent);
      setShowBackToTop(scrollY > 300);
      
      // Show floating CTA after user scrolls past hero (TIMING)
      setShowFloatingCTA(scrollY > windowHeight * 0.5 && scrollY < documentHeight - windowHeight * 1.5);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // CREATE Action Funnel: CUE - Auto-hide notification after 5 seconds
    const notificationTimer = setTimeout(() => {
      setShowNotification(false);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      elements.forEach((el) => observer.unobserve(el));
      clearTimeout(notificationTimer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('.footer')?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // CREATE Action Funnel: EXECUTION - Handle contact method selection with feedback
  const handleContactClick = (method) => {
    setContactMethod(method);
    setTimeout(() => {
      setContactMethod(null);
    }, 2000);
  };

  // Spectrum of Thinking: Focused calculation - FAQ toggle
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Spectrum of Thinking: Habits - Familiar navigation patterns
  const navItems = [
    { id: 'about', label: 'Обо мне', icon: <FaUser /> },
    { id: 'projects', label: 'Проекты', icon: <FaChartLine /> },
    { id: 'services', label: 'Услуги', icon: <FaBriefcase /> },
    { id: 'contact', label: 'Контакты', icon: <FaPhone /> },
  ];

  // Spectrum of Thinking: Self-concept - "Is this for me?" checklist
  const fitChecklist = [
    { text: 'Вам нужно увеличить продажи или узнаваемость бренда', icon: <FaChartLine /> },
    { text: 'Вы планируете запуск нового продукта или услуги', icon: <FaRocket /> },
    { text: 'Вам нужна помощь с маркетинговой стратегией', icon: <FaLightbulb /> },
    { text: 'Вы хотите сэкономить время и получить экспертизу', icon: <FaClock /> },
  ];

  // Spectrum of Thinking: Focused calculation - FAQ
  const faqData = [
    {
      question: 'Как проходит консультация?',
      answer: 'Консультация длится 30 минут и проходит в удобном для вас формате: по телефону, видеозвонку или лично. Мы обсудим ваши задачи, текущую ситуацию и возможности для роста.',
    },
    {
      question: 'Сколько времени занимает реализация проекта?',
      answer: 'Сроки зависят от масштаба проекта. Простые задачи могут быть решены за 1-2 недели, комплексные стратегии - от 1 до 3 месяцев. Все сроки обсуждаются индивидуально.',
    },
    {
      question: 'Какие результаты я могу ожидать?',
      answer: 'В зависимости от проекта: рост продаж до 40% за первый квартал, увеличение узнаваемости бренда, повышение конверсии, улучшение ROI. Все результаты измеримы и отслеживаются.',
    },
    {
      question: 'Работаете ли вы с небольшими компаниями?',
      answer: 'Да, я работаю с компаниями любого размера - от стартапов до крупных корпораций. Важна не размер компании, а ваша готовность к росту и развитию.',
    },
    {
      question: 'Какова стоимость услуг?',
      answer: 'Стоимость рассчитывается индивидуально в зависимости от объема работ, сложности проекта и ваших задач. Первая консультация всегда бесплатна.',
    },
  ];

  return (
    <>
      {/* Spectrum of Thinking: Habits - Familiar navigation menu */}
      <nav className="main-navigation">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Ольга Коновалова
          </div>
          <button className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Меню">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button onClick={() => scrollToSection(item.id)} className="nav-link">
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* CREATE Action Funnel: CUE - Enhanced Floating Contact Button with notification badge */}
      {showFloatingCTA && (
        <button 
          className={`floating-contact-btn ${showNotification ? 'has-notification' : ''}`} 
          onClick={scrollToContact} 
          aria-label="Связаться"
        >
          <FaPhone />
          <span>Связаться</span>
          {showNotification && (
            <span className="notification-badge">!</span>
          )}
          {/* CREATE Action Funnel: REACTION - Trust indicator */}
          <span className="availability-indicator">
            <FaClock /> Доступна сейчас
          </span>
        </button>
      )}

      {/* CREATE Action Funnel: CUE - Scroll progress indicator (TIMING) */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>

      {/* Back to Top Button - ABILITY */}
      {showBackToTop && (
        <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Наверх">
          <FaArrowUp />
        </button>
      )}

      {/* CREATE Action Funnel: EXECUTION - Success feedback */}
      {contactMethod && (
        <div className="success-feedback">
          <FaCheckCircle />
          <span>Открывается {contactMethod}...</span>
        </div>
      )}

      <div className="hero-banner">
      <div className="hero-content">
        <h1>Коновалова Ольга</h1>
        <p className="hero-subtitle">
        Эксперт в Маркетинге и PR, Продюсер деловых мероприятий
        </p>
        
        {/* Metrics Section - MOTIVATION */}
        <div className="hero-metrics">
          <div className="metric-item">
            <div className="metric-number">15+</div>
            <div className="metric-label">Лет опыта</div>
          </div>
          <div className="metric-item">
            <div className="metric-number">50+</div>
            <div className="metric-label">Успешных проектов</div>
          </div>
          <div className="metric-item">
            <div className="metric-number">100%</div>
            <div className="metric-label">Клиентская лояльность</div>
          </div>
        </div>

        {/* CREATE Action Funnel: EVALUATION - Value proposition in hero */}
        <div className="hero-value-proposition">
          <div className="value-item">
            <FaRocket />
            <span>Быстрый результат</span>
          </div>
          <div className="value-item">
            <FaShieldAlt />
            <span>Гарантия качества</span>
          </div>
          <div className="value-item">
            <FaStar />
            <span>Проверенный опыт</span>
          </div>
        </div>

        <div className="hero-buttons">
          <a 
            href="mailto:ola.konovalova@gmail.com?subject=Запрос на консультацию"
            onClick={() => handleContactClick('email')}
          >
            <button className="btn-primary">
              Связаться сейчас
              <span className="btn-hint">Бесплатная консультация</span>
            </button>
          </a>
          <button className="btn-secondary" onClick={scrollToContact}>
            Узнать больше
            <span className="btn-hint">2 минуты</span>
          </button>
        </div>
        </div>
      </div>

{/* -------- ABOUT --------- */}

      <div className="about-section fade-in" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2>Обо мне</h2>
          <p>
          
          Коновалова Ольга Ивановна - специалист с многолетним опытом в области маркетинга и PR. Работала в таких компаниях, как Эверс груп Рус, Госкорпорация 'Росхимзащита', и других. Образование: Белорусский государственный экономический университет, специальность маркетинг и рекламная деятельность.

          </p>
          <p>
            Разработка и реализация маркетинговых стратегий, выведение новых продуктов на рынок, 
            повышение лояльности и узнаваемости бренда. 
          </p>

          {/* CREATE Action Funnel: EVALUATION - Benefits summary */}
          <div className="benefits-box">
            <h3>Что вы получите:</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <FaCheckCircle />
                <div>
                  <strong>Рост продаж</strong>
                  <span>До 40% за первый квартал</span>
                </div>
              </div>
              <div className="benefit-item">
                <FaCheckCircle />
                <div>
                  <strong>Экономия времени</strong>
                  <span>Вы фокусируетесь на бизнесе</span>
                </div>
              </div>
              <div className="benefit-item">
                <FaCheckCircle />
                <div>
                  <strong>Экспертиза</strong>
                  <span>15+ лет опыта в вашем распоряжении</span>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements - MOTIVATION */}
          <div className="achievements-box">
            <h3>Достижения и признание:</h3>
            <div className="achievement-item">
              <FaCheckCircle className="achievement-icon" />
              <span>Участие в конкурсе <b>"Новаторы Москвы"</b> (2020 г.)</span>
            </div>
            <div className="achievement-item">
              <FaCheckCircle className="achievement-icon" />
              <span>Отборочный тур в <b>Совет предпринимателей Москвы</b> (2021 г.)</span>
            </div>
          </div>

          {/* CTA in About - PROMPT */}
          <div className="about-cta">
            <button className="btn-primary" onClick={scrollToContact}>Обсудить проект</button>
          </div>
          
        </div>
        <div className="about-list-container">
          <h3>Сферы деятельности:</h3>
          <ul className="about-list">
            <li>
              <FaIndustry className="about-icon" /> Разработка и производство
            </li>
            <li>
              <FaHeartbeat className="about-icon" /> Медицина
            </li>
            <li>
              <FaFlask className="about-icon" /> Биомедицина
            </li>
            <li>
              <FaLightbulb className="about-icon" /> Инновации
            </li>
            <li>
              <FaGraduationCap className="about-icon" /> Образовательные мероприятия
            </li>
          </ul>
        </div>
      </div>
    </div>


    {/* Spectrum of Thinking: Self-concept - "Is this for me?" section */}
    <div className="fit-check-section fade-in">
      <h2>Подходит ли это вам?</h2>
      <p className="section-subtitle">Проверьте, решаю ли я ваши задачи</p>
      <div className="fit-checklist">
        {fitChecklist.map((item, index) => (
          <div key={index} className="fit-item">
            <div className="fit-icon">{item.icon}</div>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
      <div className="fit-cta">
        <p>Если хотя бы один пункт вам подходит — давайте обсудим ваш проект!</p>
        <button className="btn-primary" onClick={scrollToContact}>Начать обсуждение</button>
      </div>
    </div>

    {/* ------- Personal Info -------     */}
<div className="personal-info-section">
      {/* <h2>Обо мне</h2> */}
      <div className="personal-info-grid">
        {personalInfoData.map((section, index) => (
          <div
            className="personal-info-card"
            key={index}
            style={{ borderLeft: `5px solid ${section.color}` }}
          >
            <div className="personal-info-icon" style={{ color: section.color }}>
              {section.icon}
            </div>
            <h3>{section.title}</h3>
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>


{/* ------- Projects ---------     */}

      <div className="projects-section fade-in" id="projects">
      <h2>Проекты</h2>
      <p className="section-subtitle">Реализованные проекты с измеримыми результатами</p>
      {/* CREATE Action Funnel: EVALUATION - ROI indicator */}
      <div className="roi-indicator">
        <FaChartLine />
        <span>Средний ROI проектов: <strong>250%+</strong></span>
      </div>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div
            className="project-card fade-in"
            key={index}
            style={{ backgroundColor: project.color }}
            onClick={scrollToContact}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-cta-hint">Нажмите, чтобы обсудить</div>
          </div>
        ))}
        </div>
        {/* CTA after projects - PROMPT */}
        <div className="section-cta">
          <button className="btn-primary" onClick={scrollToContact}>Обсудить ваш проект</button>
        </div>
      </div> 

{/* -------- SERVICES --------       */}
      <div className="services-section fade-in" id="services">
      <h2>Услуги</h2>
      <p className="section-subtitle">Комплексные решения для вашего бизнеса</p>
      {/* CREATE Action Funnel: REACTION - Trust signal */}
      <div className="trust-badge">
        <FaShieldAlt />
        <span>100% конфиденциальность • Гарантия результата</span>
      </div>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div
            className="service-card fade-in"
            key={index}
            style={{ borderTop: `5px solid ${service.color}` }}
            onClick={scrollToContact}
          >
            <div className="service-icon" style={{ backgroundColor: service.color }}>
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-cta-hint">Узнать подробнее →</div>
          </div>
        ))}
      </div>
      {/* CTA after services - PROMPT */}
      <div className="section-cta">
        <button className="btn-primary" onClick={scrollToContact}>Получить консультацию</button>
      </div>
    </div>

{/* ----- Recomendations ------- */}
<div className="recommendations-section">
      <h2>Рекомендации</h2>
      {/* Spectrum of Thinking: Heuristics - Social proof enhancement */}
      <div className="social-proof-badge">
        <FaUsers />
        <span>Более 50 довольных клиентов • 100% лояльность</span>
      </div>
      <div className="recommendations-grid">
        {recommendationsData.map((rec, index) => (
          <div className="recommendation-card" key={index}>
            <div className="recommendation-header">
              <h3>{rec.name}</h3>
              <FaAward className="recommendation-badge-icon" />
            </div>
            <span className="recommendation-title">{rec.title}</span>
            <p className="recommendation-company">{rec.company}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Spectrum of Thinking: Focused calculation - FAQ Section */}
    <div className="faq-section fade-in" id="faq">
      <h2>Часто задаваемые вопросы</h2>
      <p className="section-subtitle">Ответы на популярные вопросы о работе со мной</p>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <button 
              className="faq-question" 
              onClick={() => toggleFaq(index)}
              aria-expanded={openFaqIndex === index}
            >
              <FaQuestionCircle className="faq-icon" />
              <span>{faq.question}</span>
              {openFaqIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openFaqIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="faq-cta">
        <p>Не нашли ответ на свой вопрос?</p>
        <button className="btn-secondary" onClick={scrollToContact}>Задать вопрос</button>
      </div>
    </div>

    <footer className="footer fade-in" id="contact">
      <div className="footer-content">
        <h2>Свяжитесь со мной</h2>
        <p className="footer-description">
          Ведущий Эксперт в Маркетинге и PR с Многолетним Опытом Работы в Крупнейших Корпорациях и Высшим Образованием.
        </p>
        
        {/* CREATE Action Funnel: EVALUATION - Final value reminder */}
        <div className="final-value-reminder">
          <div className="value-reminder-item">
            <strong>Бесплатная консультация</strong>
            <span>30 минут экспертного совета</span>
          </div>
          <div className="value-reminder-item">
            <strong>Быстрый ответ</strong>
            <span>В течение 2 часов</span>
          </div>
        </div>

        <p className="footer-cta-text">Готовы обсудить ваш проект? Свяжитесь прямо сейчас!</p>
        
        {/* CREATE Action Funnel: ABILITY - Multiple easy contact options */}
        <div className="footer-contact">
          <a 
            href="tel:+79629560669" 
            className="contact-link"
            onClick={() => handleContactClick('телефон')}
          >
            <FaPhone className="contact-icon" />
            <div>
              <strong>Телефон:</strong> +7 (962) 9560669
              <span className="contact-hint">Нажмите для звонка</span>
            </div>
          </a>
          <a 
            href="mailto:ola.konovalova@gmail.com?subject=Запрос на консультацию" 
            className="contact-link"
            onClick={() => handleContactClick('email')}
          >
            <FaEnvelope className="contact-icon" />
            <div>
              <strong>Email:</strong> ola.konovalova@gmail.com
              <span className="contact-hint">Нажмите для отправки письма</span>
            </div>
          </a>
        </div>
        
        {/* CREATE Action Funnel: ABILITY - Clear action buttons with instructions */}
        <div className="footer-buttons">
          <a 
            href="mailto:ola.konovalova@gmail.com?subject=Запрос на консультацию"
            onClick={() => handleContactClick('email')}
          >
            <button className="btn-primary">
              Отправить сообщение
              <span className="btn-instruction">Откроется почтовый клиент</span>
            </button>
          </a>
          <a 
            href="tel:+79629560669"
            onClick={() => handleContactClick('телефон')}
          >
            <button className="btn-secondary">
              Позвонить сейчас
              <span className="btn-instruction">Нажмите для звонка</span>
            </button>
          </a>
        </div>
        
        {/* CREATE Action Funnel: EXECUTION - Next steps guidance */}
        <div className="next-steps">
          <h3>Что дальше?</h3>
          <ol>
            <li>Свяжитесь со мной любым удобным способом</li>
            <li>Обсудим ваш проект в течение 30 минут</li>
            <li>Получите персональное предложение</li>
          </ol>
        </div>
      </div>
    </footer>
      
    </>
  )
}

export default App

