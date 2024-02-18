n=int(input())
j=int(n)
rev=0
rev1=0
while(j!=0):
    r=j%10
    rev=rev*10+r
    j=j//10
k=rev**2
while k!=0:
    r1=k%10
    rev1=rev1*10+r1
    k=k//10
if((n**2)==rev1):
    print("True")
else:
    print("False")