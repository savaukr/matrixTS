export interface IRowItem {
    amount: number;
    bright:boolean;
    id: string;
    part:boolean;
}


interface IStateMatrixHelp {
    matrix: IRowItem[][];
}

export interface  IStateMatrix {
    matrix: IStateMatrixHelp
}
