import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  // Color of the button
  @Input() color: 'red' | 'blue' | 'green' = 'blue';

  // Click event
  @Output() clickEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Emit an event when button is clicked
   */
  clickHandler(): void {
    this.clickEvent.emit();
  }

}
