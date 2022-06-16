import './App.css';
import firebase from './firebase';



function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;





//Pseudo Code
//--------------------------

//Landing Page with form element to take user inputs
    //Name Inputs
        //Store input as an object in an array, then store it in Firebase
        //Include a button next to name input field, which onclick, gives user option to add another name field
        //Make form fields added 'required' 
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