import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor() {}

  // Mock data for Featured Courses
  getFeaturedCourses(): Observable<any[]> {
    const featuredCourses = [
      { id: 1, name: 'Angular', description: 'Learn Angular from scratch', image: 'assets/angular.png' },
      { id: 2, name: 'Python', description: 'Master Python for data science', image: 'assets/python.png' },
      // Add more courses
    ];
    return of(featuredCourses);
  }

  // Mock data for Popular Courses
  getPopularCourses(): Observable<any[]> {
    const popularCourses = [
      { id: 1, name: 'Java', description: 'Deep dive into Java', image: 'assets/java.png' },
      { id: 2, name: 'React.js', description: 'Front-end development with React', image: 'assets/react.png' },
      // Add more courses
    ];
    return of(popularCourses);
  }

  // Mock data for Top Recruiters
  getTopRecruiters(): Observable<any[]> {
    const recruiters = [
      { name: 'Google', logo: 'assets/google.png' },
      { name: 'Microsoft', logo: 'assets/microsoft.png' },
      // Add more recruiters
    ];
    return of(recruiters);
  }
}
