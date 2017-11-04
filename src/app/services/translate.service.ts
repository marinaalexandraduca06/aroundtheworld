import { Injectable } from "@angular/core";
import { LANG_EN } from "../enums/lang-en";
import { LANG_RO } from "../enums/lang-ro";


@Injectable()
export class TranslateService {
	public language: string;
	public translations: any = {};

	constructor() {
		if (localStorage.getItem("siteLanguage") !== "" && localStorage.getItem("siteLanguage")) {
			this.setTranslationLanguage(localStorage.getItem("siteLanguage"));
		} else {
			this.translations = LANG_EN;
		}
	}

	public setTranslationLanguage(language: string): void {
		switch(language) {
			case 'English': {
				this.translations = LANG_EN;
				localStorage.setItem("siteLanguage", "English");
				break;
			}
			case "Romana": {
				this.translations = LANG_RO;
				localStorage.setItem("siteLanguage", "Romana");
				break;
			}
		}
	}

	public getTranslation(key: string): string {
		return this.translations[key];
	}
}
