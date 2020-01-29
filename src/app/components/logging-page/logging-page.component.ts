import { LoggingService } from './../../services/logging/logging.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logging-page',
  templateUrl: './logging-page.component.html',
  styleUrls: ['./logging-page.component.css']
})

export class LoggingPageComponent implements OnInit {

  errorMessage = '';

  constructor(private router: Router, private loggingService: LoggingService) { }

  loggingForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() {
  }

  async onSubmit() {

    const result = await this.loggingService.sendLoginRequest(this.loggingForm.value.login, this.loggingForm.value.password);

    if (result) {
      this.router.navigate(['/group']);
    } else {
      this.errorMessage = this.loggingService.errorMessage;
    }
  }
}
