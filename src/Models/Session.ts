import { Language } from "./Language";
import { Translations } from "./Tranlations";

export class Session {
    quotes: { [id: string]: Translations } = {}
    languages: Language[] = []
}
