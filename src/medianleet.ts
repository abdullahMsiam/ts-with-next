function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const merged: number[] = [...nums1, ...nums2].sort((a, b) => a - b);

    const mid = Math.floor(merged.length / 2);
    const mid1 = merged[mid - 1];
    if (merged.length % 2 === 0) {
        return (mid1 as number + mid as number) / 2;
    } else {
        return merged[mid] as number;
    } 
};

const median = findMedianSortedArrays([1, 3], [2]);
console.log(median); // 2`