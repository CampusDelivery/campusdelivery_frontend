import {IArticle} from "./IArticle";

/**
 * Project: campusdelivery
 * Created by: Selina Edelsbrunner
 * Date: 03.05.2024
 * Time: 07:49
 */
export interface IOrder{
    id:number,
    tripId:number,
    ordererName:string,
    articles: IArticle[]

}