import { Component } from '@angular/core';

@Component({
    selector: 'fab-comp',
    templateUrl: './fab.component.html',
    styles: [require('./fab.component.scss').toString()]
})
export class FabComponent {

    public CloseOnClickOutside: boolean = false;
    public CloseOnActionSelected: boolean = false;

    public OnActionButtonClicked(event: any) {
        alert(`Hello from ${event['Title']}`);
    }

 }