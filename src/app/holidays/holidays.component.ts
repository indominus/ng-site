import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {URLS} from '../shared/urls';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss']
})
export class HolidaysComponent implements OnInit {

  holidays: any;
  selectedCountry: string | null;

  constructor(private httpClient: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
    this.selectedCountry = this.activatedRoute.snapshot.paramMap.get('country');
  }

  ngOnInit(): void {
    const country = this.activatedRoute.snapshot.paramMap.get('country');
    if (country != null) {
      const params = new HttpParams().append('country', country).append('year', '2020');
      this.httpClient.get(URLS.HOLIDAYS, {params}).subscribe((data: any) => this.holidays = data?.response?.holidays);
    } else {
      this.router.navigate(['/']).then(() => {
      });
    }
  }

}
