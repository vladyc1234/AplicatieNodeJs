# Task 1
def is_unique_with_ds(s):
    seen_chars = set()
    for char in s:
        if char in seen_chars:
            return False
        seen_chars.add(char)
    return True

def is_unique_no_aditional_ds(s):
    for i in range(len(s)):
        for j in range(i + 1, len(s)):
            if s[i] == s[j]:
                return False
    return True

# Task 2
def find_substrings(s, num):
    if num <= 1:
        return []

    result = []
    seen = set()

    for i in range(len(s) - num + 1):
        substring = s[i:i + num]
        if len(set(substring)) == num - 1 and substring not in seen:
            result.append(substring)
            seen.add(substring)

    return result

if __name__ == '__main__':

    # Example usage Task 1
    print(is_unique_with_ds("abcdef"))  # True
    print(is_unique_with_ds("abcdeaf"))  # False

    # Example usage Task 1 no additional data structure
    print(is_unique_no_aditional_ds("abcdef"))  # True
    print(is_unique_no_aditional_ds("abcdeaf"))  # False

    # Example usage Task 2
    s = "aaabbcdde"
    num = 4
    print(find_substrings(s, num))