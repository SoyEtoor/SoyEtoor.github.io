import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent {
  achievements: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    let achievements1 = {
      logros: "Developed a Web Application"
    };

    let achievements2 = {
      logros: "Optimized Database Queries"
    };

    let achievements3 = {
      logros: "Automated Deployment Processes"
    };

    let achievements4 = {
      logros: "Completed Agile Project Management Certification"
    };

    this.achievements.push(achievements1);
    this.achievements.push(achievements2);
    this.achievements.push(achievements3);
    this.achievements.push(achievements4);
    console.log(this.achievements);
  }
}