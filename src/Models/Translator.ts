import { Language } from "./Language";

export interface Translator {
    translateSingle(single: string, languages: Language[]): Promise<string[]>

    translateFew()
}