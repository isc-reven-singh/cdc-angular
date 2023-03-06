import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ListenerService } from '../shared/services/listener.service';


@Component({
  selector: 'app-listener-create',
  templateUrl: './listener-create.component.html',
  styleUrls: ['./listener-create.component.scss']
})
export class ListenerCreateComponent implements OnInit {
  @Input() listenerDetails = {
    name: 'angular-test',
    type:'mysql',
    tcphost:'127.0.0.1',
    tcpport:0,
    databasehost:'localhost',
    databaseport:'3306',
    databaseuser:'root',
    databasepass:'root',
    database:'customerdb',
    table:'customer',
    serverid:'5',
    status:'new'
};
  constructor(public restApi: ListenerService, public router: Router) { }

  ngOnInit() {}

  addListener(listener: any) {
    this.restApi.createListener(this.listenerDetails).subscribe((data: {}) => {
      this.router.navigate(['/listeners-list']);
    });
  }

}



