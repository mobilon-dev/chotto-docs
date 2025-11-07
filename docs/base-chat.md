---
outline: deep
---


# Две колонки в чате

Интерфейс чата состоящий из двух колонок - компромиссный вариант между одной и тремя колонками. С одной стороны представляется возможность сильно расширить функционал приложения, когда как с другой интерфейс приложения можно оставить чуть более компактным. Колонки в Base Layout занимают место в соотношении 30%/70%, в связи с этим имеет смысл размещать наиболее важные компоненты именно во второй колонке. Интерфейсы такого характера могут найти своё применение в качестве основы для легковесных приложений мессенджеров для всех тех людей, которые либо по роду деятелньности, либо по иным причинам часто взаимодействуют с множеством разных людей (например, менеджер и клиенты). 

На примере ниже представлен интерфейс чата из двух колонок, где:

- в первой колонке размещён блок [UserProfile](https://mobilon-dev.github.io/chotto/?path=/docs/elements-userprofile--docs) с основной информацией о текущем пользователе;\
 оставшееся пространство занимает список чатов [ChatList](https://mobilon-dev.github.io/chotto/?path=/docs/compounds-chatlist--docs), включая поиск среди чатов
- вторая колонка содержит блок информации о чате [ChatInfo](https://mobilon-dev.github.io/chotto/?path=/docs/elements-chatinfo--docs);\
 тело чата с сообщениями [Feed](https://mobilon-dev.github.io/chotto/?path=/docs/compounds-feed--docs);\
 поле ввода сообщений [ChatInput](https://mobilon-dev.github.io/chotto/?path=/docs/compounds-chatinput--docs);\
 разные объекты-кнопки с дополнительными действиями (загрузка файлов, выбор эмодзи, использование шаблонов, выбор канала коммуникации).

<img src="/base_new.png" alt="Изображение" class="image-with-shadow" />

<style>
.image-with-shadow {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 13px 13px 0 0;
}

.dark .image-with-shadow {
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.15), 
              0 2px 6px rgba(255, 255, 255, 0.1),
              0 0 0 1px rgba(255, 255, 255, 0.05);
}
</style>

## Структура кода типового чата в base layout

``` vue
<template>
  <FloatContainer>
    <BaseLayout>

      <template #first-col>
        <UserProfile />
        <ChatList />
        <FeedSearch />
        <FeedFoundObjects />
        <ThemeMode />
      </template>

      <template #second-col>
        <chat-wrapper>
          <template #default>
            <ChatInfo>
              <template #actions>
                <!--Ваши триггеры для различных событий-->
              </template>
            </ChatInfo> 
              
            <Feed />
            <ChatInput>
              <template #buttons>
                <FileUploader/>
                <ButtonEmojiPicker />
                <ButtonTemplateSelector />
                <!--Возможны дополнения-->
              </template>
            </ChatInput>
          </template>

          <template #chatpanel>
            <ChatPanel>
              <template #content>
                <!--Ваш контент в сайд-панели--> 
              </template>
            </ChatPanel>
          </template>
        </chat-wrapper>
      </template>

    </BaseLayout>
  </FloatContainer>
</template>
```