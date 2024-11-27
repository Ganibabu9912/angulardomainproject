import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent {
  // Sample related courses data
  relatedCourses = [
    {
      name: 'Molecular Biology',
      description: 'Understand the molecular mechanisms of biological systems.',
      image: 'assets/banners/molecular-biology.png',
      link: '/molecular-biology'
    },
    {
      name: 'Genetics',
      description: 'Explore the principles of heredity and gene functions.',
      image: 'assets/banners/genetics.jpg',
      link: '/genetic'
    },
    {
      name: 'Biochemistry',
      description: 'Study the chemical processes within living organisms.',
      image: 'assets/banners/biochemistry.jpg',
      link: '/biochemistry'
    },
    {
      name: 'Biotechnology',
      description: 'Learn about the technological applications of biology.',
      image: 'assets/banners/biotechnology.jpg',
      link: '/biotechnology'
    },
    {
      name: 'Microbiology',
      description: 'Delve into the study of microorganisms and their effects.',
      image: 'assets/banners/microbiology.jpg',
      link: '/microbiology'
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

  onFormSubmit() {
    console.log('Form Submitted!');
  }
}
