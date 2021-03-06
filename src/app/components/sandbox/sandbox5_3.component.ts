import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    template:`
	 	<h1>Hello World</h1>
		<button (click)="changeValue()">Change Value</button>
		<div *ngIf="value">
			<h1>{{text}}</h1>
		</div>
	`
})

export class SandboxComponent{
	text:string = 'Hello World';
	value:boolean = true;

	changeValue(){
		// this.text = 'Goodbye World';
		// this.value = false;
		this.value = !this.value;
	}
}
