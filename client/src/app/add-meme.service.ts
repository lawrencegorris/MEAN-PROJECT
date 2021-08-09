import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friend } from './friend';

@Injectable({
  providedIn: 'root'
})
export class AddMemeService {
  
  url = 'http://localhost:9001/add-friends'

  constructor() { }
}