import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintService } from '../services/complaint.service';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-complaintdetail',
  standalone: true,
  imports: [NgFor,FormsModule,NgIf], 
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

  userId: string | null = "";
  userRole: string | null = ""; 
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
      // console.log(this.complaintId);
    });
    this.userId = localStorage.getItem("email");
    this.userRole = localStorage.getItem("role");

    this.complaintService.getComplaintById(this.complaintId).subscribe(
      (response) => {
        this.complaintDetail = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  goToLogin() {
    this.router.navigate(["/login"]);
  }
  closeComplaint(id:number){
    this.complaintDetail.IsClosed=!this.complaintDetail.IsClosed;
    this.complaintService.closeComplaintById(id).subscribe((response)=>{
      // window.location.reload();
      console.log(response);
      this.complaintDetail=response.complaint;
      
      // console.log("Changed Succesfully");
    },(err)=>{console.log(err)});
  }
  addComment(id:number){
    this.newComment.createdBy=this.userId??'Anoymous';
    this.complaintService.addComment(id,this.newComment).subscribe((response)=>{console.log("Comment Added");    window.location.reload();
;    },(error)=>{console.log(error);})

  }
  
}
