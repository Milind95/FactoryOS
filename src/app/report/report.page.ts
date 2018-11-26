import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  rows = [{
    "name": "Ramesh",
    "efficiency": "90%",
    "action": "blank"
  },
  {
    "name": "Ramesh",
    "efficiency": "90%",
    "action": "blank"
  },
  {
    "name": "Ramesh",
    "efficiency": "90%",
    "action": "blank"
  },
  {
    "name": "Ramesh",
    "efficiency": "90%",
    "action": "blank"
  },
  {
    "name": "Samesh",
    "efficiency": "90%",
    "action": "Assign Training"
  }];
  tablestyle = 'bootstrap';
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  columns = [
    { prop: 'name', sortable: true },
    { name: 'efficiency', sortable: true },
    { name: 'action', sortable: true }
  ];
  constructor(private alertController: AlertController) { }

  ngOnInit() {
    setTimeout(() => { this.loadingIndicator = false; }, 1500);
  }

  async assignTraining(allValue) {
    	let name = allValue['name'];
    console.log(allValue);
    const alert = await this.alertController.create({
      message: `Training assigned successfully to <strong style=""> ${name} </strong>`,
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
