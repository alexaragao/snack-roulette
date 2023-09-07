import SQLite from 'react-native-sqlite-storage';
import { sqliteConfig } from '../config/sqliteConfig';

SQLite.enablePromise(true);

class SQLiteService {
  private database: SQLite.SQLiteDatabase | null = null;

  async openDatabase(): Promise<void> {
    this.database = await SQLite.openDatabase({
      name: sqliteConfig.databaseName,
      location: 'default',
    });
  }

  async executeQuery(
    query: string,
    params: any[] = []
  ): Promise<SQLite.ResultSet> {
    return new Promise<SQLite.ResultSet>((resolve, reject) => {
      if (!this.database) {
        reject(new Error('Database not initialized.'));
        return;
      }

      this.database.transaction((tx) => {
        tx.executeSql(
          query,
          params,
          // eslint-disable-next-line @typescript-eslint/no-shadow
          (tx, results) => {
            resolve(results);
          },
          // eslint-disable-next-line @typescript-eslint/no-shadow
          (tx, error) => {
            reject(error);
          }
        );
      });
    });
  }
}

export const sqliteService = new SQLiteService();
