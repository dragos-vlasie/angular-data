import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  bathroomStatus2: boolean;
  bathroomStatus3: boolean;
  close: string;
  bathroom2Status: string;
  bathroom3Status: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    return Observable
      .timer(0, 6000)
      .switchMap(() => this.dataService.getPosts())
      .subscribe((data) => {
        console.log(data.bathroom2);
        if (data.bathroom2 === 'open') {
          this.bathroomStatus2 = true;
          this.bathroom2Status = 'open';
        } else {
          this.bathroomStatus2 = false;
          this.bathroom2Status = 'closed';
        }
        if (data.bathroom3 === 'open') {
          this.bathroomStatus3 = true;
          this.bathroom3Status = 'open';
        } else {
          this.bathroomStatus3 = false;
          this.bathroom3Status = 'closed';
        }
        console.log(data.bathroom3" asta i 3 ");
    });
  }


  }
