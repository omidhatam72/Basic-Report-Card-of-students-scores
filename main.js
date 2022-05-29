const userdata = [
    {name: "omid",marks:[10,9,12,2,20]},
    {name: "ali",marks:[11,15,3,17,20]},
    {name: "ramin",marks:[11,19,2,10,15]},
    {name: "afshin",marks:[12,15,10,20,2]},
    {name: "khalil",marks:[20,9,12,2,14]},
];
const newuserdata= userdata.map(item=>{
    const sum =item.marks.reduce((acc,cur)=> acc +cur,0);
    const ave = sum/ item.marks.length;
    console.log(`${item.name}'s rate is ${ave}`)
})
