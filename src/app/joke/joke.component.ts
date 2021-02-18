import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {URLS} from '../shared/urls';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  joke!: {id: number; joke: string; categories: string[]; };

  constructor(private httpClient: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id !== null) {
      this.httpClient.get(`${URLS.JOKES}/${id}`, {}).subscribe((data: any) => this.joke = data?.value);
    } else {
      this.router.navigate(['/']).then(() => {
      });
    }
  }

}
