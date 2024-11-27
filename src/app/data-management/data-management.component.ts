import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-data-management',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './data-management.component.html',
  styleUrls: ['./data-management.component.css'], // Corrected 'styleUrl' to 'styleUrls'
})
export class DataManagementComponent {
  // Syllabus data
  syllabus = [
    {
      title: 'Introduction to Data Management',
      description: 'Overview of data management principles, data storage, and retrieval methods.'
    },
    {
      title: 'Data Cleaning and Preprocessing',
      description: 'Techniques to clean, preprocess, and prepare data for analysis, including handling missing data and outliers.'
    },
    {
      title: 'Exploratory Data Analysis (EDA)',
      description: 'Introduction to data visualization and exploratory techniques to uncover patterns and insights from data.'
    },
    {
      title: 'Data Wrangling Techniques',
      description: 'Practical techniques to transform raw data into a usable format for further analysis.'
    },
    {
      title: 'Clustering and Segmentation',
      description: 'Unsupervised learning techniques for clustering data into meaningful segments.'
    },
    {
      title: 'Data Ethics and Privacy',
      description: 'Examining the ethical considerations and privacy concerns in handling and managing data.'
    },
    {
      title: 'Capstone Project: Data Analysis with Real-World Data',
      description: 'A hands-on project where students perform data analysis and visualization on a real-world dataset.'
    }
  ];

  // Initially, no section is active
  activeSection: number | null = null;

  // Toggle the active syllabus section
  toggleSection(index: number) {
    this.activeSection = this.activeSection === index ? null : index;
  }

  // Videos data
  videos = [
    {
      title: 'Introduction to Data Management',
      description: 'An introduction to data management concepts and techniques.',
      subClasses: ['Data Storage', 'Data Retrieval', 'Data Processing'],
      link: '/videos/intro-to-data-management'
    },
    {
      title: 'Data Cleaning Techniques',
      description: 'Learning how to clean and preprocess data effectively.',
      link: '/videos/data-cleaning',
      subClasses: ['Handling Missing Data', 'Dealing with Outliers']
    },
    {
      title: 'Exploratory Data Analysis',
      description: 'Introduction to EDA and data visualization techniques.',
      link: '/videos/eda',
      subClasses: ['Data Visualization', 'Statistical Summaries']
    },
    {
      title: 'Data Wrangling',
      description: 'Techniques for transforming raw data into usable formats.',
      link: '/videos/data-wrangling',
      subClasses: ['Merging and Joining Data', 'Reshaping Data']
    },
    {
      title: 'Clustering Methods',
      description: 'Unsupervised techniques for clustering data.',
      link: '/videos/clustering',
      subClasses: ['K-means Clustering', 'Hierarchical Clustering']
    }
  ];

  // Initially, no video or class details are active
  activeVideo: number | null = null;
  activeClassDetails: number | null = null;

  // Toggle the active video section
  toggleVideo(index: number) {
    this.activeVideo = this.activeVideo === index ? null : index;
    this.activeClassDetails = null; // Reset class details when toggling videos
  }

  // Upload class (placeholder for future implementation)
  uploadClass(title: string): void {
    console.log(`Uploading class for: ${title}`);
    // Add your upload logic here
  }

  // Toggle the class details
  showClassDetails(index: number) {
    this.activeClassDetails = this.activeClassDetails === index ? null : index;
  }
}
