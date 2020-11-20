import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListadoPersonasComponent } from './Consulta/listado-personas/listado-personas.component';
import { ModificarPage } from './modificar/modificar.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'listadoPersonas',
    component: ListadoPersonasComponent
  },
  {
    path: 'modificar/:identificacion',
    component: ModificarPage
  },
  {
    path: 'registro',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  


 


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
