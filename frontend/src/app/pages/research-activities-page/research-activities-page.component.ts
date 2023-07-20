import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../../services/activities.service';

@Component({
  selector: 'app-research-activities-page',
  templateUrl: './research-activities-page.component.html',
  styleUrls: ['./research-activities-page.component.scss']
})
export class ResearchActivitiesPageComponent implements  OnInit {

  constructor(private readonly activitiesService: ActivitiesService) {
  }

  async ngOnInit() {
    const activities = await this.activitiesService.getEvents();
    console.log(activities)
  }

}
