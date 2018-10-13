import { TabsPage } from './tabs'
import { TestBed, async } from "@angular/core/testing";
import { IonicModule } from "ionic-angular";

describe("TabsPage", () => {
  let tabspage;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TabsPage
      ],
      imports: [IonicModule.forRoot(TabsPage)]
    }).compileComponents();
  }));

  beforeEach(() => {
    let fixture = TestBed.createComponent(TabsPage);
    tabspage = fixture.componentInstance;
  });

  it("should create the tabs page", () => {
    expect(tabspage).toBeTruthy();
    expect(tabspage instanceof TabsPage).toEqual(true);
  });

});
