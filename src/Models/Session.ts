import { Language } from "./Language";
import { Quote } from "./Quote";

export class Session {
    quotes: { [id: string]: Quote } = {}
    languages: Language[] = []
}
