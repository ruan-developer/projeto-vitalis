import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './site/pages/home/home.component';
import { PlanosComponent } from './site/pages/planos/planos.component';
import { EspecialistasComponent } from './site/pages/especialistas/especialistas.component';
import { FuncionalidadesComponent } from './site/pages/funcionalidades/funcionalidades.component';
import { SobreComponent } from './site/pages/sobre/sobre.component';
import { SidebarComponent } from './web-app/components/sidebar/sidebar.component';
import { HomeAppComponent } from './web-app/pages/home-app/home-app.component';
import { BtnScrollupComponent } from './site/components/widgets/buttons/btn-scrollup/btn-scrollup.component';
import { LoginComponent } from './web-app/pages/auth/login/login.component';
import { BtnGradientComponent } from './site/components/widgets/buttons/btn-gradient/btn-gradient.component';
import { BtnSecondaryComponent } from './site/components/widgets/buttons/btn-secondary/btn-secondary.component';
import { BtnDestaqueComponent } from './site/components/widgets/buttons/btn-destaque/btn-destaque.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConfiguracoesComponent } from './web-app/pages/configuracoes/configuracoes.component';
import { ContaComponent } from './web-app/pages/conta/conta.component';
import { EstacaoVitalComponent } from './web-app/pages/estacao-vital/estacao-vital.component';
import { MinhaJornadaComponent } from './web-app/pages/minha-jornada/minha-jornada.component';
import { CuidarMaisComponent } from './web-app/pages/cuidar-mais/cuidar-mais.component';
import { WebAppLayoutComponent } from './web-app/layout/web-app-layout/web-app-layout.component';
import { LoginPageLayoutComponent } from './web-app/layout/login-page-layout/login-page-layout.component';
import { CadastroComponent } from './web-app/pages/auth/cadastro/cadastro.component';
import { CadastroService } from './shared/services/cadastro.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuarioEspecialistaComponent } from './web-app/pages/auth/usuario-especialista/usuario-especialista.component';
import { UsuarioService } from './shared/services/usuario.service';
import { AprenderComponent } from './web-app/pages/aprender-mais/aprender-mais.component';
import { CalendarioComponent } from './web-app/components/calendario/calendario.component';
import { RegistroEmocionalComponent } from './web-app/pages/estacao-vital/registro-emocional/registro-emocional.component';
import { VideoPlayerComponent } from './web-app/components/video-player/video-player.component';
import { VideoCardComponent } from './web-app/components/video-card/video-card.component';

@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    PlanosComponent,
    EspecialistasComponent,
    FuncionalidadesComponent,
    SobreComponent,
    SidebarComponent,
    HomeAppComponent,
    AprenderComponent,
    BtnScrollupComponent,
    LoginComponent,
    BtnGradientComponent,
    BtnSecondaryComponent,
    BtnDestaqueComponent,
    ConfiguracoesComponent,
    ContaComponent,
    EstacaoVitalComponent,
    MinhaJornadaComponent,
    CuidarMaisComponent,
    WebAppLayoutComponent,
    LoginPageLayoutComponent,
    CadastroComponent,
    UsuarioEspecialistaComponent,
    CalendarioComponent,
    RegistroEmocionalComponent,
    VideoPlayerComponent,
    VideoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot
      ([],
        {
          anchorScrolling: 'enabled',
          scrollPositionRestoration: 'enabled'
        })
  ],
  providers: [CadastroService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }