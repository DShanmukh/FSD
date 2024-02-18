import java.util.Scanner;
class Sha{
  public static void main(String args[])
  {
    Scanner sc=new Scanner(System.in);
    int n,m,a[][],s=0,i,j,s1=0;
    n=sc.nextInt();
    m=sc.nextInt();
    a=new int[n][m];
    for(i=0;i<n;i++)
    {
      for(j=0;j<m;j++){
        a[i][j]=sc.nextInt();
      }
    }
    for(i=0;i<n;i++)
    {
      for(j=0;j<m;j++)
      {
        if(i==j)
        {
          s+=a[i][j];
        }
        if((i==0 && j==(m-1) ) || (i==n-1 && j==0))
        {
          s1 +=a[i][j];
        }
      }
    }
    System.out.print(s1+s);
  }
}