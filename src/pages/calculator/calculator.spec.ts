import { CalculatorPage } from "./calculator";
import { TestBed, async, inject } from "@angular/core/testing";
import { IonicModule, Platform, NavController, NavParams } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen, } from "@ionic-native/splash-screen";
import { PlatformMock, StatusBarMock, SplashScreenMock, NavControllerMock, NavParamsMock } from "ionic-mocks";

describe("CalculatorPage", () => {
  let calculatorpage;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CalculatorPage
      ],
      imports: [IonicModule.forRoot(CalculatorPage)],
      providers: [
        { provide: Platform, useFactory: () => PlatformMock.instance() },
        { provide: StatusBar, useFactory: () => StatusBarMock.instance() },
        { provide: SplashScreen, useFactory: () => SplashScreenMock.instance() },
        { provide: NavController, useFactory: () => NavControllerMock.instance() },
        { provide: NavParams, useFactory: () => NavParamsMock.instance() }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    let fixture = TestBed.createComponent(CalculatorPage);
    calculatorpage = fixture.componentInstance;
  });

  it("should create the calculator page", () => {
    expect(calculatorpage).toBeTruthy();
    expect(calculatorpage instanceof CalculatorPage).toEqual(true);
  });

  it("should create the NavParams", () => {
    expect(NavParams).toBeTruthy();
  });

  it("should create the Navcontroller", () => {
    expect(NavController).toBeTruthy();
  });

  it("Should fill in weight and height"), () => {
    calculatorpage.height = 180;
    calculatorpage.weight = 90;
    expect(calculatorpage.height).toBeDefined;
  }

  it("should have calculate funciton"), () => {
    spyOn(calculatorpage, 'calculateBMI');
    calculatorpage.height = 180;
    calculatorpage.weight = 90;
    calculatorpage.calculateBMI()

    expect(calculatorpage.calculateBMI).toHaveBeenCalled();
    expect(calculatorpage.bmiMessage).toEqual('Overweight')
  }


});