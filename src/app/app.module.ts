import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import library module
import { NgxSpinnerModule } from 'ngx-spinner';

import { BlogShowcaseComponent } from './views/blog-showcase/blog-showcase.component';
import { BlogCardsComponent } from './views/blog-cards/blog-cards.component';
import { BlogViewComponent } from './views/blog-view/blog-view.component';
import { ContentfulManagmentService } from './services/contentful-managment.service';
import { HomepageComponent } from './views/homepage/homepage.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogShowcaseComponent,
    BlogCardsComponent,
    BlogViewComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
  ],

  providers: [ContentfulManagmentService],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
