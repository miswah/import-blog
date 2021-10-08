import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CdaService } from './cda.service';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { FeaturedBlogComponent } from './featured-blog/featured-blog.component';
import { PostViewComponent } from './post-view/post-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingComponent } from './loading/loading.component';
import { NetworkInterceptor } from './loading/network.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import library module
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BlogListComponent,
    FeaturedBlogComponent,
    PostViewComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
  ],
  providers: [
    CdaService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkInterceptor,
      multi: true,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
