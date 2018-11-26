import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
constructor(public loadingController: LoadingController){

}
// async presentLoading() {
//   const loading = await this.loadingController.create({
//     message: 'Hellooo',
//     duration: 2000
//   });
//   return await loading.present();
// }

async presentLoadingWithOptions() {
  const loading = await this.loadingController.create({
    spinner: 'crescent',
    duration: 2000,
    message: 'Please wait...',
    translucent: true,
    cssClass: 'custom-class custom-loading'
  });
  return await loading.present();
}
}
