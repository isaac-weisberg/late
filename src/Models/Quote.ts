import { Translations } from "./Tranlations";

export class Quote {
    translations: Translations

    constructor(source: string) {
        this.translations = new Translations()
    }
}
