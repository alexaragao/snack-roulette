import RNFFirestore from '@react-native-firebase/firestore';
import RNFStorage from '@react-native-firebase/storage';

const storage = RNFStorage();
const firestore = RNFFirestore();

export { firestore, storage };
