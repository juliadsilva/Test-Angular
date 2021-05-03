import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import userEvent from '@testing-library/user-event'

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componete busca criado', () => {
    expect(component).toBeTruthy();
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

    it('Card com o usuario correto exemplo 01', fakeAsync(() => {

      const userSearchService = {
        nome: 'Exemplo01',
        email: 'ex@exemplo.com',
        msg: 'No fim tudo dá certo, e se não deu certo é porque ainda não chegou ao fim',
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
        tick(3000);
        expect(userSearchService).toEqual(userSearch);
      });
    }));

    it('Card com o usuario correto exemplo 02', fakeAsync(() => {

      const userSearchService = {
        nome: 'Exemplo02',
        email: 'exdois@exemplo.com',
        msg: 'Não crie limites para si mesmo. Você deve ir tão longe quanto sua mente permitir. O que você mais quer pode ser conquistado',
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
          email: fixture.debugElement.nativeElement.querySelector('#emailId').textContent,
          msg: fixture.debugElement.nativeElement.querySelector('#msgId').textContent,
          cor: fixture.debugElement.nativeElement.querySelector('#corId').textContent,
          musica: fixture.debugElement.nativeElement.querySelector('#musicaId').textContent
        }
        tick(3000);
        expect(userSearchService).toEqual(userSearch);
      });
    }));
  });
});
