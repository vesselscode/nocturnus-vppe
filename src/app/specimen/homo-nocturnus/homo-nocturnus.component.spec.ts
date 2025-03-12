import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomoNocturnusComponent } from './homo-nocturnus.component';

describe('HomoNocturnusComponent', () => {
  let component: HomoNocturnusComponent;
  let fixture: ComponentFixture<HomoNocturnusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomoNocturnusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomoNocturnusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
