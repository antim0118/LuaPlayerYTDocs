---@meta Изображение

---@alias ImageInstance userdata

---@class Image
Image = {
    lUp = 0,
    rUp = 1,
    rDn = 2,
    lDn = 3,
    Center = 4
};

---@alias imageEnum `Image.lUp`|`Image.rUp`|`Image.rDn`|`Image.lDn`|`Image.Center`|
---@alias imageNumbers 0|1|2|3|4

---загрузка изображения
---@param path string путь к изображению
---@return ImageInstance
---@nodiscard
function Image.load(path) end;

---выгрузка изображения
---@param img ImageInstance предварительно загруженное изображение
function Image.unload(img) end;

---получение ширины изображения
---@param img ImageInstance предварительно загруженное изображение
---@return number
---@nodiscard
function Image.w(img) end;

---получение высоты изображения
---@param img ImageInstance предварительно загруженное изображение
---@return number
---@nodiscard
function Image.h(img) end;

---отрисовка изображения
---@param img ImageInstance предварительно загруженное изображение
---@param x number положение на оси х
---@param y number положение на оси y
---@param w? number ширина изображения [опционально, по-умполчанию стандарнтная ширина загруженного изображения]
---@param h? number высота изображения [опционально, по-умполчанию стандарнтная высота загруженного изображения]
---@param color? ColorInstance цвет для наложения на изображение [опционально, по-умолчанию {НИЧЕГО}]
---@param srcx? number координаты начала захвата рабочей области изображения [опционально, по-умолчанию 0, 0]
---@param srcy? number координаты начала захвата рабочей области изображения [опционально, по-умолчанию 0, 0]
---@param srcw? number координаты окончания захвата рабочей области изображения [опционально, по-умолчанию стандартная ширина и высота изображения]
---@param srch? number координаты окончания захвата рабочей области изображения [опционально, по-умолчанию стандартная ширина и высота изображения]
---@param rotate? number угол поворота изображения [опционально, по-умолчанию 0]
---@param alpha? number прозрачность изображения [опционально, по-умолчанию 255]
---@param alMode? imageEnum|imageNumbers режим выравнивания изображения [опционально, по-умолчанию Image.lUP]
function Image.draw(img, x, y, w, h, color, srcx, srcy, srcw, srch, rotate, alpha, alMode) end;

---упрощённая отрисовка изображения
---@param img ImageInstance предварительно загруженное изображение
---@param x number положение на оси х
---@param y number положение на оси y
---@param color? ColorInstance цвет для наложения на изображение [опционально, по-умолчанию {НИЧЕГО}]
---@param rotate? number угол поворота изображения [опционально, по-умолчанию 0]
---@param alpha? number прозрачность изображения [опционально, по-умолчанию 255]
---@param alMode? imageEnum|imageNumbers режим выравнивания изображения [опционально, по-умолчанию Image.lUP]
function Image.draweasy(img, x, y, color, rotate, alpha, alMode) end;
