n=input().lower()
c=0
for i in n:
  k=n.count(i)
  if(k==1):
    c+=1
print(c)
