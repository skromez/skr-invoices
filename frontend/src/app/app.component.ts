import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShellComponent } from "./shell.component";

@Component({
  standalone: true,
  imports: [RouterModule, ShellComponent],
  selector: 'skr-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
