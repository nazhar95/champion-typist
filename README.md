# ChampionTypist
<p>A game project created for Telebort Hiring Task (Creative Computing Instructor) using basic web programming languages. Note: The game is best played with the Internet connection turned on and using the Chrome browser for a better gaming experience <span style="font-size:10px">&#128512;</span>.</p>


# What The Game is About
<p>The player has to type the words that are randomly displayed on the screen as fast as they can in 20 seconds which is very fun and challenging.</p>


# Instructions to Deploy the Project
<ol>
  <li>Download the project from GitHub as a zip file and extract the zip file to be the "ChampionTypist-master" folder.</li> 
  <li>Copy the "ChampionTypist-master" folder and paste the folder into the htdocs folder if you are using XAMPP as the localhost.</li>
  <li>Rename the "ChampionTypist-master" folder as "ChampionTypist".</li>
  <li>Open XAMPP Control Panel (if you are using XAMPP for the localhost) and start the Apache.</li>
  <li>Open the Chrome browser and clear the cache in the browser.</li>
  <li>Insert localhost/ChampionTypist as the URL and enjoy the game!</li>
</ol>
<br/>   

# Programming Concepts Used for This Project
HTML 
<br/>
<ul>
  <li>HTML <code>marquee</code> tag is used for the word animation. Even though the <code>marquee</code> tag is considered as deprecated, it is still fun to be used for basic word animation.</li>
  <li>The table element in HTML is used to make the Score and Timer arranged nicely in the web interface. The td colspan attribute is also used to merge the columns for the row under the 0 score and the 20 seconds. This is to make the random words that appeared placed in between the Score and the Timer columns</li>
  <li>A second white background was created using the HTML class element in order to make the texts more readable for the instruction and the contents underneath the instruction.</li>
</ul> 
<br/>

CSS 
<br/>
<ul>
  <li>Bootstrap 3.4.0 is used and imported from the Bootstrap CDN for a more nice looking interface and a faster web design.</li>
  <li>CSS Media Queries are also used in the style.css. to make the game responsive in mobile devices.</li>
</ul> 
<br/>

JavaScript <br/>
<ul>
  <li>addEventListener() method is used to make the random words to appear, make the timer begin counting and make the score to start the counting when the Start button is clicked.</li>
  <li>A function with the XMLHttpRequest object is used to get the words from the word.txt file.</li>
  <li>The alert() method is used to make the alert box to display the point received by the player.</li>
</ul> 
<br/>

# Acknowledgement
<ul>
  <li>Mr. Cheong Hou Yeen (KDU University College Penang coursemate) - for teaching me on how to import the .txt file for the JavaScript part.</li>
  <li>Mr. Nikola Simovic - for giving an example of how a similar type of typing game is built in CodePen as well as for the sound and the word checking part of the JS.</li>
  <li>Mr. Chong Wei (Hiring Manager from Telebort) - for giving me the chance to apply my knowledge and logic through the development of this game project.</li>
</ul>  
