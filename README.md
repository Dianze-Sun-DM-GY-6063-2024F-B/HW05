HW05A
First, I set up some time variables, including hours, minutes, and seconds, to facilitate subsequent calculations.

Next, I used a for loop to draw multiple concentric circles, with sizes ranging from 400 to 7000 and spaced by 150. These concentric circles added depth and a sense of space to the composition.

To dynamically display the time, I used the millis() function to obtain the number of milliseconds since the program started and converted it to seconds, minutes, and hours. This is a crucial step, as it allows the clock to reflect the current time in real-time. Then, I employed the map function to convert these time values to angles between 0 and 360 degrees, which enables me to draw the corresponding arcs. Each arc has a different diameter, specifically 800, 1100, and 1400, creating a visually appealing layering effect.

Finally, I added a few small dots to the right side of the clock, which enriched the details of the composition and added an element of interest. The overall design allows viewers to intuitively sense the passage and change of time.

HW05B
"
Star Talk
The star Uranus is :blue.red.
silver.
green.
white..
rainbow colour.
"

First, I defined an array of various colors to represent the characteristics of Uranus. In the draw function, I used nested for loops to traverse the canvas and draw circles spaced 100 pixels apart. Each circle's size and position change randomly, making the visual more vibrant and dynamic.

For the dynamic effect, I used the millis() function to get the current time and used this value to move the large circle representing Uranus dynamically. The color of this circle cycles through the colors when the user clicks the mouse, adding interactivity.

I added arcs around the large circle, and the size and position of these arcs correspond to the large circle, making it resemble Pluto more.
