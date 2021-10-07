import { Component, SimpleChanges } from '@angular/core';
import { LoadingService } from './loading/loading.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Import-Blog';
  public loaded: boolean = true;

  constructor(
    public loader: LoadingService,
    private spinner: NgxSpinnerService
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    /** spinner starts on init */
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after .5 seconds */
      this.spinner.hide();
    }, 500);
  }
}
