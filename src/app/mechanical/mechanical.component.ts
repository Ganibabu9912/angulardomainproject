import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mechanical',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mechanical.component.html',
  styleUrls: ['./mechanical.component.css']
})
export class MechanicalComponent {
  relatedCourses = [
    {
      name: 'Thermodynamics',
      description: 'Understand the laws of thermodynamics and heat transfer.',
      image: 'assets/banners/thermo.jpg',
      link: '/thermodynamics'
    },
    {
      name: 'Fluid Mechanics',
      description: 'Explore fluid flow, pressure, and forces.',
      image: 'assets/banners/fluid.jpg',
      link: '/fluid-mechanics'
    },
    {
      name: 'Material Science',
      description: 'Learn about the properties of engineering materials.',
      image: 'assets/banners/materials.jpg',
      link: '/material-science'
    },
    {
      name: 'Mechanics of Machines',
      description: 'Study kinematics and dynamics of machines.',
      image: 'assets/banners/machines.jpg',
      link: '/mechanics-of-machines'
    },
    {
      name: 'Heat Transfer',
      description: 'Analyze heat conduction, convection, and radiation.',
      image: 'assets/banners/heat.jpg',
      link: '/heat-transfer'
    }
  ];

  colors: string[] = ['#white', '#white', '#white', '#white', '#white'];

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
