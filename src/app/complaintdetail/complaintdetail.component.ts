import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintService } from '../services/complaint.service';
import { DatePipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-complaintdetail',
  standalone: true,
  imports: [NgFor,FormsModule], 
  templateUrl: './complaintdetail.component.html',
  styleUrl: './complaintdetail.component.css',
  providers:[DatePipe]

})
export class ComplaintdetailComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private complaintService: ComplaintService,
    private datePipe: DatePipe
  ) {}
  newComment={
    comment:'',
    createdBy:'devanhs@gmail.com'
  };
  complaintId: number = 0;
  complaintDetail: any = {};

  formatDate(date: string) {
    var dateObj = new Date(date);
    return this.datePipe.transform(dateObj, 'yyyy-MM-dd HH:mm');
  }
  
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.complaintId = +params['id'];
      console.log(this.complaintId);
    });

    this.complaintService.getComplaintById(this.complaintId).subscribe(
      (response) => {
        this.complaintDetail = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  addComment(id:number){
    console.log(id);
    console.log(this.newComment);
    this.complaintService.addComment(id,this.newComment).subscribe((response)=>{console.log("Comment Added");},(error)=>{console.log(error);})
  }
}
