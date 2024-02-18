import java.util.Scanner;
public class Rich {
    public static void main(String args[])
    {
        Scanner sc=new Scanner(System.in);
        int n,m,a[][],r=0,i,j,max=0;
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
        for(i=0;i<n;i++)
        {
          r=0;
            for(j=0;j<m;j++)
            {
                r+=a[i][j];
                
            }
            if(max<r)
            {
              max=r;
            }
        }
        System.out.print(max);
    }
}