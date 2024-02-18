import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PRIME
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { TagModule } from 'primeng/tag';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { PasswordModule } from 'primeng/password';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TabMenuModule } from 'primeng/tabmenu';
import { StepsModule } from 'primeng/steps';
import { ContextMenuModule } from 'primeng/contextmenu';
import { MegaMenuModule } from 'primeng/megamenu';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { TreeTableModule } from 'primeng/treetable';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    DropdownModule,
    MenuModule,
    AvatarModule,
    BadgeModule,
    TieredMenuModule,
    PanelMenuModule,
    SidebarModule,
    MessageModule,
    MessagesModule,
    TableModule,
    ToolbarModule,
    TagModule,
    SelectButtonModule,
    InputSwitchModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    ToastModule,
    PasswordModule,
    MenubarModule,
    BreadcrumbModule,
    TabMenuModule,
    StepsModule,
    ContextMenuModule,
    MegaMenuModule,
    CardModule,
    ProgressSpinnerModule,
    TabViewModule,
    DialogModule,
    FileUploadModule,
    InputNumberModule,
    FormsModule,
    TreeTableModule,
    CalendarModule,
    MultiSelectModule,
    FullCalendarModule,
    CheckboxModule
  ],
  providers: [MessageService, ConfirmationService],
})
export class PrimeModule {}
