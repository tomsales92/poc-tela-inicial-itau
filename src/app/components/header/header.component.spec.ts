import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { NgxMaskModule } from 'ngx-mask';

fdescribe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [NgxMaskModule.forRoot()]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve capturar o valor da agência e definir agenciaLiberada como false', () => {
    const eventMock = new Event('input');
    Object.defineProperty(eventMock, 'target', { writable: false, value: { value: '123' } });
    component.capturarValorAgencia(eventMock);
    expect(component.agenciaLiberada).toBe(false); 
  });

  it('deve capturar o valor da agência e definir agenciaLiberada como true', () => {
    const eventMock = new Event('input');
    Object.defineProperty(eventMock, 'target', { writable: false, value: { value: '1234' } });
    component.capturarValorAgencia(eventMock);
    expect(component.agenciaLiberada).toBe(true);
  });

  it('deve capturar o valor da conta e definir contaLiberada como false', () => {
    const eventMock = new Event('input');
    Object.defineProperty(eventMock, 'target', { writable: false, value: { value: '12345' } });
    component.capturarValorConta(eventMock);
    expect(component.contaLiberada).toBe(false); 
  });

  it('deve capturar o valor da conta e definir contaLiberada como true', () => {
    const eventMock = new Event('input');
    Object.defineProperty(eventMock, 'target', { writable: false, value: { value: '123456' } });
    component.capturarValorConta(eventMock);
    expect(component.contaLiberada).toBe(true); 
  });

  it('deve retornar verdadeiro se ambas agenciaLiberada e contaLiberada forem verdadeiras', () => {
    component.agenciaLiberada = true;
    component.contaLiberada = true;
    const resultado = component.gerenciaBotaoLogin();
    expect(resultado).toBe(true);
  });

  it('deve retornar falso se agenciaLiberada for falsa', () => {
    component.agenciaLiberada = false;
    component.contaLiberada = true;
    const resultado = component.gerenciaBotaoLogin();
    expect(resultado).toBe(false);
  });

  it('deve retornar falso se contaLiberada for falsa', () => {
    component.agenciaLiberada = true;
    component.contaLiberada = false;
    const resultado = component.gerenciaBotaoLogin();
    expect(resultado).toBe(false);
  });
});
