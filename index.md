<html lang="en" class="theme-blue">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
      integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
      crossorigin="anonymous"
    />
  </head>
  <body class="container">
    <header class="logo">
      <h1>Todo App</h1>
    </header>
    <div class="main">
      <form>
        <input type="text" placeholder="New Task.." />
        <button type="submit"><i class="fas fa-plus-square"></i></button>
      </form>

      <div class="todoList">
        <ul class="todoUL"></ul>
        <div class="clearBtns">
          <button name="dayNightToggle" id="dayNightToggle">
            <i class="far fa-moon"></i>
            <span class="fas fa-caret-down"></span>
          </button>

          <div class="wrapper">
            <ul class="menu-bar">
              <li class="coming-soon">
                <a href="#">
                  <div class="icon"><span class="far fa-lightbulb"></span></div>
                  <!-- <i class="fas fa-lightbulb"></i> -->
                  Day & Night Mode
                </a>
              </li>
              <li class="color-li">
                <a href="#">
                  <div class="icon">
                    <span class="fas fa-swatchbook"></span>
                  </div>
                  Accent Color <i class="fas fa-angle-right"></i>
                </a>
              </li>
              <li class="coming-soon">
                <a href="#">
                  <div class="icon"><span class="fas fa-font"></span></div>
                  Font
                </a>
              </li>
            </ul>

            <!-- COLOR SWATCHES MENU -->
            <ul class="color-bar">
              <li class="back-color-btn">
                <span class="fas fa-angle-left"></span>Accent Color
              </li>
              <li class="red-swatch">
                <a href="#">
                  <span id="red-square" class="fab-square"></span>
                  Red
                </a>
              </li>
              <li class="green-swatch">
                <a href="#">
                  <span id="green-square" class="fab-square"></span>
                  Green
                </a>
              </li>
              <li class="blue-swatch">
                <a href="#">
                  <span id="blue-square" class="fab-square"></span>
                  Blue
                </a>
              </li>
              <li class="yellow-swatch">
                <a href="#">
                  <span id="yellow-square" class="fab-square"></span>
                  Yellow
                </a>
              </li>
            </ul>
          </div>

          <a class="clearAll" name="clearDone" id="clearDone">Clear Done</a>
          <a class="clearAll" name="clearAll" id="clearAll">Clear All</a>
        </div>
      </div>
    </div>

    <script src="todo-app.js"></script>
  </body>
</html>
