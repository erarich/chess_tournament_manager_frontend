import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/ui/header/header.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {}
