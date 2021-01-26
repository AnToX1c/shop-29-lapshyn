import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

const title = 'Shop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') appTitle: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    this.appTitle.nativeElement.innerText = title;
  }
}
