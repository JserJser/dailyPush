print 'hello world'
my_girl_friends=['aa','bb','cc',4,10,30] 


print(type(my_girl_friends))


print(my_girl_friends[2])


print(my_girl_friends[1:3])

my_girl_friends.append('oldboy')
print(my_girl_friends)


my_girl_friends.pop()
my_girl_friends.pop()


my_girl_friends.pop(0)
my_girl_friends.pop(0)
my_girl_friends.pop(1)

# my_girl_friends.remove('yuanhao')
print(my_girl_friends)

my_girl_friends.__len__()
print(len(my_girl_friends))


print('wupeiqi' in my_girl_friends)

my_girl_friends=['a','b','c','d',4,10,30]

my_girl_friends.insert(1,'Sb')
print(my_girl_friends)


# my_girl_friends.clear()
print(my_girl_friends)

# l=my_girl_friends.copy()
# print(l)

print(my_girl_friends.count('ee'))

my_girl_friends.append('a1')
my_girl_friends.append('a2')
my_girl_friends.append('a3')
print(my_girl_friends)

my_girl_friends.extend(['oldboy1','oldboy2','oldboy3'])
print(my_girl_friends)

print(my_girl_friends.index('alex'))

my_girl_friends.reverse()
print(my_girl_friends)

l=[3,-1,5,2]
l.sort(reverse=True)
print(l)

