import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/Contact';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

  @Input() selectedContactFromList: Contact = {} as Contact;

  constructor() { }

  ngOnInit(): void {
  }

  public isNotEmpty(): boolean{
    return Object.keys(this.selectedContactFromList).length > 0;
  }

}
