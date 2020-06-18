import {Component, OnInit, Inject, PLATFORM_ID} from '@angular/core';
import {AuthService} from '@shared/services/auth.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService} from '@shared/services/form.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']

})
export class HomeComponent implements OnInit {
    longitude: number;
    latitude: number;
    location: any;
    cities = ['New York', 'London', 'Kiev'];
    city: string;
    isSecondStep = false;
    brokerGroup: FormGroup;

    constructor(
        @Inject(PLATFORM_ID) private _platformId: Object,
        private authService: AuthService,
        private router: Router,
        private fb: FormBuilder,
        private formService: FormService
    ) {
    }

    ngOnInit(): void {
        this.getLocation();
        this.createForm();
    }

    createForm() {
        this.brokerGroup = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            phone: ['', Validators.required],
        });
    }

    getLocation(): void {
        this.authService.getUserLocation().subscribe((res) => {
            console.log(res);
            this.location = res;
            this.cities.push(this.location.city);
            this.city = this.location.city;
        });
    }


    goToRegistr() {
        this.formService.saveForm(this.brokerGroup);
        this.router.navigate(['/registration']);
    }
}
