import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from 'src/app/services/contact.service';



@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  public contacts: Contact[] = [] as Contact[];
  public errMsg: string | undefined = undefined;

  @Output() sendContact = new EventEmitter();

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getAllContacts().subscribe((data: Contact[]) => {this.contacts = data},
      (err: any) => {this.errMsg = err;}
    );
  }

  public selectContact(contact: Contact){
    //tranfer to contact-app from there to contact-card
    this.sendContact.emit(contact);
  }

}
