---@meta Batch

--[[
    Документация для LuaPlayerYT v0.5b4
    Желательно использовать с расширением LLS (Lua by sumneko) в VS Code

    LPYT сделал Иван Кодило:
        https://t.me/yuliateamdiditagain
        https://github.com/r3trob0y
    Документацию сделал Илюха antim:
        https://t.me/atgamedev
        https://github.com/antim0118

    Обновлено: 27 февраля 2026
]]

---@class Batch
Batch = {};

---Записывает текстуру в систему батчинга
---@param img ImageInstance
---@param x integer
---@param y integer
---@param w? integer
---@param h? integer
---@param srcx? integer
---@param srcy? integer
---@param srcw? integer
---@param srch? integer
function Batch.addDraw(img, x, y, w, h, srcx, srcy, srcw, srch) end;

---Рисует все элементы, записанные в систему батчинга
function Batch.render() end;

---Очищает все элементы, записанные в систему батчинга
function Batch.clear() end;

return Batch;
