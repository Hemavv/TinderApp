/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, ViewChild, ViewChildren, Output, EventEmitter, QueryList, DoCheck } from '@angular/core'
import { ModelMethods } from '../lib/model.methods';
import { BDataModelService } from '../service/bDataModel.service';
import { stackserviceService } from '../services/stackservice/stackservice.service';
import {
    StackConfig,
    Stack,
    Card,
    ThrowEvent,
    DragEvent,
    Direction,
    SwingStackComponent,
    SwingCardComponent
} from 'angular2-swing';

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
   .headerrow{
       background: linear-gradient(262deg, #ff7854, #fd267d);
     z-index:1
   }
   .cardrow{
       position:relative;
       border-radius: 5%;
   }
    .img {
        height:275px;
        width:280px;
    border-radius: 5px;
    }
    .imgxs{
        height:300px;
    }
    .card1{
        width:300px;
        height:300px;  
        background: #C7433E;
        border: 5px solid #ED5D52; 
        position: relative;
        border-radius:2%; 
        padding:10px; 
    }
    .cardxs{
        width: 275px;
        margin-top: 20%;
    }
    .column{
        position:absolute;
        width:300px;
        height:300px; 
        top:2%;
        background-color:white;
        line-height: 100px;  
        text-align: center;  
        border-radius: 5px;   
             
    }
    .header{
        position:absolute;
        margin:5px 5px 5px 15px;
    right:55%;
        top:0px;
        color:white;
        font-size:25px;
        font-family: Arial, Helvetica, sans-serif;
         text-shadow: 1px 1px 1px #000, 
               3px 3px 5px white;
    }
    `]
})

export class cardstackComponent  {
    dm: ModelMethods;
    cards: any;
    stackConfig: StackConfig;
    @ViewChild(SwingStackComponent) swingStack: SwingStackComponent;
    @ViewChildren(SwingCardComponent) swingCards: QueryList<SwingCardComponent>;

    constructor(private bdms: BDataModelService, public stackservice: stackserviceService) {
        this.dm = new ModelMethods(bdms);
        this.stackConfig = {
            allowedDirections: [Direction.UP, Direction.DOWN, Direction.LEFT, Direction.RIGHT]    
        }
        this.cards = this.stackservice.cards;
    }

    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
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

    delete(dataModelName, filter) {
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
