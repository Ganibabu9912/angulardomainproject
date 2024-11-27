import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cn',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cn.component.html',
  styleUrls: ['./cn.component.css']
})
export class CnComponent {
  // Sample related courses data for Computer Networks
  relatedCourses = [
    {
      name: 'Network Protocols and Architectures',
      description: 'In-depth study of computer networking principles and technologies.',
      image: 'assets/banners/advanced_cn.jpg',
      link: '/advanced-computer-networks'
    },
    {
      name: 'Network Virtualization and Cloud Computing',
      description: 'Learn the techniques to secure networks from malicious attacks.',
      image: 'assets/banners/ethical_hacking.jpg',
      link: '/ethical-hacking'
    },
    {
      name: 'Cybersecurity in Networking',
      description: 'Strategies and technologies to protect networks from threats.',
      image: 'assets/banners/network_defense.jpg',
      link: '/network-defense'
    },
    {
      name: 'Network Performance Analysis and Optimization',
      description: 'Techniques for managing and responding to security incidents.',
      image: 'assets/banners/incident_response.jpg',
      link: '/incident-response'
    },
    {
      name: 'Computer Networks',
      description: 'Hands-on techniques for testing network security.',
      image: 'assets/banners/penetration_testing.jpg',
      link: '/penetration-testing'
    }
  ];

  colors: string[] = ['#white', '#white', '#white', '#white', '#white'];

  // Function to return alternating colors for courses
  getCourseColor(index: number): string {
    return this.colors[index % this.colors.length];
  }

  showForm = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  // For handling form submission
  onFormSubmit() {
    console.log('Form Submitted!');
  }
}
