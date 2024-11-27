import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-machine-learning',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './machine-learning.component.html',
  styleUrl: './machine-learning.component.css',
})
export class MachineLearningComponent {
  // Initially, no section is active
  syllabus = [
    {
      title: 'Introduction to Machine Learning',
      description: 'Provides a comprehensive overview of machine learning fundamentals, including supervised, unsupervised, and reinforcement learning techniques.'
    },
    {
      title: 'Linear Regression and Classification Algorithms',
      description: 'Explores key regression and classification algorithms like linear regression, logistic regression, and support vector machines.'
    },
    {
      title: 'Decision Trees and Random Forests',
      description: 'Covers the theory and applications of decision trees and ensemble methods such as random forests.'
    },
    {
      title: 'Neural Networks and Deep Learning',
      description: 'Introduction to neural networks, backpropagation, and deep learning with a focus on practical implementation.'
    },
    {
      title: 'Unsupervised Learning and Clustering',
      description: 'Teaches clustering techniques such as K-means and hierarchical clustering, and their use in real-world scenarios.'
    },
    {
      title: 'AI Ethics in Machine Learning',
      description: 'Examines the ethical implications of machine learning models, including bias, fairness, and accountability in ML systems.'
    },
    {
      title: 'Capstone Project: Building a Machine Learning Model',
      description: 'A hands-on project where students develop and deploy a machine learning model using real-world data.'
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
      title: 'Introduction to Machine Learning',
      description: 'An introduction to machine learning concepts and types.',
      subClasses: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning'],
      link: '/videos/intro-to-ml'
    },
    {
      title: 'Regression Techniques',
      description: 'Learning about linear and logistic regression.',
      link: '/videos/regression-techniques',
      subClasses: [
        'Linear Regression',
        'Logistic Regression'
      ]
    },
    {
      title: 'Decision Trees and Random Forests',
      description: 'An in-depth look at decision trees and random forests.',
      link: '/videos/decision-trees',
      subClasses: [
        'Building a Decision Tree',
        'Understanding Random Forests'
      ]
    },
    {
      title: 'Deep Learning Basics',
      description: 'Introduction to neural networks and deep learning.',
      link: '/videos/deep-learning',
      subClasses: [
        'Neural Network Architecture',
        'Training Deep Networks'
      ]
    },
    {
      title: 'Clustering Techniques',
      description: 'Learn about unsupervised learning and clustering.',
      link: '/videos/clustering',
      subClasses: [
        'K-means Clustering',
        'Hierarchical Clustering'
      ]
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
