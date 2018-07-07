import { AcidFabComponent } from '../../src';

import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import {  } from 'jasmine';

describe('Component: AcidFabComponent', () => {

    let fixture: ComponentFixture<AcidFabComponent>;
    let comp: AcidFabComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [AcidFabComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(AcidFabComponent);
        comp = fixture.componentInstance;
    });

    it('should pass test', (() => {
        fixture.detectChanges();

        expect(1).toBe(1);
    }));

});
