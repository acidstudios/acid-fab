import { Component, OnInit, QueryList, ContentChildren, Input, HostListener } from '@angular/core';
import { FabActionComponent } from './fab-action.component';

@Component({
    selector: 'acid-fab',
    templateUrl: './acid-fab.component.html',
    styles: [require('./acid-fab.component.scss').toString()]
})
export class AcidFabComponent implements OnInit {
    /**
     * Get all Action Buttons
     */
    @ContentChildren(FabActionComponent) fabActionButtons: QueryList<FabActionComponent>;
    
    @Input()
    public Icon: string;

    @Input()
    public CloseOnActionSelected: boolean = false;

    @Input()
    public ClickOutsideCloseMenu: boolean = false;

    @Input()
    public BackgroundColor: string = '#1abc9c';
    

    public isMenuDisplayed: boolean = false;
    constructor() { }

    ngOnInit(): void {
    }

    public OnFloaterClicked(): void {
        this.isMenuDisplayed = !this.isMenuDisplayed;
    }

    public OnFloaterActionButtonClicked(event: FabActionComponent) {
        if(event.Click !== undefined) {
            event.Click.emit(event);
        }

        if(this.CloseOnActionSelected) {
            this.isMenuDisplayed = false;
        }
    }

    @HostListener('document:click', ['$event', '$event.target'])
    private OnClickOutsiteClosesMenu(event: MouseEvent, targetElement: HTMLElement) {
        if(targetElement.id === 'fab_icon' || targetElement.id === 'fab_item_icon' || targetElement.className === 'fab' || targetElement.className === 'fab_junior') {
            return;
        }

        if(this.ClickOutsideCloseMenu) {
            this.isMenuDisplayed = false;
        }
    }

}
