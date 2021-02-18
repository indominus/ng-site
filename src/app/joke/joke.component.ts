import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {URLS} from '../shared/urls';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  private readonly id: string | null;

  url: string;
  joke!: { id: number; joke: string; categories: string[]; };

  constructor(private meta: Meta,
              private title: Title,
              private router: Router,
              private httpClient: HttpClient,
              private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.url = this.router.url;
    this.title.setTitle(`Joke View #${this.id}`);
  }

  ngOnInit(): void {

    if (this.id !== null) {
      this.httpClient.get(`${URLS.JOKES}/${this.id}`, {}).subscribe((data: any) => {
        this.joke = data?.value;
        this.meta.updateTag({name: 'description', content: data?.value?.joke});
      });
    } else {
      this.router.navigate(['/']).then(() => {
      });
    }
  }

}
