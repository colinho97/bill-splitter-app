// Import css file
import './App.css';

// Importing Firebase 
import firebase from './firebase';
import { getDatabase, ref, onValue, push, remove } from 'firebase/database'

// Importing react Hooks
import { useEffect, useState } from 'react';

// Importing Components
import Header from './Header';
import Splitter from './Splitter';



function App() {

    // initialize our stateful variables
    const [diners, setDiners] = useState({
        nameOne: "",
        nameTwo: "",
        nameThree: "",
        nameFour: "",
        nameCheckbox: 'nameOneCheckbox',
        bill: 0,
    })


    const handleInputChange = (event) => {
        

        if (event.target.type === 'radio') {
            setDiners({
                ...diners,
                nameCheckbox: event.target.id,
            });

        } else if (event.target.type === 'text' || event.target.type === 'number') {
            const target = event.target;
            const value = target.value;
            const name = target.name;

            setDiners({
                ...diners,
                [name]: value
            });
        }
    }



    // create an event listener that will handle the user clicking 'Next'
    const handleSubmit = (event) => {
        event.preventDefault();

        const database = getDatabase(firebase);
        const dbRef = ref(database);

        push(dbRef, diners);

        setDiners({
            nameOne: "",
            nameTwo: "",
            nameThree: "",
            nameFour: "",
            nameCheckbox: 'nameOneCheckbox',
            bill: 0,
        })
    }



    return (
        <>
            <div className="content">
                <div className="wrapper">
                    <Header />
                    <form action="submit">
                        <div className="nameContainer">
                            <div className="nameInputContainer">
                                <div className="titleText">
                                    <h2>Who's eating tonight?</h2>
                                </div>
                                <div className="singleNameInput">
                                    <label className='sr-only' htmlFor="nameOne">Name</label>
                                    <input
                                        type="text"
                                        id='nameOne'
                                        name='nameOne'
                                        value={diners.nameOne}
                                        placeholder='Name'
                                        onChange={handleInputChange}
                                        required
                                    />

                                </div>
                                <div className="singleNameInput">
                                    <label className='sr-only' htmlFor="nameTwo">Name</label>
                                    <input
                                        type="text"
                                        id='nameTwo'
                                        name='nameTwo'
                                        value={diners.nameTwo}
                                        placeholder='Name'
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="singleNameInput">
                                    <label className='sr-only' htmlFor="nameThree">Name</label>
                                    <input
                                        type="text"
                                        id='nameThree'
                                        name='nameThree'
                                        value={diners.nameThree}
                                        placeholder='Name'
                                        onChange={handleInputChange}
                                        required
                                    />

                                </div>
                                <div className="singleNameInput">
                                    <label className='sr-only' htmlFor="nameFour">Name</label>
                                    <input
                                        type="text"
                                        id='nameFour'
                                        name='nameFour'
                                        value={diners.nameFour}
                                        placeholder='Name'
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="nameCheckboxContainer">
                                <h2>Paid?</h2>
                                <span className='checkboxContainer'>
                                    <label className='checkbox' htmlFor="nameOneCheckbox">
                                        <input
                                            className='checkboxInput'
                                            type="radio"
                                            name='nameCheckbox'
                                            value={diners.nameCheckbox}
                                            id='nameOneCheckbox'
                                            onChange={handleInputChange}
                                        />
                                        <span className="checkmark"></span>
                                    </label>
                                </span>
                                <span className='checkboxContainer'>
                                    <label className='checkbox' htmlFor="nameTwoCheckbox">
                                        <input
                                            className='checkboxInput'
                                            type="radio"
                                            name='nameCheckbox'
                                            value={diners.nameCheckbox}
                                            id='nameTwoCheckbox'
                                            onChange={handleInputChange}
                                        />
                                        <span className="checkmark"></span>
                                    </label>
                                </span>
                                <span className='checkboxContainer'>
                                    <label className='checkbox' htmlFor="nameThreeCheckbox">
                                        <input
                                            className='checkboxInput'
                                            type="radio"
                                            name='nameCheckbox'
                                            value={diners.nameCheckbox}
                                            id='nameThreeCheckbox'
                                            onChange={handleInputChange}
                                        />
                                        <span className="checkmark"></span>
                                    </label>
                                </span>
                                <span className='checkboxContainer'>
                                    <label className='checkbox' htmlFor="nameFourCheckbox">
                                        <input
                                            className='checkboxInput'
                                            type="radio"
                                            name='nameCheckbox'
                                            value={diners.nameCheckbox}
                                            id='nameFourCheckbox'
                                            onChange={handleInputChange}
                                        />
                                        <span className="checkmark"></span>
                                    </label>
                                </span>
                            </div>
                        </div>
                        <div className="billContainer">
                            <h2>How much was the bill?</h2>
                            <label className='sr-only' htmlFor="bill">Bill Amount</label>
                            <input
                                type="number"
                                name='bill'
                                placeholder='Bill Amount (ie. 100)'
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="nextButtonContainer">
                            <button className="nextButton" type="submit" onClick={handleSubmit}>Next</button>
                        </div>
                    </form>
                    <Splitter />
                </div>
            </div>
        </>
    );
}

export default App;

