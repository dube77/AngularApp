import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    template:`
	 	<h1>Hello World</h1>
		<form (submit)="onSubmit()">
			<div class="form-group">
				<label>Name</label>
				<input type="text" class="form-control" [(ngModel)]="name" name="name">
			</div>
			<input type="submit" class="btn btn-success" value="Submit">
		</form>
		<hr>
		<ul class="list-group">
			<li class="list-group-item" *ngFor="let user of users">{{user}}</li>
		</ul>
	`
})

export class SandboxComponent{
	name:string = '';
	users:string[] = ['John Doe', 'Jane Doe', 'Michael Scott'];

	onSubmit(){
		this.users.push(this.name);
		this.name = '';
	}
}
