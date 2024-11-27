// Data Management Component (data-management.component.ts)
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-advanced-web',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './advanced-web.component.html',
  styleUrls: ['./advanced-web.component.css']
})
export class DataManagementComponent {
  // Syllabus data for Data Management
  syllabus = [
    { title: 'Introduction to Data Management', description: 'Overview of data management principles, storage, and retrieval.' },
    { title: 'Data Cleaning and Preprocessing', description: 'Techniques for cleaning and preparing data, handling missing data.' },
    { title: 'Exploratory Data Analysis (EDA)', description: 'Data visualization and techniques for uncovering data patterns.' },
    { title: 'Data Wrangling Techniques', description: 'Transform raw data into a usable format for analysis.' },
    { title: 'Clustering and Segmentation', description: 'Unsupervised learning for clustering data into meaningful segments.' },
    { title: 'Data Ethics and Privacy', description: 'Ethical considerations and privacy concerns in data handling.' },
    { title: 'Capstone Project: Data Analysis', description: 'A hands-on project with real-world data for analysis and visualization.' }
  ];

  // Video list for Data Management topics
  videos = [
    { title: 'Introduction to Data Management', description: 'An introduction to data management concepts.', link: '/videos/intro-to-data-management', subClasses: ['Data Storage', 'Data Retrieval', 'Data Processing'] },
    { title: 'Data Cleaning Techniques', description: 'How to clean and preprocess data effectively.', link: '/videos/data-cleaning', subClasses: ['Handling Missing Data', 'Dealing with Outliers'] },
    { title: 'Exploratory Data Analysis', description: 'EDA and data visualization techniques.', link: '/videos/eda', subClasses: ['Data Visualization', 'Statistical Summaries'] },
    { title: 'Data Wrangling', description: 'Transform raw data for usability.', link: '/videos/data-wrangling', subClasses: ['Merging Data', 'Reshaping Data'] },
    { title: 'Clustering Methods', description: 'Unsupervised clustering techniques.', link: '/videos/clustering', subClasses: ['K-means', 'Hierarchical Clustering'] }
  ];

  activeSection: number | null = null;
  activeVideo: number | null = null;
  activeClassDetails: number | null = null;

  // Toggle syllabus and video sections
  toggleSection(index: number) { this.activeSection = this.activeSection === index ? null : index; }
  toggleVideo(index: number) { this.activeVideo = this.activeVideo === index ? null : index; this.activeClassDetails = null; }
  showClassDetails(index: number) { this.activeClassDetails = this.activeClassDetails === index ? null : index; }
}
