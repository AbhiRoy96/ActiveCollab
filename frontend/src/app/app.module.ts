import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Parent Components

import { AppComponent } from './app.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MainPageComponent } from './main-page/main-page.component';

import { SigncomponentComponent } from './signcomponent/signcomponent.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';

import { SignUpComponent } from './sign-up/sign-up.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SignupConfirmationComponent } from './signup-confirmation/signup-confirmation.component';

import { ErrorComponentComponent } from './error-component/error-component.component';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PasswordChangeComponent } from './password-change/password-change.component';

import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

// Dashboard components

import { CreateProjectsComponent } from './dashboard-components/create-projects/create-projects.component';
import { ViewProjectsComponent } from './dashboard-components/view-projects/view-projects.component';
import { UpdateProjectSettComponent } from './dashboard-components/update-project-sett/update-project-sett.component';
import { UpdateProjectStatusComponent } from './dashboard-components/update-project-status/update-project-status.component';
import { ProjectCompletionComponent } from './dashboard-components/project-completion/project-completion.component';

import { ProfileViewComponent } from './dashboard-components/profile-view/profile-view.component';
import { UpdateProfileComponent } from './dashboard-components/update-profile/update-profile.component';

import { CreateTeamComponent } from './dashboard-components/create-team/create-team.component';
import { ViewTeamComponent } from './dashboard-components/view-team/view-team.component';

import { ViewBugTickitComponent } from './dashboard-components/view-bug-tickit/view-bug-tickit.component';
import { CreateBugTickitComponent } from './dashboard-components/create-bug-tickit/create-bug-tickit.component';
import { CloseBugTickitComponent } from './dashboard-components/close-bug-tickit/close-bug-tickit.component';
import { ResBugTickitComponent } from './dashboard-components/res-bug-tickit/res-bug-tickit.component';

import { ViewTodoComponent } from './dashboard-components/view-todo/view-todo.component';
import { CreateTodoComponent } from './dashboard-components/create-todo/create-todo.component';
import { ResTodoComponent } from './dashboard-components/res-todo/res-todo.component';

import { CreateTimelineComponent } from './dashboard-components/create-timeline/create-timeline.component';
import { ViewTielineComponent } from './dashboard-components/view-tieline/view-tieline.component';
import { ViewsSlotComponent } from './dashboard-components/views-slot/views-slot.component';
import { CreateSlotComponent } from './dashboard-components/create-slot/create-slot.component';
import { UpdateSlotComponent } from './dashboard-components/update-slot/update-slot.component';

import { CreateNewsComponent } from './dashboard-components/create-news/create-news.component';
import { NewsFeedsComponent } from './dashboard-components/news-feeds/news-feeds.component';
import { ResFeedsComponent } from './dashboard-components/res-feeds/res-feeds.component';

import { GenerateRequestComponent } from './dashboard-components/generate-request/generate-request.component';
import { CreateRequestComponent } from './dashboard-components/create-request/create-request.component';
import { ResRequestComponent } from './dashboard-components/res-request/res-request.component';


//services and Guards

import { HttpWebApiService } from './http-web-api.service';
import { UserAuthService } from './user-auth.service';
import { AuthGuard } from './auth.guard';
import { AdminAuthGuard } from './admin-auth.guard';
import { PasswordGuard } from './password.guard';











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
  {  path: 'updatePassword/:id', canActivate: [PasswordGuard], component: PasswordChangeComponent },
  {  path: 'forbidden', component: ErrorComponentComponent },
  {  path: 'loading', canActivate: [AuthGuard], component: LoadingPageComponent },
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
    MainPageComponent,
    LoadingPageComponent,

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule, 
    HttpModule,
    FormsModule,

  ],
  providers: [HttpWebApiService, UserAuthService, AuthGuard, AdminAuthGuard, PasswordGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
