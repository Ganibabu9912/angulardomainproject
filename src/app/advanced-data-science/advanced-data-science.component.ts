import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-advanced-data-science',
  standalone: true,
  imports: [CommonModule,RouterModule,AdvancedDataScienceComponent],
  templateUrl:'./advanced-data-science.component.html',
  styleUrls: ['./advanced-data-science.component.css']
})
export class AdvancedDataScienceComponent {
  constructor(private router: Router) {}

  // Course syllabus data with titles and descriptions
  syllabus = [
    { title: 'Introduction to Machine Learning', description: 'Overview of ML concepts and applications.' },
    { title: 'Supervised Learning', description: 'Detailed study of supervised learning algorithms.' },
    { title: 'Unsupervised Learning', description: 'Understanding clustering and association techniques.' },
    { title: 'Deep Learning Fundamentals', description: 'Explore the basics of neural networks and deep learning.' },
    { title: 'Model Evaluation', description: 'Evaluating ML models for better accuracy and efficiency.' }
  ];

  // Video lectures data with titles, descriptions, and sub-classes
  videos = [
    { 
      title: 'Lecture 1: Introduction to Predictive Analytics', 
      description: 'Understanding the basics of predictive analysis.',
      subClasses: ['Overview of Predictive Analytics', 'Real-world applications', 'Case studies']
    },
    { 
      title: 'Lecture 2: Data Preprocessing Techniques', 
      description: 'Learn various data preprocessing methods.',
      subClasses: ['Data cleaning', 'Data normalization', 'Data transformation']
    },
    { 
      title: 'Lecture 3: Supervised vs Unsupervised Learning', 
      description: 'Comparison of learning techniques.',
      subClasses: ['Defining supervised learning', 'Examples of unsupervised learning', 'Real-world applications']
    }
  ];

  // State variables for managing active sections, videos, and class details
  activeSection: number | null = null;
  activeVideo: number | null = null;
  activeClassDetails: number | null = null;

  // Toggle function for showing and hiding syllabus content
  toggleSection(index: number): void {
    this.activeSection = this.activeSection === index ? null : index;
  }

  // Toggle function for showing and hiding video details
  toggleVideo(index: number): void {
    this.activeVideo = this.activeVideo === index ? null : index;
  }

  // Toggle function for showing sub-classes in each video
  showClassDetails(index: number): void {
    this.activeClassDetails = this.activeClassDetails === index ? null : index;
  }

  // Placeholder function to simulate uploading content for a class
  uploadClass(videoTitle: string): void {
    console.log(`Uploading content for ${videoTitle}`);
    alert(`Uploading content for ${videoTitle}`);
  }

  // Navigation functions for assignments and tests using router navigation
  navigateToAssignment(assignmentId: string): void {
    this.router.navigate(['/assignments', assignmentId]);
  }

  navigateToTest(testId: string): void {
    this.router.navigate(['/tests', testId]);
  }
}
