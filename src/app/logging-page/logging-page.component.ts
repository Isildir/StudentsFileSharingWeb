import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-logging-page',
  templateUrl: './logging-page.component.html',
  styleUrls: ['./logging-page.component.css']
})

export class LoggingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loggingForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit()
  {
    console.log(this.loggingForm.value);
  }
}
