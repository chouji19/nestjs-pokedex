import { Injectable } from '@nestjs/common';
import axios,{ AxiosInstance } from 'axios';
import { HttpAdapter } from '../interface/http-adapter.interface';

@Injectable()
export class AxiosAdapter implements HttpAdapter{

	private axios: AxiosInstance = axios;
	constructor() {
	}
	async get<T>(url: string): Promise<T> {
		try {
			const { data } = await this.axios.get<T>(url);
			return data;
		} catch (error) {
			throw new Error("Error with the http adapter - check log");
		}
		
	}



}