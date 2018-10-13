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
        { provide: NavParams, useFactory: () => NavParamsMock.instance() },
        CalculatorPage
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

  it("should have calculate funciton", () => {
    spyOn(calculatorpage, 'calculateBMI');
    const heightSpy = spyOnProperty(calculatorpage, 'setHeight', 'set');
    const weightSpy = spyOnProperty(calculatorpage, 'setWeight', 'set');
    const bmiSpy = spyOnProperty(calculatorpage, 'getBmiMessage').and.returnValue('Overweight');
    calculatorpage.height = 180;
    calculatorpage.weight = 90;
    calculatorpage.calculateBMI()
    expect(calculatorpage.getHeight).toBe(180)
    expect(heightSpy).toHaveBeenCalled;
    expect(calculatorpage.getWeight).toBe(90)
    expect(weightSpy).toHaveBeenCalled;
    expect(calculatorpage.calculateBMI).toHaveBeenCalled();
    expect(calculatorpage.getBmiMessage).toEqual('Overweight')
    expect(bmiSpy).toHaveBeenCalled;
  });

  it('should calculate BMI', () => {
    spyOn(calculatorpage, 'calculateBMI');
    spyOnProperty(calculatorpage, 'getBmiMessage').and.returnValue('Overweight');
    calculatorpage.calculateBMI();
    expect(calculatorpage.getBmiMessage).toEqual('Overweight');
    expect(calculatorpage.calculateBMI()).toHaveBeenCalled;
  })

  it("calculate function should call setBMIMessage function", inject(
    [CalculatorPage], calculator => {
      calculator.height = 180;
      calculator.weight = 90;
      spyOn(calculator, "calculateBMI").and.returnValue('Overweight');
       
      calculator.calculateBMI();
  
      expect(calculator.calculateBMI).toHaveBeenCalled();      
    }
  ));

  it('should calculate BMI', () => {
    spyOn(calculatorpage, 'setBMIMessage')
    calculatorpage.weight = 92;
    calculatorpage.height = 180;
    calculatorpage.calculateBMI();

    expect(calculatorpage.bmiValue).toEqual(28.4);
    expect(calculatorpage.setBMIMessage).toHaveBeenCalled
  });

  it('should display Underweight if bmiValue is under 18.5', () => {
    calculatorpage.bmiValue = 18;
    calculatorpage.setBMIMessage();

    expect(calculatorpage.bmiMessage).toEqual('Underweight')
  });

  it('should display Normal if bmiValue is under between 18.5 and 25', () => {
    calculatorpage.bmiValue = 23;
    calculatorpage.setBMIMessage();

    expect(calculatorpage.bmiMessage).toEqual('Normal')
  });

  it('should display Overweight if bmiValue is under between 25 and 30', () => {
    calculatorpage.bmiValue = 28;
    calculatorpage.setBMIMessage();

    expect(calculatorpage.bmiMessage).toEqual('Overweight')
  });

  it('should display Obese if bmiValue is above 30', () => {
    calculatorpage.bmiValue = 33;
    calculatorpage.setBMIMessage();

    expect(calculatorpage.bmiMessage).toEqual('Obese')
  });



});