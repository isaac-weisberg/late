import { Observable } from 'rxjs'
import { Language } from "./Language";

export interface Translator {
    translateSingle(single: string, languages: Language[]): Observable<string[]>

    translateFew()
}