---@meta Изображение

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

---@alias ImageInstance userdata

---@class Image
Image = {
    lUp = 0,
    rUp = 1,
    rDn = 2,
    lDn = 3,
    Center = 4
};

---@alias imageAlignEnum `Image.lUp`|`Image.rUp`|`Image.rDn`|`Image.lDn`|`Image.Center`
---@alias imageAlignNumbers 0|1|2|3|4

---загрузка изображения
---@param path string путь к изображению
---@return ImageInstance
---@nodiscard
function Image.load(path) end;

---выгрузка изображения
---@param texture ImageInstance предварительно загруженное изображение
function Image.unload(texture) end;

---получение ширины изображения
---@param texture ImageInstance предварительно загруженное изображение
---@return number
---@nodiscard
function Image.W(texture) end;

---получение высоты изображения
---@param texture ImageInstance предварительно загруженное изображение
---@return number
---@nodiscard
function Image.H(texture) end;

---отрисовка изображения
---@param texture ImageInstance | PMPPointer предварительно загруженное изображение
---@param x number положение на оси х
---@param y number положение на оси y
---@param w? number ширина изображения [по умолчанию: ширина изображения]
---@param h? number высота изображения [по умолчанию: высота изображения]
---@param color? ColorInstance цвет для наложения на изображение [по умолчанию: {НИЧЕГО}]
---@param srcx? number координаты начала захвата рабочей области изображения [по умолчанию: 0]
---@param srcy? number координаты начала захвата рабочей области изображения [по умолчанию: 0]
---@param srcw? number координаты окончания захвата рабочей области изображения [по умолчанию: ширина изображения]
---@param srch? number координаты окончания захвата рабочей области изображения [по умолчанию: высота изображения]
---@param rotation? number угол поворота изображения [по умолчанию: 0]
---@param alpha? number прозрачность изображения [по умолчанию: 255]
---@param alignMode? imageAlignEnum|imageAlignNumbers режим выравнивания изображения [по умолчанию: Image.lUP]
---@param GU_LINEAR? boolean интерполяция текстуры. true=LINEAR, false=NEAREST
---@param GU_REPEAT? boolean повторение текстуры. true=REPEAT, false=CLAMP
function Image.draw(texture, x, y, w, h, color, srcx, srcy, srcw, srch, rotation, alpha, alignMode, GU_LINEAR, GU_REPEAT) end;

---упрощённая отрисовка изображения
---@param texture ImageInstance предварительно загруженное изображение
---@param x number положение на оси х
---@param y number положение на оси y
---@param color? ColorInstance цвет для наложения на изображение [по умолчанию: {НИЧЕГО}]
---@param rotation? number угол поворота изображения [по умолчанию: 0]
---@param alpha? number прозрачность изображения [по умолчанию: 255]
---@param alignMode? imageAlignEnum|imageAlignNumbers режим выравнивания изображения [по умолчанию: Image.lUP]
---@param GU_LINEAR? boolean интерполяция текстуры. true=LINEAR, false=NEAREST
---@param GU_REPEAT? boolean повторение текстуры. true=REPEAT, false=CLAMP
function Image.draweasy(texture, x, y, color, rotation, alpha, alignMode, GU_LINEAR, GU_REPEAT) end;

---нарисовать окружность на текстуре (вероятно, скоро будет удалено)
---@param texture ImageInstance предварительно загруженное изображение
---@param x number положение на оси х
---@param y number положение на оси y
---@param rotation number угол поворота изображения [по умолчанию: 0]
---@param color? ColorInstance цвет окружности [по умолчанию: {НИЧЕГО}]
function Image.drawCircleOnTex(texture, x, y, rotation, color) end;

---создать тестовое изображение (шашечки)
---@return ImageInstance
---@nodiscard
function Image.createPlaceholder() end;

return Image;
