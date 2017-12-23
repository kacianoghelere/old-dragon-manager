import { Component, OnInit, Input } from '@angular/core';

import { Message } from '../../shared/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message: Message;

  constructor() { }

  ngOnInit() {
  }

  clear() {
    this.message.error = false;
    this.message.text = '';
  }
}
