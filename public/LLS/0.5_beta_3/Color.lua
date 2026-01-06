---@meta Цвет

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

---@alias ColorInstance userdata

---@class Color
Color = {};

---создание нового цвета
---@param r number содержание красного цвета (0-255)
---@param g number содержание зелёного цвета (0-255)
---@param b number содержание синего цвета (0-255)
---@param a? number прозрачность цвета (0-255) [по умолчанию: - 255]
---@return ColorInstance
---@nodiscard
function Color.new(r, g, b, a) end;

---получение содержания всех цветов или конкретного в указанном
---@param color ColorInstance заранее созданный цвет
---@param RGBA? 'r'|'g'|'b'|'a' конкретный цвет в составе [по умолчанию: возвращает таблицу со всеми значениями (r/g/b/a)]
---@return { r: number, g: number, b: number, a: number }
---@nodiscard
function Color.get(color, RGBA) end;

return Color;
