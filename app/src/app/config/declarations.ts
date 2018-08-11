import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { NotificationService } from '../service/notification.service';
import { LocalStorageService } from '../service/local-storage.service';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { BAuthGuard } from '../service/bAuthGuard.service';
import { BAppService } from '../service/bApp.service';
import { BLocalStorageService } from '../service/bLocalStorage.service';
import { BSessionStorage } from '../service/bSessionStorage.service';
import { BLoginService } from '../service/bLogin.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BHttp } from '../service/bHTTP';
import { BHTTPLoader } from '../service/bHTTPLoader';
import { PubSubService } from '../service/pubSub.service';
import { AlertComponent } from '../alertComponent/alert.component';
import { BDataSourceService } from '../service/bDataSource.service';
import { bhiveMapComponent } from '../mapComponent/map.component';
import { APP_INITIALIZER } from '@angular/core';
import { BLogoutService } from '../service/bLogout.service';
import { BDataModelService} from '../service/bDataModel.service';
import { bsignatureComponent } from '../bsignatureComponent/bsignature.component';
import { btoggleoptionsComponent } from '../btoggleoptionsComponent/btoggleoptions.component';

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-stackserviceService
import { stackserviceService } from '../services/stackservice/stackservice.service';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../homeComponent/home.component';
//CORE_REFERENCE_IMPORT-cardstackserviceService
// import { cardstackserviceService } from '../services/cardstackservice/cardstackservice.service';
//CORE_REFERENCE_IMPORT-cardstackComponent
import { cardstackComponent } from '../cardstackComponent/cardstack.component';
//CORE_REFERENCE_IMPORT-tinderComponent
import { tinderComponent } from '../tinderComponent/tinder.component';


export function startupServiceFactory(startupService: BLocalStorageService): Function {
  return () => startupService.initStorage();
}


/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];

/**
*Entry Components for @NgModule
*/
export const appEntryComponents: any = [
  AlertComponent
  //CORE_REFERENCE_PUSH_TO_ENTRY_ARRAY
];

/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  AlertComponent,
  bsignatureComponent,
  btoggleoptionsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
homeComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-cardstackComponent
cardstackComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-tinderComponent
tinderComponent,
  PageNotFoundComponent,
  bhiveMapComponent
];

/**
* provider for @NgModuke
*/
export const appProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: BHttp,
    multi: true
  },
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [BLocalStorageService],
    multi: true
  },
  NotificationService,
  BAuthGuard,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-stackserviceService
stackserviceService,
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-cardstackserviceService

  LocalStorageService,
  PubSubService,
  BLoginService,
  BSessionStorage,
  BLocalStorageService,
  BAppService,
  BLogoutService,
  BHTTPLoader,
  BDataSourceService,
  BDataModelService

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'cardstack', component: cardstackComponent},{path: '', redirectTo: 'cardstack', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
