import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input("srvElement") element: { type: string; name: string; content: string };
  @ViewChild("heading", { static: true }) header: ElementRef;
  @ContentChild("contentParagraph", { static: true }) paragraph: ElementRef;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {}

  ngOnInit(): void {}

  ngDoCheck() {}

  ngAfterContentInit() {}

  ngAfterContentChecked() {}

  ngAfterViewInit() {}

  ngAfterViewChecked() {}

  ngOnDestroy() {}
}
