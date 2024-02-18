def prime(n):
  for i in range(1,n+1):
    c=0
    if(i==1):
      c=2
    for j in range(2,i+1):
      if(i%j==0 ):
        c+=1
    if(c<2):
      return i
def Strong(m):
  if prime(m)==False:
    m-=1
    m+=1
n=int(input())
prime(n) 