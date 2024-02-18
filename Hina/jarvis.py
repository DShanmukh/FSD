def can_train_move(coach_sequence):
    sorted_coaches = sorted(coach_sequence)
    for i in range(len(sorted_coaches)):
        if sorted_coaches[i] != i + 1:
            return "NO"
    return "YES"

# Input
t = int(input())
for j in range(t):
    coach_sequence = input()
    result = can_train_move(coach_sequence)
    print(result)
