import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Control of Works (RCoW)',
      description: [
        'Developed and deployed a full-scale Permit to Work Management System using Angular, Node.js, Express.js, and MongoDB.',
        'Enhanced safety protocols and streamlined work management, increasing operational efficiency by 55%.',
        'Implemented core modules such as Permit Management, Isolation Management, User Management, Isolation Tags, LOTOs.',
        'Configured master data and successfully drove system rollouts across multiple business units.',
        'Conducted comprehensive User Acceptance Testing (UAT) and provided hands-on user training.'
      ]
    },
    {
      title: 'Seal Integrity Monitoring System (SIMS)',
      description: [
        'Designed and implemented a real-time monitoring system for tracking the health of mechanical seals in pumps, using Angular, Node.js., MongoDB',
        'Utilized cron jobs for data reception and monitoring divergence from real values, ensuring timely updates and alerts.',
        'Integrated predictive maintenance alerts, reducing equipment downtime by 25%',
        'Gathered functional business requirements, translating them into actionable technical solutions',
      ]
    },
    {
      title: 'GIS Mapping of Work Locations',
      description: [
        'Led the development of a GIS-based system for real-time job monitoring and safety analysis, using ArcGIS',
        'Streamlined geographic data processing across multiple locations to ensure job safety',
        'Trained cross-functional IT teams on GIS operations, optimizing geospatial data management.',
      ]
    },
    {
      title: 'Workshop Management System (WMS)',
      description: [
        'Spearheaded the development of digital workflows for overhauling mechanical assets, integrating MongoDB for asset tracking and maintenance scheduling',
        'Collaborated with project managers and business users to align technical solutions with business objectives',
      ]
    },
    {
      title: 'Asset Performance Management (APM)',
      description: [
        'Worked towards enhancing the dependability of assets at manufacturing locations',
        'Implemented mapping techniques in Asset Critically Analysis, Risk Based Inspection, Inspection Management, Recommendation Management, and Root Cause Analysis modules to optimize maintenance strategies for equipment',
        'Actively participated in product upgrade, testing, database management, and bug fixing'
      ]
    }

  ];
}

