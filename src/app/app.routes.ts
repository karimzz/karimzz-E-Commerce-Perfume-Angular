import { Routes } from '@angular/router';
import { GuestLayout } from './Layout/guest-layout/guest-layout';

export const routes: Routes = [
  // For Guest
  {
    path: '',
    component: GuestLayout,
    children: [
      {
        path :"",
        loadComponent : ()=>import("./Components/home/home").then((c)=>c.Home)
      }
    ],
  },
];
