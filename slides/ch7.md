# login page


```typescript
LoginForm: FormGroup;
constructor(public formbuilder: FormBuilder) {

this.LoginForm = formbuilder.group({
username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(8), Validators.maxLength(30)])],

password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
});
}
Login(val){
   if ( this.LoginForm.valid )
	alert('Login Successful ' + val.username);
 }

```

```html
<form [formGroup]="LoginForm" (ngSubmit)="Login(LoginForm.value)">
<ion-item>
<ion-label floating>Username</ion-label>
<ion-input type="text" formControlName="username"></ion-input>
</ion-item>
<ion-item *ngIf="LoginForm.controls['username'].hasError('required') && LoginForm.controls['username'].touched">
<p>Sorry, field username is required!</p></ion-item>
<ion-item *ngIf="LoginForm.controls['username'].hasError('pattern') && LoginForm.controls['username'].touched">
<p>Sorry, only small and capital letters are allowed!</p></ion-item> 
<ion-item *ngIf="LoginForm.controls['username'].hasError('minlength') && LoginForm.controls['username'].touched">
<p>Sorry, minimum username length is 8!</p></ion-item>

<ion-item *ngIf="LoginForm.controls['username'].hasError('maxlength') && LoginForm.controls['username'].touched">
<p>Sorry, maximum username length is 30!</p></ion-item>
<ion-item>
<ion-label floating>Password</ion-label>
<ion-input type="password" formControlName="password"></ion-input>
</ion-item>
<ion-button [disabled]="!LoginForm.valid"
 full color="primary" style="margin-top: 20px;" type="submit"> Login </ion-button> 

</form>

```

