def reverse(num):
        ns = str(num)
        rs = ns[:-3] + ns[-1] + ns[-2] + ns[-3]
        rn = int(rs)
        return rn
num = int(input())
result = reverse(num)
print(result)
