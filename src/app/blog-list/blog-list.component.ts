import { Component, OnInit } from '@angular/core';
import { CdaService } from '../cda.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  public blogs: any = [];
  public tags: any = [];
  public loaded: boolean = false;

  constructor(private contentful: CdaService) {}

  ngOnInit(): void {
    this.contentful.getProducts().then((products) => {
      this.blogs = products;
      // console.log(this.blogs[0]);
      this.contentful.getTags().subscribe((res) => {
        this.tags = res.items;
        console.log(this.tags);
      });
    });
    this.loaded = true;
  }
}
