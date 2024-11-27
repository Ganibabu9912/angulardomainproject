import { Component } from '@angular/core';
import { CourseComponent } from "../course/course.component";
import { TopRecuritesComponent } from "../top-recurites/top-recurites.component";
import { PopularCoursesComponent } from "../popular-courses/popular-courses.component";
import { AboutPaltformComponent } from "../about-platform/about-platform.component";
import { SubscriptionDetailComponent } from "../subscription-detail/subscription-detail.component";
import { CourseplansComponent } from "../courseplans/courseplans.component";
import { FaqComponent } from "../faq/faq.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CourseComponent, TopRecuritesComponent, PopularCoursesComponent, AboutPaltformComponent, SubscriptionDetailComponent, CourseplansComponent, FaqComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
