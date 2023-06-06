import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralize'
})
export class PluralizePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

  public singular: string = 'pain';
  public plural: string = 'pains';

  // Création du composant de transformation
  
  // Mis en commentaire pour le moment
  // transform(value: number, singular: string, plural: string): string {
  //  return this.pluralize.transform(value, singular, plural);
  // }

}
