import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public userDetails: any;
  public user: any;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://randomuser.me/api/?results=100').subscribe((data: any) => {
      console.log(data);
      this.userDetails = data.results;
    }, error => {
      console.log(error);

    })
  }
  onSortChange(e) {
    debugger;
    console.log(e.target.value);
  }
  finduser(selecteduser) {
    // this.userDetails.fo
    this.userDetails.forEach(element => {
      // debugger;
      var name = element.name.first + " " + element.name.last;
      if (name.indexOf(selecteduser) >= 0) {
        this.user = element;
        console.log(name);
      }
    });
  }
  getDetails(id) {
    debugger;

  }
}
