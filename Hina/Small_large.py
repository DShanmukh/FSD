n=input().lower().split(" ")
l=[]
for i in range(len(n)):
  k=sorted(n[i])
  print(k[0],k[len(n[i])-1],end=" ")