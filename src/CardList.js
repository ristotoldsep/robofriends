import React from 'react';
// import { robots } from './robots'; //Because robots.js doesn't return only 1 object, we have to use brackets!
import Card from './Card';


// const CardList = ({robots}) => {
//     // THIS IS LIKE A forEach LOOP IN JS ( but map gives access to entire object array!!!!)
//     const cardsArray = robots.map((user, i) => {
//         return (
//             <Card 
//                 key={i} 
//                 id={robots[i].id} 
//                 username={robots[i].username} 
//                 name={robots[i].name} 
//                 email={robots[0].email} 
//             />
//         );
//     })
//     return (
//         <div>
//             {cardsArray}
//         </div>
//     );
// }

const CardList = ({robots}) => {
    return (
        <div>
            {
               robots.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            username={robots[i].username}
                            name={robots[i].name}
                            email={robots[0].email}
                        />
                    ); 
                })
            }
        </div>
    );
}

export default CardList;