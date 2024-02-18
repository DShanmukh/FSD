import java.util.*;
class Naruto{
    public static void main(String args[])
    {
        Scanner sc=new Scanner(System.in);
        int n;
        n=sc.nextInt();
        int a[][],b[][],i,j;
        a=new int[n][n];
        b=new int[n][n];
        for (i=0;i<n;i++)
        {
            for(j=0;j<n;j++)
            {
                a[i][j]=sc.nextInt();
            }
        }
         for (i=0;i<n;i++)
        {
            for(j=0;j<n;j++)
            {
                b[i][j]=sc.nextInt();
            }
        }
        for(i=0;i<n;i++)
        {
            for(j=0;j<n;j++)
            {
                if(j==n-1){
                  System.out.println(Math.abs(a[i][j]-b[i][j]));
                }
                else{
                  System.out.print(Math.abs(a[i][j]-b[i][j])+" ");
                }
                // System.out.println();
            }
        }
    
    }
}
