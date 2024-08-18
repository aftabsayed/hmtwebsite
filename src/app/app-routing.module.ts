import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { LostpageComponent } from './pages/lostpage/lostpage.component';
import { WippageComponent } from './pages/wippage/wippage.component';

const routes: Routes = [
  {path: '', redirectTo: '/wip', pathMatch:'full'},
  // {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'wip', component: WippageComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'about', component: AboutpageComponent},
  {path: '**', component: LostpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
