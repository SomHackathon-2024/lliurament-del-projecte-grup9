import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciComponent } from './pages/inici/inici.component';
import { TopbarComponent } from './parts/topbar.component';
import { AppMainComponent } from './app.main.component';
import { FooterComponent } from './parts/footer.component';
import { SideBarComponent } from './parts/sidebar.component';
import { MenuComponent } from './parts/menu/menu.component';
import { MenuitemComponent } from './parts/menu/menuitem.component';
import { MenuService } from './core/service/menu.service';
import { LoginComponent } from './pages/login/login.component';
import { PrimeModule } from './core/service/prime.module';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { NoticiesComponent } from './pages/noticies/noticies.component';
import { ActivityComponent } from './pages/activitats/activity/activity.component';
import { ActivityFormComponent } from './pages/activitats/activity-form/activity-form.component';
import { RegisterComponent } from './pages/register/register.component';
import { ActivityDetailComponent } from './pages/activitats/activity-detail/activity-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    MenuComponent,
    MenuitemComponent,
    TopbarComponent,
    SideBarComponent,
    FooterComponent,
    IniciComponent,
    LoginComponent,
    CalendarComponent,
    NoticiesComponent,
    ActivityComponent,
    ActivityFormComponent,
    RegisterComponent,
    ActivityDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeModule,
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
