import turtle

t = turtle.Turtle()
t.speed(0)


def location(x, y):
  print('Vị trí x:{} và y:{}'.format(x, y))


turtle.onscreenclick(location)
t.pu()
t.goto(-174, -140)
t.begin_fill()
t.color('red')
t.begin_fill()
for i in range(4):
  t.forward(288)
  t.left(90)
t.end_fill()
t.color('#252B48', '#900C3F')
t.begin_fill()
t.penup()
t.fd(96)
t.left(90)
t.fd(144)
t.right(90)
t.fd(96)
t.right(90)
t.fd(144)
t.end_fill()
t.left(90)
t.pu()
t.fd(96)
t.left(90)
t.pu()
t.fd(288)
t.left(45)
t.color('blue')
t.begin_fill()
t.fd(203.646753)
t.lt(90)
t.fd(203.646753)
t.end_fill()
