import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  constructor(private readonly http: HttpClient) {
  }

  public async getEvents(): Promise<any> {
    return this.http.get("/api/activities").toPromise();
  }
}
