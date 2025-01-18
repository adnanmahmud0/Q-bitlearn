import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

const useTrans = () => {
    const { id } = useParams();
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["pay", id],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:5000/class/${id}`);
            return data;
        }
    })

    return [data, isLoading, refetch]
};

export default useTrans;