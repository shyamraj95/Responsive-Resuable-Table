import { CommonModule } from '@angular/common';
import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-responsive-resuable-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './responsive-resuable-table.component.html',
  styleUrl: './responsive-resuable-table.component.scss'
})

export class ResponsiveResuableTableComponent implements OnInit {
  tHeaders!: string[];
  @Input({ required: true }) dataSource: any[] = [];
  @Input({ required: false }) customHeader !: { [k: string]: any };
  @ContentChild('headers') headers: TemplateRef<any> | undefined;
  @ContentChild('rows') rows: TemplateRef<any> | undefined;

  ngOnInit() {
    if (this.customHeader) {
      this.dataSource = this.changeKeyInArrayOfObjects(this.dataSource, this.customHeader) as Array<any>;
    }
    this.tHeaders = Object.keys(this.dataSource[0] || {});

  }
  changeKeyInArrayOfObjects(dataSource: any[], keyMap: { [oldKey: string]: string }) {
    return dataSource.map(obj => {
      const newObj: { [key: string]: string[] } = {};
      for (const oldkey in obj) {
        if (oldkey in keyMap) {
          newObj[keyMap[oldkey]] = obj[oldkey];
        } else {
          newObj[oldkey] = obj[oldkey];

        }
      }
      return newObj;

    });
  }
}

/** @user-guide

Note: [attr.data-before]-"[' .. '] will required for responsive effects
 
change only headers Name :...
headers = { position: 'Id', name: 'user Name', weight: 'test' } // in parent .ts 
  */