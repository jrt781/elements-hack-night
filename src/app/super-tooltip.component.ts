import {HttpClient} from '@angular/common/http';
import {Component, Input} from '@angular/core';

@Component({
  selector : 'super-tooltip',
  templateUrl : './super-tooltip.component.html',
  styleUrls : [ './super-tooltip.component.scss' ]
})
export class SuperTooltipComponent {
  @Input() term: string;
  public newValue: string;

  constructor(
      private http: HttpClient,
  ) {
    const random_boolean = Math.random() >= 0.5;
    // const random_boolean = this.term.length < 6;
    this.newValue = random_boolean ? "Sparks joy" : "Does not spark joy";
    // this.http.get("https://www.google.com/search?q=" + this.term)
    //     .subscribe(value => { this.newValue = value.toString(); });
  }
}
