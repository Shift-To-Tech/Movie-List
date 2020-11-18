import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../_core/services/notification.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';


const MODULES: any[] = [
    FormsModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatRadioModule,
    MatSnackBarModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule
];

export const SHARED_MODULES_WITH_PROVIDERS: any[] = [];

const PIPES: any[] = [
];

const ENTRY_COMPONENTS: any[] = [
];

const COMPONENTS: any[] = [
    ...ENTRY_COMPONENTS,
];

const DIRECTIVES: any[] = [
];

const PROVIDERS: any[] = [
    NotificationService,
];

@NgModule({
    imports: [
        ...MODULES,
        ...SHARED_MODULES_WITH_PROVIDERS
    ],
    declarations: [
        ...PIPES,
        ...COMPONENTS,
        ...DIRECTIVES,
    ],
    providers: [
        ...PROVIDERS
    ],
    entryComponents: [
        ...ENTRY_COMPONENTS,
    ],
    exports: [
        ...MODULES,
        ...PIPES,
        ...COMPONENTS,
        ...DIRECTIVES,
        ...ENTRY_COMPONENTS,
    ]
})

export class SharedModule {
}
