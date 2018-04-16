import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  status : string;
  state : boolean;
  is: string;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    return Observable
      .timer(0, 6000)
      .switchMap(() => this.dataService.getPosts())
      .subscribe((data) => {
        let status = data.status;

        for (let stat in data) {
          console.log(data[stat]);
          this.status = data[stat];

          if(this.status ==="Unlocked") 
          {
          this.is="is-transitioned"
          return console.log(this.is);
          }    
          else(this.status == "Locked")
          {
          this.is="";
          return console.log(this.is);
          }

        }
    });

    
    
  }


  }
  

