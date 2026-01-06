---@meta Экран

--[[
    Документация для LuaPlayerYT 0.5 beta 3
    Желательно использовать с расширением LLS (Lua by sumneko) в VS Code

    LPYT сделал Иван Кодило:
        https://t.me/yuliateamdiditagain
        https://github.com/r3trob0y
    Документацию сделал Илюха antim:
        https://t.me/atgamedev
        https://github.com/antim0118

    Обновлено: 31 декабря 2025 (с новым гойдом!)
]]

---@class screen
screen = {};

---очистка экрана перед использованием
---@param color? ColorInstance цвет, который будет выведен для очистки [по умолчанию: чёрный]
function screen.clear(color) end;

---вывод изображения с виртуального экрана на реальный
function screen.flip() end;

---отрисовка прямоугольника
---@param x number положение на оси x
---@param y number положение на оси y
---@param width number ширина прямоугольника
---@param height number высота прямоугольника
---@param color ColorInstance цвет прямоугольника
---@param rotation? number угол прямоугольника [по умолчанию: 0]
---@param alpha? number прозрачность прямоугольника [по умолчанию: 255]
---@param alignMode? imageAlignEnum|imageAlignNumbers
function screen.filledRect(x, y, width, height, color, rotation, alpha, alignMode) end;

---отрисовка линии
---@param x1 number положение на оси х - начало линии
---@param y1 number положение на оси у - начало линии
---@param x2 number положение на оси х - конец линии
---@param y2 number положение на оси у - конец линии
---@param color ColorInstance цвет линии
function screen.drawLine(x1, y1, x2, y2, color) end;

---отрисовка окружности
---@param x number положение на оси х
---@param y number положение на оси y
---@param radius number радиус окружности
---@param color ColorInstance цвет окружности
function screen.drawCircle(x, y, radius, color) end;

---отрисовка треугольника
---@param x1 number координата первой вершины
---@param y1 number координата первой вершины
---@param x2 number координата второй вершины
---@param y2 number координата второй вершины
---@param x3 number координата третьей вершины
---@param y3 number координата третьей вершины
---@param color ColorInstance цвет треугольника
function screen.drawTriangle(x1, y1, x2, y2, x3, y3, color) end;

-- ---отрисовка куба
-- ---@param x number
-- ---@param y number
-- ---@param z number
-- ---@param size number
-- ---@param color ColorInstance
-- function screen.drawCube(x, y, z, size, color) end;

return screen;
