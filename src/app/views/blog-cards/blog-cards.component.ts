import { Component, OnInit } from '@angular/core';
import { ContentfulManagmentService } from 'src/app/services/contentful-managment.service';

@Component({
    selector: 'app-blog-cards',
    templateUrl: './blog-cards.component.html',
    styleUrls: ['./blog-cards.component.css'],
    standalone: false
})
export class BlogCardsComponent implements OnInit {
  blogs: Array<any> = [];
  dates: string = '';
  posts: Array<any> = [];
  hover: boolean = false;
  share: Boolean = false;
  constructor(private cdaService: ContentfulManagmentService) {}

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs() {
    this.cdaService.getBlogs().then((data: any) => {
      this.blogs = data;
    });
  }

  shareShow() {
    this.share = true;
  }
}
