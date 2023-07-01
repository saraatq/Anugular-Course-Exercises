import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase',
})
export class TitlecasePipe implements PipeTransform {
  transform(value: string): unknown {
    if (!value) return null;

    var words = value.split(' ');

    for (var i = 0; i < words.length; i++) {
      let word = words[i];

      if (i != 0 && this.isProposition(word)) {
        words[i] = word.toLowerCase();
        continue;
      }

      words[i] = this.toTitleCase(word);
    }

    return words.join(' ');
  }

  private isProposition(word: string): boolean {
    let prepositions = [
      'about',
      'above',
      'across',
      'after',
      'against',
      'along',
      'among',
      'around',
      'at',
      'before',
      'behind',
      'below',
      'beneath',
      'beside',
      'between',
      'beyond',
      'but',
      'by',
      'concerning',
      'considering',
      'despite',
      'down',
      'during',
      'except',
      'for',
      'from',
      'in',
      'inside',
      'into',
      'like',
      'near',
      'of',
      'off',
      'on',
      'onto',
      'out',
      'outside',
      'over',
      'past',
      'regarding',
      'round',
      'since',
      'through',
      'throughout',
      'to',
      'toward',
      'under',
      'underneath',
      'until',
      'unto',
      'up',
      'upon',
      'with',
      'within',
      'without',
    ];
    return prepositions.includes(word.toLowerCase());
  }

  private toTitleCase(word: string): string {
    return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
  }
}
