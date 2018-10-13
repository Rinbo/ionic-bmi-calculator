import { NavController } from 'ionic-angular';
import { AboutPage } from './about'
import { TestBed, async } from "@angular/core/testing";
import { IonicModule } from "ionic-angular";
import {  NavControllerMock } from "ionic-mocks";

describe("AboutPage", () => {
  let aboutpage;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutPage
      ],
      imports: [IonicModule.forRoot(AboutPage)],
      providers: [
        { provide: NavController, useFactory: () => NavControllerMock.instance() }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    let fixture = TestBed.createComponent(AboutPage);
    aboutpage = fixture.componentInstance;
  });

  it("should create the tabs page", () => {
    expect(aboutpage).toBeTruthy();
    expect(aboutpage instanceof AboutPage).toEqual(true);
  });

});

