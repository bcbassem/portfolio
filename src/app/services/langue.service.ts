import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangueService {

  updateSubject = new Subject()
  update$ = this.updateSubject.asObservable()
  update() {
    this.updateSubject.next('update')
  }
}
