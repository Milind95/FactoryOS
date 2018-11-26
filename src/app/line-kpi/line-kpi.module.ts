import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LineKPIPage } from './line-kpi.page';
import { MachineComponent } from '../components/machine/machine.component';
import { WorkerComponent } from '../components/worker/worker.component';


const routes: Routes = [
  {
    path: '',
    component: LineKPIPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LineKPIPage,
    MachineComponent,
    WorkerComponent]
})
export class LineKPIPageModule {}
