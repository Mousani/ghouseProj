import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  errormessage:string = "";

  constructor(fb:FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  ngAfterViewInit() {
    if(this.activatedRoute.snapshot.queryParams['returnUrl']) {
      this.errormessage = "\"Access Denied\" Please Login";
    }
  }
  

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      if(this.email.value == "testing" && this.password.value == "testing") {
        localStorage.setItem('currentUser', this.email.value);
        this.router.navigate([ this.activatedRoute.snapshot.queryParams['returnUrl'] || '/pages/dashboard']);
      }else {
        this.errormessage = "Username or Password incorrect";
      }
    }
  }
}
