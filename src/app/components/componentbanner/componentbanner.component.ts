import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';

@Component({
  selector: 'app-componentcolombia',
  templateUrl: './componentcolombia.component.html',
  styleUrls: ['./componentcolombia.component.css']
})
export class ComponentcolombiaComponent implements OnInit {

  conversion:any;
  rta:[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://hack.kunderlabs.com/exam/telecom/api/products/new')
    .subscribe(data => { 
     this.conversion=(data)
     
     this.rta=this.conversion;
      console.log(this.rta)
     console.log('prueba' , this.rta.length);
    });
  }

}
