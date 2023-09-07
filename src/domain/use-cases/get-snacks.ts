import { firestore } from '~/data/services/firebase';
import { Snack } from '../entities/Snack';

export const getSnacks = async (): Promise<Snack[]> => {
  const snacksCollection = await firestore.collection<Snack>('snacks').get();

  return snacksCollection.docs.map((snackDoc) => ({
    ...snackDoc.data(),
    id: snackDoc.id,
  }));
};
