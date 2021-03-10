import { Component, Inject, OnDestroy, OnInit, Optional } from '@angular/core';

import { ProductModel, Products } from '../../models/products.model';
import {
  ConfigOptionsService,
  ConstantService,
  ConstantServiceObj,
  generatedString,
  GeneratorFactory,
  GeneratorService,
  LocalStorageService,
  LocalStorageSrvInstance,
} from '../../../core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  providers: [
    ConfigOptionsService,
    { provide: ConstantService, useValue: ConstantServiceObj },
    GeneratorService,
    { provide: generatedString, useFactory: GeneratorFactory(7), deps: [GeneratorService] },
    { provide: LocalStorageService, useValue: LocalStorageSrvInstance },
  ],
})
export class FirstComponent implements OnInit, OnDestroy {
  firstProduct: ProductModel[] = [{
    id: 0,
    name: 'Hublot Big Bang Original',
    description: 'Made in Switzerland, Production date: 2021, Steel Ceramic',
    price: 12500,
    category: Products.Luxury,
    isAvailable: true,
  }];
  localStrKey = 'my-local-storage-key';
  localStrValue: string;

  constructor(
    @Optional() private configOptionsService: ConfigOptionsService,
    @Optional() private constantService: ConstantService,
    @Optional() @Inject(generatedString) private generatorService: any,
    @Optional() private localStorageIns: LocalStorageService,
  ) { }

  ngOnInit(): void {
    this.configOptionsService.setConfig({id: 0, login: 'first', email: 'firstname@email.com'});
    console.log('config from configOptionsService: ', this.configOptionsService.getConfig());

    console.log('constantService: ');
    console.dir(this.constantService);

    this.localStorageIns.setData(this.localStrKey, this.generatorService);
    this.localStrValue = this.localStorageIns.getData(this.localStrKey);
  }

  ngOnDestroy(): void {
    this.localStorageIns.removeData(this.localStrKey);
  }
}
