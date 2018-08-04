/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit,Input,ViewChild,AfterViewInit,ViewChildren,Output,EventEmitter,QueryList } from '@angular/core'
import { ModelMethods } from '../lib/model.methods';
import { BDataModelService } from '../service/bDataModel.service';
import {
    StackConfig,
    Stack,
    Card,
    ThrowEvent,
    DragEvent,
    Direction,
    SwingStackComponent,
    SwingCardComponent} from 'angular2-swing';
/**
* Model import Example :
* import { HERO } from '../models/hero.model';
*/

/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-cardstack',
    templateUrl: './cardstack.template.html',
    styles: [`
    .img {
        height:500px;
        width:500px;
   background-size: cover;
   border: 10px solid #ECECEC; 
    border-radius: 5px;
    }
    .column{
       width:500px;
        height:500px; 
           top: 26px;  
                  background-color:white;
                          line-height: 100px;  
                               text-align: center;     
          cursor: default;     
    }
    .header{
        position:absolute;
         margin:5px 5px 5px 15px;
    color:white;
    font-size:25px;
    font-family: Arial, Helvetica, sans-serif;
     text-shadow: 1px 1px 1px #000, 
               3px 3px 5px white;
     
    }
    `]
})

export class cardstackComponent implements AfterViewInit {
    dm: ModelMethods;
 @Input() card;
@Input() stackConfig;
@Input() throwout;
@Input() myswing1;
 

  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;
@Output() message=new EventEmitter<any>();
    constructor(private bdms: BDataModelService) {
        this.dm = new ModelMethods(bdms);
   

    }
  ngAfterViewInit(){
       console.log(this.swingStack); 
    console.log(this.swingCards);
    this.message.emit(this.swingStack);
    this.message.emit(this.swingCards);
    console.log(this.card);

  }

    get(dataModelName, filter ?, keys ?, sort ?, pagenumber ?, pagesize ?) {
        this.dm.get(dataModelName, this, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            });
    }

    getById(dataModelName, dataModelId) {
        this.dm.getById(dataModelName, dataModelId,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            })
    }

    put(dataModelName, dataModelObject) {
        this.dm.put(dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    validatePut(formObj, dataModelName, dataModelObject) {
        this.dm.validatePut(formObj, dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    update(dataModelName, update, filter, options) {
        const updateObject = {
            update: update,
            filter: filter,
            options: options
        };
        this.dm.update(dataModelName, updateObject,
            result => {
                //  On Success code here
            }, error => {
                // Handle errors here
            })
    }

    delete (dataModelName, filter) {
        this.dm.delete(dataModelName, filter,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    deleteById(dataModelName, dataModelId) {
        this.dm.deleteById(dataModelName, dataModelId,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    updateById(dataModelName, dataModelId, dataModelObj) {
        this.dm.updateById(dataModelName, dataModelId, dataModelObj,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }


}
