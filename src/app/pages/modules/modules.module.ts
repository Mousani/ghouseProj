import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from 'angular2-datatable';
import { HttpModule } from '@angular/http';
import { DataFilterPipe } from './components/contacts/data-filter.pipe';
import { HotTable, HotTableModule } from 'ng2-handsontable';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
// import { BrowserModule } from '@angular/platform-browser';
import { routing } from './modules.routing';
import { Modules } from './modules.component';

import { Contacts } from './components/contacts/contacts.component';
import { ContactsService } from './components/contacts/contacts.service';

import { Costing } from './components/costing/costing.component';
import { CostingService } from './components/costing/costing.service';
import { CostingDataFilterPipe } from './components/costing/costing-data-filter.pipe';

import { InlineForm } from './components/contacts/components/inlineForm';

import { ViewContact } from './components/contacts/components/viewContact';
import { ViewAddress } from './components/contacts/components/viewAddress';

import { KeysPipe } from './components/contacts/components/viewContact/keys.pipe';
import { AddressKeysPipe } from './components/contacts/components/editAddress/address-keys.pipe';

import { Invoices } from './components/invoices/invoices.component';
import { InvoicesService } from './components/invoices/invoices.service';
import { InvoicesDataFilterPipe } from './components/invoices/invoices-data-filter.pipe';
import { Invoice } from './components/invoices/components/invoice/invoice.component';
import { ViewInvoice } from './components/invoices/components/viewInvoice/viewInvoice.component';
import { InvoiceParts } from './components/invoices/components/invoiceParts/invoiceParts.component';
import { DateObj } from './components/invoices/components/invoice/dateObj.componet';
import { AddPart } from './components/invoices/components/addPart';

import { Parts } from './components/parts/parts.component';
import { PartsService } from './components/parts/parts.service';
import { PartsDataFilterPipe } from './components/parts/parts-data-filter.pipe';

import { EditAddress } from './components/contacts/components/editAddress';

import { ViewAddressSimple } from './components/contacts/components/inlineForm/components/viewAddressSimple';
// import { ViewAddressSimpleService } from './components/contacts/components/viewAddressSimple/viewAddressSimple.service';


import { Quotes } from './components/quotes/quotes.component';
import { QuotesService } from './components/quotes/quotes.service';
import { QuotesDataFilterPipe } from './components/quotes/quotes-data-filter.pipe';
import { Quote } from './components/quotes/components/quote/quote.component';
import { ViewQuote } from './components/quotes/components/viewQuote/viewQuote.component';
import { QuoteParts } from './components/quotes/components/quoteParts/quoteParts.component';
import { AddQuotePart } from './components/quotes/components/addQuotePart/addQuotePart.component';


import { PurchaseOrders } from './components/purchaseOrders/purchaseOrders.component';
import { PurchaseOrdersService } from './components/purchaseOrders/purchaseOrders.service';
import { purchaseOrdersDataFilterPipe } from './components/purchaseOrders/purchaseOrders-data-filter.pipe';
import { NewPO } from './components/purchaseOrders/components/newPO/newPO.component';
import { ViewPO } from './components/purchaseOrders/components/viewPO';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule,
    DataTableModule,
    HttpModule,
    // BrowserModule,
     FormsModule, Ng2AutoCompleteModule
  ],
  declarations: [
    Modules,
    Contacts,
    Costing,
    DataFilterPipe,
    InlineForm,
    ViewContact,
    ViewAddress,
    KeysPipe,
    Invoices,
    AddressKeysPipe,
    ViewAddressSimple,
    CostingDataFilterPipe,
    InvoicesDataFilterPipe,
    Invoice,
    ViewInvoice,
    InvoiceParts,
    Parts,
    PartsDataFilterPipe,
    DateObj,
    Quotes,
    QuotesDataFilterPipe,
    Quote,
    ViewQuote,
    QuoteParts,
    PurchaseOrders,
    purchaseOrdersDataFilterPipe,
    NewPO,
    ViewPO,
    // EditAddress,
  ],
  providers: [
    ContactsService,
    CostingService,
    InvoicesService,
    PartsService,
    QuotesService,
    PurchaseOrdersService,
  ],
  // entryComponents: [
  //   EditAddress,
  // ],
})
export class ModulesModule {
}
