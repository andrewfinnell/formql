import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormWindow } from '../../models/form-window.model';
import { FormQLMode } from '../../models/type.model';

@Component({
    selector: 'formql-plain-layout',
    template: `<ng-container *ngIf="form && form.pages && form.pages.length > 0">
                <form [formGroup]="reactiveForm">
                    <div formql-page-wrapper *ngIf="form.pages"
                    [(page)]="form.pages[0]"
                    [reactivePage]="reactiveForm.controls[form.pages[0].pageId]"
                    [formGroupName]="form.pages[0].pageId"
                    [mode]="mode"></div>
                </form>
                </ng-container>`
})
export class PlainLayoutComponent {
    static componentName = 'PlainLayoutComponent';

    @Input() public form: FormWindow;
    @Input() public reactiveForm: FormGroup;
    @Input() public mode: FormQLMode;

}
