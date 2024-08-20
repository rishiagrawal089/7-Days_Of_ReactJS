export const players=[
            {name:'Jack',score:50},
            {name:'Michael',score:70},
            {name:'John',score:40},
            {name:'Ann',score:61},
            {name:'Elisabeth',score:61},
            {name:'Sachin',score:95},
            {name:'Dhoni',score:100},
            {name:'Virat',score:84},
            {name:'Jadeja',score:64},
            {name:'Raina',score:75},
            {name:'Rohit',score:80}
];
 
export function ListofPlayers()
{
    return(
        players.map((item)=>
        {
            return(
                <div>
                    <li>Mr. {item.name} <span> {item.score} </span></li>
                </div>
            )
        }
    ))
}

export function Scorebelow70()
{
    return(
        players.map((item)=>
        {
            if(item.score<=70)
            {
                return(
                    <div>
                        <li>Mr. {item.name} <span> {item.score} </span></li>
                    </div>
                )
            }
            else{
                return null;
            }
        })
    )
}


