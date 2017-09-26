export class User {
    constructor(
        public _id: number = Math.floor(Math.random() * 100),
        public foto: string = '',
        public nome: string = '',
        public sobrenome: string = '',
        public email: string = '',
        public editable: boolean = false
    ) {

    }
}
