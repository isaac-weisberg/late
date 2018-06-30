import { Language } from "./Language";

export class Translations {
    set = (language: Language, value: string) => {
        this[language] = value
    }

    get = (language: Language): string|undefined => {
        return this[language]
    }
}
