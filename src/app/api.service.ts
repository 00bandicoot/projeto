import { Injectable } from '@angular/core';
import  axios  from 'axios'; 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  async push(): Promise<any> {
      const res = await axios.get("http://localhost:3000/api/movie/11")
      return res.data
  }
}
