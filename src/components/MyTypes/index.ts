export type IChildren = {
    children:object;
}
export type IButton = {
    txt:string;
    still:string;
}
export type IIcon = {
    children:React.ReactNode;
    link:string;
}
export type IGames = {
    img:string;
    followers:string;
}
export interface ICard{
    txt:string;
    children:React.ReactNode;
}
export interface IData{
    index:number,
    id:number,
    img:string,
    price:string,
    oldPrice:string,
    name:string;
}
export type INewData = {
    name:string;
    img:string;
    id:number
}