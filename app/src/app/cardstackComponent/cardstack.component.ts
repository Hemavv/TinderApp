/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component,ViewChild,AfterViewInit,ViewChildren,Output,EventEmitter,QueryList,DoCheck} from '@angular/core'
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
  .img1{
    width:100% !important;
    height:100% !important;
      border:0px !important;
      border-radius: 0px !important;
  }
    .column{
       width:500px;
        height:500px; 
        top: 26px;  
         background-color:white;
           line-height: 100px;  
          text-align: center;     
             
    }
    .header{
        position:absolute;
         margin:5px 5px 5px 15px;
    right:356px;
         top:0px;
    color:white;
    font-size:25px;
    font-family: Arial, Helvetica, sans-serif;
     text-shadow: 1px 1px 1px #000, 
               3px 3px 5px white;
    }
     #viewport .stack {
    width: 200px;
    height: 300px;
    background: #ED5D52;
    position: absolute;
    top: 100px;
    left: 50%;
    margin-left: -100px;
    border-radius: 10px; }
    `]
})

export class cardstackComponent implements AfterViewInit {
    dm: ModelMethods;
//  @Input() cards;
// @Input() stackConfig;
// @Input() throwout;
//  @Input() myswing1;
// @Input() direction;
 cardLength;
 total;
direction;
show=false;
display;
 @ViewChild(SwingStackComponent) swingStack: SwingStackComponent;
  @ViewChildren(SwingCardComponent) swingCards: QueryList<SwingCardComponent>;
// @Output() message=new EventEmitter<any>();

//   cards=this._stackservice.cardsdata;
cards:any;
  temp=[];
  stackConfig: StackConfig;
    constructor(private bdms: BDataModelService,private _stackservice:stackserviceService) {
        this.dm = new ModelMethods(bdms);
// this.get('cardImage');
           this.stackConfig = {
      // Default setting only allows UP, LEFT and RIGHT so you can override this as below
      allowedDirections: [Direction.UP, Direction.DOWN, Direction.LEFT,Direction.RIGHT],
      // Now need to send offsetX and offsetY with element instead of just offset
      throwOutConfidence: (offsetX, offsetY, element) => {
        return Math.min(Math.max(Math.abs(offsetX) / (element.offsetWidth / 1.7), Math.abs(offsetY) / (element.offsetHeight / 2)), 1);
      },
      throwOutDistance: (d) => {
        return 100;
     
      }
    }
    //Invoking from stackserviceService
 this.cards=this._stackservice.cardsdata;
 console.log(this.cards)
   

    }
  ngAfterViewInit(){
  // ViewChild & ViewChildren are only available
    // in this function

    console.log(this.swingStack); // this is the stack
    console.log(this.swingCards); // this is a list of cards

    // we can get the underlying stack
    // which has methods - createCard, destroyCard, getCard etc
    console.log(this.swingStack.stack);
    this.total=this.swingStack.cards.length
    console.log('total',this.swingStack.cards.length);
    // and the cards
    // every card has methods - destroy, throwIn, throwOut etc
    // this.swingCards.forEach((c) => console.log(c.getCard()));

    // this is how you can manually hook up to the
    // events instead of providing the event method in the template
    this.swingStack.throwoutleft.subscribe(
      (event: ThrowEvent) => console.log('Manual hook: ', event));

    this.swingStack.dragstart.subscribe((event: DragEvent) => console.log(event));

    this.swingStack.dragmove.subscribe((event: DragEvent) => 
    {   console.log(event);
        console.log('swingstack',this.swingStack)
        console.log('swingcards',this.swingCards._results.length);
        this.cardLength=this.swingCards._results.length-1;
         this.direction=event.throwDirection;
        console.log(this.direction)
        this.show=true;
  if(this.direction==Direction.LEFT)  {
      this.display="You have swiped Left";
      console.log('display',this.display);
  } else if(this.direction==Direction.RIGHT)  {
      this.display="You have swiped Right";
      console.log('display',this.display);
  } else if(this.direction==Direction.UP)  {
      this.display="You have swiped Up";
      console.log('display',this.display);
  }
  else if(this.direction==Direction.DOWN)  {
      this.display="You have swiped Down";
      console.log('display',this.display);
  }
       
     
    }); 
   
  }

  // This method is called by hooking up the event
  // on the HTML element - see the template above
  onThrowOut(event: ThrowEvent) {
    console.log('Hook from the template', event.throwDirection);
  this.cards.pop();
}
   

 

    get(dataModelName, filter ?, keys ?, sort ?, pagenumber ?, pagesize ?) {
        this.dm.get(dataModelName, this, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
            //   this.cards=result[0].cardsdata;
            //     console.log('cards',this.cards)
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
