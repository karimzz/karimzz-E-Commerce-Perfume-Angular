import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-overlay',
  imports: [],
  templateUrl: './overlay.html',
  styleUrl: './overlay.scss',
})
export class Overlay {
  showOverlay = input(false);

  closeOverlay = output<void>();

  close() {
    this.closeOverlay.emit();
  }
}