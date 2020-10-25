import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from '../models/header.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private data = new BehaviorSubject<HeaderData>({
    title: 'Ínicio',
    icon: 'home',
    routerUrl: ''
  });

  constructor() { }

  get headerData(): HeaderData {
    return this.data.value;
  }

  set headerData(headerData: HeaderData) {
    this.data.next(headerData);
  }
}
