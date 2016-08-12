import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
// import {enableProdMode} from '@angular/core';
import {FirebaseService} from 'ng2-firebase/core';

import {APP_ROUTER_PROVIDERS} from './app/app.routes';
import {App} from './app/app';

// enableProdMode()
declare var Firebase;

bootstrap(App, [
    HTTP_PROVIDERS,
    APP_ROUTER_PROVIDERS,
    {
        provide: LocationStrategy,
        useClass: HashLocationStrategy
    },
    {
        provide: FirebaseService,
        useFactory: () => new FirebaseService(
            new Firebase('https://baby-feeding-13d50.firebaseio.com/')
        )
    }

])
.catch(err => console.error(err));
