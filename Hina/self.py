n=int(input())
m=int(input())
c=0
for i in range(n,m+1):
  k=i
  c=0
  while(k!=0):
    r=k%10
    if r!=0 and i%r==0 :
      c+=1
    k=k//10
  if(len(str(i))==c):
    print(i)