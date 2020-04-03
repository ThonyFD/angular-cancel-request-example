import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-downloads';
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
  }

  cancel() {
    this.destroy$.next(true);
  }

  send() {
    this.httpClient.get('http://localhost:8888/fakedownload').pipe(takeUntil(this.destroy$)).subscribe(() => {
      console.log('descargado: ');
    }, (error) => {
      console.log('cancelled: ', error);
    });
  }
}
