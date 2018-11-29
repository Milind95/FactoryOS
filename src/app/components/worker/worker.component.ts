import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss']
})
export class WorkerComponent implements OnInit {
  @Input() workerInput: Object;
  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }


  async showWorkerInfo() {
    let workerEfficiencyArray = this.workerInput['workerEfficiency'].split('%');
    let workerEfficiencyNumber = Number(workerEfficiencyArray[0])
    let colorEff: String;
    if (workerEfficiencyNumber <= 50 && workerEfficiencyNumber > 0) {
      colorEff = 'red';
    } else if (workerEfficiencyNumber <= 80 && workerEfficiencyNumber > 51) {
      colorEff = 'yellow';
    } else if (workerEfficiencyNumber <= 100 && workerEfficiencyNumber > 81) {
      colorEff = 'green';
    }


    let workerName = this.workerInput['workerName'];


    const alert = await this.alertController.create({
      header: `${workerName}`,
      message: `Efficiency is : <strong style="color:${colorEff}"> ${this.workerInput['workerEfficiency']} </strong>`,
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


  returnColor(efficiency) {
    let data = efficiency.split('%');
    let efficiencyNumber = Number(data[0])

    if (efficiencyNumber <= 50 && efficiencyNumber > 0) {
      return 'red';
    } else if (efficiencyNumber <= 80 && efficiencyNumber > 51) {
      return 'yellow';
    } else if (efficiencyNumber <= 100 && efficiencyNumber > 81) {
      return 'green';
    }
  }
}
