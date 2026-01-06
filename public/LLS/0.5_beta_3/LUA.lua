---@meta LUA

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

---@class LUA
LUA = {};

---вывод текста системным шрифтом
---@param x number координата вывода на оси x
---@param y number координата вывода на оси y
---@param text string текст для вывода
function LUA.print(x, y, text) end;

---генерация случайного числа (замена стандартного math.random())
---@param min number минимально генерируемое число (включительно)
---@param max number максимально генерируемое число (включительно)
---@return number
---@nodiscard
function LUA.getRandom(min, max) end;

---получение доступного количества ОЗУ в байтах (с погрешностью в 512Кб)
---@return number
---@nodiscard
function LUA.getRAM() end;

---создание скриншота экрана
---@param path string
---@param width number
---@param height number
function LUA.screenshot(path, width, height) end;

---выход в XMB
function LUA.exit() end;

---выход в XMB
function LUA.quit() end;

---вызов задержки
---@param ms number миллисекунды
function LUA.sleep(ms) end;

return LUA;
