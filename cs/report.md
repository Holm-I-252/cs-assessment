First Run (extraLargeArray):
Results for the extraLargeArray
insert 1.0803542 s
append 10.2469 ms

largeArray: 
Results for the largeArray
insert 13.6344 ms
append 830.7 μs

mediumArray:
Results for the mediumArray
insert 233.7 μs
append 203 μs

smallArray:
Results for the smallArray
insert 72.9 μs
append 144.4 μs

tinyArray: 
Results for the tinyArray
insert 65 μs
append 170.1 μs

The results show that as the smaller the aray got, the insert function became faster than the append function. However, as the array got bigger, the insert function became slower, but at a much faster rate than the append function did. This leads me to belive that the insert function has worse scale than the append function does. The append function has far better scale, since it got to be about a hundredth of the speed of the insert function as the array hit its highest length. 

This is the case because the insert function uses an unshift to add to the new_nums array, while the append function uses a push. The time complexity for push is O(1), making it constant, while ushift has a time complexity of O(n), making it linear. Constant functions take the same ammount of time per opperation, while linear ones will take more and more time as they perform more opperations. This makes the append function, that has a constant time complexity, much more efficent for large ammounts of data.