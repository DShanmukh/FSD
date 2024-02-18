n=input()
c=0
l=[]
for i in n:
  if(i=='a' or i=='e' or i=='i' or i=='o' or i=='u'):
      c+=1
  else:
    c=0
  l.append(c)
print(max(l))