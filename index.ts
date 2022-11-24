import { Component } from './component';
import { MoviesService } from './services/services';

// @ts-ignore
@Component({
  template: `
  <div style="text-align:center">
    <h1>
        Welcome to {{title}}!
    </h1>
    <img alt="CityJS Logo" src="{{imgeUrl}}" width="250">
    <h2>{{subTitle}}</h2>
    <h3><a target="_blank" href="https://angular.io/tutorial">@danduh81</a></h3>
    <p>{{data}}</p>
</div>
`,
  selector: 'app-hero-component',
  styleUrls: ['./hero.component.scss'],
  provide: [MoviesService],
})
export class HeroComponent {
  public data = '';
  public imgeUrl =
    'https://www.angulartinyconf.com/assets/img/tinyco-red-round-big.png';
  public title = 'Angular Tiny Conf Peretor';
  public subTitle = 'MetaProgramming in TypeScript from 0 to 100';

  constructor(service: MoviesService) {
    this.data = service.getMovies();
  }
}
