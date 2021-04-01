import { Component } from '@angular/core';
import {ApiService} from './api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  data=[]
  constructor(private api:ApiService){
      
   this.api.getData().subscribe(data=>{
        console.warn(data)
        this.data=data
    })
  }
}
