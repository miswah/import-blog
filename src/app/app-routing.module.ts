import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogCardsComponent } from './views/blog-cards/blog-cards.component';
import { BlogShowcaseComponent } from './views/blog-showcase/blog-showcase.component';
import { BlogViewComponent } from './views/blog-view/blog-view.component';
import { HomepageComponent } from './views/homepage/homepage.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'view/:id', component: BlogViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
