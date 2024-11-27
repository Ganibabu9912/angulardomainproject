import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-data-analysis',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl:'./data-analysis.component.html',
  styleUrls: ['./data-analysis.component.css'],
})
export class DataAnalysisComponent {
  // Initially, no section is active
  syllabus = [
    {
      title: 'Introduction to Data Analytics',
      description: 'An overview of data analytics and its importance in decision-making and business strategies.'
    },
    {
      title: 'Data Visualization with Tableau',
      description: 'Learn how to create compelling data visualizations using Tableau to communicate insights effectively.'
    },
    {
      title: 'Connecting to Data Sources',
      description: 'Understanding how to connect Tableau to various data sources, including spreadsheets and databases.'
    },
    {
      title: 'Creating Interactive Dashboards',
      description: 'A hands-on guide to building interactive dashboards that provide actionable insights.'
    },
    {
      title: 'Advanced Tableau Techniques',
      description: 'Explores advanced features of Tableau, including calculated fields, parameters, and data blending.'
    },
    {
      title: 'Real-World Case Studies',
      description: 'Analysis of real-world case studies where Tableau has been successfully implemented for data analytics.'
    },
    {
      title: 'Capstone Project: Data Analytics Dashboard',
      description: 'Develop a comprehensive analytics dashboard using real datasets and showcase your learning.'
    }
  ];

  activeSection: number | null = null;

  toggleSection(index: number) {
    this.activeSection = this.activeSection === index ? null : index; // Toggle the active section
  }

  activeVideo: number | null = null;
  activeClassDetails: number | null = null;

  videos = [
    {
      title: 'Getting Started with Tableau',
      description: 'An introduction to Tableau and its interface.',
      subClasses: ['Installing Tableau', 'Navigating the Interface'],
      link: '/videos/getting-started'
    },
    {
      title: 'Building Your First Visualization',
      description: 'Step-by-step guide to creating your first visualization.',
      subClasses: ['Creating Bar Charts', 'Using Filters'],
      link: '/videos/first-visualization'
    },
    {
      title: 'Creating Calculated Fields',
      description: 'Learn to create calculated fields to enhance your data analysis.',
      subClasses: ['Basic Calculations', 'Advanced Calculations'],
      link: '/videos/calculated-fields'
    },
    {
      title: 'Sharing and Publishing Dashboards',
      description: 'How to share your Tableau dashboards with others.',
      subClasses: ['Publishing to Tableau Server', 'Sharing Links'],
      link: '/videos/sharing-dashboards'
    }
  ];

  toggleVideo(index: number) {
    this.activeVideo = this.activeVideo === index ? null : index; // Toggle video
    this.activeClassDetails = null; // Reset class details when toggling videos
  }

  uploadClass(title: string): void {
    console.log(`Uploading class for: ${title}`);
    // Implement your upload logic here
  }

  showClassDetails(index: number) {
    this.activeClassDetails = this.activeClassDetails === index ? null : index; // Toggle class details
  }
}
