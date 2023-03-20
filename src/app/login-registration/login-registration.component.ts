import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login-registration',
	templateUrl: './login-registration.component.html',
	styleUrls: ['./login-registration.component.css']
})
export class LoginRegistrationComponent implements OnInit{

	registeredUsers : any[] = [];
	registerObj : any = {
		username : '',
		email : '',
		password : ''
	};
	loginObj : any = {
		username : '',
		password : ''
	};
	
	constructor(private router : Router){}
	ngOnInit(): void {
	    const localData = localStorage.getItem('registeredUsers');
	    if(localData != null){
		this.registeredUsers = JSON.parse(localData);
	    }
	}

	onRegister(){
		this.registeredUsers.push(this.registerObj);
		localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers));
		this.registerObj = {
			username : '',
			email : '',
			password : ''
		};
		alert("Registered Successfully")
	}
	onLogin(){
		const isUserExist = this.registeredUsers.find(user => user.username == this.loginObj.username && user.password == this.loginObj.password)
		if(isUserExist != undefined){
			this.router.navigate(['/Home']);
		}else{
			alert('Wrong Credentials');
		}
	}

}
