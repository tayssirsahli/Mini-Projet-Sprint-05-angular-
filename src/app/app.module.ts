import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CosmetiquesComponent } from './cosmetiques/cosmetiques.component';
import { AddCosmetiqueComponent } from './add-cosmetique/add-cosmetique.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UpdateCosmetiqueComponent } from './update-cosmetique/update-cosmetique.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParClasstficationComponent } from './recherche-par-classtfication/recherche-par-classtfication.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';






@NgModule({
  declarations: [
    AppComponent,
    CosmetiquesComponent,
    AddCosmetiqueComponent,
    UpdateCosmetiqueComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParClasstficationComponent,
    SearchFilterPipe,
    RechercheParNomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }


