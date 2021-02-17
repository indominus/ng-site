import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URLS} from '../shared/urls';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  countries: any;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get(URLS.COUNTRIES, {params: {}}).subscribe((data: any) => this.countries = data?.response?.countries);
  }

}
