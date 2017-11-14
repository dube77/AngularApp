import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    template:`
	 	<h1>Hello World</h1>
		<div>
			<input type="text" (keyup)="fireEvent($event)" placeholder="Key Up">
		</div>
		<div>
			<input type="text" (keydown)="fireEvent($event)" placeholder="Key Down">
		</div>
		<div>
			<input type="text" (focus)="fireEvent($event)" placeholder="Focus">
		</div>
		<div>
			<input type="text" (blur)="fireEvent($event)" placeholder="Blur">
		</div>
		<div>
			<input type="text" (cut)="fireEvent($event)" placeholder="Cut">
		</div>

		<div>
			<input type="text" (keyup)="changeText($event)" placeholder="Change Text">
		</div>
		<h2>{{text}}</h2>
	`
})

export class SandboxComponent{
	text:string = 'Hello';
	fireEvent(e){
		console.log(e.type)
	}
	changeText(e){
		this.text = e.target.value;
	}
}
