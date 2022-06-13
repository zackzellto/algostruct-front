export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startingIndex,
  endingIndex,
  auxiliaryArray,
  animations
) {
  if (startingIndex === endingIndex) return;
  const middleIdx = Math.floor((startingIndex + endingIndex) / 2);
  mergeSortHelper(
    auxiliaryArray,
    startingIndex,
    middleIdx,
    mainArray,
    animations
  );
  mergeSortHelper(
    auxiliaryArray,
    middleIdx + 1,
    endingIndex,
    mainArray,
    animations
  );
  doMerge(
    mainArray,
    startingIndex,
    middleIdx,
    endingIndex,
    auxiliaryArray,
    animations
  );
}

function doMerge(
  mainArray,
  startingIndex,
  middleIdx,
  endingIndex,
  auxiliaryArray,
  animations
) {
  let startIdx1 = startingIndex;
  let startIdx2 = startingIndex;
  let j = middleIdx + 1;
  while (startIdx2 <= middleIdx && j <= endingIndex) {
    animations.push([startIdx2, j]);
    animations.push([startIdx2, j]);
    if (auxiliaryArray[startIdx2] <= auxiliaryArray[j]) {
      animations.push([startIdx1, auxiliaryArray[startIdx2]]);
      mainArray[startIdx1++] = auxiliaryArray[startIdx2++];
    } else {
      animations.push([startIdx1, auxiliaryArray[j]]);
      mainArray[startIdx1++] = auxiliaryArray[j++];
    }
  }
  while (startIdx2 <= middleIdx) {
    animations.push([startIdx2, startIdx2]);
    animations.push([startIdx2, startIdx2]);
    animations.push([startIdx1, auxiliaryArray[startIdx2]]);
    mainArray[startIdx1++] = auxiliaryArray[startIdx2++];
  }
  while (j <= endingIndex) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([startIdx1, auxiliaryArray[j]]);
    mainArray[startIdx1++] = auxiliaryArray[j++];
  }
}
