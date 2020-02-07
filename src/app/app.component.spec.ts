import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'repro'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('repro');
  });

  it('should leave a tested component behind 1', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.id = '1';
    fixture.detectChanges();
    expect(app.title).toEqual('repro');
  });

  it('should leave a tested component behind 2', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.id = '2';
    fixture.detectChanges();
    expect(app.title).toEqual('repro');
  });

  it('should leave a tested component behind 3', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.id = '3';
    fixture.detectChanges();
    expect(app.title).toEqual('repro');
  });

  it('should leave a tested component behind 4', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.id = '4';
    fixture.detectChanges();
    expect(app.title).toEqual('repro');
  });

  it('should not leave a tested component behind 1', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('repro');
  });

  it('should not leave a tested component behind 2', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('repro');
  });

  it('should not leave a tested component behind 3', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('repro');
  });
});
