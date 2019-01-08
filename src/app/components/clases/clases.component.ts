import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

  alertString:string ='alert-danger';
 
  properties:Object={
    danger:false
  }

  isLoading = false;

  constructor() { }

  ngOnInit() {
  }

  execute(){
    this.isLoading = true;
    setTimeout(()=>{
      this.isLoading = false;
    },3000);
  }

}
