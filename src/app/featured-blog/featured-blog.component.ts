import { Component, OnInit } from '@angular/core';
import { CdaService } from '../cda.service';

@Component({
  selector: 'app-featured-blog',
  templateUrl: './featured-blog.component.html',
  styleUrls: ['./featured-blog.component.css'],
})
export class FeaturedBlogComponent implements OnInit {
  public blogs: any = [];
  public featuredBlog: any = [];
  public title: string = '';
  public loaded: boolean = false;
  public descriptions: string = '';
  public featuredImage: string = '';
  public id: number = 0;

  constructor(public contentful: CdaService) {}

  ngOnInit(): void {
    this.contentful.getProducts().then((products) => {
      this.blogs = products;
      this.getBlog();
      this.setData();
    });
  }

  //seta data for posts................
  setData() {
    this.title = this.featuredBlog[this.id].fields.title;
    this.descriptions = this.featuredBlog[this.id].fields.description;
    this.featuredImage =
      this.featuredBlog[this.id].fields.featuredImage.fields.file.url;

    console.log(this.featuredBlog[this.id].fields);
    console.log(this.featuredImage);
  }

  //getting featured blog..........
  getBlog() {
    for (let i = this.blogs.length - 1; i > this.blogs.length - 5; i--) {
      this.featuredBlog.push(this.blogs[i]);
    }
  }
}
