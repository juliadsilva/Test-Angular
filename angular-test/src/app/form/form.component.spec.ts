import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import userEvent from '@testing-library/user-event'
import { SyncAsync } from '@angular/compiler/src/util';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [FormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Testes Unitários', () => {

    it('Componente criado', () => {
      expect(component).toBeTruthy();
    });

    it('Radio button', () => {
      const radio = fixture.debugElement.nativeElement.querySelector('input[type="radio"]');
      fixture.detectChanges();
      expect(radio).toBeTruthy(); // Expected false to be truthy
    });

    it('Card em branco', () => {
      const userSearchService = {
        nome: 'Nome',
        email: 'E-mail',
        msg: '',
        cor: '',
        musica: ''
      };

      const userSearch = {
        nome: fixture.debugElement.nativeElement.querySelector('#nomeId').textContent,
        email: fixture.debugElement.nativeElement.querySelector('#emailId').textContent,
        msg: fixture.debugElement.nativeElement.querySelector('#msgId').textContent,
        cor: fixture.debugElement.nativeElement.querySelector('#corId').textContent,
        musica: fixture.debugElement.nativeElement.querySelector('#musicaId').textContent
      }
      expect(userSearchService).toEqual(userSearch);
    });

    it('Card com o usuario correto exemplo 02', (done) => {

      const userSearchService = {
        nome: 'Exemplo02',
        email: 'exdois@exemplo.com',
        msg: 'A persistência é o caminho do êxito',
        cor: 'Vermelho',
        musica: 'Rock'
      };

      const radio = fixture.debugElement.nativeElement.querySelector('#radio2');
      const button = fixture.debugElement.nativeElement.querySelector('#searchButton');

      radio.checked = true;
      userEvent.click(button);
      fixture.detectChanges();

      fixture.whenStable().then(() => {

        const userSearch = {
          nome: fixture.debugElement.nativeElement.querySelector('#nomeId').textContent,
          email: fixture.debugElement.nativeElement.querySelector('#emailId').emailSearch.textContent,
          msg: fixture.debugElement.nativeElement.querySelector('#msgId').textContent,
          cor: fixture.debugElement.nativeElement.querySelector('#corId').textContent,
          musica: fixture.debugElement.nativeElement.querySelector('#musicaId').textContent
        }
        expect(userSearchService).toEqual(userSearch);
      });
      done();
    });

    it('Card com o usuario correto exemplo 01', fakeAsync(()=> {

      const userSearchService = {
        nome: 'Exemplo01',
        email: 'ex@exemplo.com',
        msg: 'A persistência é o caminho do êxito',
        cor: 'Azul',
        musica: 'Pop'
      };

      const radio = fixture.debugElement.nativeElement.querySelector('#radio1');
      const button = fixture.debugElement.nativeElement.querySelector('#searchButton');

      radio.checked = true;
      userEvent.click(button);
      fixture.detectChanges();

      fixture.whenStable().then(() => {

        const userSearch = {
          nome: fixture.debugElement.nativeElement.querySelector('#nomeId').textContent,
          email: fixture.debugElement.nativeElement.querySelector('#emailId').textContent,
          msg: fixture.debugElement.nativeElement.querySelector('#msgId').textContent,
          cor: fixture.debugElement.nativeElement.querySelector('#corId').textContent,
          musica: fixture.debugElement.nativeElement.querySelector('#musicaId').textContent
        }
        fixture.detectChanges();
        expect(userSearchService).toEqual(userSearch);
      });
    }));
  });
});
