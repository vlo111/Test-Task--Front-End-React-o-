import { IPost } from '../types';
import axios from "axios";

const API_BASE_URL = 'https://cloud.codesupply.co/endpoint/react';

export const fetchPosts = async (): Promise<IPost[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/data.json`);
        return response.data;
    } catch {
        throw new Error('Failed to fetch posts');
    }
};
