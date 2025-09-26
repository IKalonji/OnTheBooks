import { Component, OnInit } from '@angular/core';

declare var Cal: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Cal("init", "30min", {origin:"https://app.cal.com"});

    Cal.ns["30min"]("inline", {
      elementOrSelector:"#my-cal-inline-30min",
      config: {"layout":"month_view"},
      calLink: "issa-kalonji-hpfb3z/30min",
    });

    Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
  }

}
