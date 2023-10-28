import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs';
import { Route, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formReg: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private passPattern: any = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/;


  constructor(
    private userService:UserService,
    private router:Router
    ){
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
      //email:['' , [Validators.required, Validators.pattern(this.emailPattern)]],
      //password:['', [Validators.required, Validators.minLength(8), Validators.pattern(this.passPattern)]],
    })

  }
  ngOnInit(): void {

  }
  onSubmit(){
    //console.log(this.formReg.value);
    this.userService.register(this.formReg.value)
    .then(response =>{
      console.log(response);
    this.router.navigate(['/main'])
  })
    .catch(error=> console.log(error));
  }
}
