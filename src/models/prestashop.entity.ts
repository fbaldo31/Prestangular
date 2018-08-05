import * as m from 'moment';

const moment = m;

export class PrestashopEntity {
    id?: number;
    date_add: string; // 2018-07-17 08:23:53,
    date_upd?: string; // 2018-07-17 08:23:53,

    constructor() {}
    
    public setDate(dateType: string) {
        this[dateType] = moment().format('YYYY-MM-DD hh:mm:ss');
    }
};

export interface IForeignKey {
    id: number;
};
