package Assignment2;
class Q11
{
    public static void main(String[] args)
    {	 
	for(int i=5;i>0;i--)
               {
	     if(i==1 || i==5)
                       for(int j=1;j<=i;j++)
                         {
                               System.out.print("*");
                        }
                   else
	           {
                       for(int j=1;j<=i;j++)         
                       {  
                          	if(j==1 || j==i)
                              	System.out.print("*");
                              else
                                            System.out.print(" ");
                        }
                    }
                     System.out.println();   
               }             
    }
}