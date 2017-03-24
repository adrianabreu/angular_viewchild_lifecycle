import { Component, AfterViewChecked } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'child',
    templateUrl: 'child.component.html'
})
export class ChildComponent {

    private text: string;

    constructor()
    { }

    public doStuff() {
        this.text = "Father told me to do stuff";
    }
}