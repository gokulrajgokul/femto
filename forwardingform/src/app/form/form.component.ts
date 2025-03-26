import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import {  FormGroup  } from '@angular/forms';

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
    setTimeout(() => {
      const today = new Date();
      this.forwardingDate = today.toISOString().split('T')[0];
    });
  }
  
  
  // setCurrentDate() {
  //   const today = new Date();
  //   this.forwardingDate = today.toISOString().split('T')[0];
  // }




  // forwardingDate: string = '';

  // constructor() {
  //   this.setCurrentDate();
  // }

  // setCurrentDate() {
  //   const today = new Date();
  //   today.setMinutes(today.getMinutes() - today.getTimezoneOffset()); // Adjust for timezone
  //   this.forwardingDate = today.toISOString().split('T')[0];  
  // }
  // setCurrentDate() {
  //   setTimeout(() => {
  //     const today = new Date();
  //     today.setMinutes(today.getMinutes() - today.getTimezoneOffset()); // Adjust for timezone
  //     this.forwardingDate = today.toISOString().split('T')[0];  
  //   });
  // }


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
    { siNo: 3, manifestNo: 'FMN-003', forwardingDate: '22-03-2025', destination: 'Warehouse C', totalInvoice: 15, totalCarton: 70, totalWeight: '700kg', mode: 'Air', forwardBy: 'Mike Lee', sealNo: 'S003' },
    { siNo: 4, manifestNo: 'FMN-004', forwardingDate: '23-03-2025', destination: 'Warehouse D', totalInvoice: 12, totalCarton: 60, totalWeight: '600kg', mode: 'Truck', forwardBy: 'Alice Brown', sealNo: 'S004' },
    { siNo: 5, manifestNo: 'FMN-005', forwardingDate: '24-03-2025', destination: 'Warehouse E', totalInvoice: 9, totalCarton: 45, totalWeight: '450kg', mode: 'Ship', forwardBy: 'Robert White', sealNo: 'S005' },
    { siNo: 6, manifestNo: 'FMN-006', forwardingDate: '25-03-2025', destination: 'Warehouse F', totalInvoice: 14, totalCarton: 65, totalWeight: '650kg', mode: 'Train', forwardBy: 'Emma Green', sealNo: 'S006' },
    { siNo: 7, manifestNo: 'FMN-007', forwardingDate: '26-03-2025', destination: 'Warehouse G', totalInvoice: 11, totalCarton: 55, totalWeight: '550kg', mode: 'Air', forwardBy: 'David Blue', sealNo: 'S007' },
    { siNo: 8, manifestNo: 'FMN-008', forwardingDate: '27-03-2025', destination: 'Warehouse H', totalInvoice: 13, totalCarton: 68, totalWeight: '680kg', mode: 'Truck', forwardBy: 'Sophia Black', sealNo: 'S008' },
    { siNo: 9, manifestNo: 'FMN-009', forwardingDate: '28-03-2025', destination: 'Warehouse I', totalInvoice: 7, totalCarton: 35, totalWeight: '350kg', mode: 'Ship', forwardBy: 'Liam Red', sealNo: 'S009' },
    { siNo: 10, manifestNo: 'FMN-010', forwardingDate: '29-03-2025', destination: 'Warehouse J', totalInvoice: 16, totalCarton: 75, totalWeight: '750kg', mode: 'Train', forwardBy: 'Olivia Yellow', sealNo: 'S010' },
    { siNo: 11, manifestNo: 'FMN-011', forwardingDate: '30-03-2025', destination: 'Warehouse K', totalInvoice: 5, totalCarton: 30, totalWeight: '300kg', mode: 'Air', forwardBy: 'Noah Purple', sealNo: 'S011' },
    { siNo: 12, manifestNo: 'FMN-012', forwardingDate: '31-03-2025', destination: 'Warehouse L', totalInvoice: 18, totalCarton: 80, totalWeight: '800kg', mode: 'Truck', forwardBy: 'Isabella Gray', sealNo: 'S012' },
    { siNo: 13, manifestNo: 'FMN-013', forwardingDate: '01-04-2025', destination: 'Warehouse M', totalInvoice: 6, totalCarton: 38, totalWeight: '380kg', mode: 'Ship', forwardBy: 'Ethan Gold', sealNo: 'S013' },
    { siNo: 14, manifestNo: 'FMN-014', forwardingDate: '02-04-2025', destination: 'Warehouse N', totalInvoice: 17, totalCarton: 78, totalWeight: '780kg', mode: 'Train', forwardBy: 'Mia Silver', sealNo: 'S014' },
    { siNo: 15, manifestNo: 'FMN-015', forwardingDate: '03-04-2025', destination: 'Warehouse O', totalInvoice: 10, totalCarton: 52, totalWeight: '520kg', mode: 'Air', forwardBy: 'James Copper', sealNo: 'S015' },
    { siNo: 16, manifestNo: 'FMN-016', forwardingDate: '04-04-2025', destination: 'Warehouse P', totalInvoice: 14, totalCarton: 68, totalWeight: '680kg', mode: 'Truck', forwardBy: 'Charlotte Bronze', sealNo: 'S016' },
    { siNo: 17, manifestNo: 'FMN-017', forwardingDate: '05-04-2025', destination: 'Warehouse Q', totalInvoice: 8, totalCarton: 44, totalWeight: '440kg', mode: 'Ship', forwardBy: 'Benjamin Titanium', sealNo: 'S017' },
    { siNo: 18, manifestNo: 'FMN-018', forwardingDate: '06-04-2025', destination: 'Warehouse R', totalInvoice: 13, totalCarton: 65, totalWeight: '650kg', mode: 'Train', forwardBy: 'Amelia Platinum', sealNo: 'S018' },
    { siNo: 19, manifestNo: 'FMN-019', forwardingDate: '07-04-2025', destination: 'Warehouse S', totalInvoice: 9, totalCarton: 42, totalWeight: '420kg', mode: 'Air', forwardBy: 'Lucas Diamond', sealNo: 'S019' },
    { siNo: 20, manifestNo: 'FMN-020', forwardingDate: '08-04-2025', destination: 'Warehouse T', totalInvoice: 11, totalCarton: 55, totalWeight: '550kg', mode: 'Truck', forwardBy: 'Harper Emerald', sealNo: 'S020' }
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
