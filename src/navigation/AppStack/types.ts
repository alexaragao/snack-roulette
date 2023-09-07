import { Snack } from '~/domain/entities/Snack';
import { routes } from '../routes';

export type AppStackParams = {
  [routes.Snacks]: undefined;
  [routes.Roulette]: { snacks: Snack[] };
};
