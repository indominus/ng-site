import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {HolidaysComponent} from './holidays/holidays.component';
import {HolidayViewComponent} from './holiday-view/holiday-view.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: ':country/holiday/:day/:month', component: HolidayViewComponent},
  {path: ':country/holidays', component: HolidaysComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
