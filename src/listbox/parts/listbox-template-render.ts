/*
 MIT License

 Copyright (c) 2017 Temainfo Sistemas

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */

import { EmbeddedViewRef, Injectable, NgZone } from '@angular/core';
import { ListBoxDataSourceService } from '../services/listbox-datasource.service';
import { TlListBox } from '../listbox';


@Injectable()
export class ListBoxTemplateRenderService {

    private listBox: TlListBox;

    constructor( private dataService: ListBoxDataSourceService,
                 private zone: NgZone ) {
    }

    setInstanceListBox( listbox: TlListBox ) {
        this.listBox = listbox;
    }

    createCustomTemplate() {
        if ( this.dataService.datasource ) {
            this.zone.runOutsideAngular( () => {
                this.listBox.handleRemoveListChildren();
                for ( let row = 0; row < this.dataService.datasource.length; row++ ) {
                    const nodes = this.createViewTemplate( this.dataService.datasource[ row ], row );
                    this.listBox.listTemplateContainer.viewList.insert( nodes );

                    for ( const element of nodes.rootNodes ) {
                        if ( element.nodeName === 'LI' ) {
                            this.listBox.renderer.appendChild( this.listBox.listBox.nativeElement, element );
                            this.listBox.renderer.setAttribute( element, 'data-indexnumber', String( (row + this.listBox.skip) ) );
                            this.listBox.renderer.setAttribute( element, 'tabindex', '-1' );
                            this.listBox.renderer.setStyle( element, 'top', (row + this.listBox.skip) * this.listBox.rowHeight + 'px' );
                            this.listBox.renderer.setStyle( element, 'position', 'absolute' );
                            this.listBox.renderer.setStyle( element, 'width', '100%' );
                            this.listBox.renderer.setStyle( element, 'height', this.listBox.rowHeight + 'px' );
                        }
                    }
                }
                this.listBox.handleCreateAddNew();
            } );
            this.listBox.getElementOfList();
        }
    }

    createViewTemplate( item, index ): EmbeddedViewRef<any> {
        return this.listBox.template.createEmbeddedView( {
            item: item,
            index: index
        } );
    }
}
