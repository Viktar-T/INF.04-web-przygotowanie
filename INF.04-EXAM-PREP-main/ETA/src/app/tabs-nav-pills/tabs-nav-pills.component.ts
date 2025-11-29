import { Component } from '@angular/core';

@Component({
  selector: 'tabs-nav-pills',
  imports: [],
  templateUrl: './tabs-nav-pills.component.html',
  styleUrl: './tabs-nav-pills.component.css'
})
export class TABSNAVPILLSComponent {
    list_items = Array.from({length: 5}, (_,i) => i+1);
    active_tab = "info";
    tabs = [
        {
            id: "info",
            label: "Info",
        },
        {
            id: "list",
            label: "Lista",
        },
        {
            id: "settings",
            label: "Ustawienia",
        }
    ]
    handleClick(id: string) {
        console.log("Tab: " + this.tabs.find(e=>e.id == id)?.label);
        this.active_tab = id;
    }
}
