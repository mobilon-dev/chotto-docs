# Начало работы

Здесь описывается процесс установки библиотеки и краткое руководство для последующего использования.

## Требования
- Node.js 18+
- Современный текстовый редактор и терминал (например, VS Code)
- Браузер, поддерживающий современный JavaScript

## Установка

Для установки библиотеки введите в командной строке:

> npm install @mobilon-dev/chotto

## Применение в проекте

Библиотека Chotto предоставляет следующую структуру для построения чата:

```
.
└─ Container
   └─ Layout
      ├─ колонка N
      ├─ ...
      └─ колонка M
```

Основными элементами структуры являются:

- container (контейнер, оборачивающий всё приложение)
  - base — статичный, встраиваемый в имеющуюся страницу. Наполнение контейнера осуществляется через слот `#default`.
  - float — в виде диалогового окна. Наполнение контейнера осуществляется через слот `#default`, дополнительные элементы управления можно добавить в заголовке окна через слот `#controls`.
- layout (разметка контейнера по колонкам)
  - feed разметка — одна колонка на весь контейнер. Колонка доступна через слот `#default`.
  - base разметка — две колонки 30%/70%. Колонки доступны через слоты `#first-col`, `#second-col`.
  - extended разметка и adaptive extended — три колонки. Колонки доступны через слоты `#first-col`, `#second-col`, `#third-col`.

:::: tip Может пригодиться
Существует также подвид layout — `ChatWrapper`. Если необходимо добавить боковую панель с дополнительной информацией или действиями, разместите `ChatWrapper` в одной из колонок. Основная часть чата рендерится через слот `#default`, сайд-панель — через слот `#chatpanel`.
::::

## Быстрый пример использования

```vue
<template>
  <div class="chat-app">
    <BaseContainer height="90vh" width="90vw">
      <ExtendedLayout>
        <template #first-col>
          <SideBar :sidebar-items="sidebarItems" />
          <ThemeMode :themes="themes" />
        </template>
        <template #second-col>
          <ChatList :chats="chats" @select="selectChat" />
        </template>
        <template #third-col>
          <ChatWrapper>
            <ChatInfo :chat="selectedChat" />
            <Feed :objects="messages" />
            <ChatInput @send="sendMessage" />
          </ChatWrapper>
        </template>
      </ExtendedLayout>
    </BaseContainer>
  </div>
</template>

<script setup>
import {
  BaseContainer,
  ExtendedLayout,
  SideBar,
  ChatList,
  ChatWrapper,
  ChatInfo,
  Feed,
  ChatInput,
  ThemeMode
} from '@mobilon-dev/chotto'

// Импорт основных стилей библиотеки:
import '@mobilon-dev/chotto/style.css'

// Если нужна конкретная тема, можно импортировать отдельно:
import '@mobilon-dev/chotto/themes/default.css'
import '@mobilon-dev/chotto/themes/dark.css'
import '@mobilon-dev/chotto/themes/green.css'
import '@mobilon-dev/chotto/themes/mobilon1.css'

// Ваша логика...
</script>

