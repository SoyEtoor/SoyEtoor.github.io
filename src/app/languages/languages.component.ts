import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { compileOpaqueAsyncClassMetadata } from "@angular/compiler";

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent {

  language: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    let language1 = {
      lenguaje: "Inglés Certificado",
    }

    let language2 = {
      lenguaje: "Inglés Exaver 3",
    }

    let language3 = {
      lenguaje: "Francés 2",
    }

    this.language.push(language1);
    this.language.push(language2);
    this.language.push(language3);
    console.log(this.language);
  }
}