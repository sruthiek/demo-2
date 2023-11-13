import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
   this.example();
  }
  title = 'demo-2';

  example() {
    var variable1 = 'hello';
    let variable2 = 'hello user';
    const variable3 = 'welcome';

    if (2 > 1) {
      var variable1 = 'good catch';
      let variable2 = ' hello bye';
      console.log('first', variable1);
      console.log('second', variable2);
      console.log('third', variable3);
    }
    console.log('forth', variable1);
    console.log('fifth', variable2);
    console.log('sixth', variable3);
  }


}

