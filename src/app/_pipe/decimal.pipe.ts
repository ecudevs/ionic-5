import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "decimal"
})
export class DecimalPipe implements PipeTransform {
  transform(value: Number, decimales?: any): any {
    return value.toFixed(decimales);
  }
}
