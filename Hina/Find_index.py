n=int(input())
for i in range(n):
    c=0
    m,k=map(int,input().split())
    l=list(map(int,input().split()))
    for j in range(1,len(l)):
        if(l[j-1]<k and l[j]>k):
            c=j
    if(c==0):
      print(j+1)
    else:
      print(j)
    