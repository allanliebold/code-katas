/*
  Sum without highest and lowest number -
  Return the sum of all the numbers in an array, except for the highest and lowest values.
  If the array is null, empty, or has only one element, return 0.

*/

public class Kata
{
  public static int sum(int[] numbers)
  {
    if (numbers == null || numbers.length <= 1) 
      return 0;
      
    int highest = numbers[0];
    int lowest = numbers[0];
    int total = 0;
    
    for (int num : numbers) {
      total += num;
      
      if (num > highest)
        highest = num;
      if (num < lowest)
        lowest = num;
    }
    
    return total - highest - lowest;
  }
}

/*
  Top solutions -
  
 public class Kata
{
  public static int sum(int[] numbers)
  {
    if (numbers == null || numbers.length == 0 || numbers.length == 1) return 0;
    int min,max,sum;
    sum = min = max = numbers[0];
    for (int i = 1; i < numbers.length; i++)
    {
      sum += numbers[i];
      if (numbers[i] < min) min = numbers[i];
      if (numbers[i] > max) max = numbers[i];
    }
    return sum - min - max;
  }
}

-----

import static java.util.stream.IntStream.of;

public class Kata {

  public static int sum(int[] numbers) {
    return (numbers == null || numbers.length <= 2) ? 0 : of(numbers).sum() - of(numbers).max().getAsInt() - of(numbers).min().getAsInt();
  }
}
*/
