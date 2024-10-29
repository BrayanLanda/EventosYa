import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EventComponent } from './pages/event/event.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BookingComponent } from './pages/booking/booking.component';

export const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'event', component: EventComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'booking', component: BookingComponent}
];
