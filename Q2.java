package Assignment2;
class Q2
{
  public static void main(String[]args)
 {
   
    for(int i=1;i<=9;i++)
    {
      for(int k=9-i;k>=1;k--)
       {
            System.out.print(" ");
       }
     
       for(int j=1;j<=i;j++)
       {
         System.out.print(j+" ");
       }
      System.out.println();
     }
   }
}