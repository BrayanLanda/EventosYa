import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../../layout/sidebar/sidebar.component";
import { Event } from '../../models/event';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent implements OnInit{
    events: Event[] = [];

    constructor(private eventService: EventService) {}

    ngOnInit(): void {
      this.eventService.getEvents().subscribe(
        (data) => {
          this.events = data;
        },
        (error) => {
          console.error('Error fetching events', error);
        }
      )
    }
}
