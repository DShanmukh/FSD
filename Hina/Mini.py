n=int(input())
p=[]
l=[]
for i in range(1,(n//2)):
  for j in range(i,(n//2)):
    for k in range(j,(n//2)):
      if((i+j+k)==n and i!=j and j!=k and i!=k):
        p.append(i)
        p.append(j)
        p.append(k)
if len(p) >= 3:
    l = p[:3]
r = "".join(map(str, l))
print(r)