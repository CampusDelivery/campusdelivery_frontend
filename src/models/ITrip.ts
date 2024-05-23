import {IUser} from "./IUser";

/**
 * Project: campusdelivery
 * Created by: Selina Edelsbrunner
 * Date: 03.05.2024
 * Time: 07:50
 */
export interface ITrip{
    id:number,
    user:IUser,
    destination:string,
    time:string,
    maxNumberOfOrders:number,
}