import java.util.*;
class first{
    public static void main(String args[])
    {
        Scanner shanmukh=new Scanner(System.in);
        int n;
        n=shanmukh.nextInt();
        int a[][],b[][],ad[][],i,j;
        a=new int[n][n];
        b=new int[n][n];
        ad=new int[n][n];
        for (i=0;i<n;i++)
        {
            for(j=0;j<n;j++)
            {
                a[i][j]=shanmukh.nextInt();
            }
        }
         for (i=0;i<n;i++)
        {
            for(j=0;j<n;j++)
            {
                b[i][j]=shanmukh.nextInt();
            }
        }
        for(i=0;i<n;i++)
        {
            for(j=0;j<n;j++)
            {
                ad[i][j]=b[i][j]-a[i][j];
                System.out.print(Math.abs(ad[i][j])+" ");
            }
            System.out.println();
        }
    
    }
}