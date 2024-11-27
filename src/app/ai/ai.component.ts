import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ai',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.css']
})
export class AiComponent {
  // Updated related courses data
  relatedCourses = [
    {
      name: 'Machine Learning for Predictive Analytics',
      description: 'Learn how to develop predictive models using advanced machine learning techniques.',
      image: 'assets/banners/advances.png',
      link: '/predictive-analytics'
    },
    {
      name: 'Data Management',
      description: 'Master data management skills for effective data storage, retrieval, and analysis.',
      image: 'assets/banners/data.jpg',
      link: '/data-management'
    },
    {
      name: 'Deep Learning for Image Analytics',
      description: 'Explore deep learning applications in image recognition and analytics.',
      image: 'assets/banners/deep.jpeg',
      link: '/image-analytics'
    },
    {
      name: 'Computational Linguistics and NLP',
      description: 'Delve into NLP techniques and computational linguistics for language processing.',
      image: 'assets/banners/nlp.webp',
      link: '/nlp'
    }
  ];

  colors: string[] = ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'];

  getCourseColor(index: number): string {
    return this.colors[index % this.colors.length];
  }

  showForm = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  onFormSubmit() {
    console.log('Form Submitted!');
  }
}
