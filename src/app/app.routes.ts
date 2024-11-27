import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';


import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { TechologyComponent } from './technology/technology.component';
import { BusinessComponent } from './business/business.component';
import { DesignComponent } from './design/design.component';
import { AiComponent } from './ai/ai.component';
import { DataComponent } from './data/data.component';
import { CyberComponent } from './cyber/cyber.component';
import { CnComponent } from './cn/cn.component';
import { BioComponent } from './bio/bio.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModel, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
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
import { FaqComponent } from './faq/faq.component';
import { CourseplansComponent } from './courseplans/courseplans.component';
import { SubscriptionDetailComponent } from './subscription-detail/subscription-detail.component';
import { SubscriptionPlansComponent } from './subcriptionplans/subcriptionplans.component';
import { MicrobiologyComponent } from './microbiology/microbiology.component';
import { BiotechnologyComponent } from './biotechnology/biotechnology.component';
import { BiochemistryComponent } from './biochemistry/biochemistry.component';
import { GeneticComponent } from './genetic/genetic.component';
import { MolecularBiologyComponent } from './molecular-biology/molecular-biology.component';
import { AdvancedDataScienceComponent } from './advanced-data-science/advanced-data-science.component';
import { DataAnalysisComponent } from './data-analysis/data-analysis.component';
import { DeepLearningImageAnalyticsComponent } from './deep-learning-image-analytics/deep-learning-image-analytics.component';
import { MlpaComponent } from './mlpa/mlpa.component';

import { FrontendDevelopmentComponent } from './frontend-development/frontend-development.component';
import { BackendDevelopmentComponent } from './backend-development/backend-development.component';
import { FullStackDevelopmentComponent } from './full-stack-development/full-stack-development.component';
import { ResponsiveWebDesignComponent } from './responsive-web-design/responsive-web-design.component';
import { PenetrationTestingComponent } from './penetration-testing/penetration-testing.component';
import { IncidentResponseComponent } from './incident-response/incident-response.component';
import { NetworkDefenseComponent } from './network-defense/network-defense.component';
import { EthicalHackingComponent } from './ethical-hacking/ethical-hacking.component';
import { AdvancedCyberComponent } from './advanced-cyber/advanced-cyber.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { PredictiveAnalyticsComponent } from './predictive-analytics/predictive-analytics.component';
import { ImageAnalyticsComponent } from './image-analytics/image-analytics.component';



export const routes: Routes = [
  
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'Signup', component: SignupComponent },
  
  
  { path: 'login', component:LoginComponent },

  
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
    { path: 'course', component: CourseComponent },
    { path: 'techology', component: TechologyComponent },
    { path: 'business', component: BusinessComponent },
    { path: 'design', component: DesignComponent },
    { path: 'ai', component: AiComponent},
    { path: 'data', component: DataComponent },
    { path: 'cyber', component: CyberComponent },
    { path: 'cn', component: CnComponent },
    { path: 'bio', component: BioComponent },
    { path: 'advanced-ai', component: AdvancedAiComponent },
    { path: 'machine-learning', component: MachineLearningComponent},
    { path: 'data-management', component: DataManagementComponent},
    { path: 'nlp', component: NlpComponent},
    { path: 'deep-learning', component: DeepLearningComponent},
    { path: 'web', component:WebComponent},
    { path: 'popular-courses', component:PopularCoursesComponent},
    { path: 'ece', component:EceComponent},
    { path: 'mechanical', component:MechanicalComponent},
    { path: 'about-platform', component: AboutPaltformComponent },
    { path: 'faq', component: FaqComponent},
    { path: 'courseplans', component: CourseplansComponent},
    { path: 'subscription-details', component: SubscriptionDetailComponent},
    { path: 'subcriptionplans', component:SubscriptionPlansComponent},
    { path: 'microbiology', component:MicrobiologyComponent},
    { path: 'biotechnology', component:BiotechnologyComponent},
    { path: 'biochemistry', component: BiochemistryComponent },
    { path: 'genetic', component: GeneticComponent },
    { path: 'advanced-data-science', component: AdvancedDataScienceComponent},
    { path: 'data-analysis', component: DataAnalysisComponent },
    { path: 'deep-learning-image-analytics', component: DeepLearningImageAnalyticsComponent },
    { path: 'mlpa', component: MlpaComponent },
    
    { path: 'frontend-development', component: FrontendDevelopmentComponent },
    { path: 'backend-development', component: BackendDevelopmentComponent },
    { path: 'full-stack-development', component: FullStackDevelopmentComponent},
    { path: 'responsive-web-design', component: ResponsiveWebDesignComponent },
    { path: 'penetration-testing', component: PenetrationTestingComponent },
    { path: 'incident-response', component:IncidentResponseComponent },
    { path: 'network-defense', component: NetworkDefenseComponent },
    { path: 'ethical-hacking', component: EthicalHackingComponent},
    { path: 'advanced-cyber', component: AdvancedCyberComponent },
    { path: 'profile', component:ProfileComponent },
    { path: 'predictive-analytics', component:PredictiveAnalyticsComponent },
    { path: 'image-analytics', component:ImageAnalyticsComponent },



    
    
    
  

    { path: '**', redirectTo: '/Home' } 
   

];

@NgModule({
    
    imports: [RouterModule.forRoot(routes),CommonModule,BrowserModule, ReactiveFormsModule],
    exports: [RouterModule],
   
    
  })
  export class AppRoutesModule { }