import { ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import userEvent from '@testing-library/user-event'

import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SearchComponent } from './search.component';
import { UsuariosService } from '../service/usuarios.service';


describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        MatIconModule, 
        MatToolbarModule],
      declarations: [SearchComponent]
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

  describe('Verifica service', () => {
    it('Conexão com o service', inject([UsuariosService],
      (service: UsuariosService) => {
        expect(service).toBeTruthy();
      }
    ));

    it('Usuario nulo', inject([UsuariosService],
      (service: UsuariosService) => {
        expect(service.getUsurioNulo()).toBeDefined()
      }
    ));

    it('Usuario um', inject([UsuariosService],
      (service: UsuariosService) => {
        expect(service.getUsuario(1)).toBeDefined()
      }
    ));

    it('Usuario dois', inject([UsuariosService],
      (service: UsuariosService) => {
        expect(service.getUsuario(2)).toBeDefined()
      }
    ));
  });

  describe('Pagina HTML', () => {

    it('Componente criado', () => {
      expect(component).toBeTruthy();
    });

    it('Radio button', () => {
      fixture.detectChanges();
      const radio = fixture.debugElement.nativeElement.querySelector('input[type="radio"]');
      expect(radio).toBeTruthy(); 
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
      tick();
      fixture.detectChanges();  

      fixture.whenStable().then(() => {
        const userSearch = {
          nome: fixture.debugElement.nativeElement.querySelector('#nomeId').textContent,
          email: fixture.debugElement.nativeElement.querySelector('#emailId').textContent,
          msg: fixture.debugElement.nativeElement.querySelector('#msgId').textContent,
          cor: fixture.debugElement.nativeElement.querySelector('#corId').textContent,
          musica: fixture.debugElement.nativeElement.querySelector('#musicaId').textContent
        }
        tick();
        fixture.detectChanges();  
        expect(userSearch).toEqual(userSearchService);
      });
    }));

    it('Card com o usuario correto exemplo 02', fakeAsync(() => {
      fixture.detectChanges(); 

      let userSearchService = {
        nome: 'Exemplo02',
        email: 'exdois@exemplo.com',
        msg: 'Não crie limites para si mesmo. Você deve ir tão longe quanto sua mente permitir. O que você mais quer pode ser conquistado',
        cor: 'Vermelho',
        musica: 'Rock'
      };

      let radio = fixture.debugElement.nativeElement.querySelector('#radio2');
      let button = fixture.debugElement.nativeElement.querySelector('#searchButton');

      radio.checked = true;
      tick();
      fixture.detectChanges();   
      userEvent.click(button);
      tick();
      fixture.detectChanges();      

      fixture.whenStable().then(() => {
        let userSearch = {
          nome: fixture.debugElement.nativeElement.querySelector('#nomeId').textContent,
          email: fixture.debugElement.nativeElement.querySelector('#emailId').textContent,
          msg: fixture.debugElement.nativeElement.querySelector('#msgId').textContent,
          cor: fixture.debugElement.nativeElement.querySelector('#corId').textContent,
          musica: fixture.debugElement.nativeElement.querySelector('#musicaId').textContent
        }
        tick();
        fixture.detectChanges();
        expect(userSearch).toEqual(userSearchService);
      });
    }));
  });

  describe('Verifica CSSs', () => {
    it('Deve ter a classe card', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.card')); 
      expect(el).toBeTruthy();
    });

    it('Deve ter a classe title', () => {
      let el = fixture.debugElement.query(By.css('.title'));
      fixture.detectChanges();
      expect(el).toBeTruthy();
    });

    it('Deve ter a classe car-test', () => {
      let el = fixture.debugElement.query(By.css('.card-text'));
      fixture.detectChanges();
      expect(el).toBeTruthy();
    });
  })
});
