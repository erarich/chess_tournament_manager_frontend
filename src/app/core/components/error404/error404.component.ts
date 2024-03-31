import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/ui/header/header.component';

@Component({
  selector: 'app-error404',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './error404.component.html',
  styleUrl: './error404.component.css',
})
export class Error404Component {}
