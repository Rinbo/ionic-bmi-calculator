import { MyApp } from "./app.component";
import { TestBed, async, inject } from "@angular/core/testing";
import { IonicModule, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { StatusBarMock, SplashScreenMock, PlatformMock } from "ionic-mocks";
import { SplashScreen } from "@ionic-native/splash-screen";


describe("AppComponent", () => {
  let fixture, component;

  beforeEach(async() => {

    TestBed.configureTestingModule({
      declarations: [MyApp],
      imports: [
        IonicModule.forRoot(MyApp)
      ],
      providers: [
        { provide: Platform, useFactory: () => PlatformMock.instance() },
        { provide: StatusBar, useFactory: () => StatusBarMock.instance() },
        { provide: SplashScreen, useFactory: () => SplashScreenMock.instance() }
      ]
    });

    fixture = TestBed.createComponent(MyApp);
    component = fixture.componentInstance;
  });

  it("should create the app", () => {
    expect(component).toBeTruthy();
    expect(component instanceof MyApp).toEqual(true);
  });

  it("should create the statusbar", () => {
    expect(StatusBar).toBeTruthy();    
  });

  it("should create the splashscreen", () => {
    expect(SplashScreen).toBeTruthy();    
  });

  it("should create platform", () => {
    expect(Platform).toBeTruthy();    
  });

});