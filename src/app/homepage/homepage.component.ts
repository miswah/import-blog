import { Component, OnInit } from '@angular/core';
import { CdaService } from '../cda.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  public blogs: any = [];

  constructor(private contentful: CdaService) {}

  ngOnInit(): void {
    this.contentful.getProducts().then((products) => (this.blogs = products));
  }

  onClick() {
    console.log(this.blogs);
  }
}
