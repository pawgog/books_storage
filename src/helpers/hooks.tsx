import { useState, useMemo } from 'react';

const useSortableData = (booksSorted: any, config = null) => {
    const [sortConfig, setSortConfig] = useState<any>(config);

    const sortedItems = useMemo(() => {
        const sortableItems = [...booksSorted];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [booksSorted, sortConfig]);

    const requestSort = (key: any) => {
        let direction = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    return { booksSorted: sortedItems, requestSort, sortConfig };
};

export default useSortableData;
