import { GeneratorService } from './generator';
import { InjectionToken } from '@angular/core';

export const generatedString = new InjectionToken<string>('GeneratorService');

export function GeneratorFactory(n: number): any {
  return (generator: GeneratorService): string => {
    return generator.generate(n);
  };
}
