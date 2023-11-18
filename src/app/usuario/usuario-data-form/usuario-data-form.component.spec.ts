import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDataFormComponent } from './usuario-data-form.component';

describe('UsuarioDataFormComponent', () => {
  let component: UsuarioDataFormComponent;
  let fixture: ComponentFixture<UsuarioDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioDataFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuarioDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
