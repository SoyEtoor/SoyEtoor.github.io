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
    let skill1 = {
      skill: "Persistence",
    };

    let skill2 = {
      skill: "Leadership",
    };

    let skill3 = {
      skill: "Communication",
    };

    let skill4 = {
      skill: "Problem-Solving",
    };

    let skill5 = {
      skill: "Database Design",
    };

    let skill6 = {
      skill: "Web Development",
    };

    this.skills.push(skill1);
    this.skills.push(skill2);
    this.skills.push(skill3);
    this.skills.push(skill4);
    this.skills.push(skill5);
    this.skills.push(skill6);
    console.log(this.skills);
  }
}

