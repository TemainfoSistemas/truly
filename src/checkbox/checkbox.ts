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
import {
    Component, Input, ViewChild, AfterViewInit, Output, EventEmitter, ChangeDetectionStrategy,
    ChangeDetectorRef
} from '@angular/core';

import { ComponentHasModelBase } from '../core/base/component-has-model.base';
import { IdGeneratorService } from '../core/helper/idgenerator.service';
import { TabIndexService } from '../form/tabIndex.service';
import { NameGeneratorService } from '../core/helper/namegenerator.service';
import { MakeProvider } from '../core/base/value-accessor-provider';

@Component( {
    selector: 'tl-checkbox',
    templateUrl: './checkbox.html',
    styleUrls: [ './checkbox.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        [ MakeProvider(TlCheckBox) ]
    ]
} )
export class TlCheckBox extends ComponentHasModelBase implements AfterViewInit {

    @Input() label = '';

    @Input() tabindex = 0;

    @Input() checked = false;

    @Input() checkmarkColor = '#fff';

    @Input() checkedColorBg = '#66CC99';

    @ViewChild( 'checkbox' ) checkbox;

    @Output() onCheckBox: EventEmitter<any> = new EventEmitter();

    @Output() onFocusBox: EventEmitter<any> = new EventEmitter();

    private toggle = false;

    constructor( tabIndexService: TabIndexService, idService: IdGeneratorService,
                 nameService: NameGeneratorService, private change: ChangeDetectorRef ) {
        super( tabIndexService, idService, nameService );
    }

    ngAfterViewInit() {
        this.setElement( this.checkbox, 'checkbox' );
        if ( this.checked ) {
            this.modelValue = true;
        }
        if (!this.label) {
            throw new EvalError( 'The [label] property is required!' );
        }
        setTimeout( () => {
            this.change.markForCheck();
        }, 1 );
    }

    check( boolean ) {
        this.modelValue = boolean ? (this.toggle = false) : (this.toggle = true);
        this.change.markForCheck();
        this.emitEvent();
    }

    emitEvent() {
        setTimeout( () => {
            this.onCheckBox.emit( this.modelValue );
        }, 1 );
    }

    focusCheckBox() {
        this.onFocusBox.emit( this.modelValue );
    }

}

