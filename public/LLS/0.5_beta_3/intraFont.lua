---@meta intraFont

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

---@alias intraFontInstance userdata

---@class intraFont
intraFont = {
    ALIGN_LEFT = 0,
    ALIGN_CENTER = 512,
    ALIGN_RIGHT = 1024,

    SCROLL_LEFT = 8192,
    SCROLL_SEESAW = 8704,
    SCROLL_RIGHT = 9216,
    SCROLL_THROUGH = 9728
};

---@alias intraFontAlignEnum `intraFont.ALIGN_LEFT`|`intraFont.ALIGN_CENTER`|`intraFont.ALIGN_RIGHT`
---@alias intraFontAlignNumbers 0|512|1024

---@alias intraFontScrollEnum `intraFont.SCROLL_LEFT`|`intraFont.SCROLL_SEESAW`|`intraFont.SCROLL_RIGHT`|`intraFont.SCROLL_THROUGH`
---@alias intraFontScrollNumbers 8192|8704|9216|9728

---загрузка шрифта в формате .ttf/.otf/.pgf
---@param path string путь к файлу
---@param size? number размер шрифта
---@return intraFontInstance
---@nodiscard
function intraFont.load(path, size) end;

---выставление необходимых параметров шрифта
---@param font intraFontInstance предварительно загруженный шрифт
---@param size number размер шрифта
---@param color ColorInstance цвет шрифта
---@param rotation number угол наклона шрифта
---@param align? intraFontAlignEnum|intraFontAlignNumbers режим выравнивания шрифта
function intraFont.setStyle(font, size, color, rotation, align) end;

---простой вывод текста
---@param x number координата вывода на оси х
---@param y number координата вывода на оси y
---@param text string текст для вывода
---@param textColor? ColorInstance цвет текста [по умолчанию: белый]
---@param font? intraFontInstance предварительно загруженный шрифт
---@param size? number размер шрифта
---@param rotation? number угол наклона шрифта
---@param GU_LINEAR? boolean интерполяция текстуры. true=LINEAR, false=NEAREST
---@param align? intraFontAlignEnum|intraFontAlignNumbers режим выравнивания шрифта
function intraFont.print(x, y, text, textColor, font, size, rotation, GU_LINEAR, align) end;

---вывод текста на фоне рамки
---@param x number координата вывода на оси х
---@param y number координата вывода на оси y
---@param text string текст для вывода
---@param textColor? ColorInstance цвет текста [по умолчанию: черный]
---@param bgColor? ColorInstance цвет рамки [по умолчанию: белый]
---@param font? intraFontInstance предварительно загруженный шрифт
---@param size? number размер текста [по умолчанию: 1]
function intraFont.printBackground(x, y, text, textColor, bgColor, font, size) end;

---вывод текста колонной
---@param x number координата вывода на оси х
---@param y number координата вывода на оси y
---@param text string текст для вывода
---@param width number ширина текста в пикселях
---@param textColor? ColorInstance цвет текста
---@param font? intraFontInstance предварительно загруженный шрифт
---@param size? number размер текста
---@param align? intraFontAlignEnum|intraFontAlignNumbers
---@param scroll? intraFontScrollEnum|intraFontScrollNumbers
function intraFont.printColumn(x, y, text, width, textColor, font, size, align, scroll) end;

---вывод обведённого контуром текста
---@param x number координата вывода на оси х
---@param y number координата вывода на оси y
---@param text string текст для вывода
---@param textColor? ColorInstance цвет текста [по умолчанию: белый]
---@param contourColor? ColorInstance цвет линии [по умолчанию: черный]
---@param font? intraFontInstance предварительно загруженный шрифт
---@param size? number размер текста [по умолчанию: 1]
---@param rotation? number угол наклона [по умолчанию: 0]
function intraFont.printContoured(x, y, text, textColor, contourColor, font, size, rotation) end;

---вывод текста с градиентом
---@param x number координата вывода на оси х
---@param y number координата вывода на оси y
---@param text string текст для вывода
---@param textColorStart? ColorInstance начальный цвет текста [по умолчанию: красный]
---@param textColorEnd? ColorInstance конечный цвет текста [по умолчанию: синий]
---@param font? intraFontInstance предварительно загруженный шрифт
---@param size? number размер текста [по умолчанию: 1]
function intraFont.printGradient(x, y, text, textColorStart, textColorEnd, font, size) end;

---вывод перечёркнутого текста
---@param x number координата вывода на оси х
---@param y number координата вывода на оси y
---@param text string текст для вывода
---@param textColor? ColorInstance цвет текста [по умолчанию: белый]
---@param lineColor? ColorInstance цвет перечеркивающей линии [по умолчанию: белый]
---@param font? intraFontInstance предварительно загруженный шрифт
---@param size? number размер текста [по умолчанию: 1]
function intraFont.printStriked(x, y, text, textColor, lineColor, font, size) end;

---вывод текста, отбрасывающего тень
---@param x number координата вывода на оси х
---@param y number координата вывода на оси y
---@param text string текст для вывода
---@param textColor? ColorInstance цвет текста [по умолчанию: белый]
---@param shadowColor? ColorInstance цвет тени [по умолчанию: черный]
---@param font? intraFontInstance предварительно загруженный шрифт
---@param shadowRotation? number угол падения света на текст [по умолчанию: 45]
---@param lightDistance? number удалённость источника света от текста [по умолчанию: 2]
---@param size? number размер текста [по умолчанию: 1]
---@param rotation? number  угол наклона [по умолчанию: 0]
function intraFont.printShadowed(x, y, text, textColor, shadowColor, font, shadowRotation, lightDistance, size, rotation) end;

---вывод подчеркнутого текста
---@param x number координата вывода на оси х
---@param y number координата вывода на оси y
---@param text string текст для вывода
---@param textColor? ColorInstance цвет текста [по умолчанию: белый]
---@param lineColor? ColorInstance цвет линии [по умолчанию: белый]
---@param font? intraFontInstance предварительно загруженный шрифт
---@param size? number размер текста [по умолчанию: 1]
function intraFont.printUnderlined(x, y, text, textColor, lineColor, font, size) end;

---возвращает развёрнутый текст
---@param text string текст для разворачивания
---@return string reversedText возвращает развёрнутый текст
---@nodiscard
function intraFont.reverseText(text) end;

---изменение размера шрифта
---@param font intraFontInstance предварительно загруженный шрифт
---@param size number новый размер
function intraFont.size(font, size) end;

---измерение занимаемого текстом пространства в пикселях (строка без переносов)
---@param font intraFontInstance предварительно загруженный шрифт
---@param text string текст для вывода
---@param size number? number размер текста [по умолчанию: установленный размер шрифта]
---@return number
function intraFont.textW(font, text, size) end;

---измерение высоты шрифта в пикселях с учётом заданного размера
---@param font intraFontInstance предварительно загруженный шрифт
---@return number
function intraFont.textH(font) end;

---выгрузить шрифт из памяти
---@param font intraFontInstance предварительно загруженный шрифт
function intraFont.unload(font) end;

return intraFont;
