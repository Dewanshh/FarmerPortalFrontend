import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintService } from '../services/complaint.service';

@Component({
  selector: 'app-complaint',
  imports: [CommonModule,FormsModule],
  standalone:true,
  templateUrl: './complaint.component.html',
  styleUrl: './complaint.component.css',
  providers:[DatePipe]
})
export class ComplaintComponent implements OnInit {
  constructor(private router: Router,private route:ActivatedRoute,private complaintService: ComplaintService,private datePipe:DatePipe) {}
  complaintFormShow:boolean=false;
  complaints:any=[];
  userId:string|null="";
  onChangeFormShow(){
    this.complaintFormShow=!this.complaintFormShow;
  }

  ngOnInit(): void {
      this.complaintService.getComplaint().subscribe((response)=>{
        this.complaints=response;
      },(error)=>{
        console.log(error);
      })
      this.userId=localStorage.getItem("email");
  }
  formatDate(dateTime:string){
    const dateObj=new Date(dateTime);
    return this.datePipe.transform(dateObj,'yyyy-MM-dd HH:mm');
  }

  newComplaint={
    ComplaintName:'',
    Description:'',
    ComplaintBy:'',
    Comments:[],
    IsClosed:false,
  }
  onSubmit(){
    this.newComplaint.ComplaintBy=this.userId??'Anoymous';
    this.complaintService.addComplaint(this.newComplaint).subscribe((response)=>{},(error)=>{
      console.log(error);
    })
    this.newComplaint.ComplaintName='';
    this.newComplaint.Description='';
    this.onChangeFormShow();  
    window.location.reload();
  }
  
  goToPage(complaintId:number){
    this.router.navigate([`complaints/${complaintId}`]);
  }
}
