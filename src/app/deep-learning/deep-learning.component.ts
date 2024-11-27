import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-deep-learning-course',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './deep-learning.component.html',
  styleUrls: ['./deep-learning.component.css'],
})
export class DeepLearningComponent {
  syllabus = [
    {
      title: 'Introduction to Deep Learning',
      description: 'Overview of deep learning concepts and applications.'
    },
    {
      title: 'Neural Networks Basics',
      description: 'Understanding the architecture of neural networks.'
    },
    {
      title: 'Convolutional Neural Networks (CNNs)',
      description: 'Techniques for image recognition and processing.'
    },
    {
      title: 'Recurrent Neural Networks (RNNs)',
      description: 'Understanding sequence prediction and time series analysis.'
    },
    {
      title: 'Natural Language Processing with Deep Learning',
      description: 'Applying deep learning techniques in NLP.'
    },
    {
      title: 'Capstone Project: Building a Deep Learning Model',
      description: 'Hands-on project to create a deep learning application.'
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
      title: 'Introduction to Deep Learning',
      description: 'Overview of deep learning concepts and architectures.',
      subClasses: ['Basic Concepts', 'Applications']
    },
    {
      title: 'Neural Networks Fundamentals',
      description: 'Understanding the structure and function of neural networks.',
      subClasses: ['Perceptrons', 'Activation Functions']
    },
    {
      title: 'Convolutional Neural Networks',
      description: 'Techniques for image classification using CNNs.',
      subClasses: ['Convolutional Layers', 'Pooling Layers']
    },
    {
      title: 'Recurrent Neural Networks',
      description: 'Methods for handling sequential data.',
      subClasses: ['LSTMs', 'GRUs']
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
