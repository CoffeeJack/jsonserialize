jsonserialize
=============

JQuery plugin to json serialize form inputs to JSON

Version
----

2.0

JQuery .serialize()
-----
You may be familiar with JQuery's .serialize() call, which allows you to turn something like:

```sh
<form>
  <select name="single">
    <option>Single</option>
    <option>Single2</option>
  </select>
 
  <br>
  <select name="multiple" multiple="multiple">
    <option selected="selected">Multiple</option>
    <option>Multiple2</option>
    <option selected="selected">Multiple3</option>
  </select>
 
  <br>
  <input type="checkbox" name="check" value="check1" id="ch1">
  <label for="ch1">check1</label>
  <input type="checkbox" name="check" value="check2" checked="checked" id="ch2">
  <label for="ch2">check2</label>
 
  <br>
  <input type="radio" name="radio" value="radio1" checked="checked" id="r1">
  <label for="r1">radio1</label>
  <input type="radio" name="radio" value="radio2" id="r2">
  <label for="r2">radio2</label>
</form>
```
<br />
And when you call:
```sh
$('form').serialize();
```
<br />
You get something like this:
```sh
single=Single&multiple=Multiple&multiple=Multiple3&check=check2&radio=radio1
```
<br />
For more info please checkout: http://api.jquery.com/serialize/
<br />
<br />
How this works
----
Similar to JQuery .serialize(), you call instead jsonSerialize() as such
```sh
$('form').jsonSerialize();
```
<br />
And you will get:
```sh
{"check":"check2","radio":"radio2","single":"Single","multiple":["Multiple","Multiple3"]} 
```



  
    
