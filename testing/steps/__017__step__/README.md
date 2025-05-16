
<a id=top></a>

# City Skyline

<details>
      <summary>
        <h4>Follow Links Steps</h4>
      </summary>
       
<table>
  <thead>
    <tr><th><a href="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp//tree/main/steps/__000__title_" target="_self">Step 0</a></th><th><a href="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp//tree/main/steps/__001__step__" target="_self">Step 1</a></th><th><a href="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp//tree/main/steps/__002__step__" target="_self">Step 2</a></th><th><a href="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp//tree/main/steps/__003__step__" target="_self">Step 3</a></th><th><a href="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp//tree/main/steps/__004__step__" target="_self">Step 4</a></th><tr><th><a href="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp//tree/main/steps/__005__step__" target="_self">Step 5</a></th><th><a href="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp//tree/main/steps/__006__step__" target="_self">Step 6</a></th><th><a href="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp//tree/main/steps/__007__step__" target="_self">Step 7</a></th><th><a href="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp//tree/main/steps/__008__step__" target="_self">Step 8</a></th><th><a href="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp//tree/main/steps/__009__step__" target="_self">Step 9</a></th><tr><th><a href="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp//tree/main/steps/__010__step__" target="_self">Step 10</a></th><th><a href="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp//tree/main/steps/__011__step__" target="_self">Step 11</a></th><th><a href="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp//tree/main/steps/__012__step__" target="_self">Step 12</a></th><th><a href="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp//tree/main/steps/__013__step__" target="_self">Step 13</a></th><th><a href="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp//tree/main/steps/__014__step__" target="_self">Step 14</a></th><tr><th><a href="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp//tree/main/steps/__015__step__" target="_self">Step 15</a></th><th><a href="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp//tree/main/steps/__016__step__" target="_self">Step 16</a></th><th><a href="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp//tree/main/steps/__017__step__" target="_self">Step 17</a></th></tr>
  </thead>
  <tbody>
  </tbody>
</table>
</details>


<details>
      <summary>
        <h4>Description of the Task</h4>
      </summary>
       <h3>Step  17</h3>

<section>
<p>Change the value of your variable from <code>#999</code> to <code>#aa80ff</code> and you can see how it gets applied everywhere you used the variable. This is the main advantage of using variables, being able to quickly change many values in your stylesheet by just changing the value of a variable.</p>
</section>
</details>

<h4>preview</h4>
    <img src="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp/blob/main/images/previews/preview_step017.png" alt="preview_step017">
  
<table>
  <thead>
      <tr><th height=33 width=100>HTML5</th><th height=33 width=100>CSS</th></tr>
  </thead>
  <tbody>
      <tr><td height=100 width=100><a href=https://html.spec.whatwg.org/multipage/ target="_self"><img src=https://github.com/AndriiKot/iconsSVG_and_linksDocs/blob/main/svg/html.svg alt=HTML5></a></td><td height=100 width=100><a href=https://www.w3.org/Style/CSS/ target="_self"><img src=https://github.com/AndriiKot/iconsSVG_and_linksDocs/blob/main/svg/css.svg alt=CSS></a></td></tr>
  </tbody>
</table>

[back to top](#top)



<details open>
  <summary>
    <h4>index.html</h4>
  </summary>



```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="styles.css">
    <title>City Skyline</title>
  </head>
  <body>
    <div class="background-buildings">
      <div class="bb1">
        <div class="bb1a"></div>
        <div class="bb1b"></div>
        <div class="bb1c"></div>
        <div class="bb1d"></div>
      </div>
    </div>
  </body>
</html>
```



[back to top](#top)


</details>

<details open>
  <summary>
    <h4>styles.css</h4>
  </summary>



```css
* {
  border: 1px solid black;
  box-sizing: border-box;
}

body {
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.background-buildings {
  width: 100%;
  height: 100%;
}

.bb1 {
  --building-color1: #aa80ff;
  width: 10%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bb1a {
  width: 70%;
  height: 10%;
  background-color: var(--building-color1);
}

.bb1b {
  width: 80%;
  height: 10%;
  background-color: var(--building-color1);
}

.bb1c {
  width: 90%;
  height: 10%;
  background-color: var(--building-color1);
}

.bb1d {
  width: 100%;
  height: 70%;
  background-color: var(--building-color1);
}
```



[back to top](#top)


</details>