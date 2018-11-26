import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-kpi',
  templateUrl: './line-kpi.page.html',
  styleUrls: ['./line-kpi.page.scss'],
})
export class LineKPIPage implements OnInit {
  customActionSheetOptions: any = {
    header: 'Shift',
    subHeader: 'Select Shift'
  };
  subStages = [{
    'subStageId': 1,
    'subStageName': 'Chassie Fitter',
    'subStageEfficiency': 85,
    'machineList': [{
      'machineId': 12,
      'machineName': 'Machine 1',
      'machineStatus': 'Completed',
      'machineEfficiency': '90%',
      'workerList': [{
        'workerName': 'Sushant',
        'workerEfficiency': '89%'
      },
      {
        'workerName': 'Rakseh',
        'workerEfficiency': '79%'
      }]
    },
    {
      'machineId': 14,
      'machineName': 'Machine 2',
      'machineStatus': 'In-Progress',
      'machineEfficiency': '80%',
      'workerList': [{
        'workerName': 'Ramesh',
        'workerEfficiency': '52%'
      },
      {
        'workerName': 'Suresh',
        'workerEfficiency': '67%'
      }]
    }]
  },
  {
    'subStageId': 2,
    'subStageName': 'Window Fitter',
    'subStageEfficiency': 45,
    'machineList': [{
      'machineId': 16,
      'machineName': 'Machine 3',
      'machineStatus': 'bottleNeck',
      'machineEfficiency': '25%',
      'workerList': [{
        'workerName': 'Ram',
        'workerEfficiency': '68%'
      },
      {
        'workerName': 'Shyam',
        'workerEfficiency': '59%'
      }]
    },
    {
      'machineId': 17,
      'machineName': 'Machine 4',
      'machineStatus': 'Not-Started',
      'machineEfficiency': '78%',
      'workerList': [{
        'workerName': 'Gautam',
        'workerEfficiency': '76%'
      },
      {
        'workerName': 'Soham',
        'workerEfficiency': '90%'
      }]
    }]
  },
  {
    'subStageId': 3,
    'subStageName': 'Car Painter',
    'subStageEfficiency': 87,
    'machineList': [{
      'machineId': 19,
      'machineName': 'Machine 5',
      'machineStatus': 'Not-Started',
      'machineEfficiency': '89%',
      'workerList': [{
        'workerName': 'Govind',
        'workerEfficiency': '39%'
      },
      {
        'workerName': 'John',
        'workerEfficiency': '80%'
      }]
    },
    {
      'machineId': 14,
      'machineName': 'Machine 6',
      'machineStatus': 'Not-Started',
      'machineEfficiency': '86%',
      'workerList': [{
        'workerName': 'Rohan',
        'workerEfficiency': '48%'
      },
      {
        'workerName': 'Utkarsh',
        'workerEfficiency': '78%'
      }]
    }]
  }];
  constructor() { }

  ngOnInit() {
  }

  doRefresh(event) {
    console.log(event);
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
