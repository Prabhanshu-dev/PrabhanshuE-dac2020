package Assignment2;
class Q5
{
  public static void main(String[]args)
 {
   
    for(int i=9;i>=1;i--)
    {
      for(int k =1;k<9-(i-1);k++)//9-8=1,9-(8-1)=2
      {
       System.out.print(" ");
      }

       for(int j=1;j<=i;j++)
       {
         System.out.print(i + " ");
       }
      System.out.println();
    }
     }
   }