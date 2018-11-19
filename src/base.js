import Rebase from 're-base';
import firebase from 'firebase';
// Initialize Firebase
const config = {
	apiKey      : 'AIzaSyCc_KdJ-nyHBnVO_aeNA3XJbzEtowcP2p0',
	authDomain  : 'whatsup-berlin.firebaseapp.com',
	databaseURL : 'https://whatsup-berlin.firebaseio.com'
};
const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export default base;
