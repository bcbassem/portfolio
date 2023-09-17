import { Component, Input } from '@angular/core';
import { Iresume } from './resume.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  showTimeline: boolean=true;
  @Input() resume!:Iresume
  @Input() set isLast(value: boolean) {
    this.showTimeline = !value;
  }

}
