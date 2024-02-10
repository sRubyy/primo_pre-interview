export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
    const temp: number[] = [];
    const mergedCollection: number[] = [];
    let i = 0, j= 0, k = 0, l = 0;

    // Merge between collection1 and collection3
    while (i < collection1.length && k < collection3.length) {
        if (collection1[i] <= collection3[k]) {
            temp.push(collection1[i]);
            i++;
        } else {
            temp.push(collection3[k]);
            k++;
        }
    }

    // Copy remaining elements from collection1
    while (i < collection1.length) {
        temp.push(collection1[i++]);
    }

    // Copy remaining elements from collection3
    while (k < collection3.length) {
        temp.push(collection3[k++]);
    }

    //Merge between temp and collection2
    while (l < temp.length && j < collection2.length){
        if (collection2[j] > temp[l]) {
            mergedCollection.push(collection2[j]);
            j++;
        } else {
            mergedCollection.push(temp[l]);
            l++;
        }
    }

    // Copy remaining elements from temp
    while (l < temp.length) {
        mergedCollection.push(temp[l++]);
    }

    // Copy remaining elements from collection2
    while (j < collection2.length) {
        mergedCollection.push(collection2[j++]);
    }

    // Sorting the result using buble sort
    for (let i = 0; i < mergedCollection.length - 1; i++) {
        for (let j = 0; j < mergedCollection.length - 1 - i; j++) {
            if (mergedCollection[j] > mergedCollection[j + 1]) {
                // Swap elements
                const temp = mergedCollection[j];
                mergedCollection[j] = mergedCollection[j + 1];
                mergedCollection[j + 1] = temp;
            }
        }
    }

    return mergedCollection;
}
