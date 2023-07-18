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
    'https://i0.wp.com/www.itvoice.in/wp-content/uploads/2023/06/images-7-1.jpeg';
  public title = 'UI Guild IL';
  public subTitle = 'MetaProgramming in TypeScript from 0 to 100';

  constructor(service: MoviesService) {
    this.data = service.getMovies();
  }
}
