import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ece',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ece.component.html',
  styleUrls: ['./ece.component.css']
})
export class EceComponent {
  // Sample related courses data
  relatedCourses = [
    {
      name: 'Advanced Communication Systems',
      description: 'In-depth study of modern communication systems.',
      image: 'assets/ece/communication.jpg',
      link: '/advanced-communication'
    },
    {
      name: 'Digital Signal Processing',
      description: 'Techniques and applications of signal processing.',
      image: 'assets/ece/signal-processing.jpg',
      link: '/digital-signal-processing'
    },
    {
      name: 'Wireless Networks',
      description: 'Explore the world of wireless networking.',
      image: 'assets/ece/wireless.jpg',
      link: '/wireless-networks'
    },
    {
      name: 'Embedded Systems',
      description: 'Design and development of embedded systems.',
      image: 'assets/ece/embedded.jpg',
      link: '/embedded-systems'
    },
    {
      name: 'Optical Communication',
      description: 'Learn about fiber optics and light-based communication.',
      image: 'assets/ece/optical.jpg',
      link: '/optical-communication'
    }
  ];

  colors: string[] = ['#white', '#white', '#white', '#white', '#white'];

  // Function to return alternating colors for courses
  getCourseColor(index: number): string {
    return this.colors[index % this.colors.length];
  }

  // Form toggle functionality
  showForm = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  // Form submission handling
  onFormSubmit() {
    console.log('Form Submitted!');
  }
}
