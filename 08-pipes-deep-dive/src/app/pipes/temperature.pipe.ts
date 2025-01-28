import { Pipe, PipeTransform } from '@angular/core';

type Temp = 'cel' | 'fah';

@Pipe({
  name: 'temp',
  standalone: true,
  pure: false,
})
export class TemperaturePipe implements PipeTransform {
  transform(value: string | number | null, inputType: Temp, outputType?: Temp) {
    if (!value) return;

    let val: number;

    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }

    let outputTemp: number;

    if (inputType === 'cel' && outputType === 'fah') {
      outputTemp = val * (9 / 5) + 32;
    } else if (inputType === 'fah' && outputType === 'cel') {
      outputTemp = (val - 32) * (5 / 9);
    } else {
      outputTemp = val;
    }

    let symbol: '°C' | '°F';

    if (!outputTemp) {
      symbol = inputType === 'cel' ? '°C' : '°F';
    } else {
      symbol = outputType === 'cel' ? '°C' : '°F';
    }

    return `${outputTemp.toFixed(2)} ${symbol}`;
  }
}
