import {EventEmitter, Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Injectable()
export class FormService {

  saveForm(data: FormGroup): void {
    const value = JSON.stringify(data.value);
    localStorage.setItem('formValues', value);
  }

  getFormValue() {
    return JSON.parse(localStorage.getItem('formValues'));
  }
}
