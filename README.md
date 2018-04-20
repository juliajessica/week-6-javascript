<p align="center"><img width=27% src="https://github.com/juliajessica/template-webpack-karma/blob/master/media/epicodus_logo.png"></p>

# _<p align="center">Super Galactic Age Calculator</p>_

#### _<p align="center">Test Driven Development Assignment for Epicodus</p>_

#### _**<p align="center">By: Julia Sheremet</p>**_

<p align="center">  
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
<a href="https://github.com/RichardLitt/standard-readme"><img src="https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square"></a>
</p>

## <span style="color:#74875d;">Description</span>

_This webpage application is designed to determines a user’s age based on a planet’s solar years. The primary focus of this webpage is to focus on thoroughly testing each piece of functionality._

_This project uses Webpack to bundle and minify the code. The test runner is Karma and the syntax flavor is Jasmine. Babel is used to transpile ES6. All dependencies required are included in this project._

## <span style="color:#74875d;">Setup/Installation Requirements</span> :computer:

* Clone repository on your local computer.
* If you already have Node, Homebrew, and Karma installed, then skip to **Install Dependencies**.

  #### Node: Windows / Linux Installation Instructions
  To install `Node` on other systems, go to the <a href="https://nodejs.org/en/">Node website</a>, download and install the appropriate installer for your operating system.

  #### Node: OSX Installation Instructions
  On OS X systems, install `Node.js` through Homebrew with the following command in your home directory:
    ```sh
    $ brew install node
    ```
  Confirm that Node version is 4.0.x or higher and npm should be 3.6.x or higher:
  ```sh
    $ node -v
    $ npm -v
  ```
  #### Homebrew Installation
  If you do not have `Homebrew` installed yet, you may install it by copying and pasting this command:
  ```sh
    $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  ```
  Next, ensure Homebrew packages are run before the system versions of the same (which may be dated or not what we want) by executing the following:
  ```sh
    $ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile
  ```
  #### Karma Installation
  If you do not have `Karma` installed globally, then run the following:
  ```sh   
    $ npm install -g karma-cli
   ```
  #### Install dependencies
  Enter the following code in the command line to install all dependencies:
  ```sh
    $ npm install
  ```

  #### Working with the project in Node:
  To build and bundle the project in webpack run the following:
  ```sh
    $ npm run build
  ```
  To run the local test server:
  ```sh
    $ npm run start
  ```
  To run test in `Karma`:
  ```sh
    $ npm test
  ```

## <span style="color:#74875d;">Known Bugs</span>
µ
_Feel free to email me at [juliajessicasher@gmail.com](mailto:juliajessicasher@gmail.com) if you run into any issues or have questions, ideas or concerns. Please enjoy and feel free to share your opinion, constructive criticism, or comments of my work. :+1:_

## <span style="color:#74875d;">Technologies Used</span>

| Development dependencies | Front end dependencies |
| :------------ | :------------- |
| Webpack | CSS (Bootstrap) |
| Eslint | JavaScript (JQuery) |
| Karma & Jasmine | Popper
| Babel-loader |  |
| CSS-loader & Style-loader | | |

### <span style="color:#74875d;">Specs</span>
| Behavior | Input | Output |
| :-------------     | :------------- | :------------- |
| The program will return a person’s age | Input: 25 | Output: 25 |
| The program will take a person’s age in years and convert it into seconds. | Input: 25 | Output: 7.884e+8 |
| The program will return the seconds based on a selected date | Input: 06/07/1993 | Output: X Seconds |
| The program will take two dates and determine the difference in seconds, between the two. | Input: 06/07/1993 and 06/07/2030 | Output: X Seconds |
| The program will return the age of a human in Mercury years. | Input: 24 | Output: X Mercury Years |
| The program will return the age of a human in Venus years | Input: 24 | Output: X Venus Years |
| The program will return the age of a human in Mars years. | Input: 24 | Output: X Mars Years |
| The program will return the age of a human in Jupiter years | Input: 24 | Output: X Jupiter Years |
| The program will calculate life expectancy on Earth | Input: 87 Years | Output: 87 Years |
| The program will calculate life expectancy on Earth to life expectancy on Mercury | Input: 87 Years | Output: X Mercury Years |
| The program will calculate life expectancy on Earth to life expectancy on Venus | Input: 87 Years | Output: X Venus Years |
| The program will calculate life expectancy on Earth to life expectancy on Mars | Input: 87 Years | Output: X Mars Years|
| The program will calculate life expectancy on Earth to life expectancy on Jupiter | Input: 87 Years | Output: X Jupiter Years |
| The program will take average life expectancy, and return the number of years they have lived past the life expectancy. | Input: (87 years - 80 years) | Output: 7 years |

### <span style="color:#74875d;">Functionality to be included in the Future:</span>

* Return the date of a user’s next birthday on each planet.
* Return your age in dog years on the all planets.


### <span style="color:#74875d;">License</span>

Copyright (c) 2018 ****_Julia Sheremet_****

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
