import { Component, OnInit } from '@angular/core';
import { AuthService } from '@shared/services/auth.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  public links: any[] = [];
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
  }


}
