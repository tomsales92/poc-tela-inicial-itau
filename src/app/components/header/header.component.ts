import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public agenciaLiberada: boolean = false;
  public contaLiberada: boolean = false;
  public valorAgenciaDigitado: string = '';
  public valorContaDigitado: string = '';
  public quantidadeMaximaNumeroAgencia = 4;
  public quantidadeMaximaNumeroConta = 6;

  public capturarValorAgencia(value: Event) : void {
    const valor = (value.target as HTMLInputElement).value;
    this.valorAgenciaDigitado = valor;
    this.valorAgenciaDigitado.length < this.quantidadeMaximaNumeroAgencia ? this.agenciaLiberada = false : this.agenciaLiberada = true;
  }

  public capturarValorConta(value: Event) : void {
    const valor = (value.target as HTMLInputElement).value;
    this.valorContaDigitado = valor;
    this.valorContaDigitado.length < this.quantidadeMaximaNumeroConta ? this.contaLiberada = false : this.contaLiberada = true;
  }

  public gerenciaBotaoLogin(): boolean {
    return this.agenciaLiberada && this.contaLiberada;
  }

}
