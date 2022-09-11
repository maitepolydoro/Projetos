import { ICharacter } from "./character";

export class IData {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: ICharacter[];
}