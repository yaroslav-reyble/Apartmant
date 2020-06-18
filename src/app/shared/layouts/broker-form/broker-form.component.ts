import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService} from '@shared/services/form.service';
import {AuthService} from '@shared/services/auth.service';

@Component({
  selector: 'app-broker-form',
  templateUrl: './broker-form.component.html',
  styleUrls: ['./broker-form.component.scss']
})
export class BrokerFormComponent implements OnInit {
  @Output() nextStep = new EventEmitter();
  regGroup: FormGroup;
  cities = ['New York', 'London', 'Kiev'];
  private location: any;

  constructor(private formService: FormService,
              private fb: FormBuilder,
              private authService: AuthService
  ) {

  }

  ngOnInit(): void {
    this.getLocation();

  }


  createForm() {
    const values = this.formService.getFormValue();
    this.regGroup = this.fb.group({
      firstName: [values.firstName || '', Validators.required],
      lastName: [values.lastName  || '', Validators.required],
      phone: [values.phone || '', Validators.required],
      email: ['', Validators.required],
      foundUs: ['', Validators.required],
      zip: [this.location.zip || '', Validators.required],
      city: [this.location.city || '', Validators.required],

    });
  }

  getLocation(): void {
    this.authService.getUserLocation().subscribe((res) => {
      this.location = res;
      this.cities.push(this.location.city);
      this.createForm();
    });
  }
}
