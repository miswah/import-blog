import { Component, OnInit } from '@angular/core';

import { CdaService } from '../cda.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
})
export class BlogViewComponent implements OnInit {
  public blogs: any = [];
  public id: number = 0;
  public current: any = [];
  public contentBody: any = [];
  public paragraphs: any = [];
  public heading: any = [];
  public loaded: boolean = false;
  public stringy: string = '';

  constructor(private contentful: CdaService) {}

  ngOnInit(): void {
    this.contentful.getProducts().then((products) => {
      this.blogs = products;
      this.current = this.blogs[this.id];
      this.current.fields.body.content.forEach((element: any) => {
        this.contentBody.push(element);
        this.stringy =
          'safffffffffffffffffffffffffoooooooooooooommmmmmmmmmmmmmmmmnnnnnnnnnnissssssssssssssss';
      });
      //break.................................................................
      this.contentBody.forEach((element: any) => {
        if (element.nodeType == 'heading-1') {
          this.heading.push(element.content[0].value);
        } else if (element.nodeType == 'paragraph') {
          this.paragraphs.push(element.content[0].value);
        }
      });
      console.log(this.heading);
      console.log(this.paragraphs);
    });
  }

  ngAfterViewChecked() {
    this.loaded = true;
  }

  onClick() {
    // console.log(this.heading);
    // console.log(this.paragraphs);
  }
}
