n=int(input())
for i in range(n):
    m,k=map(int,input().split())
    if(m%6==0):
        print((m//6)*k) 
    else:
        print(((m//6)+1)*k)
        