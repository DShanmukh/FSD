n,m=map(int,input().split())
c=0
for i in range(n,m+1):
  if(i%3==0):
    c+=1
print(c)