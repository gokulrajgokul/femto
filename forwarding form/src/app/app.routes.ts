import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { SenderreceiverComponent } from './senderreceiver/senderreceiver.component';

export const routes: Routes = [
    { path: 'form', component: FormComponent },
    { path: '', component: SenderreceiverComponent },
    { path: 'senderreceiver', component: SenderreceiverComponent },

];
