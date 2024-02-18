import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  public options: any = {
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
  };

  public events = [
    {
      title: 'Event 1',
      description: 'Description of event 1',
      start: new Date(),
    },
    {
      title: 'Event 2',
      description: 'Description of event 2',
      start: new Date(),
    },
    {
      title: 'Event 3',
      description: 'Description of event 3',
      start: new Date(),
    },
    {
      title: 'Event 4',
      description: 'Description of event 4',
      start: new Date(),
    },
    {
      title: 'Event 5',
      description: 'Description of event 5',
      start: new Date(),
    }
  ];

  calendarPlugins = [dayGridPlugin]; // important!

  constructor() { }
}
