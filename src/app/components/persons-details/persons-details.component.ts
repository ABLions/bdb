import { Component, OnInit } from '@angular/core';
import { PersonsService } from 'src/app/services/persons.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-persons-details',
  templateUrl: './persons-details.component.html',
  styleUrls: ['./persons-details.component.css']
})
export class PersonsDetailsComponent implements OnInit {
  currentPersons   = null;
  message = '';

  constructor(
    private personsService: PersonsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getPersons(this.route.snapshot.paramMap.get('id'));
  }

  getPersons(id): void {
    this.personsService.get(id)
      .subscribe(
        data => {
          this.currentPersons = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateAdopted(status): void {
    const data = {
      fullname: this.currentPersons.fullname,
      birth: this.currentPersons.birth,
      adopted: status
    };

    this.personsService.update(this.currentPersons.id, data)
      .subscribe(
        response => {
          this.currentPersons.adopted = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updatePersons(): void {
    this.personsService.update(this.currentPersons.id, this.currentPersons)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Person was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deletePersons(): void {
    this.personsService.delete(this.currentPersons.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/persons']);
        },
        error => {
          console.log(error);
        });
  }
}