import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  public notaAD1: any;
  public notaAD2: any;
  public notaAP1: any;
  public notaAP2: any;

  constructor() { }

  limparCampos() {
    this.notaAD1 = '';
    this.notaAP1 = '';
    this.notaAD2 = '';
    this.notaAP2 = '';
  }

  calculaNota(pesoAD, prova) {
    let N1: number;
    let N2: number;
    let NF: number;
    let notaFaltante: number;

    N1 = (parseFloat(this.notaAD1) * pesoAD) + (parseFloat(this.notaAP1) * (1 - pesoAD));
    if (prova === 'AP3') {
      N2 = (parseFloat(this.notaAD2) * pesoAD) + (parseFloat(this.notaAP2) * (1 - pesoAD)) ;
    } else {
      N2 = (parseFloat(this.notaAD2) * pesoAD);
    }
    NF = (N1 + N2) / 2;
    notaFaltante = (12 - (N1 + N2)) / 0.8;

    if (prova === 'AP2') {
      if (NF >= 6) {
        alert({
          title: 'Aprovado',
          message: `Parabéns! Você foi aprovado nessa matéria com ${NF.toFixed(1)} pontos.`,
          okButtonText: 'Uhuu!'
        })
      } else if (notaFaltante > 10) {
        alert({
          title: 'Reprovado',
          message: `Você já está na AP3, pois precisaria tirar ${notaFaltante.toFixed(1)} pontos nessa matéria.`,
          okButtonText: 'Fechar'
        })
      } else {
        alert({
          title: 'Nota necessária',
          message: `Você precisa de ${notaFaltante.toFixed(1)} pontos na AP2 para passar nessa matéria.`,
          okButtonText: 'Ok'
        });
      }
    } else {
      if (NF >= 5) {
        alert({
          title: 'Aprovado',
          message: `Parabéns! Você foi aprovado nessa matéria com ${NF.toFixed(1)} pontos`,
          okButtonText: 'Uhuu!'
        })
      } else {
        const maiorNota = Math.max(N1, N2);
        notaFaltante = Math.round(10 - maiorNota);
        alert({
          title: 'Nota necessária',
          message: `Você precisa de ${notaFaltante.toFixed(1)} para passar nessa matéria`,
          okButtonText: 'Ok'
        });
      };
    };
  }

}
