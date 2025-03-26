import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SenderComponent } from './sender/sender.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shipmentform';
}
