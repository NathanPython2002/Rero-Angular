
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `<p>The user's name is {{ name() }}</p>`,
  standalone: true,
})
export class User {
  name = input<string>(); //  Input property for the user's name
}

