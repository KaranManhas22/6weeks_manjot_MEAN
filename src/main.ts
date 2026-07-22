import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export function baseurl(){
  return "https://back.mnjot.online/api/";
}

export function imageurl(){
  return "https://back.mnjot.online/";
}

const provider = [
  {
    provide:'baseurl',useFactory:baseurl,deps:[]
  },
  {
    provide:'imageurl',useFactory:imageurl,deps:[]
  }
]

platformBrowserDynamic(provider).bootstrapModule(AppModule)
  .catch(err => console.error(err));
