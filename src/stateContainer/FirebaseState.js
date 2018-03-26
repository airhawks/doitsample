import firebase from 'firebase';
import { Container } from 'unstated';

var config = {
  apiKey: "AIzaSyDKyxsniXaQm0y2AvkOMCjOLsVoSkgJeLY",
  authDomain: "logger-260e7.firebaseapp.com",
  databaseURL: "https://logger-260e7.firebaseio.com",
  projectId: "logger-260e7",
  storageBucket: "logger-260e7.appspot.com",
  messagingSenderId: "540925359961"
};

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
const database = firebase.database();
const auth = window.auth = firebase.auth();

class FirebaseContainer extends Container {

  constructor(args) {
    super(args);
    auth.onAuthStateChanged((userDetails) => {
      console.log("Auth state changed", userDetails);
      const {uid, displayName, email, photoURL} = userDetails;
      const user = {uid, displayName, email, photoURL};
      this.setState({user});
    });
  }

  state = {
    user: null // fetch from indexdb or localStorage
  };

  login() {
    auth.signInWithRedirect(provider);
  }

  logout() {
    auth.signOut();
    this.setState({ user: null });
  }
}

export default FirebaseContainer;