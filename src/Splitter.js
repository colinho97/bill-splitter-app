// Importing Firebase 
import firebase from './firebase';
import { getDatabase, ref, onValue, push, remove } from 'firebase/database'

import { useEffect, useState } from 'react';


const Splitter = (props) => {

    const [balances, setBalances] = useState([]);

    useEffect(() => {
        const database = getDatabase(firebase);
        const dbRef = ref(database);

        onValue(dbRef, (response) => {

            const data = response.val();

            const newState = [];
            for (let key in data) {
                newState.push(
                    {
                        key: key,
                        name: data[key]
                    }
                )
            }

            setBalances(newState);

        });
    }, []);

    return (
        <>
            <h2 id="balances">Balances</h2>
            <ul className='listOfBalances'>
                {
                balances.map((balance) => {
                    return (
                        <li key={balance.key} className="balanceItem">
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