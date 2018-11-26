import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {
  @Input() machineInput: Object;
  constructor(public alertController: AlertController) { }

  ngOnInit() {
    console.log(this.machineInput);
  }


  async openEfficiencyDialog(machineName, machineEfficiency, machineStatus) {
    let machineEfficiencyArray = machineEfficiency.split('%');
    let machineEfficiencyNumber = Number(machineEfficiencyArray[0])
    let colorEff: String;
    if (machineEfficiencyNumber <= 50 && machineEfficiencyNumber > 0) {
      colorEff = 'red';
    } else if (machineEfficiencyNumber <= 80 && machineEfficiencyNumber > 51) {
      colorEff = 'yellow';
    } else if (machineEfficiencyNumber <= 1000 && machineEfficiencyNumber > 81) {
      colorEff = 'green';
    }
    console.log(colorEff);
    console.log(machineStatus);

    let colorStatus: String;
    if (machineStatus === 'Completed') {
      colorStatus = 'green';
    } else if (machineStatus === 'Not-Started') {
      colorStatus = 'gray';
    } else if (machineStatus === 'In-Progress') {
      colorStatus = 'yellow';
    }else if (machineStatus === 'bottleNeck') {
      colorStatus = 'red';
    }
    console.log(colorStatus);

    const alert = await this.alertController.create({
      header: `${machineName}`,
      message: `Efficiency is : <strong style="color:${colorEff}"> ${machineEfficiency} </strong> <br><br>
      Status is : <strong style="color:${colorStatus}"> ${machineStatus} </strong> `,
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
