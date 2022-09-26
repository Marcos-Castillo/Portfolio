import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  proyectos = [
    {
      "imagen": "https://i.ibb.co/bJT6fQd/ahorcado.jpg",
      "link": "https://marcos-castillo.github.io/Oracle-ONE---ahorcado/",
      "titulo": "Juego del ahorcado Challenge Alura",
      "descripcion": "Juego del ahorcado Challenge Alura",
      "url_repositorio": "https://github.com/Marcos-Castillo/Oracle-ONE---ahorcado"
    },
    {
      "imagen": "https://i.ibb.co/TYjdq1d/practica.png",
      "link": "https://marcos-castillo.github.io/practica-html/",
      "titulo": "Primera practica HTML con CSS",
      "descripcion": "Primera practica HTML con CSS",
      "url_repositorio": "https://github.com/Marcos-Castillo/practica-html"
    },
    {
      "imagen": "https://i.ibb.co/tJVMxxX/codigo-Secreto.png",
      "link": "https://marcos-castillo.github.io/Oracle-ONE---encriptador/",
      "titulo": "Encriptador de texto Challenge Alura",
      "descripcion": "Encriptador de texto Challenge Alura",
      "url_repositorio": "https://github.com/Marcos-Castillo/Oracle-ONE---encriptador"
    },
    {
      "imagen": "https://i.ibb.co/9mPPV1B/barberia-Alura.jpg",
      "link": "https://marcos-castillo.github.io/barberia-alura/index.html",
      "titulo": "Barbería Alura",
      "descripcion": "Barbería Alura",
      "url_repositorio": "https://github.com/Marcos-Castillo/barberia-alura"
    },
    {
      "imagen": "https://i.ibb.co/sFmTRnW/bouna-Vita.jpg",
      "link": "https://marcos-castillo.github.io/Buonavita/",
      "titulo": "Buona Vita ",
      "descripcion": "Buona Vita ",
      "url_repositorio": "https://github.com/Marcos-Castillo/Buonavita"
    },
    {
      "imagen": "https://i.ibb.co/nbFv3Pk/alura-Geek.jpg",
      "link": "https://marcos-castillo.github.io/Oracle-ONE---E-commerce/index.html",
      "titulo": "Alura geek",
      "descripcion": "Alura geek",
      "url_repositorio": "https://github.com/Marcos-Castillo/Oracle-ONE---E-commerce"
    },
    {
      "imagen": "https://i.ibb.co/jGdkXY7/Portfolio.jpg",
      "link": "https://marcos-castillo.web.app/",
      "titulo": "Portfolio Argentina Programa ",
      "descripcion": "Portfolio Argentina Programa ",
      "url_repositorio": "https://github.com/Marcos-Castillo/portfolio-argentina-programa"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
