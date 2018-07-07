import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { FabComponent } from "./fab/fab.component";

const appRoutes: Routes = [
    {
        path: "",
        pathMatch: "full",
        component: FabComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
