import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: String;
  password: String;
  constructor(public toastController: ToastController,
    private router: Router) { }

  ngOnInit() {
  }
  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.presentToastWithOptions('Successfully logged in');
      this.router.navigate(['/map']);
    } 
    else if (this.username === 'worker' && this.password === 'worker') {
      this.presentToastWithOptions('Successfully logged in');
      this.router.navigate(['/map']);
    } 
    else {
      this.presentToastWithOptions('Invalid credentials');
      this.router.navigate(['/login']);
    }
  }

  async presentToastWithOptions(text) {
    const toast = await this.toastController.create({
      message: text,
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Done',
      duration: 1000
    });
    toast.present();
  }
}
