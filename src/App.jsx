import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { Typewriter } from "react-simple-typewriter";
import { AiOutlineEye } from "react-icons/ai";
import { PiEyeClosedBold } from "react-icons/pi";
import { BsCodeSlash } from "react-icons/bs";
import { TbDatabaseCog } from "react-icons/tb";
import { BiSolidBusiness } from "react-icons/bi";
import { MdSecurity,MdEmail } from "react-icons/md";
import {GrSend} from 'react-icons/gr'
import {HiOutlineMail} from 'react-icons/hi'
import {FiPhone} from 'react-icons/fi'
import {RiMailSendLine} from 'react-icons/ri'
import { IoMdOpen } from "react-icons/io";
import angular from "./assets/images/angular.png";
import c1 from "./assets/images/c-.png";
import c2 from "./assets/images/c-sharp.png";
import css from "./assets/images/css-3.png";
import html from "./assets/images/html.png";
import java from "./assets/images/java.png";
import js from "./assets/images/js.png";
import ts from "./assets/images/typescript.png";
import react from "./assets/images/react.png";
import python from "./assets/images/python.png";
import mysql from "./assets/images/mysql.png";
import mongo from "./assets/images/mongodb.png";
import progrest from "./assets/images/progrest.png";
import sqlserver from "./assets/images/sqlserver.png";
import firebase from "./assets/images/firebase.png";
import powerbi from "./assets/images/powerbi.png";
import bizagi from "./assets/images/bizagi.png";
import project from "./assets/images/project.png";
import archi from "./assets/images/archimate.png";
import agile from "./assets/images/agile.png";
import atlassian from "./assets/images/TEAM-ddb0dd07.png";
import sap from "./assets/images/sap.png";
import foto from "./assets/images/foto.jpg";
import scrum from "./assets/images/scrum.png";
import davies from "./assets/images/uc_davies.png"
import macquarie from "./assets/images/macquarie.jpg"
import michigan from "./assets/images/michigan.jpg"
import ibm from "./assets/images/ibm.png"
import { Button, ButtonGroup } from "@nextui-org/react";
import {db} from './firebase.js'
import { collection,addDoc } from "firebase/firestore";
function App() {
  const [bgColor, setBgColor] = useState("");
  const [menu,setMenu]=useState(false);
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [message,setMessage]=useState("");
  const [alert,setAlert]=useState(false)
  const [msgAlert,setMsgAlert]=useState("");
  const [colorMsg,setColorMsg]=useState("");
  const datos = [
    {
      image: powerbi,
      title: "PowerBi",
      text: "Básico",
    },
    {
      image: python,
      title: "Python",
      text: "Intermedio",
    },
    {
      image: mysql,
      title: "MySql",
      text: "Avanzado",
    },
    {
      image: mongo,
      title: "Mongo",
      text: "Avanzado",
    },
    {
      image: progrest,
      title: "Progrest",
      text: "Avanzado",
    },
    {
      image: sqlserver,
      title: "Microsoft Sql Server",
      text: "Avanzado",
    },
    {
      image: firebase,
      title: "Firebase",
      text: "Avanzado",
    },
  ];
  const web = [
    {
      image: c1,
      title: "C++",
      text: "Intermedio",
    },
    {
      image: c2,
      title: "C#",
      text: "Intermedio",
    },
    {
      image: java,
      title: "Java",
      text: "Intermedio",
    },
    {
      image: python,
      title: "Python",
      text: "Intermedio",
    },
    {
      image: html,
      title: "HTML",
      text: "Avanzado",
    },
    {
      image: css,
      title: "CSS",
      text: "Avanzado",
    },
    {
      image: js,
      title: "JavaScript",
      text: "Avanzado",
    },
    {
      image: ts,
      title: "TypeScript",
      text: "Avanzado",
    },
    {
      image: react,
      title: "React",
      text: "Avanzado",
    },
    {
      image: angular,
      title: "Angular",
      text: "Avanzado",
    },
  ];
  const negocio = [
    {
      image: atlassian,
      title: "Atlassian",
      text: "Básico",
    },
    {
      image: project,
      title: "MS Project",
      text: "Intermedio",
    },
    {
      image: agile,
      title: "Metodología Agile",
      text: "Intermedio",
    },
    {
      image: bizagi,
      title: "Bizagi",
      text: "Avanzado",
    },
    {
      image: archi,
      title: "Archimate",
      text: "Avanzado",
    },
    {
      image: sap,
      title: "SAP ERP",
      text: "Avanzado",
    },
  ];
  const boxes = [
    {
      title: "Código Activo",
      description:
        "Dominio de lenguajes y técnicas de programación para la creación de soluciones innovadoras y eficientes.",
      icon: <BsCodeSlash className="arrow"></BsCodeSlash>,
    },
    {
      title: "Arq. de la Información",
      description:
        "Conocimientos en el diseño, gestión y optimización de bases de datos para el procesamiento y análisis de datos.",
      icon: <TbDatabaseCog className="arrow"></TbDatabaseCog>,
    },
    {
      title: "Arq. de Soluciones",
      description:
        "Habilidad para diseñar soluciones tecnológicas a medida, alineadas con los objetivos del negocio y las necesidades de los usuarios.",
      icon: <BiSolidBusiness className="arrow"></BiSolidBusiness>,
    },
    {
      title: "Cyberseguridad",
      description:
        "Competencia en la identificación y mitigación de riesgos cibernéticos, protegiendo activos digitales y la privacidad de los datos.",
      icon: <MdSecurity className="arrow"></MdSecurity>,
    },
  ];
  const openWindow=(url)=>{
    window.open(url)
  }
  const  saveMsg=async ()=>{
    if(message=="" && name=="" && email=="" && phone==""){
      setAlert(true)
      setColorMsg('red')
      setMsgAlert('Debe completar todos los campos.')
    }
    else{
      try{
        const docRef=await addDoc(collection(db,"msg"),{
          name:name.trim(),
          email:email.trim(),
          phone:phone.trim(),
          message:message,
        })
        setAlert(true)
        setColorMsg('rgb(0,208,116)')
        setMsgAlert('Mensaje enviado con éxito.')
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      }
      catch(e){
        setAlert(true)
        setColorMsg('red')
        setMsgAlert('Ha ocurrido un error. Vuelve a intentarlo.')
      }
    }
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setBgColor("rgba(255, 255, 255, 0.2)");
      } else {
        setBgColor("");
      }
    };

    // Agregar el event listener al montar el componente
    window.addEventListener("scroll", handleScroll);

    // Eliminar el event listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section>
      <nav style={{ background: bgColor }}>
        <a href="#home" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div className="logo">
          <div>
            <h3>J</h3>
          </div>
        </div>
        </a>
        <div className="main-nav">
          <ul className="main-nav-list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#certificados">Certificados</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="last-nav">
          <ul className="last-nav-list">
            <li>
              <a
                href="https://www.linkedin.com/in/joaquin-diaz-chau-46a569261/"
                target="_blank"
              >
                <FaLinkedin className="icon" />
              </a>
            </li>
            <li>
              <a href="https://github.com/Joaco182004" target="_blank">
                <FaGithub className="icon" />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+51908719991?text=Buen%20día%20Joaquin%20quisiera%20hablarte%20de%20una%20propuesta%20de%20trabajo."
                target="_blank"
              >
                <FaWhatsapp className="icon" />
              </a>
            </li>
          </ul>
        </div>
        <div onClick={()=>{setMenu(true)}} className="hamburgue-btn">
          <CgMenuRight className="icon" />
        </div>
      </nav>
      <section className="sections" id="home">
        <img src={foto} />
        <h3>
          Hola soy <span>Joaquin Diaz Chau</span>
        </h3>
        <p>
          <span>
            <Typewriter
              className="type"
              words={[
                "Ingeniero de Sistemas",
                "Desarrollador Web",
                "Diseñador UX",
                "Arquitecto de Soluciones",
                "Tester QA",
                "Analista de Datos",
                "Administrador de Base de Datos",
              ]}
              loop="infinite"
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </span>{" "}
          de Perú
        </p>
        <h1>Profesional capaz de crear soluciones tecnológicas</h1>
        <h1>en el mundo empresarial.</h1>
        <a href="#contacto"className="contact-btn">Contáctate conmigo</a>
      </section>
      <section id="about" className="sections ">
        <article className="info">
          <h1>About me</h1>
          <p >
            Estudiante universitario de la carrera de Ingeniería de Sistemas de
            Información con sólida formación en programación, base de datos,
            seguridad informática y gestión de procesos. Apasionado por resolver
            problemas complejos utilizando tecnologías innovadoras y mejorando
            la eficiencia de los sistemas. Con habilidades interpersonales y
            capacidad para trabajar en equipo, comunicarse efectivamente y
            liderar iniciativas de mejora.
          </p>
          <ul className="list-icons" >
            <li>
              <a
                href="https://www.linkedin.com/in/joaquin-diaz-chau-46a569261/"
                target="_blank"
              >
                <FaLinkedin className="icon" />
                <p>Linkedin</p>
              </a>
            </li>
            <li>
              <a href="https://github.com/Joaco182004" target="_blank">
                <FaGithub className="icon" />
                <p>Github</p>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+51908719991?text=Buen%20día%20Joaquin%20quisiera%20hablarte%20de%20una%20propuesta%20de%20trabajo."
                target="_blank"
              >
                <FaWhatsapp className="icon" />
                <p>WhatsApp</p>
              </a>
            </li>
          </ul>
          <button onClick={()=>{openWindow('https://firebasestorage.googleapis.com/v0/b/portfolio-joaquin-diaz.appspot.com/o/CV_DARIO_DIAZ_CHAU.pdf?alt=media&token=aeee7a3c-375f-444b-ae15-78f451739b51')}}>
            Visualizar CV
            <PiEyeClosedBold className="icon close-eye"></PiEyeClosedBold>
            <AiOutlineEye className="icon open"></AiOutlineEye>
          </button>
        </article>
        <article className="add-info">
          <h4>Puedo ofrecer</h4>
          <div className="group">
            {boxes.map((box,id) => (
              <div key={id} className="box">
                <div className="box-title">
                  <h4>{box.title}</h4>
                  {box.icon}
                </div>
                <p>{box.description}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
      <section className="sections" id="skills">
        <h1>Skills</h1>
        <article className="group-skills">
          <article>
            <h4>Programación</h4>
            <div className="group-img">
              {web.map((e,id) => (
                <div key={id} className="img-cont">
                  <img src={e.image}></img>
                  <p className="title">{e.title}</p>
                  <p
                    className="level"
                    style={
                      e.text == "Básico"
                        ? { color: "#3D9FCC" }
                        : e.text == "Intermedio"
                        ? { color: "yellow" }
                        : { color: "#3FBF48" }
                    }
                  >
                    {e.text}
                  </p>
                </div>
              ))}
            </div>
          </article>
          <article>
            <h4>Datos e Información</h4>
            <div className="group-img">
              {datos.map((e,id) => (
                <div key={id} className="img-cont">
                  <img src={e.image}></img>
                  <p className="title">{e.title}</p>
                  <p
                    className="level"
                    style={
                      e.text == "Básico"
                        ? { color: "#3D9FCC" }
                        : e.text == "Intermedio"
                        ? { color: "yellow" }
                        : { color: "#3FBF48" }
                    }
                  >
                    {e.text}
                  </p>
                </div>
              ))}
            </div>
          </article>
          <article>
            <h4>Negocio</h4>
            <div className="group-img">
              {negocio.map((e,id) => (
                <div key={id} className="img-cont">
                  <img src={e.image}></img>
                  <p className="title">{e.title}</p>
                  <p
                    className="level"
                    style={
                      e.text == "Básico"
                        ? { color: "#3D9FCC" }
                        : e.text == "Intermedio"
                        ? { color: "yellow" }
                        : { color: "#3FBF48" }
                    }
                  >
                    {e.text}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </article>
      </section>
      <section className="sections" id="certificados">
        <h1>Certificados</h1>
        <p className="msg-scroll" style={{fontSize:'0.9rem', color:'gainsboro'}}>La tabla posee un scroll para mejor visibilidad</p>
        <div className="cont-tabla">
        <article>
          <div className="header">
            <div className="id">
              <p>Id</p>
            </div>
            <div className="name">
              <p>Nombre</p>
            </div>
            <div className="company">
            <p>Empresa Emisora</p>
            </div>
            <div className="date">
            <p>Fecha de Emisión</p>
            </div>
            <div className="visible">
            <p>Visualizar</p>
            </div>
          </div>
          <div className="body">
          <div className="row">
            <div className="id">
              <p>K4U22CPXTYWP</p>
            </div>
            <div className="name">
              <p>
Programa Especializado - Learn SQL Basics for Data Science</p>
            </div>
            <div className="company">
              <img src={davies}></img>
            </div>
            <div className="date">
            <p>Mayo - 2022</p>
            </div>
            <div className="visible">
              <IoMdOpen onClick={()=>{openWindow('https://firebasestorage.googleapis.com/v0/b/portfolio-joaquin-diaz.appspot.com/o/Coursera%20K4U22CPXTYWP.pdf?alt=media&token=500c7172-289b-4726-85d7-677e8a2001d0')}} size={20} cursor="pointer"></IoMdOpen>
            </div>
            </div>
            <div className="row">
            <div className="id">
              <p>922221</p>
            </div>
            <div className="name">
              <p>Scrum Fundamentals Certified (SFD)</p>
            </div>
            <div className="company">
              <img src={scrum}></img>
            </div>
            <div className="date">
            <p>Junio - 2022</p>
            </div>
            <div className="visible">
              <IoMdOpen onClick={()=>{openWindow('https://firebasestorage.googleapis.com/v0/b/portfolio-joaquin-diaz.appspot.com/o/ScrumFundamentalsCertified-JoaquinDiaz-922221.pdf?alt=media&token=cccc128d-6216-40bd-8ec2-936ea3842178')}} size={20} cursor="pointer"></IoMdOpen>
            </div>
            </div>
           
          <div className="row">
            <div className="id">
              <p>5MVD5RCC9ADJ</p>
            </div>
            <div className="name">
              <p>Excel Skills for Business: Advanced</p>
            </div>
            <div className="company">
              <img src={macquarie}></img>
            </div>
            <div className="date">
            <p>Mayo - 2023</p>
            </div>
            <div className="visible">
              <IoMdOpen onClick={()=>{openWindow('https://firebasestorage.googleapis.com/v0/b/portfolio-joaquin-diaz.appspot.com/o/Coursera%205MVD5RCC9ADJ.pdf?alt=media&token=d52687d2-240c-4f2b-afb5-aee7f82585bd')}} size={20} cursor="pointer"></IoMdOpen>
            </div>
            </div>
          <div className="row">
            <div className="id">
              <p>ATZ8NUKUWAZH</p>
            </div>
            <div className="name">
              <p>Retrieving, Processing, and Visualizing Data with Python</p>
            </div>
            <div className="company">
              <img src={michigan}></img>
            </div>
            <div className="date">
            <p>Abril - 2023</p>
            </div>
            <div className="visible">
              <IoMdOpen onClick={()=>{openWindow('https://firebasestorage.googleapis.com/v0/b/portfolio-joaquin-diaz.appspot.com/o/Coursera%20ATZ8NUKUWAZH.pdf?alt=media&token=5de5bfae-0681-4bb4-87ae-b77bb0fbded8')}} size={20} cursor="pointer"></IoMdOpen>
            </div>
            </div>
            <div className="row">
            <div className="id">
              <p>88JQ6VWK3UY3</p>
            </div>
            <div className="name">
              <p>Programa Especializado - Python for Everybody</p>
            </div>
            <div className="company">
              <img src={michigan}></img>
            </div>
            <div className="date">
            <p>Abril - 2023</p>
            </div>
            <div className="visible">
              <IoMdOpen onClick={()=>{openWindow('https://firebasestorage.googleapis.com/v0/b/portfolio-joaquin-diaz.appspot.com/o/Coursera%2088JQ6VWK3UY3.pdf?alt=media&token=5f71b015-9e3c-4625-8fdb-46ec83e5332e')}} size={20} cursor="pointer"></IoMdOpen>
            </div>
            </div>
            <div className="row">
            <div className="id">
              <p>WPM673MX5456</p>
            </div>
            <div className="name">
              <p>Programa Especializado - IT Fundamentals for Cybersecurity</p>
            </div>
            <div className="company">
              <img src={ibm}></img>
            </div>
            <div className="date">
            <p>Agosto - 2023</p>
            </div>
            <div className="visible">
              <IoMdOpen onClick={()=>{openWindow('https://firebasestorage.googleapis.com/v0/b/portfolio-joaquin-diaz.appspot.com/o/Coursera%20WPM673MX5456.pdf?alt=media&token=ff6fb15c-05d7-4826-8045-59b762769ab4')}} size={20} cursor="pointer"></IoMdOpen>
            </div>
            </div>
            <div className="row">
            <div className="id">
              <p>A8S72HDSDP4K</p>
            </div>
            <div className="name">
              <p>
Programa Especializado - Security Analyst Fundamentals</p>
            </div>
            <div className="company">
              <img src={ibm}></img>
            </div>
            <div className="date">
            <p>Octubre - 2023</p>
            </div>
            <div className="visible">
              <IoMdOpen onClick={()=>{openWindow('https://firebasestorage.googleapis.com/v0/b/portfolio-joaquin-diaz.appspot.com/o/Coursera%20A8S72HDSDP4K.pdf?alt=media&token=6d356df0-cbce-4a8a-ad4f-3e49e342f0a3')}} size={20} cursor="pointer"></IoMdOpen>
            </div>
            </div>
            <div className="row">
            <div className="id">
              <p>WN2J79BBDXMF</p>
            </div>
            <div className="name">
              <p>

              Programa Especializado - IBM Cybersecurity Analyst</p>
            </div>
            <div className="company">
              <img src={ibm}></img>
            </div>
            <div className="date">
            <p>Octubre - 2023</p>
            </div>
            <div className="visible">
              <IoMdOpen onClick={()=>{openWindow('https://firebasestorage.googleapis.com/v0/b/portfolio-joaquin-diaz.appspot.com/o/Coursera%20WN2J79BBDXMF.pdf?alt=media&token=325ee350-167b-455d-a5a9-5c3938c100c7')}} size={20} cursor="pointer"></IoMdOpen>
            </div>
            </div>
            </div>
        </article>
        </div>
      </section>
      <section id="contacto" className="sections">
        <h1>Contacto</h1>
        <section>
          <article>
              <form>
              <h4>Envíame un mensaje</h4>
              <div className="input-cont">
                <label>Nombre</label>
                <input value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Ingrese su nombre"></input>
              </div>
              <div className="input-cont">
                <label>Correo</label>
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Ingrese su correo"></input>
              </div>
              <div className="input-cont">
                <label>Teléfono</label>
                <input value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder="Ingrese su teléfono"></input>
              </div>
              <div className="input-cont">
                <label>Mensaje</label>
                <textarea value={message} onChange={(e)=>{setMessage(e.target.value)}} placeholder="Ingrese su mensaje"></textarea>
              </div>
              {alert && (<p style={{margin:'1rem',color:colorMsg}}>{msgAlert}</p>)}
              <button type="button" onClick={saveMsg}>
                Enviar Mensaje
                <RiMailSendLine className="icon"></RiMailSendLine>
              </button>
              </form>
          </article>
          <article>
          <form>
              <h4>Información de Contacto</h4>
              <div className="input-cont contact">
                <HiOutlineMail className="icon"></HiOutlineMail>
                <div style={{display:'flex', flexDirection:'column'}} className="cont-info-contact">
                    <h5>Correo</h5>
                    <p>joaquindiazchau@gmail.com</p>
                </div>
              </div>
              <div className="input-cont contact">
                <FiPhone className="icon"></FiPhone>
                <div style={{display:'flex', flexDirection:'column'}} className="cont-info-contact">
                    <h5>Teléfono</h5>
                    <p>+51 908719991</p>
                </div>
              </div>
              
              </form>
          </article>
        </section>
        </section>
        <footer>
        <a href="#home" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div className="logo">
          <div style={{background:'white',color:'black',width:'50px',height:'50px',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <h3 style={{fontSize:'24px'}}>J</h3>
          </div>
        </div>
        </a>
          <div className="contacto">
              <p>Redes Sociales</p>
              <ul className="list-icon-footer" style={{display:'flex'}} >
            <li>
              <a
                href="https://www.linkedin.com/in/joaquin-diaz-chau-46a569261/"
                target="_blank"
              >
                <FaLinkedin className="icon" />
              
              </a>
            </li>
            <li>
              <a href="https://github.com/Joaco182004" target="_blank">
                <FaGithub className="icon" />
               
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+51908719991?text=Buen%20día%20Joaquin%20quisiera%20hablarte%20de%20una%20propuesta%20de%20trabajo."
                target="_blank"
              >
                <FaWhatsapp className="icon" />
               
              </a>
            </li>
          </ul>
          </div>
          <div className="dedicatoria">
            <p>Esta página ha sido elaborada por Joaquin Diaz Chau - 2023</p>
          </div>
        </footer>
        {menu && (
          <article class="menu" id="menu-mob">
          <ul class="main-nav-list">
              <li><a onClick={()=>{setMenu(false)}} href="#menu">Home</a></li>
              <li><a onClick={()=>{setMenu(false)}} href="#about">About</a></li>
              <li><a onClick={()=>{setMenu(false)}} href="#skills">Skills</a></li>
              <li><a onClick={()=>{setMenu(false)}} href="#certificados">Certificados</a></li>
              <li><a onClick={()=>{setMenu(false)}} href="#contacto">Contacto</a></li>
          </ul>
          <div class="close" onClick={()=>{setMenu(false)}}></div>
      </article>
        )}
    </section>
  );
}

export default App;