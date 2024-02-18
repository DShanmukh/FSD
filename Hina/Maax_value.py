n=int(input())
for i in range(n):
  m=input()
  z=0
  o=0
  if(len(m)<3):
    print("0")
  else:
    for j in range(1,len(m)):
      if(m[j-1]=="0" and m[j]=="0"):
        z+=1
      if(m[j-1]=="1" and m[j]=="1"):
        o+=1
    if(z>o):
      k=len(m)-
    else:
      k=len(m)-o
    print(k)