import { useState, useEffect } from 'react'
import './App.css'
import { FaIndustry, FaHeartbeat, FaFlask, FaLightbulb, FaGraduationCap } from "react-icons/fa";
import { FaChartLine, FaProductHunt, FaBullhorn, FaCalendarAlt } from "react-icons/fa";
import { FaUser, FaBriefcase, FaHeart, FaLaptopCode, FaPhone, FaEnvelope, FaArrowUp, FaCheckCircle } from "react-icons/fa";

const projectsData = [
  {
    title: "Технопарк",
    description: "Присвоение статуса технопарка промышленному предприятию.",
    buttonLabel: "Contact Me",
    color: "#801d53",
  },
  {
    title: "Пилотное тестирование",
    description: "Получение гранта на пилотное тестирование медицинского изделия.",
    buttonLabel: "Learn More",
    color: "#3b295c",
  },
  {
    title: "Программы лояльности",
    description: "Разработка и внедрение Программы лояльности для дилеров.",
    buttonLabel: "Contact Me",
    color: "#a13e72",
  },
  {
    title: "Фирменный стиль",
    description: "Разработка с нуля концепции фирменного стиля.",
    buttonLabel: "Discover More",
    color: "#5c1e80",
  },
  {
    title: "Презентации",
    description: "Подготовка презентаций Компании, Продуктов, Проектов.",
    buttonLabel: "Contact Me",
    color: "#4a295c",
  },
  {
    title: "Связи с общественностью",
    description: "Формирование имиджа компании в профессиональной среде.",
    buttonLabel: "Learn More",
    color: "#9e3a5f",
  },
  {
    title: "Запуск",
    description: "Лонч медицинского изделия и лечебной косметики.",
    buttonLabel: "Explore Services",
    color: "#6e1d4e",
  },
];


const servicesData = [
  {
    title: "Маркетинговые стратегии",
    description: "Разработка и реализация маркетинговых стратегий для B2B и B2C сегментов.",
    icon: <FaChartLine />,
    color: "#5c1e80",
  },
  {
    title: "Выведение продуктов на рынок",
    description: "Организация исследований и пилотных тестирований, лонч, повышение ROI.",
    icon: <FaProductHunt />,
    color: "#4a295c",
  },
  {
    title: "Брендинг и реклама",
    description: "Продвижение и реклама в социальных сетях, SEO-оптимизация.",
    icon: <FaBullhorn />,
    color: "#9e3a5f",
  },
  {
    title: "Организация мероприятий",
    description: "Организация мероприятий и PR-поддержка, event-маркетинг.",
    icon: <FaCalendarAlt />,
    color: "#6e1d4e",
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
    color: "#6e1d4e",
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
    color: "#9e3a5f",
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
    color: "#5c1e80",
    
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
    color: "#bd10e0",
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

    // Show back to top button handler
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('.footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Contact Button - PROMPT */}
      <button className="floating-contact-btn" onClick={scrollToContact} aria-label="Связаться">
        <FaPhone />
        <span>Связаться</span>
      </button>

      {/* Back to Top Button - ABILITY */}
      {showBackToTop && (
        <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Наверх">
          <FaArrowUp />
        </button>
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

        <div className="hero-buttons">
          <a href="mailto:ola.konovalova@gmail.com?subject=Запрос на консультацию"><button className="btn-primary">Связаться сейчас</button></a>
          <button className="btn-secondary" onClick={scrollToContact}>Узнать больше</button>
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
      <div className="recommendations-grid">
        {recommendationsData.map((rec, index) => (
          <div className="recommendation-card" key={index}>
            <div className="recommendation-header">
              <h3>{rec.name}</h3>
              
            </div>
            <span className="recommendation-title">{rec.title}</span>
            <p className="recommendation-company">{rec.company}</p>
          </div>
        ))}
      </div>
    </div>

    <footer className="footer fade-in" id="contact">
      <div className="footer-content">
        <h2>Свяжитесь со мной</h2>
        <p className="footer-description">
          Ведущий Эксперт в Маркетинге и PR с Многолетним Опытом Работы в Крупнейших Корпорациях и Высшим Образованием.
        </p>
        <p className="footer-cta-text">Готовы обсудить ваш проект? Свяжитесь прямо сейчас!</p>
        <div className="footer-contact">
          <a href="tel:+79629560669" className="contact-link">
            <FaPhone className="contact-icon" />
            <div>
              <strong>Телефон:</strong> +7 (962) 9560669
            </div>
          </a>
          <a href="mailto:ola.konovalova@gmail.com?subject=Запрос на консультацию" className="contact-link">
            <FaEnvelope className="contact-icon" />
            <div>
              <strong>Email:</strong> ola.konovalova@gmail.com
            </div>
          </a>
        </div>
        <div className="footer-buttons">
          <a href="mailto:ola.konovalova@gmail.com?subject=Запрос на консультацию">
            <button className="btn-primary">Отправить сообщение</button>
          </a>
          <a href="tel:+79629560669">
            <button className="btn-secondary">Позвонить сейчас</button>
          </a>
        </div>
      </div>
    </footer>
      
    </>
  )
}

export default App

