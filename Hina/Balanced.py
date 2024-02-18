def ARRAY(arr):
    n = len(arr)
    s = sum(arr)
    ls = 0
    rs = s
    for i in range(n):
        rs -= arr[i]
        if ls == rs:
            return "YES"
        ls += arr[i]
    return "NO"
T = int(input())
for _ in range(T):
    N = int(input())
    arr = list(map(int, input().split()))
    
    result = ARRAY(arr)
    print(result)