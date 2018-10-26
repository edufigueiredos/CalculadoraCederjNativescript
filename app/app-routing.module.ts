import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { TelaInicialComponent } from './componentes/tela-inicial/tela-inicial.component'
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';

const routes: Routes = [
    { path: '', redirectTo: '/tela-inicial', pathMatch: 'full' },
    { path: 'tela-inicial', component: TelaInicialComponent },
    { path: 'calculadora', component: CalculadoraComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
