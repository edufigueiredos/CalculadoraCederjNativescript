import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TelaInicialComponent } from './componentes/tela-inicial/tela-inicial.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { CalculadoraService } from '~/componentes/calculadora.service';
import { NotaAP2Component } from './componentes/calculadora/nota-ap2/nota-ap2.component';
import { NotaAP3Component } from './componentes/calculadora/nota-ap3/nota-ap3.component';

@NgModule({
    declarations: [
        AppComponent,
        TelaInicialComponent,
        CalculadoraComponent,
        NotaAP2Component,
        NotaAP3Component,
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule
    ],
    providers: [
        CalculadoraService
    ],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }

