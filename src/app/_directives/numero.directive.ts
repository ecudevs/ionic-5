import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appNumero]"
})
export class NumeroDirective {
  // ESTA DIRECTIVA VA A CONTROLAR QUE UN INPUT SOLO ACEPTE NUMEROS

  // CONFIGURAMOS NUESTRA EXPRESION REGULAR
  // EN ESTE CASO VAMOS A ACEPTAR CUALQUIER NUMERO
  // INCLUIDO NEGATIVOS Y DECIMALES
  private regex: RegExp = new RegExp(/^-?[0-9]+(\.[0-9]*){0,1}$/g);

  // DECLARAMOS UN ARRAY DONDE VAN A ESTAR LAS TECLAS QUE REALIZAN TAREAS ESPECIALES
  // PARA CONTROLAR QUE REALICEN SUS FUNCIONES NORMALMENTE
  // POR EJEMPLO SI NO PONEMOS 'Backspace' NO NOS DEJARIA BORRAR EL CONTENIDO DEL TEXTBOX
  private teclasEspeciales: Array<string> = [
    "Backspace",
    "Tab",
    "End",
    "Home",
    "-"
  ];

  // INYECTAMOS LA CLASE ELEMREF PARA TOMAR CONTROL DEL COMPONENTE EN EL DOM
  constructor(private el: ElementRef) {}

  // HOST LISTENER VA A ESCUCHAR A NUESTRO EVENTO
  // EN ESTE CASO EL EVENTO 'keydown'
  @HostListener("keydown", ["$event"])
  keydown(event: KeyboardEvent) {
    debugger;
    // SI ENCOTRAMOS QUE LA TECLA QUE ESTAMOS PRESIONANDO ESTA DEFINIDAD DENTRO DE NUESTRO ARREGLO
    // teclasEspeciales DEJAMOS QUE REALICE SU FUNCION DE TECLA NORMALMENTE
    if (this.teclasEspeciales.indexOf(event.key) !== -1) {
      return;
    }

    this.el.nativeElement.style.color = "black";

    // CURRENTE VA A TENER EL VALOR DE NUESTRO ELEMENTO INPUT
    const current: string = this.el.nativeElement.value;

    // CONCATENAMOS EL VALOR ACTUAL CON EL NUEVO VALOR
    // EJ-> SI YA TENEMOS UN VALUE DE '1' Y ESTAMOS PRESIONANDO LA TECLA '2'
    // DEBEMOS CONCATENAR CON EL FIN DE TENER '12' PARA QUE REALICE LA VALIDACION
    // CON LA EXPRESION REGULAR
    const next: string = current.concat(event.key);

    // SI NO HACE MATCH CON NUESTRA EXPRESION REGULAR
    // EVITAMOS QUE SE REALICE LA ESCRITURA CON
    // event.preventDefault();
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
      return;
    }

    if (Number(next) < 0) {
      this.el.nativeElement.style.color = "red";
    }
  }
}
