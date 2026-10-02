import { Component, signal } from '@angular/core';

import { Navbar } from '../../Components/navbar/navbar';
import { Footer } from '../../Components/footer/footer';
import { RouterOutlet } from '@angular/router';
import { Overlay } from '../../Components/overlay/overlay';

@Component({
  selector: 'app-guest-layout',
  imports: [RouterOutlet, Navbar, Footer, Overlay],
  templateUrl: './guest-layout.html',
  styleUrl: './guest-layout.scss',
})
export class GuestLayout {
  showOverlay = signal(false);

  openOverlay() {
    this.showOverlay.set(true);
  }

  closeOverlay() {
    this.showOverlay.set(false);
  }
}
