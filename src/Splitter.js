// Importing Firebase 
import firebase from './firebase';
import { getDatabase, ref, onValue, push, remove } from 'firebase/database'

import { useEffect, useState } from 'react';


const Splitter = (props) => {

    const [balances, setBalances] = useState([]);

    useEffect(() => {
        // create a variable that holds our database details (getDatabase)
        const database = getDatabase(firebase);

        // create a variable that makes a reference to our database (ref)
        const dbRef = ref(database);

        // we need add our onValue event listener so that it will run some code whenever our database value changes
        onValue(dbRef, (response) => {
            // get our database values
            // .val() is a Firebase module that gets us the information we want from the reponse
            const data = response.val();
            console.log(data);
            // our data is an object, so we need to iterate through it using a for in loop to access each book name and turn it into an array

            const newState = [];
            for (let key in data) {
                // inside our loop we push each book name to our newState array which we have already created
                newState.push(
                    {
                        key: key,
                        name: data[key]
                        // key:props.diners,
                    }
                )
            }

            setBalances(newState);
            console.log(balances);

        });
    }, []);
    // props.handleSubmit

    return (
        <>
            <h2 id="balances">Balances</h2>
            <ul>
                {
                balances.map((balance) => {
                    return (
                        <li key={balance.key}>
                            <p>Split ID: {balance.key}</p>
                            <p>
                                <span className="splitName">{balance.name.nameOne}: </span>
                                {
                                    balance.name.nameCheckbox === 'nameOneCheckbox'
                                    ? <span className="nonSplitAmount">+ ${balance.name.bill/4*3}</span>
                                    : <span className="splitAmount">- ${balance.name.bill/4}</span>
                                }
                            </p>
                            <p>
                                <span className="splitName">{balance.name.nameTwo}: </span>
                                {
                                    balance.name.nameCheckbox === 'nameTwoCheckbox'
                                    ? <span className="nonSplitAmount">+ ${balance.name.bill/4*3}</span>
                                    : <span className="splitAmount">- ${balance.name.bill/4}</span>
                                }
                            </p>
                            <p>
                                <span className="splitName">{balance.name.nameThree}: </span>
                                {
                                    balance.name.nameCheckbox === 'nameThreeCheckbox'
                                    ? <span className="nonSplitAmount">+ ${balance.name.bill/4*3}</span>
                                    : <span className="splitAmount">- ${balance.name.bill/4}</span>
                                }
                            </p>
                            <p>
                                <span className="splitName">{balance.name.nameFour}: </span>
                                {
                                    balance.name.nameCheckbox === 'nameFourCheckbox'
                                    ? <span className="nonSplitAmount">+ ${balance.name.bill/4*3}</span>
                                    : <span className="splitAmount">- ${balance.name.bill/4}</span>
                                }
                            </p>
                        </li>
                    )
                })
                }
            </ul>
        </>
    )
}

export default Splitter;