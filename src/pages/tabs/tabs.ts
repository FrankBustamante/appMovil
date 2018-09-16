import { Component } from '@angular/core';
import { ListPage } from '../list/list';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CitePage }from '../cite/cite';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
	
  tab1Root = HomePage;
  tab2Root = CitePage;
  tab3Root = ListPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
