import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdaService } from './cda.service';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { FeaturedBlogComponent } from './featured-blog/featured-blog.component';
import { BlogPageComponent } from './blog-page/blog-page.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, BlogViewComponent, BlogListComponent, FeaturedBlogComponent, BlogPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CdaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
