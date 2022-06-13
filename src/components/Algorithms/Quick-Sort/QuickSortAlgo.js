import React from "react";
import "./QuickSortAlgo.css";

function QuickSort(arr, start, end) {
  if (start >= end) return;
  let pivot = arr[start];
  let left = start + 1;
  let right = end;

  while (left <= right) {
    while (left <= right && arr[left] <= pivot) left++;
    while (left <= right && arr[right] >= pivot) right--;
    // swap left and right
    if (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    }
  }
  // swap pivot and right
  if (arr[start] > arr[right]) {
    let temp = arr[start];
    arr[start] = arr[right];
    arr[right] = temp;
  }

  QuickSort(arr, start, right - 1);
  QuickSort(arr, right + 1, end);
}

const QuickSortAlgo = () => {
  let ExecuteQuickSort = () => {
    const ARRAY_LENGTH = 4;
    const randomArray = [];
    for (let i = 0; i < ARRAY_LENGTH; i++) {
      randomArray.push(Math.floor(Math.random() * 100));
      console.log(randomArray);
    }
  };

  return (
    <>
      <div id="algorithms">Quick Sort</div>
      <button
        id="quick-sort"
        onClick={() => {
          ExecuteQuickSort();
        }}
      >
        VISUALIZE QUICKSORT
      </button>
      <div id="array-bars"></div>
    </>
  );
};

export default QuickSortAlgo;
