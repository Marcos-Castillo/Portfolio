import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  titulos = [
    {
      "titulo": "SQL CON MYSQL SERVER DE ORACLE – ONE",
      "institucion": "Alura latam - Oracle ONE",
      "ano": 2022,
      "mes": 11
    },
    {
      "titulo": "Oracle Cloud Infrastructure 2022 Certified Foundations Associate",
      "institucion": "Oracle",
      "ano": 2022,
      "mes": 9
    },
    {
      "titulo": "ORACLE CLOUD INFRASTRUCTURE - ONE",
      "institucion": "Alura latam - Oracle ONE",
      "ano": 2022,
      "mes": 9
    },
    {
      "titulo": "Universidad Angular",
      "institucion": "Udemy",
      "ano": 2022,
      "mes": 6
    },	
		
 		
/*
JAVA orientado a Objetos - ONE	Alura latam - Oracle ONE	2022	6
Front-end - ONE	Alura latam - Oracle ONE	2022	4
 Principiante en Programación	Alura latam - Oracle ONE	2022	2
Principiante en Programación - ONE 	Alura latam - Oracle ONE	2022	1
Universidad desarrollo web 2021 	Udemy	2021	12
Programación con Java Standard	Fundación Telefónica	2021	12
Emprendimiento - ONE	Alura latam - Oracle ONE	2021	12
Desarrollo Personal - ONE	Alura latam - Oracle ONE	2021	12
Business Agility - ONE	Alura latam - Oracle ONE	2021	12
Argentina Programa: #SéProgramar	Mumuki - Argentina Programa	2021	12
Universidad CSS 2021	Udemy	2021	11
Programación con JavaScript	Fundación Telefónica	2021	11
Diseño Web con HTML5 + CSS	Fundación Telefónica	2021	11
Universidad HTML 2021	Udemy	2021	10
*/
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
