import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skills = [
    {
      "link": "https://www.java.com",
      "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      "name": "Java",
      "desc": `Uso general Texto y Números en Java, Matrices, condiciones y bucles
      Clases y Objetos, Manejo de excepciones, Herencia e Interfaces, Java en OCI`
    },
    {
      "link": "https://spring.io/",
      "img": "https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg",
      "name": "Spring boot",
      "desc": `Framework Spring. Este framework te permitirá agilizar y simplificar en gran medida el desarrollo de aplicaciones JEE. 
      Configuración de Spring, Inyección de Dependencias, Spring Data, Manejo de Transacciones. `
    },
    {
      "link": "https://angular.io/",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png",
      "name": "Angular",
      "desc": `Angular CLI y usar sus principales comandos. Cómo escuchar y responder a eventos generados por el usuario, estructuras de control.
      crear formularios, estructuras de control con NgModel y comunicación de datos con Event Binding.`
    },
    {
      "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      "name": "JavaScript",
      "desc": `Lorem ipsum dolor sit amet, cquasi cupiditate voluptate 
      debitis saepe dolorem totam dolor repudiandae quo nihil, repellendus nesciunt 
      ab fuga quae, minima reprehenderit sequi fugit.`
    },
    {
      "link": "https://www.typescriptlang.org/",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/300px-Typescript_logo_2020.svg.png",
      "name": "TypeScript",
      "desc": `Lorem ipsum dolor sit amet, cquasi cupiditate voluptate 
      debitis saepe dolorem totam dolor repudiandae quo nihil, repellendus nesciunt 
      ab fuga quae, minima reprehenderit sequi fugit.`
    },
    {
      "link": "https://developer.mozilla.org/en-US/docs/Web/HTML",
      "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
      "name": "HTML",
      "desc": `Lorem ipsum dolor sit amet, cquasi cupiditate voluptate 
      debitis saepe dolorem totam dolor repudiandae quo nihil, repellendus nesciunt 
      ab fuga quae, minima reprehenderit sequi fugit.`
    },
    {
      "link": "https://developer.mozilla.org/en-US/docs/Web/CSS",
      "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
      "name": "CSS",
      "desc": `Lorem ipsum dolor sit amet, cquasi cupiditate voluptate 
      debitis saepe dolorem totam dolor repudiandae quo nihil, repellendus nesciunt 
      ab fuga quae, minima reprehenderit sequi fugit.`
    },
    {
      "link": "https://getbootstrap.com/",
      "img": "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png",
      "name": "Bootstrap",
      "desc": `Lorem ipsum dolor sit amet, cquasi cupiditate voluptate 
      debitis saepe dolorem totam dolor repudiandae quo nihil, repellendus nesciunt 
      ab fuga quae, minima reprehenderit sequi fugit.`
    }
    /*
    {
      "link": "https://www.java.com",
      "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      "name": "Java",
      "desc": `Lorem ipsum dolor sit amet, cquasi cupiditate voluptate 
      debitis saepe dolorem totam dolor repudiandae quo nihil, repellendus nesciunt 
      ab fuga quae, minima reprehenderit sequi fugit.`
    }
  */
 ];


  constructor() { }

  ngOnInit(): void {
  }

}
