export class BabyFeedingItem {
    constructor(
        public id: number,
        public startFeeding: Object,
        public endFeeding: Object,
        public typeFeeding: string,
        public date: Date
    ) {  }
}
