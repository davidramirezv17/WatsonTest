import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'chat';
  public inputText: any = '';
  public textVal: string = "";
  constructor(private http: HttpClient) { }
  async sendMessage() {
    this.textVal = this.textVal + 'Tu: ' + this.inputText + '\n';
    let params = new HttpParams();
    params = params.append('message', this.inputText);
    const response: any = await this.http.get('http://localhost:3312/watson', { params }).toPromise();
    this.textVal = this.textVal + 'BOT: ' + response.response + '\n';
    this.inputText = '';
  }
}