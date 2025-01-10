import axios from 'axios';
// import { IPost } from '../types/IPost';

export const fetchPosts = async (): Promise<[]> => {
    const response = await axios.get<[]>('https://cloud.codesupply.co/endpoint/react/data.json');
    return response.data;
};
