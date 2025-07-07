---@meta intraFont

---@alias intraFontInstance userdata

---@class intraFont
intraFont = {
    ALIGN_LEFT = 0,
    ALIGN_CENTER = 512,
    ALIGN_RIGHT = 1024
}

---@alias intraFontEnum `intraFont.ALIGN_LEFT`|`intraFont.ALIGN_CENTER`|`intraFont.ALIGN_RIGHT`
---@alias intraFontNumbers 0|512|1024

---загрузка шрифта в формате .pgf
---@param path string путь к файлу
---@return intraFontInstance
---@nodiscard
function intraFont.load(path) end

---выставление необходимых параметров шрифта
---@param font intraFontInstance предварительно загруженный шрифт
---@param size number размер шрифта
---@param color ColorInstance цвет шрифта
---@param angle number угол наклона шрифта
---@param align? intraFontEnum|intraFontNumbers режим выравнивания шрифта
function intraFont.setStyle(font, size, color, angle, align) end

---простой вывод текста
---@param font intraFontInstance предварительно загруженный шрифт
---@param x number координата вывода на оси х
---@param y number координата вывода на оси y
---@param text string текст для вывода
function intraFont.print(font, x, y, text) end

---вывод текста колонной
---@param font intraFontInstance предварительно загруженный шрифт
---@param x number координата вывода на оси х
---@param y number координата вывода на оси y
---@param w number ширина текста в пикселях
---@param text string текст для вывода
---@param color ColorInstance цвет текста
---@param size number размер текста
function intraFont.printColumn(font, x, y, w, text, color, size) end

---вывод подчеркнутого текста
---@param font intraFontInstance предварительно загруженный шрифт
---@param x number координата вывода на оси х
---@param y number координата вывода на оси y
---@param text string текст для вывода
---@param textColor ColorInstance цвет текста
---@param lineColor ColorInstance цвет линии
---@param size? number размер текста [опционально, по-умолчанию 1]
function intraFont.printUnderlined(font, x, y, text, textColor, lineColor, size) end

---вывод обведённого контуром текста
---@param font intraFontInstance предварительно загруженный шрифт
---@param x number координата вывода на оси х
---@param y number координата вывода на оси y
---@param text string текст для вывода
---@param textColor ColorInstance цвет текста
---@param contourColor ColorInstance цвет линии
---@param size? number размер текста [опционально, по-умолчанию 1]
---@param rot? number угол наклона [опционально, по-умолчанию 0]
function intraFont.printContoured(font, x, y, text, textColor, contourColor, size, rot) end

---вывод текста на фоне рамки
---@param font intraFontInstance предварительно загруженный шрифт
---@param x number координата вывода на оси х
---@param y number координата вывода на оси y
---@param text string текст для вывода
---@param textColor ColorInstance цвет текста
---@param bgColor ColorInstance цвет рамки
---@param size? number размер текста [опционально, по-умолчанию 1]
function intraFont.printBackground(font, x, y, text, textColor, bgColor, size) end

---вывод перечёркнутого текста
---@param font intraFontInstance предварительно загруженный шрифт
---@param x number координата вывода на оси х
---@param y number координата вывода на оси y
---@param text string текст для вывода
---@param textColor ColorInstance цвет текста
---@param strikeColor ColorInstance цвет перечеркивающей линии
---@param size? number размер текста [опционально, по-умолчанию 1]
function intraFont.printStriked(font, x, y, text, textColor, strikeColor, size) end

---вывод текста, отбрасывающего тень
---@param font intraFontInstance предварительно загруженный шрифт
---@param x number координата вывода на оси х
---@param y number координата вывода на оси y
---@param text string текст для вывода
---@param textColor ColorInstance цвет текста
---@param shadowColor ColorInstance цвет тени
---@param shadowRot number угол падения света на текст
---@param lightDistance number удалённость источника света от текста
---@param size? number размер текста [опционально, по-умолчанию 1]
---@param rot? number  угол наклона [опционально, по-умолчанию 0]
function intraFont.printShadowed(font, x, y, text, textColor, shadowColor, shadowRot, lightDistance, size, rot) end

---вывод развёрнутого текста
---@param font intraFontInstance предварительно загруженный шрифт
---@param x number координата вывода на оси х
---@param y number координата вывода на оси y
---@param text string текст для вывода
---@param color ColorInstance цвет текста
---@param size? number размер текста [опционально, по-умолчанию 1]
---@param rot? number угол наклона [опционально, по-умолчанию 0]
function intraFont.printReversed(font, x, y, text, color, size, rot) end

---простой вывод текста нужного цвета
---@param font intraFontInstance предварительно загруженный шрифт
---@param x number координата вывода на оси х
---@param y number координата вывода на оси y
---@param text string текст для вывода
---@param color ColorInstance цвет текста
---@param size number размер текста [опционально, по-умолчанию 1]
---@param rot? number угол наклона [опционально, по-умолчанию 0]
function intraFont.printColored(font, x, y, text, color, size, rot) end

---изменение размера шрифта
---@param font intraFontInstance предварительно загруженный шрифт
---@param size number новый размер
function intraFont.size(font, size) end

---измерение занимаемого текстом пространства в пикселях (строка без переносов)
---@param font intraFontInstance предварительно загруженный шрифт
---@param text string текст для вывода
---@return number
function intraFont.textW(font, text) end

---измерение высоты шрифта в пикселях с учётом заданного размера
---@param font intraFontInstance предварительно загруженный шрифт
---@return number
function intraFont.textH(font) end
