import { Observable } from 'rxjs';

export interface IBaseService<TEntity,TCreate> {
  getItems(): Observable<TEntity[]>;

  getItemId(id: string): Observable<TEntity>;

  newItem(item: TCreate):  Observable<TEntity>;

  updateItem(id: string, item: TEntity): Observable<void>;

  removeItem(id: string): Observable<void>;
}
