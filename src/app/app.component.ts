import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private fb: FormBuilder) {}

  get userNameCtrl(){
    return this.regoForm.get('userName');
  }

  regoForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/dave/)]],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postCode: [''],
    })
  });

  // USING FormGroup
  // regoForm = new FormGroup({
  //   userName: new FormControl('Dave'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postCode: new FormControl(''),
  //   })
  // });

  public loadData(): void {
    // set value STRICT on maintaining structure of the FormGroup
    // use patchValue for updating selected values
    this.regoForm.setValue({
      userName: 'Bill',
      password: 'testing',
      confirmPassword: 'testing',
      address: {
        city: 'Gold Coast',
        state: 'Queensland',
        postCode: '4220',
      }
    })
  }

  public clear(): void {
    this.regoForm.reset();
  }
}
