import java.util.*;
class Rengoku{
    public static void main(String args[])
    {
        Scanner sc=new Scanner(System.in);
        int n,m,a[][],i,j;
        n=sc.nextInt();
        m=sc.nextInt();
        a=new int[n][m];
        for(i=0;i<n;i++)
        {
            for(j=0;j<m;j++)
            {
                a[i][j]=sc.nextInt();
            }
        }
        for(i = 0; i<n;i++)
        {
          for(j=0;j<m;j++)
          {
            if(a[j][i]>a[j][i+1])
            {
              a[j][i]=a[j+1][i];
            }
          }
          System.out.print(a[i][j]);
        }
    }
}