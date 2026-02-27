---@meta PMP

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

---@alias PMPPointer userdata

---@class PMP
PMP = {};

---проверяет, воспроизводится ли видео. Если да - обновляет pointer. Если нет - автоматически его перезапускает.
---@param pointer PMPPointer указатель на запущенный PMP
---@return boolean isPlaying возвращает, запущено ли видео.
function PMP.getFrame(pointer) end;

---получить текущее время запущенного видео
---@return number timeCode время в секундах
function PMP.getTimeCode() end;

---получить текст с субтитров
---@return ""|string
function PMP.getSubs() end;

---поставить на паузу или снять с паузы запущенное видео
function PMP.pause() end;

---воспроизвести .pmp файл
---@param path string путь к видеофайлу
---@param getPointer? boolean возвращать указатель
---@param loop? boolean зациклить
---@param subtitlePath? string путь к субтитрам (.srt)
---@param interruptButton? number кнопка остановки воспроизведения
---@param FPS? number FPS видео  [по умолчанию: 29.97]
---@return PMPPointer pointer указатель, если был указан аргумент getPointer
function PMP.play(path, getPointer, loop, subtitlePath, interruptButton, FPS) end;

---установка громкости воспроизведения
---@param volume number громкость (0-100)
function PMP.setVolume(volume) end;

---остановить видео
---@param pointer PMPPointer указатель на запущенный PMP
function PMP.stop(pointer) end;

---вывести в консоль информацию об MP4 фале (вероятно, скоро будет удалено)
---@param path any
function PMP.Mp4_Info(path) end;

-- ---перемотать видео
-- ---@param time number
-- function PMP.seek(time) end;

return PMP;
