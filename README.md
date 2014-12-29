todo_test
=========

test different frameworks

##to install:##
```
git clone https://github.com/jurgob/todo_test.git
cd todo_test
npm install
gulp install
```
##run app:##
```
gulp
```

check on browser (be sure gulp command is running):
- angularjs: http://localhost:8000/angularjs
- reactjs+flux: http://localhost:8000/flux
- emberjs: http://localhost:8000/emberjs

running casperjs tests (be sure gulp command is running):
- angularjs: ```./runtests.sh angularjs```
- reactjs+flux: ```./runtests.sh flux```
- emberjs: ```./runtests.sh emberjs```




##history of app:##
list of branch:
```
git tag
```
app steps explaination:

- plain_todo: the triviest todo list app:
```
git checkout -f plain_todo
npm install
```

- routing: add routing system (check on footer the credit page)
```
git checkout -f routing
npm install
gulp install
```


 




