package Assignment2;
class Q8
{
  public static void main(String[]args)
  {
     for(int i=0;i<=6;i++)
     {
       for(int k=1;k<=6-(6-i);k++)
       {
         System.out.print(" ");
       }  
       for(int j=6-i;j>=1;j--)
       {
         System.out.print("*"+" ");
       }
      System.out.println();
     }
   }
}