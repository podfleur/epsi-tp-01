import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, UpperCasePipe],
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  title = 'Bienvenue sur BiblioTech';
}