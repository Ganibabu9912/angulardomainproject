import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-web',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css'] // Ensure to have appropriate styles
})
export class WebComponent {
  // Sample related courses data for Web Development
  relatedCourses = [
    {
      name: 'Advanced Java',
      description: 'Gain expertise in advanced techniques for creating modern web applications using Java, focusing on scalability, security, and performance.',
      image: 'assets/banners/AWD.jpg',
      link: '/advanced-web'
    },
    {
      name: 'Angular',
      description: 'Learn to build highly interactive and responsive user interfaces with HTML, CSS, and TypeScript using Angular framework.',
      image: 'assets/banners/fro.jpg',
      link: '/frontend-development'
    },
    {
      name: 'Spring Boot',
      description: 'Develop server-side applications using Spring Boot, covering essential backend techniques like REST APIs and database integration.',
      image: 'assets/banners/back.jpg',
      link: '/backend-development'
    },
    {
      name: 'Product Development',
      description: 'Master full-stack development, integrating frontend and backend technologies to create comprehensive web applications.',
      image: 'assets/banners/full.jpg',
      link: '/full-stack-development'
    }
  ];

  colors: string[] = ['#white', '#white', '#white', '#white'];

  // Function to return alternating colors for courses
  getCourseColor(index: number): string {
    return this.colors[index % this.colors.length];
  }

  // Toggle form display
  showForm = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  // Handle form submission
  onFormSubmit() {
    console.log('Form Submitted!');
  }
}
