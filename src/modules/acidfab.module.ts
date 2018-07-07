import { NgModule, ModuleWithProviders } from '@angular/core';

import { AcidFabComponent } from '../components/acid-fab.component';
import { FabActionComponent } from '../components/fab-action.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        AcidFabComponent,
        FabActionComponent
    ],
    exports: [
        AcidFabComponent,
        FabActionComponent
    ],
    imports: [
        BrowserModule,
        CommonModule
    ]
})
// Consider registering providers using a forRoot() method
// when the module exports components, directives or pipes that require sharing the same providers instances.
// Consider registering providers also using a forChild() method
// when they requires new providers instances or different providers in child modules.
export class AcidFabModule {

    /**
     * Use in AppModule: new instance of SumService.
     */
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: AcidFabModule
        };
    }

    /**
     * Use in features modules with lazy loading: new instance of SumService.
     */
    public static forChild(): ModuleWithProviders {
        return {
            ngModule: AcidFabModule
        };
    }

}
