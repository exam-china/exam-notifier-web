import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { TestComponent } from './test/test.component';
import { MyComponent } from './my/my.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'info', component: InfoComponent },
  {
    path: 'test',
    component: TestComponent,
  },
  { path: 'test/:name/subject', component: SubjectComponent },

  { path: 'my', component: MyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
