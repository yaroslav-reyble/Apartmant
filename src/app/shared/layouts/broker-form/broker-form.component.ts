import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-broker-form',
  templateUrl: './broker-form.component.html',
  styleUrls: ['./broker-form.component.scss']
})
export class BrokerFormComponent implements OnInit {
  @Output() nextStep = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
