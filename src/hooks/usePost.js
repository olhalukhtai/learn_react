import { useMemo } from "react";

export const usePost = (posts,filter) => {
    const sortedPosts = useMemo(() => {
        if (filter.sort == 'sortTitle') {
            return [...posts].sort((post1, post2) =>
                post1.title.localeCompare(post2.title)
            );
        } else if (filter.sort == 'sortBody') {
            return [...posts].sort((post1, post2) =>
                post1.body.localeCompare(post2.body)
            );
        } else {
            return [...posts].sort((post1, post2) => post1.id - post2.id);
        }
    }, [filter.sort, posts]);

    const filterSortedPosts = useMemo(() => {
        return sortedPosts.filter((sortedPost) =>
            sortedPost.title.startsWith(filter.query)
        );
    }, [sortedPosts, filter.query]);

    return filterSortedPosts
}

