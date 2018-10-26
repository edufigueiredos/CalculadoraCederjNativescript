import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '~/componentes/calculadora.service';
import { Switch } from '../../../../node_modules/tns-core-modules/ui/switch/switch';

@Component({
  selector: 'app-nota-ap2',
  templateUrl: './nota-ap2.component.html',
  styleUrls: ['../../shared/notas.css'],
  moduleId: module.id,
})
export class NotaAP2Component {

  constructor(
    private calculadoraServico: CalculadoraService) { }
  
  public pesoAD: number = 0.2;

  mudaPesoAD(evento) {
    let pesoNotaAD = <Switch>evento.object
    if (pesoNotaAD.checked) {
      this.pesoAD = 0.3;
    } else {
      this.pesoAD = 0.2;
    }
  }

  validarNota() {
    if (
      (this.calculadoraServico.notaAD1 === undefined || this.calculadoraServico.notaAD1 === '') ||
      (this.calculadoraServico.notaAP1 === undefined || this.calculadoraServico.notaAP1 === '') ||
      (this.calculadoraServico.notaAD2 === undefined || this.calculadoraServico.notaAD2 === '')
    ) {
      alert({
        title: 'Campos vazios',
        message: 'Por favor, preencha todos os campos!',
        okButtonText: 'Fechar.'
      })
    } else if (
      (this.calculadoraServico.notaAD1 >= 0) &&
      (this.calculadoraServico.notaAP1 >= 0) &&
      (this.calculadoraServico.notaAD2 >= 0) &&
      (this.calculadoraServico.notaAD1 <= 10) &&
      (this.calculadoraServico.notaAP1 <= 10) &&
      (this.calculadoraServico.notaAD2 <= 10)
    ) {
      this.calculadoraServico.calculaNota(this.pesoAD, 'AP2');
    } else {
      alert({
        title: 'Valores incorretos.',
        message: 'Ops, alguns valores estão incorretos. Por favor, digite valores entre 0 a 10',
        okButtonText: 'Entendi!'
      })
    }
  }


}
