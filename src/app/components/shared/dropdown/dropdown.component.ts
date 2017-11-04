import { Component } from '@angular/core';
import { TranslateService } from '../../../services/translate.service';

@Component({
    selector: 'dropdown',
    templateUrl: 'dropdown.component.html',
    styleUrls: ['dropdown.component.css']
})
export class DropdownComponent {
    public dropdownContent: string[] = ['English', 'Romana'];
    public displayDropdownBody: boolean = false;
    public arrowImgPath: string = '../../../assets/arrow-down.jpg';
    public selectedItem: string;

    constructor(private translateService: TranslateService) {}

    private displayOrHideDropdownBody(): void {
        if (this.displayDropdownBody) {
            this.displayDropdownBody = false;
            this.arrowImgPath = '../../../assets/arrow-down.jpg';
        } else {
            this.displayDropdownBody = true;
            this.arrowImgPath = '../../../assets/arrow-up.jpg';
        }
    }

    public selectItem(selectedItem: string): void {
        this.selectedItem = selectedItem;
        this.displayDropdownBody = false;
        this.arrowImgPath = '../../../assets/arrow-down.jpg';
        this.translateService.setTranslationLanguage(this.selectedItem);
    }
}
