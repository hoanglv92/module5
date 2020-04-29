interface ISingerRepo {
    name:String ;
}
interface IRepo {
 items:Array<ISingerRepo>;
}
// @ts-ignore
async function fetchRepo():Promise<Array<ISingerRepo>> {
let res:Response|IRepo=await fetch('https://api.github.com/search/repositories?q=angular');
res=await res.json() as IRepo;
return res.items;
}
// @ts-ignore
function createItem(text:string):HTMLLIElement {
const item=document.createElement('li') as HTMLLIElement;
item.textContent=text;
return item;
}
const container=document.querySelector('.app .list');
async function main() {
const res=await fetchRepo();
res.forEach((item:any)=>{
    const li=createItem(item.name);
    container.appendChild(li);
});
}
main();
