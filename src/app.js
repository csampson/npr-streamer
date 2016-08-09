import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Player }    from './components/player';

@Component({
  selector: 'app',
  template: `<player></player>`,
  directives: [Player]
})
class AppComponent {}

bootstrap(AppComponent, []);
