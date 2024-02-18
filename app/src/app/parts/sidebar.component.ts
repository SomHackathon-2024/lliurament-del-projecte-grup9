import {Component} from '@angular/core';
import {AppComponent} from '../app.component';
import {AppMainComponent} from '../app.main.component';

@Component({
    selector: 'app-sidebar',
    template: `
        <div class="layout-sidebar" [ngStyle]="{'overflow':appMain.sidebarActive ? 'hidden' : 'visible'}"
                            [ngClass]="{'layout-sidebar-dark':app.darkMenu}" (click)="appMain.onSidebarClick($event)">
    <div class="layout-tabmenu">
        <ul class="layout-tabmenu-nav">
            <li [ngClass]="{'active-item':appMain.activeTabIndex === 0}">
                <a href="/home" pRipple class="tabmenuitem-link" >
                    <i class="pi pi-fw pi-home"></i>
                </a>
                <div class="layout-tabmenu-tooltip">
                    <div class="layout-tabmenu-tooltip-arrow"></div>
                    <div class="layout-tabmenu-tooltip-text">Home</div>
                </div>
            </li>
            <li [ngClass]="{'active-item':appMain.activeTabIndex === 2}">
                <a href="/calendar" pRipple class="tabmenuitem-link">
                    <i class="pi pi-fw pi-calendar"></i>
                </a>
                <div class="layout-tabmenu-tooltip">
                    <div class="layout-tabmenu-tooltip-arrow"></div>
                    <div class="layout-tabmenu-tooltip-text">Calendar</div>  
                </div>
            </li>
            <li [ngClass]="{'active-item':appMain.activeTabIndex === 2}">
                <a href="/activity" pRipple class="tabmenuitem-link">
                    <i class="pi pi-fw pi-book"></i>
                </a>
                <div class="layout-tabmenu-tooltip">
                    <div class="layout-tabmenu-tooltip-arrow"></div>
                    <div class="layout-tabmenu-tooltip-text">Activitys</div>  
                </div>
            </li>
            <li [ngClass]="{'active-item':appMain.activeTabIndex === 3}">
                <a href="/news" pRipple class="tabmenuitem-link">
                    <i class="pi pi-fw pi-megaphone"></i>
                </a>
                <div class="layout-tabmenu-tooltip">
                    <div class="layout-tabmenu-tooltip-arrow"></div>
                    <div class="layout-tabmenu-tooltip-text">Noticies</div>
                </div>
            </li>
        </ul>
    </div>
</div>
    `
})
export class SideBarComponent {

    constructor(public app: AppComponent, public appMain: AppMainComponent) {}

}