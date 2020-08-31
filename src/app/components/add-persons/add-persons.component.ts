import { Component, OnInit } from '@angular/core';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-add-persons',
  templateUrl: './add-persons.component.html',
  styleUrls: ['./add-persons.component.css']
})
export class AddPersonsComponent implements OnInit {
  persons = {
    fullname: '',
    birth: '',
    adopted: false
  };
  submitted = false;

  constructor(private personsService: PersonsService) { }

  ngOnInit(): void {
  }

  savePersons(): void {
    const data = {
      fullname: this.persons.fullname,
      birth: this.persons.birth,
      adopted: this.persons.adopted
    };

    this.personsService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPersons(): void {
    this.submitted = false;
    this.persons = {
      fullname: '',
      birth: '',
      adopted: false
    };
  }

}


