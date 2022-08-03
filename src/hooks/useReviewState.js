import { useState, useEffect, useMemo } from 'react';

import * as reviewService from '../services/reviewService';

const useReviewState = (reviewId) => {
    const [review, setReview] = useState({});

    const controller = useMemo(() => {
        const controller = new AbortController();

        return controller;
    }, [])

    useEffect(() => {
        reviewService.getOne(reviewId, controller.signal)
            .then(result => {
                setReview(result);
            })

        return () => {
            controller.abort();
        }
    }, [reviewId, controller]);

    return [
        review,
        setReview
    ]
};

export default useReviewState;