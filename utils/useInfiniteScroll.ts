// lib/hooks/useInfiniteScroll.ts
import { useEffect, useRef, useState } from 'react';

export function useInfiniteScroll<T>(items: T[], batchSize: number = 12) {
    const [visibleItems, setVisibleItems] = useState<T[]>([]);
    const [page, setPage] = useState(1);
    const loaderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setVisibleItems(items.slice(0, page * batchSize));
    }, [page, items, batchSize]);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            const first = entries[0];
            if (first.isIntersecting) {
            setPage((prev) => prev + 1);
            }
        },
        { threshold: 1 }
        );

        const current = loaderRef.current;
        if (current) observer.observe(current);

        return () => {
        if (current) observer.unobserve(current);
        };
    }, []);

    return { visibleItems, loaderRef };
}
