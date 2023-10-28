import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

//servicios
import {CargarScriptService } from './cargar-script.service';
import {AngularFireModule}from '@angular/fire/compat'
//sc
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScroolComponent } from './components/scrool/scrool.component';
import { Error404Component } from './components/error404/error404.component';
import { Error400Component } from './components/error400/error400.component';
import { Error500Component } from './components/error500/error500.component';
import { CuatrocienComponent } from './components/cuatrocien/cuatrocien.component';
import { PostsComponent } from './components/posts/posts.component';




import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth'



const routes: Routes =[                      

  {path:'home', component:HomeComponent},
  {path:'menu', component:MenuComponent},
  {path:'acercade', component:AcercadeComponent},
  {path:'pedidos', component:PedidosComponent},
  {path:'registro', component:RegistroComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:RegisterComponent},
  {path:'posts',component:PostsComponent},
  {path:'error500', component:Error500Component},
  {path:'login',component:LoginComponent},
  {path:'error400', component:Error400Component},
  {path:'cuatrocien', component:CuatrocienComponent},
  {path:'**', component:Error404Component},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    AcercadeComponent,
    PedidosComponent,
    RegistroComponent,
    DashboardComponent,
    FooterComponent,
    ScroolComponent,
    RegisterComponent,
    Error400Component,
    CuatrocienComponent,
    PostsComponent,
    FilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
    
    
    RouterModule.forRoot(
      routes
    ),
                 provideFirebaseApp(() => initializeApp(environment.firebase)),
                 provideAuth(() => getAuth())
    
  ],
  providers: [
    CargarScriptService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
