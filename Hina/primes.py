n=int(input())
c=0
l=[]
k=[]
for i in range(1,n//2+1):
    c=0
    if(i==1):
      c=2
    for j in range(2,i+1):
        if(i%j==0):
            c+=1
    if(c<2):
        l.append(i)
for i in l:
  for j in l:
    if(i*j==n and i!=j):
      k.append(i)
      k.append(j)
if(len(k)>0):
  print(*set(k))
else:
  print("-1")
