import { Component, OnInit } from '@angular/core';
import { DropdownDirective, DropdownMenuDirective, DropdownToggleDirective } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public disabled:boolean;
  public status:{isopen:boolean};
  public mainMenuItems:Array<Object>;
  public dropdownMenuItems:Array<Object>;

  constructor() { }

  ngOnInit() {
    this.disabled = false;
    this.status = {isopen: true};

    this.mainMenuItems = [
      { name: "Home", url: "/home", dropdown: '', dropdownToggle: '', dropdownMenu: '', subMenuItems: null },
      { name: "About", url: "/about", dropdown: '', dropdownToggle: '', dropdownMenu: '', subMenuItems: null },
      { name: "Contact", url: "/contact", dropdown: '', dropdownToggle: '', dropdownMenu: '', subMenuItems: null },
      { name: "Imprint", url: "/imprint", dropdown: '', dropdownToggle: '', dropdownMenu: '', subMenuItems: null }
    ];

    this.dropdownMenuItems = [
      { name: "Dropdown", subMenuItems: [
          { name: "Link 1", url: "/link1" },
          { name: "Link 2", url: "/link2" },
          { name: "Link 3", url: "/link3" },
        ]
      },
      { name: "Dropdown 2", subMenuItems: [
          { name: "Link 1", url: "/link1" },
          { name: "Link 2", url: "/link2" },
          { name: "Link 3", url: "/link3" },
        ]
      }
    ];

  }

  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }
 
  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

}
