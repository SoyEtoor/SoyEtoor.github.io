import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-interest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interest.component.html',
  styleUrl: './interest.component.css'
})
export class InterestComponent {
  interest: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    let interest1 = {
      interes: "Phsysics"
    };

    let interest2 = {
      interes: "Video Games"
    };

    let interest3 = {
      interes: "AI"
    };

    let interest4 = {
      interes: "Databases"
    };

    let interest5 = {
      interes: "Space"
    };

    let interest6 = {
      interes: "Maths"
    };


    this.interest.push(interest1);
    this.interest.push(interest2);
    this.interest.push(interest3);
    this.interest.push(interest4);
    this.interest.push(interest5);
    this.interest.push(interest6);
    console.log(this.interest);
  }
}