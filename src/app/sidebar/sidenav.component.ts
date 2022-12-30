import {Component,ViewChild, OnInit} from '@angular/core';

/** @title Sidenav open & close behavior */
@Component({
  selector: 'app-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.scss'],
})
export class SidenavComponent {
  
  events: string[] = [];
  opened: boolean = true;
  showNavLabels: boolean = true;
}
