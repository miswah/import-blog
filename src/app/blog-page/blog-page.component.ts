import { Component, OnInit } from '@angular/core';
import { CdaService } from '../cda.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css'],
})
export class BlogPageComponent implements OnInit {
  public loaded: boolean = false;
  public blogs: any[] = [];
  public id: number = 0;
  public post: any = [];
  public body: any = [];
  public content: any = [];

  constructor(private contentful: CdaService) {}

  ngOnInit(): void {
    this.contentful.getProducts().then((products) => {
      this.blogs = products;
      this.set();

      this.loaded = true;
    });
  }

  //set properties
  set() {
    this.post = this.getPost(this.id);
    this.body = this.post.body.content;
    this.body.forEach((element) => {
      console.log(element);
      console.log(element.content[0].value);
    });
  }

  //to get one post from blogs................................
  getPost(id: number) {
    return this.blogs[id].fields;
  }
}
