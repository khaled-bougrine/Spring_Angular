import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToutsComponent } from './touts/touts.component';
import { ImageComponent } from './image/image.component';

import { ModelComponent } from './model/model.component';
import { Routes,RouterModule,ExtraOptions } from '@angular/router';
import { ModelService } from './service/Model.service';
import { ConfigService } from './service/Config.service';
import { UserService } from './service/User.service';



import { OneModelComponent } from './one-model/one-model.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { SameseriesComponent } from './sameseries/sameseries.component';
import { Product2Component } from './product2/product2.component';
import { BestpriceComponent } from './bestprice/bestprice.component';
import { BestpriceitemComponent } from './bestpriceitem/bestpriceitem.component';
import { OnetypeComponent } from './onetype/onetype.component';
import { AddModelComponent } from './add-model/add-model.component';
import { ToutlesModelComponent } from './toutles-model/toutles-model.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigComponent } from './config/config.component';

import { UpdateModelComponent } from './update-model/update-model.component';
import { ModelLoveComponent } from './model-love/model-love.component';
import { NewUserComponent } from './new-user/new-user.component';
import { CollectionComponent } from './collection/collection.component';
import { CollectionAdminComponent } from './collection-admin/collection-admin.component';
import { CommandComponent } from './command/command.component';



const appRoutes: Routes = [
  { path: 'model/:id1/:id2', component: ModelComponent },
  { path:'tout/:id1/:id2',component:ToutsComponent},
   {path:"",component:HomeComponent},
   {path:'add/:model',component:AddModelComponent},
   {path:'update/:id1/:id2' ,component:UpdateModelComponent},
   {path:"toutlesmodel/:id",component:ToutlesModelComponent},
   {path:"newUser",component:NewUserComponent},
   {path:"login",component:LoginComponent},
   {path:'collectionAdmin/:id/:id1',component:CollectionAdminComponent}
  ]
    const routerOptions: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
  };



@NgModule({
  declarations: [
    AppComponent,
    ToutsComponent,
    ModelComponent,
    OneModelComponent,
    HomeComponent,
    ProductComponent,
    SameseriesComponent,
    Product2Component,
    BestpriceComponent,
    BestpriceitemComponent,
    OnetypeComponent,
    AddModelComponent,
    ToutlesModelComponent,
    LoginComponent,
    ConfigComponent,
    UpdateModelComponent,
    ImageComponent,
    ModelLoveComponent,
    NewUserComponent,
    CollectionComponent,
    CollectionAdminComponent,
    CommandComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
  

    RouterModule.forRoot(appRoutes,routerOptions)
  ],
  providers: [
  ModelService,
  ConfigService,
  UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
