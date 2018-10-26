import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { alert } from 'tns-core-modules/ui/dialogs'
import { CalculadoraService } from '~/componentes/calculadora.service';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css'],
  moduleId: module.id,
})
export class TelaInicialComponent {

  constructor(
    private route: Router,
    private calculadoraService: CalculadoraService
  ) { }

  abrirCalculadora() {    
    this.route.navigate(['calculadora'])
  }

  abrirCreditos() {
    alert({
      title: 'Créditos',
      message: `
      Muito obrigado por utilizar esta ferramenta!\n
      Esperamos muito que goste e que seja útil ao longo do curso.\n
      Desenvolvido por: Eduardo Figueiredo dos Santos, ex aluno de Tecnologia em Sistemas de Computação da UFF / CEDERJ e atual aluno de Análise de Sistemas da UNOPAR.\n
      Ideia de: Paula dos Santos Dias Moreira, aluna de Ciências Biológicas da UFRJ / CEDERJ.\n
      Agradecimento especial: Nicolas Correia, aluno de Tecnologia em Sistemas de Computação da UFF / CEDERJ , por ajudar no desenvolvimento do layout deste aplicativo.`,
      okButtonText: 'Fechar.'
    })
  }

}
