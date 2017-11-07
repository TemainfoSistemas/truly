import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { routerTransition } from "../../router.animations";

import * as jsonProp from './listboxdemo-dataproperties.json';
import * as jsonEvt from './listboxdemo-events.json';
import { DumpDataService } from "../../shared/services/dumpdata";

@Component( {
  selector: 'app-listbox',
  templateUrl: './listboxdemo.component.html',
  animations: [ routerTransition() ],
  styleUrls: [ './listboxdemo.component.scss' ],
  providers: [DumpDataService]
} )
export class ListBoxDemo {

  private dataTableProperties;

  private events;

  private dataBasic = [];

  private dataCustom = [];

  private dataLazy;

  private take = 100;

  private timeout;

  private example = '{{item.firstName}}';


  constructor(private dataDumpService: DumpDataService) {
    this.dataTableProperties = jsonProp.dataProperties;
    this.events = jsonEvt.events;

    this.dataBasic = this.dataDumpService.createRandomData(2000);
    this.dataCustom = this.dataDumpService.createRandomData(2000);
    this.dataLazy = this.dataDumpService.createRandomData(2000);

    this.dataLazy = {
      "data" : this.getDataFromService(0,this.take),
      "total" : this.dataBasic.length
    }
  }

  getDataFromService(skip, take) {
    return this.dataBasic.slice(skip, take);
  }

  onLazyLoad(event) {
    clearTimeout( this.timeout );
    this.timeout = setTimeout( () => {
      this.dataLazy = {
        "data": this.getDataFromService( event.skip, event.take ),
        "total": this.dataBasic.length
      };
      console.log('datalazy', this.dataLazy);
    }, 2000 );

  }
}
