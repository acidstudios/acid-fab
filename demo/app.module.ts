import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FabComponent } from './fab/fab.component';
import { AcidFabModule } from '../src/modules/acidfab.module';
import { routing } from './app.routing';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, FabComponent],
    imports: [
        FormsModule,
        BrowserModule,
        AcidFabModule,
        routing
    ]
})
export class AppModule { }