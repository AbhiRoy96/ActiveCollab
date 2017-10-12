import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SigncomponentComponent } from './signcomponent/signcomponent.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SignupConfirmationComponent } from './signup-confirmation/signup-confirmation.component';


import { HttpWebApiService } from './http-web-api.service';
import { UserAuthService } from './user-auth.service';
import { AuthGuard } from './auth.guard';
import { AdminAuthGuard } from './admin-auth.guard';
import { CreateProjectsComponent } from './create-projects/create-projects.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component';
import { UpdateProjectSettComponent } from './update-project-sett/update-project-sett.component';
import { UpdateProjectStatusComponent } from './update-project-status/update-project-status.component';
import { ProjectCompletionComponent } from './project-completion/project-completion.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { ViewTeamComponent } from './view-team/view-team.component';
import { ViewBugTickitComponent } from './view-bug-tickit/view-bug-tickit.component';
import { CreateBugTickitComponent } from './create-bug-tickit/create-bug-tickit.component';
import { CloseBugTickitComponent } from './close-bug-tickit/close-bug-tickit.component';
import { ResBugTickitComponent } from './res-bug-tickit/res-bug-tickit.component';
import { ViewTodoComponent } from './view-todo/view-todo.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { ResTodoComponent } from './res-todo/res-todo.component';
import { CreateTimelineComponent } from './create-timeline/create-timeline.component';
import { ViewTielineComponent } from './view-tieline/view-tieline.component';
import { ViewsSlotComponent } from './views-slot/views-slot.component';
import { CreateSlotComponent } from './create-slot/create-slot.component';
import { UpdateSlotComponent } from './update-slot/update-slot.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { NewsFeedsComponent } from './news-feeds/news-feeds.component';
import { ResFeedsComponent } from './res-feeds/res-feeds.component';
import { GenerateRequestComponent } from './generate-request/generate-request.component';
import { CreateRequestComponent } from './create-request/create-request.component';
import { ResRequestComponent } from './res-request/res-request.component';









const appRoutes:Routes = [
  {  path: '',  component: GetStartedComponent  },
  {  path: 'signup',  
     component: SignUpComponent,
     children: [
       {
         path: '',
         component: SignupFormComponent
       },
     ]
  },
  {  path: 'signupsuccess',   component: SignupConfirmationComponent },
  {  path: 'forgotpassword',  component: ForgotPasswordComponent },
  {  path: 'forbidden', component: ErrorComponentComponent },
  {  path: 'dashboard',  canActivate: [AuthGuard],  component: UserDashboardComponent },
  {  path: 'cpanel',  
     canActivate: [AdminAuthGuard],  
     component: AdminDashboardComponent, 
     children: [
       {
         path: '',
         component: ProfileViewComponent
       },

     ]
  },


];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigncomponentComponent,
    HomeComponent,
    ForgotPasswordComponent,
    GetStartedComponent,
    SignUpComponent,
    UserDashboardComponent,
    ErrorComponentComponent,
    AdminDashboardComponent,
    ProfileViewComponent,
    SignupFormComponent,
    SignupConfirmationComponent,
    CreateProjectsComponent,
    ViewProjectsComponent,
    UpdateProjectSettComponent,
    UpdateProjectStatusComponent,
    ProjectCompletionComponent,
    UpdateProfileComponent,
    PasswordChangeComponent,
    CreateTeamComponent,
    ViewTeamComponent,
    ViewBugTickitComponent,
    CreateBugTickitComponent,
    CloseBugTickitComponent,
    ResBugTickitComponent,
    ViewTodoComponent,
    CreateTodoComponent,
    ResTodoComponent,
    CreateTimelineComponent,
    ViewTielineComponent,
    ViewsSlotComponent,
    CreateSlotComponent,
    UpdateSlotComponent,
    CreateNewsComponent,
    NewsFeedsComponent,
    ResFeedsComponent,
    GenerateRequestComponent,
    CreateRequestComponent,
    ResRequestComponent,

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule, 
    HttpModule,
    FormsModule,

  ],
  providers: [HttpWebApiService, UserAuthService, AuthGuard, AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
