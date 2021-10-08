import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.scss'],
})
export class AnnotationComponent {
  @Input() annotation: FormGroup;

  constructor() {}
}