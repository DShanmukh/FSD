n=int(input())
c=0
l=[]
for i in range(1,n+1):
    c=0
    for j in range(1,i+1):
        if(i%j==0):
            c+=1
    if(c==9):
        l.append(i)
print(*l,end="\n")
print(f'Total={len(l)}')