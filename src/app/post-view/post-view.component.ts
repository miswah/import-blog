import { Component, OnInit } from '@angular/core';
import { CdaService } from '../cda.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css'],
})
export class PostViewComponent implements OnInit {
  public blogs: any = [];
  public id: number = 0;
  public loaded: boolean = false;
  public content: any = [];
  public title: string = '';
  public descriptions: string = '';
  public summary: string = '';
  public body: any = [];
  public featuredImage: any = [];
  public media: any = [];

  constructor(public contentful: CdaService) {}

  ngOnInit(): void {
    this.contentful.getProducts().then((products) => {
      this.blogs = products;
      this.setProperties();
      this.loaded = true;
    });
  }

  setProperties() {
    this.content = this.getPost(this.id).fields;
    this.title = this.content.title;
    this.descriptions = this.content.description;
    this.summary = this.content.summary;
    this.body = this.content.body.content;
    this.media = this.content.postMedia;
    this.featuredImage = this.content.featuredImage.fields.file.url;
  }

  //get one post
  getPost(id: number) {
    return this.blogs[id];
  }
}
