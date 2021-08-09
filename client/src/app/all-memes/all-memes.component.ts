import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-memes',
  templateUrl: './all-memes.component.html',
  styleUrls: ['./all-memes.component.scss']
})
export class AllMemesComponent implements OnInit {

  allMemes: any;

  public async getMemes(url: string): Promise <any>{
    await fetch(url, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
      return res.json()
    })
    .then(data => this.allMemes = data);
    return;
  }

  ngOnInit(): any{
    this.getMemes('http://localhost:9001/all-friends')
  }

}
