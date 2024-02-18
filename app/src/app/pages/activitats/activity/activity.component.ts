import { Component } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent {
  public activitats = [
    {
      titol: 'Activitat 1',
      descripcio: 'Entspannen Sie sich am Strand von Mataró! Genießen Sie die Sonne, den Sand und das kristallklare Meer. Es erwarten Sie unvergessliche Momente zwischen Lachen und Meeresbrise! 🌊☀️',
      data: '01/01/2021',
      img: 'assets/img/activity/Vela.jpg',

    },
    {
      titol: 'Activitat 2',
      descripcio: 'Come to a magnificent guide through the art galleries of the NAU GAUDI, you will enjoy a great cultural experience.🎨',
      data: '02/01/2021',
      img: 'assets/img/activity/correr.jpg'
    },
    {
      titol: 'Activitat 3',
      descripcio: 'Quieres practicar calistenia, ven a la playa a juntarte con más gente para practicar. Cuantos más seamos, mejor nos lo pasaremos mientras entrenamos duro y con esfuerzo para hacernos más fuertes. 💪💪💪',
      data: '03/01/2021',
      img: 'assets/img/activity/cocoa.jpg'
    },
    {
      titol: 'Activitat 4',
      descripcio: 'Entspannen Sie sich am Strand von Mataró! Genießen Sie die Sonne, den Sand und das kristallklare Meer. Es erwarten Sie unvergessliche Momente zwischen Lachen und Meeresbrise! 🌊☀️',
      data: '04/01/2021',
      img: 'assets/img/activity/museo.jpeg'
    },
    {
      titol: 'Activitat 5',
      descripcio: 'Apunteuvos a la calçotada, nens, pares i avis, tothom qui shi vulgui apuntar pot, farem un gran dinar per tots nosaltres,no heu de portar res només vindre amb un somriure. 😁',
      data: '05/01/2021',
      img: 'assets/img/activity/surf.jpg'
    }
  ];
}
