import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciComponent } from './pages/inici/inici.component';
import { AppMainComponent } from './app.main.component';
import { LoginComponent } from './pages/login/login.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { NoticiesComponent } from './pages/noticies/noticies.component';
import { ActivityFormComponent } from './pages/activitats/activity-form/activity-form.component';
import { ActivityComponent } from './pages/activitats/activity/activity.component';
import { RegisterComponent } from './pages/register/register.component';
import { ActivityDetailComponent } from './pages/activitats/activity-detail/activity-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AppMainComponent,
    children: [
        {
          path: '',
          component: IniciComponent,
        },
        {
          path: 'calendar',
          component: CalendarComponent,
        },
        {
          path: 'news',
          component: NoticiesComponent,
        },
        {
          path: 'activity',
          component: ActivityComponent,
        },
        {
          path: 'activity-form',
          component: ActivityFormComponent,
        },
        {
          path: 'activity-detail',
          component: ActivityDetailComponent,
        }
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
