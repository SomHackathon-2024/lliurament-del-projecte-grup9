import { Component } from '@angular/core';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.scss']
})
export class ActivityFormComponent {
  public visible: boolean = true;
  public idiomas = [
    { name: 'Castellano', code: 'es' },
    { name: 'English', code: 'en' },
    { name: 'Français', code: 'fr' },
    { name: 'Deutsch', code: 'de' },
    { name: 'Italiano', code: 'it' },
    { name: 'Português', code: 'pt' },
    { name: 'Русский', code: 'ru' }
  ];

  handleSave() {
    console.log('Save button clicked');
  }

  goBack() {
    console.log('Back button clicked');
  }
}
