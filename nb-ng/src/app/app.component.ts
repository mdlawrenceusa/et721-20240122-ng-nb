import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { President } from './president.model'; // Adjust the path as necessary

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  presidents: President[] = [];

  beans: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('/assets/presidents.json')
      .subscribe((data: any[]) => {
        this.beans = data;
      });
  }

}
