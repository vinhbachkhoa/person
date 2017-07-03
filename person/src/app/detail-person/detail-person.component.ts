import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-person',
  templateUrl: './detail-person.component.html',
  styleUrls: ['./detail-person.component.css']
})
export class DetailPersonComponent implements OnInit {

  constructor(private route: Router, private active: ActivatedRoute, private service: MyserviceService) { }
  private id: number;
  private oneperson: any;
  ngOnInit() {
    this.active.params.subscribe(param => {
      this.id = param['id'];
    })
    this.service.getid(this.id).subscribe(respon => {
      this.oneperson = respon;
    })
  }



}
