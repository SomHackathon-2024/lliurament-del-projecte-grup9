import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-menu',
    template: `
        <div class="menu-scroll-content">
			<ul class="navigation-menu">
				<li app-menuitem *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true"></li>
			</ul>
        </div>
    `
})
export class MenuComponent implements OnInit {

    public model: any[] | undefined;

    ngOnInit() {
        this.model = [
            {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/']},
            {
                label: 'Pages', icon: 'pi pi-fw pi-briefcase', routerLink: ['/pages'],
                items: [
                    {label: 'Crud', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/crud']},
                    {label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['/pages/calendar']},
                    {label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/pages/timeline']},
                    {label: 'Landing', icon: 'pi pi-fw pi-globe', url: 'assets/pages/landing.html', target: '_blank'},
                    {label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: ['/login']},
                    {label: 'Invoice', icon: 'pi pi-fw pi-dollar', routerLink: ['/pages/invoice']},
                    {label: 'Help', icon: 'pi pi-fw pi-question-circle', routerLink: ['/pages/help']},
                    {label: 'Error', icon: 'pi pi-fw pi-times-circle', routerLink: ['/error']},
                    {label: 'Not Found', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/notfound']},
                    {label: 'Access Denied', icon: 'pi pi-fw pi-lock', routerLink: ['/access']},
                    {label: 'Empty', icon: 'pi pi-fw pi-circle-off', routerLink: ['/pages/empty']}
                ]
            },
            {
                label: 'Hierarchy', icon: 'pi pi-fw pi-align-left',
                items: [
                    {
                        label: 'Submenu 1', icon: 'pi pi-fw pi-align-left',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-align-left'},
                                    {label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-align-left'},
                                    {label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-align-left'},
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-align-left'}
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'pi pi-fw pi-align-left',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-align-left'},
                                    {label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-align-left'},
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-align-left'},
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                label: 'Buy Now', icon: 'pi pi-fw pi-shopping-cart', url: ['https://www.primefaces.org/store']
            },
            {
                label: 'Documentation', icon: 'pi pi-fw pi-info-circle', routerLink: ['/documentation']
            }
        ];
    }
}
