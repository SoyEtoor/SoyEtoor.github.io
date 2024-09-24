import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    let skills1 = {
      skill: "Leadership"
    };

    let skills2 = {
      skill: "Communication"
    };

    let skills3 = {
      skill: "Problem-Solving"
    };

    let skills4 = {
      skill: "Web Desing"
    };

    let skills5 = {
      skill: "Database management"
    };

    let skills6 = {
      skill: "Data analysis"
    };


    this.skills.push(skills1);
    this.skills.push(skills2);
    this.skills.push(skills3);
    this.skills.push(skills4);
    this.skills.push(skills5);
    this.skills.push(skills6);
    console.log(this.skills);
  }
}