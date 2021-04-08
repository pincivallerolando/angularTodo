import { Activity } from "src/app/activities/activity.model";

export class User{
    public token: string
    public firstname: string;
    public lastname: string;
    public id: string;
    public email: string;
    public activities: Activity[];

    constructor(token: string, firstname: string, lastname: string, id: string, activities: Activity[])  {
        this.token = token;
        this.firstname = firstname;
        this.lastname = lastname;
        this.id = id;
        this.activities = activities;
    }  
}