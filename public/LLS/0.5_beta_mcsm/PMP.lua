---@meta PMP

---@class PMP
PMP = {};

---воспроизвести .pmp файл
---@param path string путь к видеофайлу
---@param interruptButton? number кнопка остановки воспроизведения [опционально, по-умолчанию Start]
function PMP.play(path, interruptButton) end;

---установка громкости воспроизведения
---@param volume number громкость (0-100)
function PMP.setVolume(volume) end;
