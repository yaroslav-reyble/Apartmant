import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatStepper} from '@angular/material/stepper';

@Component({
  selector: 'app-progress-status',
  templateUrl: './progress-status.component.html',
  styleUrls: ['./progress-status.component.scss']
})
export class ProgressStatusComponent implements OnInit, AfterViewInit {
  @ViewChild('stepper') private myStepper: MatStepper;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.myStepper.next();

  }
}
