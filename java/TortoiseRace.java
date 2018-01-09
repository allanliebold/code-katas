/*
Tortoise Racing - 
Given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (don't worry for fractions of second).
If v1 is greater than v2, return null. 

Top solution - 

public class Tortoise {
    public static int[] race(int v1, int v2, int g) {
      int totalSecondsTaken = 0;
      if (v2 > v1 ) {
        totalSecondsTaken = (g*3600) / (v2-v1) ;
      } else {
        return null;
      }
      return new int[] {totalSecondsTaken/3600, (totalSecondsTaken % 3600)/60, totalSecondsTaken % 60};

    }
}

------

public class Tortoise {
    public static int[] race(int v1, int v2, int g) {
        if (v1 > v2)
          return null;
          
        int totalSeconds = (g * 3600) / (v2 - v1);
        int[] result = new int[3];
        result[2] = totalSeconds % 60;
        result[1] = totalSeconds / 60 % 60;
        result[0] = totalSeconds / 60 / 60;
        return result;
    }
}

*/
