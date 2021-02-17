import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {URLS} from '../shared/urls';

@Component({
  selector: 'app-holiday-view',
  templateUrl: './holiday-view.component.html',
  styleUrls: ['./holiday-view.component.scss']
})
export class HolidayViewComponent implements OnInit {

  data: any;

  constructor(private httpClient: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const country = this.activatedRoute.snapshot.paramMap.get('country');
    const day = this.activatedRoute.snapshot.paramMap.get('day');
    const month = this.activatedRoute.snapshot.paramMap.get('month');
    if (country !== null && day !== null && month !== null) {
      const params = new HttpParams()
        .append('day', day)
        .append('month', month)
        .append('location', country.toLocaleLowerCase());
      this.httpClient.get(URLS.HOLIDAYS, {params}).subscribe(data => this.data = data);
    } else {
      this.router.navigate(['/']).then(() => {
      });
    }
  }

}
