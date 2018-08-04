/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component,ViewChild, ViewChildren, QueryList} from '@angular/core'
import { ModelMethods } from '../lib/model.methods';
import { BDataModelService } from '../service/bDataModel.service';
import 'rxjs/add/operator/do';


/**
* Model import Example :
* import { HERO } from '../models/hero.model';
*/

/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */
import {
  StackConfig,
  Stack,
  Card,
  ThrowEvent,
  DragEvent,
  Direction,
  SwingStackComponent,
  SwingCardComponent} from 'angular2-swing';
import { promise } from '../../../node_modules/@types/selenium-webdriver';

@Component({
    selector: 'bh-tinder',
    templateUrl: './tinder.template.html',
   
})

export class tinderComponent   {
    dm: ModelMethods;
    swingStack : any;
//    @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

  receive(event){
      this.swingStack = event;
console.log(this.swingStack);
}
  card: Array<any>;
  stackConfig: StackConfig;

    constructor(private bdms: BDataModelService) {
        this.dm = new ModelMethods(bdms);

           this.stackConfig = {
      // Default setting only allows UP, LEFT and RIGHT so you can override this as below
      allowedDirections: [Direction.UP, Direction.DOWN, Direction.LEFT,Direction.RIGHT],
      // Now need to send offsetX and offsetY with element instead of just offset
      throwOutConfidence: (offsetX, offsetY, element) => {
        return Math.min(Math.max(Math.abs(offsetX) / (element.offsetWidth / 1.7), Math.abs(offsetY) / (element.offsetHeight / 2)), 1);
      },
      throwOutDistance: (d) => {
        return 1200;
       
      }
    }

    this.card = [
         {image:'Web/Icons/lightboost.png',name:"booster"},
      {image:'Web/Icons/liked.png',name:"heart"},
      {image:'Web/Icons/nope.png',name:"wrong"},
      {image:'Web/Icons/girly.jpg',name:"Elastigirl"}
     
    ]
    }
    
ngAfterViewInit()
   {
    // // ViewChild & ViewChildren are only available
    // // in this function
    // console.log('card',this.card);
    // console.log(this.swingStack); // this is the stack
    // console.log(this.swingCards); // this is a list of cards
    // // we can get the underlying stack
    // // which has methods - createCard, destroyCard, getCard etc
    // // console.log(this.swingStack.stack);

    // // and the cards
    // // every card has methods - destroy, throwIn, throwOut etc
    // this.swingCards.forEach((c) => console.log(c.getCard()));

    // // this is how you can manually hook up to the
    // // events instead of providing the event method in the template
    // this.swingStack.throwoutleft.subscribe(
    //   (event: ThrowEvent) => console.log('Manual hook: ', event));

    // this.swingStack.dragstart.subscribe((event: DragEvent) => console.log(event));

    // this.swingStack.dragmove.subscribe((event: DragEvent) => console.log(event));
  }


  onThrowOut(event: ThrowEvent) {
    console.log('Hook from the template', event.throwDirection);
    this.card.pop();
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
