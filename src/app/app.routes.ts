import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { ResultsComponent } from './components/results/results.component';
// import { PageNotFoundComponent } from './';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    // la siguiente ruta carga usando un parametro que vamos allamar id
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'results/:termino', component: ResultsComponent },
    // { path: '**', component: PageNotFoundComponent },

    // { path: 'path/:routeParam', component: MyComponent },
    // { path: 'staticPath', component: ... },
    // { path: '**', component: ... },
    // { path: 'oldPath', redirectTo: '/staticPath' },
    // { path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(APP_ROUTES)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}

// se va a dejar sinel hsh para entnder en que partes es que falla por no tenerlo.
// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true});
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

