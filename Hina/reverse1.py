n=input().lower().split(" ")
l=[]
for i in range(len(n)):
    l.append(n[i][::-1])
print(*l[::-1])
    