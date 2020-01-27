import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registering-page',
  templateUrl: './registering-page.component.html',
  styleUrls: ['./registering-page.component.css']
})
export class RegisteringPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  registeringForm = new FormGroup({
    login: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit()
  {
    this.router.navigate(['/logging']);
    console.log(this.registeringForm.value);
  }
}
