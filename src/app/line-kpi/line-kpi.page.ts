import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-line-kpi',
  templateUrl: './line-kpi.page.html',
  styleUrls: ['./line-kpi.page.scss'],
})
export class LineKPIPage implements OnInit {
  options: BarcodeScannerOptions;
  customActionSheetOptions: any = {
    header: 'Shift',
    subHeader: 'Select Shift'
  };
  subStages = [{
    'subStageId': 1,
    'subStageName': 'Chassies Chase',
    'subStageEfficiency': 85,
    'machineList': [{
      'machineId': 12,
      'machineName': 'SB011',
      'machineStatus': 'Completed',
      'machineEfficiency': '90%',
      'workerList': [{
        'machineName': 'SB011',
        'machineEfficiency': '90%',
        'isMachine': true
      }
      ]
    },
    {
      'machineId': 14,
      'machineName': 'SB012',
      'machineStatus': 'In-Progress',
      'machineEfficiency': '80%',
      'workerList': [{
        'machineName': 'SB012',
        'machineEfficiency': '80%',
        'isMachine': true
      },
      {
        'workerName': 'Suresh',
        'workerEfficiency': '67%',
        'isMachine': false
      }]
    }]
  },
  {
    'subStageId': 2,
    'subStageName': 'Engine Stage',
    'subStageEfficiency': 45,
    'machineList': [{
      'machineId': 16,
      'machineName': 'SB013',
      'machineStatus': 'bottleNeck',
      'machineEfficiency': '25%',
      'workerList': [{
        'machineName': 'SB013',
        'machineEfficiency': '25%',
        'isMachine': true
      }
      ]
    },
    {
      'machineId': 17,
      'machineName': 'SB014',
      'machineStatus': 'Not-Started',
      'machineEfficiency': '78%',
      'workerList': [{
        'machineName': 'SB014',
        'machineEfficiency': '78%',
        'isMachine': true
      },
      {
        'workerName': 'Soham',
        'workerEfficiency': '90%',
        'isMachine': false
      }]
    },
      {
      'machineId': 18,
      'machineName': 'SB015',
      'machineStatus': 'Not-Started',
      'machineEfficiency': '88%',
      'workerList': [{
        'machineName': 'SB015',
        'machineEfficiency': '88%',
        'isMachine': true
      }
      ]
    }]
  },
  ];

  constructor(private barcodeScanner: BarcodeScanner, public alertController: AlertController) { }

  ngOnInit() {
  }

  doRefresh(event) {
    console.log(event);
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  showBarCode() {
    this.options = {
      prompt: 'Scan a barcode to see the result'
    }

    this.barcodeScanner.scan(this.options).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.showModel();

    }).catch(err => {
      console.log('Error', err);
    });

  }

  async showModel(): Promise<any> {
    const alert = await this.alertController.create({
      header: `Machine Data`,
      message: `Efficiency is : <strong> 90 % </strong> <br>
      Idle Time is : <strong> 1000 s </strong> <br>
      Working Time is : <strong> 15000 s </strong> <br>`,
      buttons: [
        {
          text: 'Okay',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });

    await alert.present();
  }
}
