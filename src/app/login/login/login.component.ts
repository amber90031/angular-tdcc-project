import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from '@angular/forms';
import { Router } from '@angular/router';

export function IdValidator(control: AbstractControl) {
  const reg = /^[A-Z]{1}[0-9]{9}$/;
  return reg.test(control.value) ? null : { IdValidator: true };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new FormGroup({
    unitId: new FormControl(null, Validators.required),
    proofParaId: new FormControl('', Validators.required),
    userId: new FormControl(null, [Validators.required, IdValidator]),
    userPassword: new FormControl(null, Validators.required)
  });

  proofParaList = [
    { val: '', str: '----請選擇----' },
    { val: '1', str: '證期共用憑證' },
    { val: '2', str: '工商憑證' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  doLogin() {
    sessionStorage.setItem('userid', this.userId.value);
    alert('登入成功');
    this.router.navigate(['/login/terms']);
  }

  get unitId(): AbstractControl {
    return this.login.get('unitId');
  }

  get proofParaId(): AbstractControl {
    return this.login.get('proofParaId');
  }

  get userId(): AbstractControl {
    return this.login.get('userId');
  }

  get userPassword(): AbstractControl {
    return this.login.get('userPassword');
  }
}
