import { Component } from '@angular/core';
import { service } from './service';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

  id: string = "tektutorialshub"

  loading: boolean = false;
  errorMessage: any;

  formData = new FormData()


  constructor(private service: service) {
  }

  public log(name: any) {
    console.log(name)
  }

  public getRepos(id: any) {

    console.log('get')
    console.log("ID: " + id.value)
    this.loading = true;
    this.errorMessage = "";
    this.service.getRepos(id.value)
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received ')
          console.log(response)
          console.log(response[2])


          if (response[1] == null) {
            alert("user:  " + response.name + "\n"
              + "email: " + response.email + "\n"
              + "gender: " + response.gender + "\n" +
              "status: " + response.status);
          }
          else {
            alert("enter an ID!")

          }
        },
        (error) => {                              //error() callback
          console.error('Request failed with error ')
          this.errorMessage = error;
          this.loading = false;
          alert("Error");
        },
        () => {                                   //complete() callback
          console.error('Request completed')
          this.loading = false;
        })
  }


  public setRepos(person: NgForm) {

    console.log('post')

    this.loading = true;
    this.errorMessage = "";
    console.log(person.form.value)
    this.service.setRepos(person.form.value)
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          console.log(response)
          alert("Utente registrato con id " + response.id);
          console.log("Utente registrato con id " + response.id)
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        () => {                                   //complete() callback
          console.error('Request completed')      //This is actually not needed 
          this.loading = false;
        })
  }

}
