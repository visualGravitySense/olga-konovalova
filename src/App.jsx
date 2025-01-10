import { useState } from 'react'
import './App.css'
import { FaIndustry, FaHeartbeat, FaFlask, FaLightbulb, FaGraduationCap } from "react-icons/fa";
import { FaChartLine, FaProductHunt, FaBullhorn, FaCalendarAlt } from "react-icons/fa";
import { FaUser, FaBriefcase, FaHeart, FaLaptopCode } from "react-icons/fa";

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
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="hero-banner">
      <div className="hero-content">
        <h1>Коновалова Ольга</h1>
        <p>
        Эксперт в Маркетинге и PR, Продюсер деловых мероприятий
        </p>
        <div className="hero-buttons">
          <a href="mailto:ola.konovalova@gmail.com"><button className="btn-primary">Контакт</button></a>
          {/* <button className="btn-secondary">Inquire a Service</button> */}
          </div>
        </div>
      </div>

{/* -------- ABOUT --------- */}

      <div className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>Обо мне</h2>
          <p>
          
          Коновалова Ольга Ивановна - специалист с многолетним опытом в области маркетинга и PR. Работала в таких компаниях, как Эверс груп Рус, Госкорпорация 'Росхимзащита', и других. Образование: Белорусский государственный экономический университет, специальность маркетинг и рекламная деятельность.

          </p>
          <p>
            {/* <b>Профессиональные услуги по маркетингу, брендингу и рекламе.</b> */}
            {/* <br/><br/> */}
            Разработка и реализация маркетинговых стратегий, выведение новых продуктов на рынок, 
            повышение лояльности и узнаваемости бренда. 
          </p>

          <p>
          Участие в конкурсе: <b>"Новаторы Москвы"</b> (2020 г.) <br/>
          Oтборочный тур в <b>Совет предпринимателей Москвы</b> (2021 г.) 
          </p>

          
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

      <div className="projects-section">
      <h2>Проекты</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div
            className="project-card"
            key={index}
            style={{ backgroundColor: project.color }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {/* <button>{project.buttonLabel}</button> */}
          </div>
        ))}
        </div>
      </div> 

{/* -------- SERVICES --------       */}
<div className="services-section">
      <h2>Услуги</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div
            className="service-card"
            key={index}
            style={{ borderTop: `5px solid ${service.color}` }}
          >
            <div className="service-icon" style={{ backgroundColor: service.color }}>
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
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

    <footer className="footer">
      <div className="footer-content">
        <h2>Контакт</h2>
        <p className="footer-description">
          Ведущий Эксперт в Маркетинге и PR с Многолетним Опытом Работы в Крупнейших Корпорациях и Высшим Образованием.
        </p>
        <div className="footer-contact">
          <p><strong>Телефон:</strong> +7 (962) 9560669</p>
          <p><strong>Email:</strong> <a href="mailto:ola.konovalova@gmail.com">ola.konovalova@gmail.com</a></p>
        </div>
      </div>
    </footer>
      
    </>
  )
}

export default App

