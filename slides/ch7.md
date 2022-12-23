# login page


```typescript
this.myForm = formBuilder.group({
    firstName: ['value'],
    lastName: ['value', *validation function goes here*],
    age: ['value', *validation function goes here*, *asynchronous validation function goes here*]
});
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

```