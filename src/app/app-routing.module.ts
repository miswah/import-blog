import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogCardsComponent } from './views/blog-cards/blog-cards.component';
import { HomepageComponent } from './views/homepage/homepage.component';

const routes: Routes = [
  { path: 'home', component: BlogCardsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
