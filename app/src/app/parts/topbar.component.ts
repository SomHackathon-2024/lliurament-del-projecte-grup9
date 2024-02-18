import {Component} from '@angular/core';
import {AppMainComponent} from '../app.main.component';

@Component({
    selector: 'app-topbar',
    template: `
        <div class="topbar clearfix">
            <div class="logo">
                <a href="/">
                    <img src="assets/img/logo.png" style="width: 35px;">
                </a>
            </div>

            <a id="topbar-menu-button" href="#" (click)="appMain.onTopbarMenuButtonClick($event)">
                <i class="pi pi-bars"></i>
            </a>

            <ul class="topbar-menu fadeInDown" [ngClass]="{'topbar-menu-visible': appMain.topbarMenuActive}">
                <li #profile class="profile-item" [ngClass]="{'active-topmenuitem':appMain.activeTopbarItem === profile}">
                    <a href="#" (click)="appMain.onTopbarItemClick($event,profile)">
                        <div class="profile-image">
                        <img src="../../assets/img/user_icon.png">
                        </div>
                        <div class="profile-info mt-1">
                            <span class="topbar-item-name profile-name">Usuari</span>
                            <span class="topbar-item-name profile-role">Turista</span>
                        </div>
                    </a>

                    <ul class="fadeInDown">
                        <li role="menuitem">
                            <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                                <i class="pi pi-user"></i>
                                <span>Profile</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                                <i class="pi pi-cog"></i>
                                <span>Configuration</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a href="/login" (click)="logout()">
                                <i class="pi pi-sign-out"></i>
                                <span>Sign out</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li #notifications [ngClass]="{'active-topmenuitem':appMain.activeTopbarItem === notifications}">
                    <a href="#" (click)="appMain.onTopbarItemClick($event,notifications)">
                        <i class="topbar-icon pi pi-bell"></i>
                        <span class="topbar-badge">4</span>
                        <span class="topbar-item-name">Notifications</span>
                    </a>
                    <ul class="fadeInDown">
                        <li role="menuitem">
                            <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                                <i class="pi pi-sliders-h"></i>
                                <span>Pending tasks</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                                <i class="pi pi-calendar"></i>
                                <span>Meeting today at 3pm</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li #search class="search-item" [ngClass]="{'active-topmenuitem':appMain.activeTopbarItem === search}"
                    (click)="appMain.onTopbarItemClick($event,search)">
                        <span class="p-input-icon-right">
                            <input type="text" pInputText placeholder="Search">
                            <i class="topbar-icon pi pi-search"></i>
                        </span>
                </li>
            </ul>
        </div>
    `
})
export class TopbarComponent {

    constructor(public appMain: AppMainComponent) {}

    logout() {
        localStorage.removeItem('token');
    }

}
