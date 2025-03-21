import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  forwardingDate: string = '';

  constructor() {
    this.setCurrentDate();
  }

  setCurrentDate() {
    const today = new Date();
    this.forwardingDate = today.toISOString().split('T')[0];
  }



  focusNext(nextElement: HTMLInputElement) {
    if (nextElement) {
      setTimeout(() => {
        nextElement.focus();
      }, 0);
    }
  }
  

  searchText: string = '';

  tableData = [
    { siNo: 1, manifestNo: 'FMN-001', forwardingDate: '20-03-2025', destination: 'Warehouse A', totalInvoice: 10, totalCarton: 50, totalWeight: '500kg', mode: 'Truck', forwardBy: 'John Doe', sealNo: 'S001' },
    { siNo: 2, manifestNo: 'FMN-002', forwardingDate: '21-03-2025', destination: 'Warehouse B', totalInvoice: 8, totalCarton: 40, totalWeight: '400kg', mode: 'Train', forwardBy: 'Jane Smith', sealNo: 'S002' },
    { siNo: 3, manifestNo: 'FMN-003', forwardingDate: '22-03-2025', destination: 'Warehouse C', totalInvoice: 15, totalCarton: 70, totalWeight: '700kg', mode: 'Air', forwardBy: 'Mike Lee', sealNo: 'S003' }
  ];

  filteredRows() {
    if (!this.searchText) {
      return this.tableData; // Show all rows if searchText is empty
    }
    return this.tableData.filter(row =>
      row.manifestNo.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
