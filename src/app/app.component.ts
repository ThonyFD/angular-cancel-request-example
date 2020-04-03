import {Component, OnInit} from '@angular/core';
import {GlobalService} from './global.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'test-downlads-more-original';

  constructor(
    private globalService: GlobalService,
    private httpClient: HttpClient
  ) {

  }

  ngOnInit(): void {
  }

  cancel() {
    this.globalService.destroy$.next(true);
  }

  send() {
    this.httpClient.get('http://localhost:8888/fakedownload').subscribe(() => {
      console.log('descargado: ');
    }, (error) => {
      console.log('cancelled: ', error);
    });
  }
}
