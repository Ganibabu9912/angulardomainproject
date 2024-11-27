import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cyber',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cyber.component.html',
  styleUrls: ['./cyber.component.css']
})
export class CyberComponent {
  // Sample related courses data
  relatedCourses = [
    {
      name: 'Iot Analytics',
      description: 'Deep understanding of security protocols.',
      image: 'assets/banners/adv.jpg',
      link: '/advanced-cyber'
    },
    {
      name: 'Cybersecurity in Networking',
      description: 'Learn how to think like a hacker.',
      image: 'assets/banners/ethe.jpg',
      link: '/ethical-hacking'
    },
    {
      name: 'Advanced Hacking Techniques',
      description: 'Techniques to protect networks from attacks.',
      image: 'assets/banners/def.jpg',
      link: '/network-defense'
    },
    {
      name: 'BlockChain Developement',
      description: 'Responding to and managing security incidents.',
      image: 'assets/banners/inc.jpg',
      link: '/incident-response'
    },
    {
      name: 'Computer Networks',
      description: 'Learn penetration testing methodologies.',
      image: 'assets/banners/pen.jpg',
      link: '/penetration-testing'
    }
  ];

  colors: string[] = ['#white', '#white', '#white', '#white', '#white'];

  // Function to return alternating colors for courses
  getCourseColor(index: number): string {
    return this.colors[index % this.colors.length];
  }

  // Toggle form display
  showForm = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  // Handling form submission
  onFormSubmit() {
    console.log('Form Submitted!');
  }
}
