import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class ShareService {
  public snack_subject = new Subject<any>();
  public loader_subject = new Subject<any>();
  loaderState = this.loader_subject.asObservable();
  constructor() { }
  showLoader() {
    this.loader_subject.next(true);
  }
  hideLoader() {
    this.loader_subject.next(false);
  }
}
