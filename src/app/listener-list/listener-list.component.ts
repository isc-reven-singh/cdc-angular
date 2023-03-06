import { Component, OnInit } from '@angular/core';
import { Startstop } from '../shared/model/startstop';
import { ListenerService } from '../shared/services/listener.service';

@Component({
  selector: 'app-listener-list',
  templateUrl: './listener-list.component.html',
  styleUrls: ['./listener-list.component.scss'],
})

export class ListenerListComponent implements OnInit {
  Listener: any = [];
  Startstop: Startstop = {name: '',}

  constructor(public restApi: ListenerService) {}

  ngOnInit() {
    this.loadListeners();
  }

  // Get listener list
  loadListeners() {
    return this.restApi.getListeners().subscribe((data: {}) => {
      this.Listener = data;
    });
  }

    // Start Listener
    startListener(name: any) {
      this.Startstop.name = name
      if (window.confirm('Are you sure you want to start '+name+'?')) {
        this.restApi.startListener(this.Startstop).subscribe((data) => {
          this.loadListeners();
        });
      }
    }

    stopListener(name: any) {
      this.Startstop.name = name
      if (window.confirm('Are you sure you want to stop '+name+'?')) {
        this.restApi.stopListener(this.Startstop).subscribe((data) => {
          this.loadListeners();
        });
      }
    }


}
