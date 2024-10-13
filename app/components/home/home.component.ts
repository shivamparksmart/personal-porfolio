import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  ngOnInit(): void {
    
  }
 


  frontEnd=[
    {tech: "Angular", imgUrl: "../../../assets/angular.png", width:"15%"},
    {tech: "CSS3", imgUrl: "../../../assets/css.png", width:"15%"},
    {tech: "HTML5", imgUrl: "../../../assets/html.png", width:"20%"},
    {tech: "JavaScript", imgUrl: "../../../assets/js.png", width:"35%"},
    {tech: "Bootstrap", imgUrl: "../../../assets/bs.png", width:"35%"},
    {tech: "Material Design", imgUrl: "../../../assets/angular_material.png", width:"17%"},

  ]

  backEnd=[
    {tech: "Node.js", imgUrl: "../../../assets/nodejs.png", width:"15%"},
    {tech: "Express.js", imgUrl: "../../../assets/expressJS.png", width:"35%"},
    {tech: "RESTful APIs", imgUrl: "../../../assets/rest_api.jpg", width:"20%"},
  ]

  
  db=[
    {tech: "MongoDB", imgUrl: "../../../assets/mongodb.png", width:"20%"},
  ]

  testing=[
    {tech: "Mocha/Chai", imgUrl: "../../../assets/mocha_chai.png", width:"33%"},
    {tech: "Jasmine/Karma", imgUrl: "../../../assets/jasmine_karma.png", width:"21%"},
  ]
  devops=[
    {tech: "CI/CD Pipelines", imgUrl: "../../../assets/cicd.png", width:"15%"},
    {tech: "Azure DevOps", imgUrl: "../../../assets/azure.png", width:"21%"},
  ]
  tools=[
    {tech: "Postman", imgUrl: "../../../assets/postman.png", width:"15%"},
    {tech: "Arc GIS", imgUrl: "../../../assets/arcgis.png", width:"21%"},
    {tech: "Power BI", imgUrl: "../../../assets/powerbi.png", width:"21%"},
    {tech: "Microsoft Visio", imgUrl: "../../../assets/visio.png", width:"21%"},
  ]
  version=[
    {tech: "Git", imgUrl: "../../../assets/git.png", width:"15%"},
  ]
  method=[
    {tech: "Test Driven Development (TDD)", imgUrl: "../../../assets/tdd.png", width:"10%"},
    {tech: "Agile Methodology (SCRUM)", imgUrl: "../../../assets/agile.png", width:"25%"},
  ]



}
