import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logging-page',
  templateUrl: './logging-page.component.html',
  styleUrls: ['./logging-page.component.css']
})

export class LoggingPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loggingForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit()
  {
    this.router.navigate(['/group-select']);
    console.log(this.loggingForm.value);
  }
}
