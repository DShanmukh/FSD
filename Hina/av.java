import java.util.*;
class av
{
    public static void main(String args[])
    {
        Scanner sc=new Scanner(System.in);
        int n,a[],i,j,c=0,avg=0,s=0;
        n=sc.nextInt();
        a=new int[n];
        for(i=0;i<n;i++)
        {
            a[i]=sc.nextInt();
        }
        for(i=0;i<n;i++)
        {
            c=0;
            for(j=2;j<a[i]/2;j++)
            {
                if(a[i]%j==0)
                {
                    c++;
                    break;
                }
            }
            if(c==0 && a[i]>1)
            {
                avg=avg+a[i];
                s+=1;
            }
        }
        System.out.print(s);
    }
}
