import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Software Developer ',
      company: 'Reliance Industries Limited',
      date: 'Aug 2019 - May 2023',
      description: [
        'Architected and implemented a digital Permit to Work system using MEAN stack (MongoDB, Express.js, Angular, Node.js).',
        'Managed complex workflows such as isolation management, user permissions, and template-driven forms, improving overall operational efficiency.',
        'Built a real-time monitoring system for mechanical seals in pumps using Node.js, Angular and MongoDB, enhancing predictive maintenance capabilities.',
        'Led the development of a GIS Mapping solution using ArcGIS tool, enabling real-time job location tracking and safety analysis.',
        'Developed workflows, setup MongoDB database, created schemas and RESTful APIs to streamline asset overhaul processes in the Workshop Management System.',
        'Performed frontend unit testing using Karma and Jasmine, ensuring seamless user experience and functionality on the UI side.',
        'Led testing efforts with Mocha and Chai for backend functionality, ensuring unit tests covered all critical areas.',
        'Used Azure DevOps for CI/CD pipeline, followed Agile Methodology (SCRUM) ensuring smooth planning and deployment of new features and updates.',
        'Provided support and feature updates for the Asset Performance Management (APM) system, including debugging and testing new features for reliability.',

      ]
    },
    {
      title: 'Summer Research Intern',
      company: 'IIT Delhi',
      date: 'June 2018 - July 2018',
      description: [
        'Interfaced different hardware components like Raspberry Pi, LCD Display, Matrix Keypad & Thermal Printer together as an embedded unit for POS device',
        'Programmed individual components on Python to take input from user, display on LCD, print it out through printer and communicate the same with a cloud server over WIFI',
        'Embedded unit properly cased and robustness tested to be used to manage parking lots, in collaboration with IIT Delhi startup, ParkSmart',
      ]
    },
    {
      title: 'Summer Research Intern',
      company: 'MNIT Jaipur',
      date: 'May 2017 - June 2017',
      description: [
        'Developed a Smart Stick for visually impaired persons to locate static and dynamic obstacles using multiple distance sensors and the presence of human, if he/she is in front of the user',
        'Human Face Detection using PI Camera on Raspberry PI board with the help of Haar-Cascades (Viola-Jones Algorithm)',
        'The Smart Stick detects human faces and generates alert in the form of vibration in the stick as well as audio in headphone',
        'Open CV-python used to implement Haar-Cascade classifier had an accuracy of 98%'
      ]
    }
  ];
}

