import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RecaptchaModule } from 'ng-recaptcha';

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
import { HamburgerComponent } from './hamburger/hamburger.component';
import { UserHamburgerComponent } from './user-hamburger/user-hamburger.component';

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
import { TeammembersComponent } from './dashboard-components/teammembers/teammembers.component'; 

import { ViewBugTickitComponent } from './dashboard-components/view-bug-tickit/view-bug-tickit.component';
import { CreateBugTickitComponent } from './dashboard-components/create-bug-tickit/create-bug-tickit.component';
import { CloseBugTickitComponent } from './dashboard-components/close-bug-tickit/close-bug-tickit.component';
import { ResBugTickitComponent } from './dashboard-components/res-bug-tickit/res-bug-tickit.component';

import { ViewTodoComponent } from './dashboard-components/view-todo/view-todo.component';
import { CreateTodoComponent } from './dashboard-components/create-todo/create-todo.component';
import { ResTodoComponent } from './dashboard-components/res-todo/res-todo.component';

import { NewsFeedsComponent } from './dashboard-components/news-feeds/news-feeds.component';

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
  {  path: 'dashboard',  
     canActivate: [AuthGuard],  
     component: UserDashboardComponent, 
     children: [
       {
         path: '',
         component: MainPageComponent
       },
       {
         path: 'profile',
         component: ProfileViewComponent
       },
       {
         path: 'myteams',
         component: ViewTeamComponent
       },
       {
         path: 'myteamrequests',
         component: ResRequestComponent
       },
       {
         path: 'newsfeeds',
         component: NewsFeedsComponent
       },
       {
         path: 'myprojects',
         component: ViewProjectsComponent
       }, 
       {
         path: 'createtodo',
         component: CreateTodoComponent
       },
       {
         path: 'mytodos',
         component: ViewTodoComponent
       },
       {
         path: 'pendingtodos',
         component: ResTodoComponent
       },
       {
         path: 'newbugreport',
         component: CreateBugTickitComponent
       },
       {
         path: 'bugs',
         component: ViewBugTickitComponent
       },
       {
         path: 'bugsolved',
         component: ResBugTickitComponent
       },
       {
         path: 'accountsettings',
         component: UpdateProfileComponent
       }
     ]
  },
  




  {  path: 'cpanel',  
     canActivate: [AdminAuthGuard],  
     component: AdminDashboardComponent, 
     children: [
       {
         path: '',
         component: MainPageComponent
       },
       {
         path: 'profile',
         component: ProfileViewComponent
       },
       {
         path: 'createteam',
         component: CreateTeamComponent
       },
       {
         path: 'myteams',
         component: ViewTeamComponent
       },
       {
         path: 'myteamrequests',
         component: ResRequestComponent
       },
       {
         path: 'newsfeeds',
         component: NewsFeedsComponent
       },
       {
         path: 'newproject',
         component: CreateProjectsComponent
       },
       {
         path: 'myprojects',
         component: ViewProjectsComponent
       },
       {
         path: 'changesettings/:id',
         component: UpdateProjectSettComponent
       },
       {
         path: 'updatestatus/:id',
         component: UpdateProjectStatusComponent
       },
       {
         path: 'createtodo',
         component: CreateTodoComponent
       },
       {
         path: 'mytodos',
         component: ViewTodoComponent
       },
       {
         path: 'pendingtodos',
         component: ResTodoComponent
       },
       {
         path: 'newbugreport',
         component: CreateBugTickitComponent
       },
       {
         path: 'bugs',
         component: ViewBugTickitComponent
       },
       {
         path: 'bugsolved',
         component: ResBugTickitComponent
       },
       {
         path: 'verifybugs',
         component: CloseBugTickitComponent
       },
       {
         path: 'accountsettings',
         component: UpdateProfileComponent
       },
       {
         path: 'addteammembers/:id',
         component: TeammembersComponent
       }      
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
    NewsFeedsComponent,
    ResRequestComponent,
    MainPageComponent,
    LoadingPageComponent,
    HamburgerComponent,
    UserHamburgerComponent,
    TeammembersComponent,

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule, 
    HttpModule,
    FormsModule,
    RecaptchaModule.forRoot(),

  ],
  providers: [HttpWebApiService, UserAuthService, AuthGuard, AdminAuthGuard, PasswordGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
