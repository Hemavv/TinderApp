import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SwingModule } from 'angular2-swing';
import { appDeclarations, appBootstrap, appProviders, appEntryComponents } from './config/declarations';
import { appImportModules } from './config/import-modules';
import { stackserviceService } from './services/stackservice/stackservice.service';
@NgModule({
  declarations: [...appDeclarations],
  imports: [...appImportModules,FormsModule,
    HttpModule,
    SwingModule
  ],
  providers: [...appProviders,stackserviceService],
  entryComponents: [...appEntryComponents],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [...appBootstrap]
})
export class AppModule { }
