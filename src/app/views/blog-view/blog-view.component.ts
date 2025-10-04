import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentfulManagmentService } from 'src/app/services/contentful-managment.service';

@Component({
    selector: 'app-blog-view',
    templateUrl: './blog-view.component.html',
    styleUrls: ['./blog-view.component.css'],
    standalone: false
})
export class BlogViewComponent implements OnInit {
  //new implementation
  public blogid: string = '';
  public post: any = [];
  public body: any = [];
  public tags: any = [];
  public loaded: boolean = false;

  constructor(
    public contentful: ContentfulManagmentService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.blogid = params.get('id');
      this.contentful.getpost(this.blogid).subscribe((res) => {
        this.post = res;
        this.body = this.post.fields.body.content;
        this.loaded = true;
        this.contentful.getTags().subscribe((res) => {
          this.tags = res.items;
        });
      });
    });
  }
}
