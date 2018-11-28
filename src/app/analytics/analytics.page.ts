import { Component, OnInit } from '@angular/core';
// import * as HighCharts from 'highcharts';
// import * as  drilldown from 'highcharts/modules/drilldown.src.js'; 
// drilldown(HighCharts); 

import { MachineService } from '../Services/machine.service'
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.page.html',
  styleUrls: ['./analytics.page.scss'],
})
export class AnalyticsPage implements OnInit {
  showChildWorker: boolean = false;
  showChildMachine: boolean = false;
  finalMachineEfficiency: number;
  finalWorkerEfficiency: number;
  machineEfficiency = [];
  stages = [];
  workerEfficiency = [];
  childWorkerArray: Array<Object> = [];
  childMachineArray: Array<Object> = [];

  machineStageTime: Array<Object> = [];
  MachineStageTimeIdle: Array<Object> = [];
  WorkerStageTime: Array<Object> = [];
  WorkerStageTimeIdle: Array<Object> = [];

  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';




  public doughnutFinalWorkerChartLabels: string[] = ['Efficiency'];
  public doughnutFinalWorkerChartData: number[] = [340];
  public doughnutFinalWorkerChartType: string = 'doughnut';

  public doughnutWorkerChartLabels: string[] = ['Stage1', 'Stage2', 'Stage3'];
  public doughnutWorkerChartData: number[] = [340, 200, 450];
  public doughnutWorkerChartType: string = 'doughnut';

  public doughnutFinalMachineChartLabels: string[] = ['Efficiency'];
  public doughnutFinalMachineChartData: number[] = [340];
  public doughnutFinalMachineChartType: string = 'doughnut';

  public doughnutMachineChartLabels: string[] = ['Stage1', 'Stage2', 'Stage3'];
  public doughnutMachineChartData: number[] = [105, 260, 210];
  public doughnutMachineChartType: string = 'doughnut';





  constructor(private machine: MachineService) { }

  ngOnInit() {
    this.machine.getEfficiencyData({
      "data": [{
        "productId": "A007",
        "Name": "Grand i10",
        "process": ["Stage1", "Stage2", "Stage3"],
        "Worker": [true, false, true],
        "startTime": [1654165164164, 1654165165364, 1654165166364],
        "endTime": [1654165165364, 1654165166364, 1654165167394],
        "WorkerStartTime": [1654165164164, 0, 1654165166364],
        "WorkerEndTime": [1654165164364, 0, 1654165167194],
        "startTimeIdle": [1654165164164, 1654165165364, 1654165166364],
        "endTimeIdle": [1654165165364, 1654165166364, 1654165167394],
        "WorkerStartTimeIdle": [1654165164164, 0, 1654165166364],
        "WorkerEndTimeIdle": [1654165164200, 0, 1654165167000]
      }, {
        "productId": "A008",
        "Name": "Grand i10",
        "process": ["Stage1", "Stage2", "Stage3"],
        "Worker": [true, false, true],
        "startTime": [1654165164164, 1654165165364, 1654165166364],
        "endTime": [1654165165364, 1654165166364, 1654165167394],
        "WorkerStartTime": [1654165164164, 0, 1654165166364],
        "WorkerEndTime": [1654165164364, 0, 1654165167194],
        "startTimeIdle": [1654165164164, 1654165165364, 1654165166364],
        "endTimeIdle": [1654165165264, 1654165166364, 1654165167394],
        "WorkerStartTimeIdle": [1654165164164, 0, 1654165166364],
        "WorkerEndTimeIdle": [1654165164264, 0, 1654165167000]
      }]
    }).subscribe(res => {
      console.log(res);

      this.finalMachineEfficiency = Math.floor(res['result'][0].Final_Machine_efficiency);
      this.finalWorkerEfficiency = res['result'][0].Final_Worker_Efficiency;
      console.log(this.finalWorkerEfficiency);
      this.machineEfficiency = res['result'][0].Machine_efficiency;
      this.stages = res['result'][0].Stages;
      this.workerEfficiency = res['result'][0].Worker_Efficiency;


      this.doughnutFinalWorkerChartLabels = ['Efficiency'];
      this.doughnutFinalWorkerChartData = [this.finalWorkerEfficiency, (100 - this.finalWorkerEfficiency)];

      this.doughnutWorkerChartLabels = this.stages;
      this.doughnutWorkerChartData = this.workerEfficiency;

      this.doughnutFinalMachineChartLabels = ['Efficiency'];
      this.doughnutFinalMachineChartData = [this.finalMachineEfficiency, (100 - this.finalMachineEfficiency)];

      this.doughnutMachineChartLabels = this.stages;
      this.doughnutMachineChartData = this.machineEfficiency;


      for (let r = 0; r < this.doughnutWorkerChartData.length; r++) {
        let object = {
          "data": [this.doughnutWorkerChartData[r], (100 - this.doughnutWorkerChartData[r])],
          "label": [this.doughnutWorkerChartLabels[r]]
        }
        this.childWorkerArray.push(object);
      }

      for (let t = 0; t < this.doughnutMachineChartData.length; t++) {
        let object = {
          "data": [this.doughnutMachineChartData[t], (100 - this.doughnutMachineChartData[t])],
          "label": [this.doughnutMachineChartLabels[t]]
        }
        this.childMachineArray.push(object);
      }


      this.machineStageTime = res['result'][0].Machine_stage_Time;
      this.MachineStageTimeIdle = res['result'][0].Machine_stage_Time_Idle;
      this.WorkerStageTime = res['result'][0].Worker_stage_Time;
      this.WorkerStageTimeIdle = res['result'][0].Worker_stage_Time_Idle;

      this.barChartLabels = this.stages;
      console.log(this.machineStageTime);
      console.log(this.MachineStageTimeIdle);
      console.log(this.WorkerStageTime);
      console.log(this.WorkerStageTimeIdle);

      this.barChartData = [
        { data: this.WorkerStageTime, label: 'Worker Time' },
        { data: this.WorkerStageTimeIdle, label: 'Worker Idle Time' },
        { data: this.machineStageTime, label: 'Machine Time' },
        { data: this.MachineStageTimeIdle, label: 'Machine Idle Time' }
      ];

      // this.barChartData = [
      //   { data: [30, 52, 23, 41], label: 'Worker Time' },
      //   { data: [30, 52, 23, 41], label: 'Worker Idle Time' },
      //   { data: [30, 52, 23, 41], label: 'Machine Time' },
      //   { data: [30, 52, 23, 41], label: 'Machine Idle Time' }
      // ];


    });
  }

  public randomize(): void {
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartLineClicked(e: any): void {
    console.log(e);
  }

  public chartLineHovered(e: any): void {
    console.log(e);
  }







  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels: string[] = ['Stage1', 'Stage2', 'Stage3'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  public barChartData: any[] = [
    { data: [30, 52, 23, 41], label: 'Worker Time' },
    { data: [30, 52, 23, 41], label: 'Worker Idle Time' },
    { data: [30, 52, 23, 41], label: 'Machine Time' },
    { data: [30, 52, 23, 41], label: 'Machine Idle Time' }

  ];

  // events
  public chartBarClicked(e: any): void {
    console.log(e);
  }

  public chartBarHovered(e: any): void {
    console.log(e);
  }





  // events
  public chartWorkerDoughnutClicked(e: any): void {
    this.showChildWorker = true;
  }

  public chartMachineDoughnutClicked(e: any): void {
    this.showChildMachine = true;
  }
  goBackWorker() {
    this.showChildWorker = false;
  }
  goBackMachine() {
    this.showChildMachine = false;
  }

  public chartDoughnutHovered(e: any): void {
  }

}
