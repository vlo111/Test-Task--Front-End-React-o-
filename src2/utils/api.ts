import axios from 'axios';
import { IPost } from '../types/Post';

export const fetchPosts = async (): Promise<IPost[]> => {
    const response = await axios.get<IPost[]>('https://cloud.codesupply.co/endpoint/react/data.json');
    return response.data;
};
