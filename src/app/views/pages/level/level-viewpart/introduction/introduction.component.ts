import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  @Input() instruction;
  constructor() { }

  ngOnInit(): void {
  }

}
