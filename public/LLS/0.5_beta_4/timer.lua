---@meta Таймеры

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

---@alias TimerInstance userdata

---@class timer
timer = {};

---создание нового таймера
---@return TimerInstance
function timer.create() end;

---запуск таймера
---@param timerInstance TimerInstance заранее созданный таймер
function timer.start(timerInstance) end;

---получение времени, отсчитанного таймером в миллисекундах
---@param timerInstance TimerInstance заранее созданный таймер
---@return number ms миллисекунды
function timer.time(timerInstance) end;

---остановка таймера
---@param timerInstance TimerInstance заранее созданный таймер
function timer.stop(timerInstance) end;

---остановка и сброс таймера
---@param timerInstance TimerInstance заранее созданный таймер
function timer.reset(timerInstance) end;

---удаление таймера
---@param timerInstance TimerInstance заранее созданный таймер
function timer.remove(timerInstance) end;

return timer;
