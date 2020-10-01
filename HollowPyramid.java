package Assignment2;
import java.util.Scanner;
class HollowPyramid1
{
public static void main (String args[])
{
Scanner sc=new Scanner(System.in);
System.out.print("Enter the rows: ");
int rows=sc.nextInt(); //get input from user
for(int i=1; i<=rows; i++){//Print each row 
for(int j=i; j<rows; j++){//Print space for Pyramid shape 
System.out.print(" "); 
} 
for(int k=1; k<2*i; k++){//print *
if(i==rows || (k==1 || k==2*i-1))
 System.out.print("*"); 
 else {
 System.out.print(" "); 
 }
}
 System.out.println(""); //move to next line
}
}
}