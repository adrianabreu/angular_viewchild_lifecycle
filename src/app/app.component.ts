import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  @ViewChild(ChildComponent)
  private childComponent: ChildComponent;

  private timeToRenderChild: boolean;

  constructor() {
    this.timeToRenderChild = false;
  }

  renderChildAndDoChildStuff() {
    this.timeToRenderChild = true;
    setTimeout(() => this.childComponent.doStuff(), 0);
  }
}
