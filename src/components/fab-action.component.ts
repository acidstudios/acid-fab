import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'fab-action',
    templateUrl: './fab-action.component.html',
})
export class FabActionComponent {
    constructor() { }

    @Input()
    public Icon: string;

    @Output()
    public Click: EventEmitter<any> = new EventEmitter();

    @Input()
    public ColorBackground: string;

    @Input()
    public Title: string;

    @Input()
    public BackgroundColor: string = '#2ecc71';

    @Input()
    public IsDestructive: boolean = false;
}
