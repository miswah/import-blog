import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Import library module
import { NgxSpinnerModule } from 'ngx-spinner';

import { BlogShowcaseComponent } from './views/blog-showcase/blog-showcase.component';
import { BlogCardsComponent } from './views/blog-cards/blog-cards.component';
import { BlogViewComponent } from './views/blog-view/blog-view.component';
import { ContentfulManagmentService } from './services/contentful-managment.service';
import { HomepageComponent } from './views/homepage/homepage.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AboutMeComponent } from './shared/components/about-me/about-me.component';
import { AboutTheBlogComponent } from './shared/components/about-the-blog/about-the-blog.component';

// import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
// import { ShareButtonsPopupModule } from 'ngx-sharebuttons/popup';
import { OverlayModule } from '@angular/cdk/overlay';

// import { ShareIconsModule } from 'ngx-sharebuttons/icons';

@NgModule({ declarations: [
        AppComponent,
        BlogShowcaseComponent,
        BlogCardsComponent,
        BlogViewComponent,
        HomepageComponent,
        NavbarComponent,
        FooterComponent,
        AboutMeComponent,
        AboutTheBlogComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        NgbModule,
        NgxSpinnerModule,
        OverlayModule],
        providers: [ContentfulManagmentService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
