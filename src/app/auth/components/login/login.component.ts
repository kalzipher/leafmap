import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '@services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin!: FormGroup;
  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public onSubmit(form: FormGroup) {
    if (form.valid) {
      this.storageService.setSession(form.value);
      this.router.navigateByUrl("/home");
    }
  }

  private buildForm(): void {
    this.formLogin = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required])
    });
  }
}
