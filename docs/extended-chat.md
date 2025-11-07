---
outline: deep
---


# Три колонки в чате

Чат с такой разметкой может вместить наибольшее количество компонентов. Поскольку первая и вторая колонка адаптируются под ширину их контента, стремясь к минимуму, в них имеет смысл размещать различные дополнительные компоненты. В оставшейся третьей колонке можно разместить основной компонент чата.

На примере ниже:
- в первой колонке размещён [SideBar](https://mobilon-dev.github.io/chotto/?path=/docs/compounds-sidebar--docs), содержащий кнопки для быстрого доступа к чатам (возможны иные варианты);\
 в нижней части [ThemeMode](https://mobilon-dev.github.io/chotto/?path=/docs/elements-thememode--docs) - селектор выбора настраиваемой темы оформления чата
- во второй колонке размещён блок [UserProfile](https://mobilon-dev.github.io/chotto/?path=/docs/elements-userprofile--docs) с основной информацией о текущем пользователе;\
 оставшееся пространство занимает список чатов [ChatList](https://mobilon-dev.github.io/chotto/?path=/docs/compounds-chatlist--docs), включая поиск среди чатов
- третья колонка содержит блок информации о чате [ChatInfo](https://mobilon-dev.github.io/chotto/?path=/docs/elements-chatinfo--docs);\
 тело чата с сообщениями [Feed](https://mobilon-dev.github.io/chotto/?path=/docs/compounds-feed--docs);\
 поле ввода сообщений [ChatInput](https://mobilon-dev.github.io/chotto/?path=/docs/compounds-chatinput--docs);\
 разные объекты-кнопки с дополнительными действиями (загрузка файлов, выбор эмодзи, использование шаблонов, выбор канала коммуникации).

<img src="/extended_new.png" alt="Изображение" class="image-with-shadow-extended" />

<style>
.image-with-shadow-extended {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
}

.dark .image-with-shadow-extended {
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.15), 
              0 2px 6px rgba(255, 255, 255, 0.1),
              0 0 0 1px rgba(255, 255, 255, 0.05);
}
</style>

## Структура кода типового чата в extended layout

```vue
<template>
  <BaseContainer>
    <ExtendedLayout>

      <template #first-col>
        <SideBar />
        <ThemeMode />
      </template>

      <template #second-col>
        <UserProfile />
        <ChatList />
        <!--Поиск возможно разместить как во второй колонке-->
        <FeedSearch />
        <FeedFoundObjects/>
      </template>

      <template #third-col>
        <chat-wrapper >

          <template #default>
            <ChatInfo>
              <template #actions>
                <!--Ваши триггеры для различных событий-->
              </template>
            </ChatInfo>
            <!--Поиск возможно разместить так и в третьей колонке-->
            <FeedSearch />
            <FeedFoundObjects />
            <Feed />
            <ChatInput >
              <template #buttons>
                <FileUploader />
                <ButtonEmojiPicker />
                <ButtonTemplateSelector />
                <ButtonWabaTemplateSelector />
                <ChannelSelector />
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

    </ExtendedLayout>
  </BaseContainer>
</template>
```

