import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CdaService } from '../cda.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css'],
})
export class PostViewComponent implements OnInit {
  //new implementation
  public blogid: string = '';
  public post: any = [];
  public body: any = [];
  public loaded: boolean = false;

  constructor(public contentful: CdaService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.blogid = params.get('id');
      this.contentful.getpost(this.blogid);
      this.post = this.contentful.post;
      console.log(this.post);
      this.body = this.post.fields.body.content;
      this.loaded = true;
    });
  }
}
