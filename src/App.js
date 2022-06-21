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
    const [nameInput, setNameInput] = useState([]);
    const [billInput, setBillInput] = useState(null);
    const [checked, setChecked] = useState(false);
    const [diners, setDiners] = useState({
        nameOne: "",
        nameTwo: "",
        nameThree: "",
        nameFour: "",
        nameCheckbox: 'nameOneCheckbox',
        bill: 0,
    })

    useEffect(() => {
        console.log(diners);
    }, [diners]);

    // const handleNameInputChange = (event) => {
    //     // grab the contents of the box
    //     // set it to the userInput stateful variable
    //     setNameInput(event.target.value);
    //     console.log(event.target.value);
    // }

    // const handleBillInputChange = (event) => {
    //     // grab the contents of the box
    //     // set it to the userInput stateful variable
    //     setBillInput(event.target.value);
    //     console.log(event.target.value);
    // }

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

            console.log(event);
            setDiners({
                ...diners,
                [name]: value
            });
        }
    }



    // create an event listener that will handle the user clicking 'Next'
    const handleSubmit = (event) => {
        // prevent default (page from refreshing)
        event.preventDefault();
        // create a reference to the database
        const database = getDatabase(firebase);
        const dbRef = ref(database);
        // push the value of userInput state to the database
        push(dbRef, diners);
        // push(dbRef, billInput);
        // clear the input (reset the state of userInput to an empty string)
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
                                            //Change name below to match one in input to pass checked value to firebase
                                            name='nameCheckbox'
                                            value={diners.nameCheckbox}
                                            id='nameOneCheckbox'
                                            // Need to change this checked prop as I cant use same state for name one and two

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
                                            //Change name below to match one in input to pass checked value to firebase
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
                                            //Change name below to match one in input to pass checked value to firebase
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
                                            //Change name below to match one in input to pass checked value to firebase
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





//Pseudo Code
//--------------------------

//Landing Page with form element to take user inputs
    //Name Inputs
        //Store input as an object in an array, then store it in Firebase
        //Include a button next to name input field, which onclick, gives user option to add another name field
        //Make form fields adstartded 'required'
        //Add 'Next' button which is the submission of the form
            //On submission of the form, change the useState of the form to take name values entered and push them to the array in firebase using push()

    //How much was the bill?
        //Input for bill amount which takes an input with parseInt.
        //useState to track the state of the input received from user
        //useEffect which uses the state change of the input state, which will perform a calculation using the bill amount input divided by the length of the array pushed to firebase in the first page
        //Perform function in Balances component which allocates the calculation above to each name in the Firebase array as a key: balance with a value of negative(calculated amount)
        //Take checkbox part in  form and use that to allocate a Paid: true/false key value pair to the corresponding name, which will add the total bill amount to that name

    //Display Balances
        //map through the name array in firebase and display object names which represents each person
        //map through key value pair of balance: $amount
        //using the map, create divs which hold both values and shows on the page on render