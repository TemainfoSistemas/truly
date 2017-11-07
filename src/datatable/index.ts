import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TlDatatable } from './datatable';
import { TlDatatableColumn } from './parts/column/datatable-column';
import { TlDatatableHeader } from './parts/column-headers/datatable-header';
import { TlDatatableNormalMode } from './modes/normal/datatable-normal-mode';
import { TlDatatableScrollableMode } from './modes/scrollable/datatable-scrollable-mode';
import { TlDatatablePaginatorMode } from './modes/paginator/datatable-paginator-mode';
import { OverlayModule } from '../overlay/index';
import { TlColgroupDirective } from './directives/colgroup.directive';
import { TlResizerDirective } from './directives/resizer.directive';
import { InputModule } from '../input/index';
import { TlDatatabaleColumnFilter } from './parts/column-filter/datatable-column-filter';
import { DropDownListModule } from '../dropdownlist/index';

export * from './datatable';
export * from './parts/column/datatable-column';
export * from './services/datatable-datasource.service';
export * from './services/datatable-filter.service';
export * from './configs/datatable-filter-options';
export * from './modes/normal/datatable-normal-mode';
export * from './modes/paginator/datatable-paginator-mode';
export * from './modes/scrollable/datatable-scrollable-mode';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        OverlayModule,
        InputModule,
        DropDownListModule
    ],
    declarations: [
        TlColgroupDirective,
        TlDatatable,
        TlDatatableColumn,
        TlDatatabaleColumnFilter,
        TlDatatableHeader,
        TlDatatableNormalMode,
        TlDatatablePaginatorMode,
        TlDatatableScrollableMode,
        TlResizerDirective,
    ],
    exports: [
        TlDatatable,
        TlDatatableColumn
    ]
})
export class DatatableModule {}
