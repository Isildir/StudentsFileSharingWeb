import { RegisteringService } from './../../services/registering/registering.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registering-page',
  templateUrl: './registering-page.component.html',
  styleUrls: ['./registering-page.component.css']
})
export class RegisteringPageComponent implements OnInit {

  errorMessage = '';

  constructor(private router: Router, private registeringService: RegisteringService) { }

  registeringForm = new FormGroup({
    login: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl('')
  });

  ngOnInit() {
  }

  async onSubmit() {

    const result = await this.registeringService
      .sendLoginRequest(this.registeringForm.value.login, this.registeringForm.value.name, this.registeringForm.value.password);

    if (result) {
      this.router.navigate(['/logging']);
    } else {
      this.errorMessage = this.registeringService.errorMessage;
    }
  }
}
