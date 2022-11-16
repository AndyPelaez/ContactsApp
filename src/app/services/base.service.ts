import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IBaseService } from '../interfaces/base-service.interface';


export abstract class BaseService<TEntity, TICreate>
  implements IBaseService<TEntity, TICreate>
{
  protected _path!: string;
  private _apiUrl: string = environment.apiUrl;
  protected http: HttpClient;

  public get baseEndPoint(): string {
    return this._apiUrl + this._path;
  }

  constructor(path: string, http: HttpClient) {
    this._path = path;
    this.http = http;
  }

  getItems() {
    return this.http.get<TEntity[]>(`${this.baseEndPoint}`);
  }

  getItemId(id: string) {
    return this.http.get<TEntity>(`${this.baseEndPoint}/${id}`);
  }

  newItem(item: TICreate) {
    return this.http.post<TEntity>(`${this.baseEndPoint}`, item);
  }

  updateItem(id: string, item: TEntity) {
    return this.http.patch<void>(`${this.baseEndPoint}/${id}`, item);
  }
  removeItem(id: string) {
    return this.http.delete<void>(`${this.baseEndPoint}/${id}`);
  }
}
