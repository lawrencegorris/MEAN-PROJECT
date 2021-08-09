import { Component} from '@angular/core';
import { Friend } from '../friend';
import { AddMemeService } from '../add-meme.service';

@Component({
  selector: 'app-meme-form',
  templateUrl: './meme-form.component.html',
  styleUrls: ['./meme-form.component.scss']
})
export class MemeFormComponent{


  friendModel = new Friend('', '', '')

  sendMemeData(){
    this.addMemeService.addFriend(this.friendModel).subscribe(friend => alert('Your data was added. Nice getting to know you'), error => alert("Hmmm... it didn't work"));  
    console.log(this.friendModel)
  }

  constructor(private addMemeService: AddMemeService){}


}
