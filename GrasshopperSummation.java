/*
  Grasshoper Summation - Write a program that finds the summation of every number between 
  1 and num. The number will always be a positive integer greater than 0.
*/

public class GrassHopper {

    public static int summation(int n) {
        int total = 0;
        for(int i = 1; i <= n; i++) {
            total += i;
        }
    return total;
    }
}

/*
  Top solutions - 
 
 
public class GrassHopper {

   public static int summation(int n) {

       return  n*(n+1)/2;
   }
}

-----------

import java.util.stream.IntStream;

public class GrassHopper {

    public static int summation(int n) {

        return IntStream.rangeClosed(1,n).sum();
    }
}
*/
