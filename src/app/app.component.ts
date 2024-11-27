import { Component, Directive } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "./footer/footer.component";

import { AboutComponent } from './about/about.component';




import { CourseService } from './course.service';
import { HomeComponent } from './home/home.component';
import { AiComponent } from './ai/ai.component';
import { BioComponent } from './bio/bio.component';
import { BusinessComponent } from './business/business.component';
import { CnComponent } from './cn/cn.component';
import { CourseComponent } from './course/course.component';
import { CyberComponent } from './cyber/cyber.component';
import { DataComponent } from './data/data.component';
import { DesignComponent } from './design/design.component';
import { SignupComponent } from './signup/signup.component';
import { TechologyComponent } from './technology/technology.component';
import { AdvancedAiComponent } from './advanced-ai/advanced-ai.component';
import { MachineLearningComponent } from './machine-learning/machine-learning.component';
import { DataManagementComponent } from './data-management/data-management.component';
import { NlpComponent } from './nlp/nlp.component';
import { DeepLearningComponent } from './deep-learning/deep-learning.component';
import { WebComponent } from './web/web.component';
import { PopularCoursesComponent } from './popular-courses/popular-courses.component';
import { EceComponent } from './ece/ece.component';
import { MechanicalComponent } from './mechanical/mechanical.component';
import { AboutPaltformComponent } from './about-platform/about-platform.component';
import { SubscriptionDetailComponent } from './subscription-detail/subscription-detail.component';
import { FaqComponent } from './faq/faq.component';
import { SubscriptionPlansComponent } from './subcriptionplans/subcriptionplans.component';
import { MolecularBiologyComponent } from './molecular-biology/molecular-biology.component';
import { GeneticComponent } from './genetic/genetic.component';
import { BiochemistryComponent } from './biochemistry/biochemistry.component';
import { BiotechnologyComponent } from './biotechnology/biotechnology.component';
import { MicrobiologyComponent } from './microbiology/microbiology.component';
import { MlpaComponent } from './mlpa/mlpa.component';
import { DeepLearningImageAnalyticsComponent } from './deep-learning-image-analytics/deep-learning-image-analytics.component';
import { DataAnalysisComponent } from './data-analysis/data-analysis.component';
import { AdvancedDataScienceComponent } from './advanced-data-science/advanced-data-science.component';
import { ResponsiveWebDesignComponent } from './responsive-web-design/responsive-web-design.component';
import { FullStackDevelopmentComponent } from './full-stack-development/full-stack-development.component';
import { FrontendDevelopmentComponent } from './frontend-development/frontend-development.component';
import { BackendDevelopmentComponent } from './backend-development/backend-development.component';
import { PenetrationTestingComponent } from './penetration-testing/penetration-testing.component';
import { IncidentResponseComponent } from './incident-response/incident-response.component';
import { NetworkDefenseComponent } from './network-defense/network-defense.component';
import { EthicalHackingComponent } from './ethical-hacking/ethical-hacking.component';
import { AdvancedCyberComponent } from './advanced-cyber/advanced-cyber.component';
import { AuthService } from './auth.service';
import { ProfileComponent } from './profile/profile.component';
import { ImageAnalyticsComponent } from './image-analytics/image-analytics.component';
import { PredictiveAnalyticsComponent } from './predictive-analytics/predictive-analytics.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule, FormsModule, FooterComponent,AboutComponent,FormsModule,HomeComponent,AiComponent,BioComponent,CnComponent,CourseComponent,CyberComponent,DataComponent,DesignComponent,SignupComponent,TechologyComponent,AdvancedAiComponent,MachineLearningComponent,DataManagementComponent,NlpComponent,DeepLearningComponent,WebComponent,PopularCoursesComponent,EceComponent,MechanicalComponent,AboutPaltformComponent,SubscriptionDetailComponent,FaqComponent,SubscriptionPlansComponent,MolecularBiologyComponent,GeneticComponent,BiochemistryComponent,BiotechnologyComponent,MicrobiologyComponent,MlpaComponent,DeepLearningImageAnalyticsComponent,DataAnalysisComponent,AdvancedDataScienceComponent,ResponsiveWebDesignComponent,FullStackDevelopmentComponent,FrontendDevelopmentComponent,BackendDevelopmentComponent,PenetrationTestingComponent,IncidentResponseComponent,NetworkDefenseComponent,EthicalHackingComponent,AdvancedCyberComponent,ProfileComponent,ImageAnalyticsComponent,PredictiveAnalyticsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angulardomainproject';
}
