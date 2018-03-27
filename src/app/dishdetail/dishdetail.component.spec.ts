import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DishdetailComponent } from './dishdetail.component';
import { MatCardModule, MatListModule, MatInputModule, MatProgressSpinnerModule, MatSliderModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'; 

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { DISHES } from '../shared/dishes';
import { baseURL } from '../shared/baseurl';

describe('DishdetailComponent', () => {
  let component: DishdetailComponent;
  let fixture: ComponentFixture<DishdetailComponent>;

  beforeEach(async(() => {

    let dishServiceStub = {
      getDishIds: function(): Observable<Dish[]> {
        return Observable.of(DISHES);
      },
      getDish: function(): Observable<Dish[]> {
        return Observable.of(DISHES);
      }
    };

    TestBed.configureTestingModule({
      declarations: [ DishdetailComponent ],
      imports:[ MatCardModule,
                MatListModule,
                MatInputModule,
                MatProgressSpinnerModule,
                BrowserAnimationsModule,
                MatSliderModule,
                ReactiveFormsModule,
                RouterTestingModule.withRoutes([{ path: 'dishdetail', component: DishdetailComponent }])
              ],
      providers: [
        { provide: DishService, useValue: dishServiceStub },
        { provide: 'BaseURL', useValue: baseURL }
      ]
    })
    .compileComponents();

    let dishservice = TestBed.get(DishService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
