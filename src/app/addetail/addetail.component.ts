import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addetail',
  imports: [],
  templateUrl: './addetail.component.html',
  styleUrl: './addetail.component.css'
})
export class AddetailComponent implements OnInit {
  itemId:number=0;
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
      this.route.params.subscribe(params=>{
        this.itemId=+params['id'];
        console.log(this.itemId);
      })
  }
}
