import { Component, output, signal } from '@angular/core';
import { NAV_ITEMS } from '../../Core/constants/navigation.data';
import { NavItem } from '../../Core/models/Navigation.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  navTabs = signal<NavItem[]>(NAV_ITEMS);
  navDropDown= signal<NavItem[]>([]);

  activeTab = signal<string>('');

  MenuState = signal<boolean>(false);

  // Outputs
  openOverlay = output<void>();
  closeOverlay = output<void>();

  showMenu() {
    this.openOverlay.emit();
    this.MenuState.set(true);
  }
  
  hideMenu() {
    this.closeOverlay.emit();
    this.MenuState.set(false);
    this.activeTab.set('')
  }

  toggleMenu(){
    if(this.MenuState())
    {
      this.hideMenu()
    }else{
      this.showMenu()

    }
  }

  activeTabHandler(label: string) {
    if (this.activeTab() == label) {
      console.log('This the same tab');
      this.hideMenu();
      this.activeTab.set('');
      return;
    }

     const navTab = NAV_ITEMS.find(
      (item) => item.label === label
    );

    if (navTab?.children?.length) {
      this.navDropDown.set(navTab.children);
      console.log(this.navDropDown())
      this.activeTab.set(label);
      this.showMenu();
      this.showMenu();
    }else{
      this.navDropDown.set([]);
      this.hideMenu();
    }
    this.activeTab.set(label);

    
  }
}
