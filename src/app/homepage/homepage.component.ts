import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URLS} from '../shared/urls';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  jokes: any;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get(`${URLS.JOKES}/random/10`, {params: {}}).subscribe((data: any) => this.jokes = data?.value);
  }

}
