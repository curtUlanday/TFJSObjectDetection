import { Component, OnInit } from '@angular/core';
import * as coco_ssd from '@tensorflow-models/coco-ssd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title: String;

  ngOnInit(): void {
    this.title = 'TFJSObjectDetection';
    const img = document.getElementById("tfjs_feed");
    console.log(img);
    this.loadModel(img);
  }

  public async loadModel(img: any){

    const model = await coco_ssd.load();
    const prediction = await model.detect(img);

    console.log(prediction);

  }
  

}
