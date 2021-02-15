export class BaseModel {


    constructor() {
        this._id = Math.floor(Math.random() * Date.now());
        this.created_at = new Date();
        this.updated_at = new Date();
        this.deleted_at = new Date();
    }

    _id: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;

}

export default BaseModel;