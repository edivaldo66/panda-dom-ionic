import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Início',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Sobre',
      url: '/sobre',
      icon: 'help'
    },
    {
      title: 'Sobre Apink',
      url: '/sobre-apink',
      icon: 'musical-notes'
    },
    {
      title: 'Listagem',
      url: '/listagem',
      icon: 'list'
    },
    {
      title: 'Cadastro',
      url: '/cadastro',
      icon: 'checkbox-outline'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
