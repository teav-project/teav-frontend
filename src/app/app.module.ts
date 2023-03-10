import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { TopMenuComponent } from './pages/top/top.component';
import { NavBarComponent } from './utils/navbar/navbar.component';
import { MenubarComponent } from './utils/menubar/menubar.component';
import { MembersComponent } from './pages/members/members.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TopMenuComponent,
    NavBarComponent,
    MenubarComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path:'',component: LandingComponent},
      { path:'top',component: TopMenuComponent},
      { path:'navbar',component: NavBarComponent},
      { path:'members',component: MembersComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
