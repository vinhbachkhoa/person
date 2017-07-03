import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private service: MyserviceService) { }
  private person: any[];
  private personed: any;
  ngOnInit() {
    this.personed = {};
  }

  submit() {
    this.service.add(this.personed).subscribe(respon => {
      if (respon) {
        alert("them thanh cong");
        this.personed = {};
      }
    })
  }

}
