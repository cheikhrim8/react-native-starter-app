import {useMutation, useQuery} from 'react-query';
import axios from '../../utils/axios';

const fetchPosts = async () => {
    const { data } = await axios.get('posts');
    return data.posts;
};

export const usePosts = () => useQuery('posts', fetchPosts);

const fetchPost = async (postId) => {
    const { data } = await axios.get(`posts/${postId}`);
    return data.post;
};

export const usePost = (postId) => useQuery([ 'posts', postId ], () => fetchPost(postId));


const deletePost = async (postId) => {
    const { data } = await axios.delete(`posts/${postId}`);
    return data;
}

export const useDeletePost = (postId) => useMutation([ 'posts', postId ], () => deletePost(postId));