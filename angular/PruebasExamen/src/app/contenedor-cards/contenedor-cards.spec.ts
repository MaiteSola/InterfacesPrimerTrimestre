import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorCards } from './contenedor-cards';

describe('ContenedorCards', () => {
  let component: ContenedorCards;
  let fixture: ComponentFixture<ContenedorCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenedorCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedorCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
