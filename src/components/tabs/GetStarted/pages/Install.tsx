import { ExternalLink } from "@/components/ExternalLink";
import { ManyText } from "@/components/ManyText";
import { Flex, Heading, Kbd, Link, List, Text } from "@chakra-ui/react";
import luaExtension from "@/assets/getstarted/lua_extension.png";
import llsFolder from "@/assets/getstarted/lls_folder.png";
import luaSettingsGif from "@/assets/getstarted/lua_settings.gif";
import luaSyntaxGif from "@/assets/getstarted/lua_syntax.gif";
import { ImageSnippet } from "@/components/ImageSnippet";
import { Code } from "@/components/Code";

export const Install = () => {
  return (
    <Flex direction="column" gap={6}>
      <ManyText>
        <Heading>Установка</Heading>
        {`Данный гайд по установке рассчитан на тех, кто собирается разрабатывать игры на языке программирования Lua.`}
        <Text fontStyle={"italic"}>
          Если вам необходимо установить игру на базе LuaPlayerYT, то обратитесь к инструкции по установке самой игры.
          Если таковой не имеется, то обратитесь за помощью в больницу.
        </Text>
        <Text>
          Актуальную версию LuaPlayerYT можно найти в{" "}
          <ExternalLink href="https://github.com/antim0118/LuaPlayer-by-YuliaTeam">Github-репозитории</ExternalLink>.
        </Text>
        {`Работа Lua-плеера происходит следующим образом:`}
        <List.Root as="ol" listStyle="decimal" pl={6}>
          <List.Item>Запускается исполняемый файл "EBOOT.PBP".</List.Item>
          <List.Item>Исполняемый файл запускает файл "script.lua".</List.Item>
        </List.Root>
        {`Таким образом, разработка Lua-кода должна начинаться с файла "script.lua", после чего может переходить в другие файлы.`}

        <Heading>Подсветка синтаксиса и подсказки в VS Code</Heading>
        {`Подсветка синтаксиса и подсказки помогают в разработке, поскольку дают чёткое представление о доступных функциях/константах и указывают на ошибки в аргументах функций.`}
        {`Установка проводится в несколько этапов:`}
        <List.Root as="ol" listStyle="decimal" pl={6}>
          <List.Item>
            Для подсветки синтаксиса в VS Code используется расширение{" "}
            <ExternalLink href="https://marketplace.visualstudio.com/items?itemName=sumneko.lua">
              Lua Language Server от sumneko
            </ExternalLink>
            . Его необходимо установить по ссылке, либо набрав "Lua" в поиске вкладки Extensions:
          </List.Item>
          <ImageSnippet src={luaExtension} margin={6}>
            Расширение Lua от sumneko
          </ImageSnippet>
          <List.Item>
            Далее необходимо загрузить архив с Lua-файлами синтаксиса под вашу версию Lua-плеера. Найти архив можно во
            вкладке{" "}
            <Link fontStyle={"italic"} href="/docs/buttons">
              "Документация"
            </Link>
            , выбрав нужную версию и нажав на "Скачать LLM архив".
          </List.Item>
          <List.Item>
            Загруженный архив необходимо распаковать в удобную для вас папку <b>(не в папку проекта!)</b> и скопировать
            путь:
          </List.Item>
          <ImageSnippet src={llsFolder} margin={6}>
            Удобная папка под LLS файлы
          </ImageSnippet>
          <List.Item>
            Далее необходимо связать установленное ранее расширение и папку с Lua-файлами синтаксиса. Для этого откройте
            настройки в VS Code (<Kbd>Ctrl+,</Kbd>).
          </List.Item>
          <List.Item>В настройках выберите между вкладками User/Workspace:</List.Item>
          <List.Root pl={6}>
            <List.Item>
              Во вкладке User все настройки будут применяться <u>ко всем проектам</u>.
            </List.Item>
            <List.Item>
              Во вкладке Workspace все настройки будут применяться <u>только к открытому проекту</u>. Данные настройки
              также запишутся локально в папку .vscode внутри вашего проекта.
            </List.Item>
          </List.Root>
          <Text fontStyle={"italic"}>
            Примечание: Если вы собираетесь использовать разные версии LuaPlayerYT в разных проектах или у вас имеются
            сторонние проекты Lua без Lua-плеера, то устанавливайте синтаксис изолированно через вкладку Workspace.
          </Text>
          <List.Item>
            В поиске настроек впишите <Code>Lua.workspace.library</Code> и в появившемся пункте настроек нажмите Add
            Item:
          </List.Item>
          <ImageSnippet src={luaSettingsGif} margin={6}>
            Установка параметра Lua.workspace.library
          </ImageSnippet>
          <List.Item>
            Для проверки работы расширения впишите функцию из документации и проверьте на наличие подсказок:
          </List.Item>
          <ImageSnippet src={luaSyntaxGif} margin={6}>
            Проверка подсказок
          </ImageSnippet>
        </List.Root>
        {`Если всё хорошо, то значит установка прошла успешно!`}
      </ManyText>

      {/* <Text color={accentColor}>
        <b>TODO:</b>
      </Text>
      <Text>
        сделать инфу короче откуда скачивать, как прикрутить vs code с lls
      </Text>
      <Text>https://vk.com/@nomoreyuliateam-vash-pervyi-kod-na-lua-psp</Text>
      <Text></Text>
      <Text>sadsa</Text> */}
    </Flex>
  );
};
