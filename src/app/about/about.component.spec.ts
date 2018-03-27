import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AboutComponent } from './about.component';
import { MatCardModule, MatListModule, MatProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { LEADERS } from '../shared/leaders';
import { baseURL } from '../shared/baseurl';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {

    let leaderServiceStub = {
      getLeaders: function(): Observable<Leader[]> {
        return Observable.of(LEADERS);
      }
    };

    TestBed.configureTestingModule({
      declarations: [ AboutComponent ],
      imports:[ MatCardModule,
                MatListModule,
                MatProgressSpinnerModule,
                BrowserAnimationsModule,
                RouterTestingModule.withRoutes([{ path: 'about', component: AboutComponent }])  ],
      providers: [
        { provide: LeaderService, useValue: leaderServiceStub },
        { provide: 'BaseURL', useValue: baseURL }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
