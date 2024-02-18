n=input()
stack=[]
c=0
for i in n:
  if(i=='(' or i=='{' or i==']'):
    stack.append(i)
  if c==1:
    break
  else:
    if i=='}':
      if len(stack)!=0 and stack[-1]=='{':
        stack.pop()
      else:
        c=1
    if i==')':
      if len(stack)!=0 and stack[-1]=='(':
        stack.pop()
      else:
        c=1
    if i==']':
      if len(stack)!=0 and stack[-1]=='[':
        stack.pop()
      else:
        c=1
if(c==0 and len(stack)==0):
  print("True")
else:
  print("False")