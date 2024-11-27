import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-data-science',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'] // Corrected to styleUrls
})
export class DataComponent {
  // Sample related courses data for Data Science
  relatedCourses = [
    {
      name: 'Machine Learning for Predictive Analysis ',
      description: 'Explore advanced techniques in Data Science.',
      image: 'assets/banners/mlpa.jpg',
      link: '/advanced-data-science'
    },
    {
      name: 'Deep Learning for Image Analytics',
      description: 'Learn various ML algorithms and applications.',
      image: 'assets/banners/deep.jpeg',
      link: '/machine-learning'
    },
    {
      name: 'Data Analytics using Tableau',
      description: 'Techniques for analyzing data to make predictions.',
      image: 'assets/banners/tab1.jpg',
      link: '/data-analysis'
    },
    {
      name: 'ML for Spectral Imaging',
      description: 'Advanced deep learning techniques for image analysis.',
      image: 'assets/banners/mechanical.jpg',
      link: '/deep-learning-image-analytics'
    },
    
  ];

  colors: string[] = ['#white', '#white', '#white', '#white', '#white'];

  // Function to return alternating colors for courses
  getCourseColor(index: number): string {
    return this.colors[index % this.colors.length];
  }

  // Toggle form for registration
  showForm = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  // Handle form submission (you can expand this as needed)
  onFormSubmit() {
    console.log('Form Submitted!');
  }
}
