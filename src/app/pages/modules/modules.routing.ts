import { Routes, RouterModule } from '@angular/router';

import { Modules } from './modules.component';
import { Contacts } from './components/contacts/contacts.component';
import { Costing } from './components/costing/costing.component';
import { Invoices } from './components/invoices/invoices.component';

import { Parts } from './components/parts/parts.component';
import { Quotes } from './components/quotes/quotes.component';
import { PurchaseOrders } from './components/purchaseOrders/purchaseOrders.component';

import { Modals } from '../../theme/components/modals/modals.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Modules,
    children: [
      { path: 'contacts', component: Contacts },
      { path: 'costing', component: Costing },
      { path: 'invoices', component: Invoices },

      { path: 'parts', component: Parts },
      { path: 'quotes', component: Quotes },
      { path: 'parts', component: Parts },
      { path: 'purchase_orders', component: PurchaseOrders },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
