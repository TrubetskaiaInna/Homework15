import {Directive, Input, OnChanges, TemplateRef, ViewContainerRef} from '@angular/core';
import {FilmService} from '../../service/films.service';

@Directive({selector: '[appSearch]'})
export class SearchDirective implements OnChanges {
  constructor(private template: TemplateRef<any>,
              private view: ViewContainerRef,
              private filmService: FilmService) {
  }

  public context;
  public films;
  public description = null;
  public result;

  @Input() set appSearch(title) {
    this.films = this.filmService.get();
    this.result = this.films.filter((element) => {
      return element.name === title;
    });
    if (this.result.length > 0) {
      this.description = this.result[0].description;
      this.view.clear();
      this.context = {
        $implicit: this.description
      };
    } else {
      this.view.clear();
      this.context = {
        $implicit: 'Film not found'
      };
    }
  }

  ngOnChanges(): void {
    this.view.createEmbeddedView(this.template, this.context);
  }
}
