import {
    AngularmService, EntityLineComponent, 
    CreateEntityComponent, EditEntityFormComponent,
    FormLineComponent, EditFormLineComponent,
    EntityDetailsComponent, ShowLineComponent,
    ListingTableComponent
} from 'angularm';

import { TableHeaderComponent } from "./widgets/table.header";
import { TableCellComponent } from "./widgets/table.cell";
import { CellEntityLineComponent } from "./widgets/cell.entity.line";
import { CssListTableComponent } from "./widgets/css.list.table";

export let defineRules = (angularm: AngularmService) => {
    angularm
        .ptr('form_line', '*', 'code', null, FormLineComponent, { inputType: 'number' })
        .dptr('form_line', FormLineComponent, { inputType: 'text' })
        .dpr('show_line', ShowLineComponent)
        .detr('list_entities', CssListTableComponent)
        .dptr('table_header', TableHeaderComponent)
        .ptr('table_header', '*', '*', 'integer', TableHeaderComponent, {centerHeader: true} )
        .ptr('table_header', '*', '*', 'date', TableHeaderComponent, {centerHeader: true})
        .der('table_line', CellEntityLineComponent)
        .dpr('table_cell', TableCellComponent)
        .pr('table_cell', '*', '*', 'integer', TableCellComponent, {centerCell: true})
        .pr('table_cell', '*', '*', 'date', TableCellComponent, {centerCell: true})
        .der('show_entity', EntityDetailsComponent)
        .detr('create_form', CreateEntityComponent)
        .der('edit_form', EditEntityFormComponent)
        .pr('edit_form_line', '*', 'code', null, EditFormLineComponent, { inputType: 'number' })
        .dpr('edit_form_line', EditFormLineComponent, { inputType: 'text' });
};
