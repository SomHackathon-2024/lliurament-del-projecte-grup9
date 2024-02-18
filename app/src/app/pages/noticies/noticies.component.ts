import { Component } from '@angular/core';

@Component({
  selector: 'app-noticies',
  templateUrl: './noticies.component.html',
  styleUrls: ['./noticies.component.scss']
})
export class NoticiesComponent {

  public news = [
    {
      title: 'FESTA MAYOR',
      description: 'Celebrate local culture and traditions with music, dance, and delicious food! A vibrant experience full of joy and color. Don\'t miss it! 🎉',
      date: "24/7/2024",
      img: 'assets/img/news/01.png'
    },
    {
      title: 'LOCAL MARKET',
      description: 'Dive into the city\'s daily life with fresh produce, crafts, and authentic flavors. Experience a unique shopping adventure. 🛍️',
      date: "27/8/2024",
      img: 'assets/img/news/02.png'
    },
    {
      title: 'FAIR',
      description: 'Save big at the fair! Discover incredible deals on a variety of goods. Don\'t miss out on this opportunity to shop and save. 🎪',
      date: "5/3/2024",
      img: 'assets/img/news/03.png'
    },
  ];

  constructor() { }

}
