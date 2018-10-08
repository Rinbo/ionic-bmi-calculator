import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {
  height: number;
  weight: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {    
  }
  calculateBMI() {
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }

}
