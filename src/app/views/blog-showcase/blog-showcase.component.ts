import { Component, OnInit } from '@angular/core';
import { ContentfulManagmentService } from 'src/app/services/contentful-managment.service';
import {
  trigger,
  transition,
  state,
  style,
  animate,
} from '@angular/animations';

@Component({
    selector: 'app-blog-showcase',
    templateUrl: './blog-showcase.component.html',
    styleUrls: ['./blog-showcase.component.css'],
    animations: [
        trigger('simpleFadeAnimation', [
            state('in', style({ opacity: 1 })),
            transition(':enter', [style({ opacity: 0 }), animate(600)]),
            transition(':leave', animate(600, style({ opacity: 0 }))),
        ]),
    ],
    standalone: false
})
export class BlogShowcaseComponent implements OnInit {
  featuredBlogNo: number = 0;
  blog: any = [];
  featuredBlogs: Array<any> = [];
  featuredBlogId: Number = 0;
  loaded: boolean = false;
  constructor(private cdaService: ContentfulManagmentService) {}

  ngOnInit(): void {
    this.getBlogs();
  }

  //getBlogs
  getBlogs() {
    this.cdaService.getBlogs().then((data: any) => {
      //setting featured Blogs
      for (let i = 0; i < 4; i++) {
        this.featuredBlogs.push(data[i]);
      }
      this.blog = this.featuredBlogs[0];
      console.log(this.featuredBlogs);
      this.loaded = true;
    });
  }

  //fetching the featured blog via click on button
  fetch(id: number) {
    this.featuredBlogNo = id;
    this.blog = this.featuredBlogs[id];
  }

  //scroll out of feaured Blog
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
