import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import userEvent  from '@testing-library/user-event'

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
      const nomeSearch = fixture.debugElement.nativeElement.querySelector('#nomeId');
      const emailSearch = fixture.debugElement.nativeElement.querySelector('#emailId');
      const msgSearch = fixture.debugElement.nativeElement.querySelector('#msgId');
      const corSearch = fixture.debugElement.nativeElement.querySelector('#corId');
      const musicaSearch = fixture.debugElement.nativeElement.querySelector('#musicaId');

      const userSearchService = {
        nome: 'Nome',
        email: 'E-mail',
        msg: '',
        cor: '',
        musica: ''
      };

      const userSearch = {
        nome: nomeSearch.textContent,
        email: emailSearch.textContent,
        msg: msgSearch.textContent,
        cor: corSearch.textContent,
        musica: musicaSearch.textContent
      }

      expect(userSearchService).toEqual(userSearch);
    });

    it('Card com o usuario correto exemplo 01', () => {
      const radio = fixture.debugElement.nativeElement.querySelector('input[type="radio"]');
      userEvent.type(radio, '1')
      const nomeSearch = fixture.debugElement.nativeElement.querySelector('#nomeId');
      const emailSearch = fixture.debugElement.nativeElement.querySelector('#emailId');
      const msgSearch = fixture.debugElement.nativeElement.querySelector('#msgId');
      const corSearch = fixture.debugElement.nativeElement.querySelector('#corId');
      const musicaSearch = fixture.debugElement.nativeElement.querySelector('#musicaId');

      const userSearchService = {
        nome: 'Exemplo01',
        email: 'ex@exemplo.com',
        msg: 'A persistência é o caminho do êxito',
        cor: 'Azul',
        musica: 'Pop'
      };

      const userSearch = {
        nome: nomeSearch.textContent,
        email: emailSearch.textContent,
        msg: msgSearch.textContent,
        cor: corSearch.textContent,
        musica: musicaSearch.textContent
      }

      expect(userSearchService).toEqual(userSearch);
    });

    it('Card com o usuario correto exemplo 02', () => {
      const nomeSearch = fixture.debugElement.nativeElement.querySelector('#nomeId');
      const emailSearch = fixture.debugElement.nativeElement.querySelector('#emailId');
      const msgSearch = fixture.debugElement.nativeElement.querySelector('#msgId');
      const corSearch = fixture.debugElement.nativeElement.querySelector('#corId');
      const musicaSearch = fixture.debugElement.nativeElement.querySelector('#musicaId');

      const userSearchService = {
        nome: 'Exemplo02',
        email: 'exdois@exemplo.com',
        msg: 'A persistência é o caminho do êxito',
        cor: 'Vermelho',
        musica: 'Rock'
      };

      const userSearch = {
        nome: nomeSearch.textContent,
        email: emailSearch.textContent,
        msg: msgSearch.textContent,
        cor: corSearch.textContent,
        musica: musicaSearch.textContent
      }
      expect(userSearchService).toEqual(userSearch);
    });
  });
});
