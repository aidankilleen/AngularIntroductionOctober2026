import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  transform(text:string, length:number = 25, ...args: unknown[]): unknown {
    return text.substring(0, length) + (length < text.length ? "..." : "");
  }
}
