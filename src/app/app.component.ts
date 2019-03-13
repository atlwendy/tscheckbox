import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  myChecked = true;
  checked = true;
  disabled = false;
  required = true;
  indeterminate = false;
  myTheme = 'accent';
  myForm = this.formBuilder.group({
    myCheck: [
      false,
    ],
  });


  constructor(
    private formBuilder: FormBuilder,
  ) { }


  changed(e: boolean) {
    console.log('Input changed: ', e);
  }

  interChanged(e: boolean) {
    console.log('Indeterminate input changed: ', e);
  }

  submit(v: any) {
    console.log('DEMO: form submit: ', v);
  }

}
