import { Component, OnInit } from '@angular/core';
import { PersonsService } from 'src/app/services/persons.service';
@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {
  persons: any;
  currentPersons = null;
  currentIndex = -1;
  fullname = '';
  constructor(private personsService: PersonsService) { }

  ngOnInit(): void {
    this.retrievePersons();
  }

  retrievePersons(): void {
    this.personsService.getAll()
      .subscribe(
        data => {
          this.persons = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  
  }

  refreshList(): void {
    this.retrievePersons();
    this.currentPersons = null;
    this.currentIndex = -1;
  }

  setActivePersons(persons, index): void {
    this.currentPersons = persons;
    this.currentIndex = index;
  }

  removeAllPersons(): void {
    this.personsService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrievePersons();
        },
        error => {
          console.log(error);
        });
  }

  searchFullname(): void {
    this.personsService.findByFullname(this.fullname)
      .subscribe(
        data => {
          this.persons = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
