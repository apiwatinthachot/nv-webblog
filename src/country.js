let coun =[
    {
        "Name":"Thailand",
        "City":"Bangkok",
        "Food":"Tomyumkung",
        "Price":"300"
    },
    {
        "Name":"Japan",
        "City":"Tokyo",
        "Food":"Sushi",
        "Price":"399"
    },
    {
        "Name":"Korea",
        "City":"Seoul",
        "Food":"Teokbokki",
        "Price":"109"
    },
    {
        "Name":"China",
        "City":"Peking",
        "Food":"Mala",
        "Price":"50"
    },
    {
        "Name":"Vietnam",
        "City":"Hanoi",
        "Food":"Pho",
        "Price":"60"
    },
    {
        "Name":"Indea",
        "City":"New Delhi",
        "Food":"Samosa",
        "Price":"99"
    },
]
 
let coun2 =[
    {
        "Name":"Germany",
        "City":"Berlin",
        "Food":"Bratwurst & Sauerkraut",
        "Price":"99"
    },
    {
        "Name":"Finland",
        "City":"Helsinki",
        "Food":"ruisleipa",
        "Price":"89"
    },
    {
        "Name":"Venezuela",
        "City":"Caracas",
        "Food":"inter",
        "Price":"109"
    },
    {
        "Name":"Laos",
        "City":"Vientiane",
        "Food":"LuangPrabangSalad",
        "Price":"50"
    },
    {
        "Name":"Brazil",
        "City":"Brasilia",
        "Food":"Moqueca",
        "Price":"69"
    },
    {
        "Name":"Italy",
        "City":"Rome",
        "Food":"Pizza",
        "Price":"99"
    },
]
coun.push(coun2[0])
coun.push(coun2[1])
coun.push(coun2[2])
coun.push(coun2[3])
coun.push(coun2[4])
coun.push(coun2[5])

console.log("--10 country--")

for(let t=0; t<coun.length; t++){
     console.log(t+1+"Name:"+coun[t].Name+"City:"+coun[t].City)
}
console.log(" -------- ")

let coun3 = coun.splice(10,2)

console.log("--Delete After--")

for(let t=0; t<coun.length; t++){
     console.log(t+1+"Name:"+coun[t].Name+"City:"+coun[t].City)
}
console.log(" -------- ")

console.log(" -- Show first 2 items -- ")
for(let t=0; t<2; t++){
    console.log(t+1+"Name:"+coun[t].Name+"City:"+coun[t].City)
}
console.log(" -- Show last 3 items -- ")
for(let t=coun.length-3; t<coun.length; t++){
    console.log(t+1+"Name:"+coun[t].Name+"City:"+coun[t].City)
}
