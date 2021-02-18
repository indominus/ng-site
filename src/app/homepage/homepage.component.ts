import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URLS} from '../shared/urls';
import {Meta, Title} from '@angular/platform-browser';
import {Tag} from '@angular/compiler/src/i18n/serializers/xml_helper';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  jokes: any;

  constructor(private meta: Meta, private title: Title, private httpClient: HttpClient) {
    this.title.setTitle('Homepage');
    this.meta.updateTag({name: 'description', content: 'Something descriptive'});
  }

  ngOnInit(): void {
    this.httpClient.get(`${URLS.JOKES}/random/10`, {params: {}}).subscribe((data: any) => this.jokes = data?.value);
  }

}
