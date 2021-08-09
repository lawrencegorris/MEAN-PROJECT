import { Component} from '@angular/core';
import { Friend } from '../friend';

@Component({
  selector: 'app-meme-form',
  templateUrl: './meme-form.component.html',
  styleUrls: ['./meme-form.component.scss']
})
export class MemeFormComponent{

  friendModel = new Friend('', '', '')

  sendMemeData(){
    console.log('send data')
  }

}
