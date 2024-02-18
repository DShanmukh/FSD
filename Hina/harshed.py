n = int(input())
t = n
s = 0

while t > 0:
    r = t % 10
    s = s + r
    t = t // 10

if s == 0:
    print("Sum of digits is 0. Division by 0 is undefined.")
elif n % s == 0:
    print("True")
else:
    print("False")
