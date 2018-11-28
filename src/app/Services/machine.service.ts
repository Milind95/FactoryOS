import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  apiUrl: string = 'http://3.209.93.191:1113/efficiency';
  constructor(private http: HttpClient) { }

  getEfficiencyData(body) {
    return this.http.post(this.apiUrl, body).pipe(map(res => {
      return res;
    }))

  }
}
