import java.util.*;
class Hina{
    public static void main(String args[])
    {
        Scanner sc=new Scanner(System.in);
        int n,m,a[][],i,j,e=0,o=0;
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
        for(j=0;j<m;j++)
        {
          e=0;
          for(i=0;i<n;i++)
          {
            e+=a[i][j];
          }
          if(e>o)
          {
            o=e;
          }
        }
        System.out.print(o);
    } 
}