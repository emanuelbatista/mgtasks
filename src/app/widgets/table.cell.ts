import { Component, OnInit, ViewChild } from '@angular/core';

import { PropertyComponent } from 'angularm';

@Component({
    selector: 'td [mgTableCell]',
    template:
        `<div [ngClass]="{'w3-center': configuration.centerCell}">{{property.value}}</div>`,
})
export class TableCellComponent extends PropertyComponent { }
