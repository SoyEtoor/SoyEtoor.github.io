import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from "./education/education.component";
import { LanguagesComponent } from "./languages/languages.component";
import { SkillsComponent } from "./skills/skills.component";
import { InterestComponent } from "./interest/interest.component";
import { AchievementsComponent } from './achievements/achievements.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, WorkExperienceComponent, EducationComponent, LanguagesComponent, SkillsComponent, InterestComponent, AchievementsComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mycv';
}
