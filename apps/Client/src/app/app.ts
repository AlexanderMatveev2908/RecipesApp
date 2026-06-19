import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toast } from '@/layout/toast/toast';
import { Navbar } from '@/layout/navbar/navbar';
import { Footer } from '@/layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toast, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  ngOnInit(): void {}
}
