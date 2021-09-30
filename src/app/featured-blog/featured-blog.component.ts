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
  public fetchBlog: any = [];
  public tags: any = [];

  constructor(public contentful: CdaService) {}

  ngOnInit(): void {
    this.contentful.getProducts().then((products) => {
      this.blogs = products;
      this.getBlog();
      this.fetchBlog = this.featuredBlog[0];
      this.setData();
      this.contentful.getTags().subscribe((res) => {
        this.tags = res.items;
      });
      this.loaded = true;
    });
  }

  //seta data for posts................
  setData() {
    this.title = this.featuredBlog[this.id].fields.title;
    this.descriptions = this.featuredBlog[this.id].fields.description;
    this.featuredImage =
      this.featuredBlog[this.id].fields.featuredImage.fields.file.url;
  }

  //getting featured blog..........
  getBlog() {
    for (let i = this.blogs.length - 1; i > this.blogs.length - 5; i--) {
      this.featuredBlog.push(this.blogs[i]);
    }
  }

  //fetching the featured blog via click on button
  fetch(id: number) {
    this.fetchBlog = this.featuredBlog[id];
  }
}
