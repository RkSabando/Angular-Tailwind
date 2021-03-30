import { Component, ViewChild } from '@angular/core';
import { TailwindService } from './services/tailwind/tailwind.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Angular-Tailwind';

  constructor(
    private tailwind: TailwindService
  ){

  }


 darkMode: any = false; 
  toggleChanged(){
    this.tailwind.toggleDarkMode();
    this.darkMode = this.tailwind.darkMode;
  }


}
