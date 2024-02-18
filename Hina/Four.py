t=int(input())
for i in range(t):
    n,m=map(int,input().split())
    c=0
    c1=0
    for k in range(n,m+1):
        c=0
        for j in range(1,k+1):
            if(k%j==0):
                c+=1
        if(c==4):
            c1+=1
    print(c1)
    