const handleQuickSort = () => {
  function quickSort(list) {
    if (list.length <= 1) {
      return list;
    }

    let pivot = list.length - 1;
    let left = [];
    let right = [];

    for (let i = 0; i < list.length - 1; i++) {
      if (list[i].year < list[pivot].year) {
        right.push(list[i]);
      } else {
        left.push(list[i]);
      }
    }
    return [...quickSort(left), list[pivot], ...quickSort(right)];
  }

  const updatedBooks = quickSort([...booksList]);
  setBooksList(updatedBooks);
};
