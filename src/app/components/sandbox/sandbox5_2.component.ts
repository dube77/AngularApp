import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    template:`
	 	<h1>Hello World</h1>
		<button id="btn" (click)="fireEvent($event)">Click Event</button>
		<button id="btn" (mouseover)="fireEvent($event)">Click Event</button>
		<button id="btn" (mousedown)="fireEvent($event)">Click Event</button>
		<button id="btn" (mouseup)="fireEvent($event)">Click Event</button>
		<button id="btn" (dblclick)="fireEvent($event)">Click Event</button>
		<button id="btn" (drag)="fireEvent($event)">Click Event</button>
		<button id="btn" (dragover)="fireEvent($event)">Click Event</button>
	`
})

export class SandboxComponent{
	fireEvent(e){
		// console.log(greeting);
		// console.log("Button Clicked");
		console.log(e.type);

	}
}
