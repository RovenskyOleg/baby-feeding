export class Baby {
    constructor(
        public id: number,
        public firstname: string,
        public lastname: string,
        public gender: string,
        public birthdate?: Object // type Date when implement datepicker
    ) {  }
}
