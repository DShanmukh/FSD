def fac(n):
    p = 1
    for i in range(1, n + 1):
        p *= i
    c = 0
    while p > 0 and p % 10 == 0:
        c += 1
        p //= 10
    return c
n = int(input())
print(fac(n))
