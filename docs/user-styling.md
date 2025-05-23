---
outline: deep
---


# Стилизация компонентов по условию

Некоторые компоненты библиотеки могут принимать в качестве входящего параметра applyStyle функцию, с помощью которой возможно применить пользовательский класс стилей. 

Для реализации такой возможности необходимо предусмотреть класс или множество классов в блоке style, располагаемом в файле, где собирается чат. Например, класс может выглядеть следующим образом:

::: warning Важно

Убедитесь в отсутствии тега scoped в оглавлении блока style - в противном случае класс не применится к компоненту.

:::

``` vue
<style>
.tg-wrapper{
  --chotto-message-right-bg: #DAF0FF;
  --chotto-message-right-secondary-bg: #bce1fa;
  --chotto-message-accent-line-color: #37AFE2;
  --chotto-chat-input-icon-color: #37AFE2;
}
</style>
```

Создайте функцию, которая будет возвращать название этого класса

```vue
<script setup>
  const setClass = () => {
    return "tg-wrapper"
  }
</script>
```

Передайте эту функцию в качестве аргумента applyStyle в компонент, поддерживающий изменение стилей

```vue

<template>
  <ChottoComponent
    :apply-style='setClass'
  />
</template>

```

## Компоненты с возможностью ре-стилизации

- ChatWrapper - на уровне данного компонента возможно стилизовать моменты, касающиеся компонентов, находящихся внутри. Чаще всего такими компонентами являются Feed, ChatInfo, ChatInput и сообщения. Данный компонент не передаёт в applyStyle-функцию дополнительных параметров.

- Feed - используется, как транзитный компонент для передачи applyStyle-функции в компоненты сообщений:

    - AudioMessage - сообщение с прикреплённым звуковым файлом
    - CallMessage - сообщение со статусом звонка 
    - FileMessage - сообщение с произвольным прикреплённым файлом
    - ImageMessage - сообщение с изображением
    - TextMessage - стандартное текстовое сообщение
    - VideoMessage - сообщение с видео

Каждое из сообщений передаёт в applyStyle-фунцию параметр message (объект сообщения), которое может быть в дальнейшем применено для построения условий принятия стиля. Пример такой функции представлен далее:

```vue

<script setup>
  const setMessageClass = (message) => {
    //Тело функции
  }
</script>

```

## Пример

Пример реализации данного механизма представлен в [интерактивном демо](https://mobilon-dev.github.io/chotto-demo/), Chat08. Далее описано примерное строение приложения чата с опорой на Chat08.

```vue

<template>
  <...>
    <ChatWrapper
      ...
      :apply-style="setChatWrapperStyle"
    >
      <...>
      <Feed 
        ...
        :apply-style="setMessageStyle"
      />
    </ChatWrapper>
  </...>
</template>

<script setup>
...

//В случае выбора одного диалога для просмотра
const setChatWrapperStyle = () => {
  if (selectedDialog.value){
    if (selectedDialog.value.dialogId == '1') return 'wrapper wa-wrapper'
    if (selectedDialog.value.dialogId == '2') return 'wrapper tg-wrapper'
  }
  return 'wrapper'
}

//В случае режима просмотра всех диалогов в рамках одной ленты сообщений
const setMessageStyle = (message) => {
  if (message){
    if (message.dialogId == '1') return 'wa-message'
    if (message.dialogId == '2') return 'tg-message'
  }
  return null
}
...
</script>

<style>
.tg-wrapper{
  --chotto-message-right-bg: #DAF0FF;
  --chotto-message-right-secondary-bg: #bce1fa;
  --chotto-message-accent-line-color: #37AFE2;
  --chotto-chat-input-icon-color: #37AFE2;
}

.wa-wrapper{
  --chotto-message-right-bg: #D9FDD3;
  --chotto-message-right-secondary-bg: #bbf3b2;
  --chotto-message-accent-line-color: #25D366;
  --chotto-chat-input-icon-color: #25D366;
}

.wrapper{
  --chotto-chat-input-button-padding: 5px;
}

.tg-message{
  --chotto-message-right-bg: #DAF0FF;
  --chotto-message-right-secondary-bg: #bce1fa;
  --chotto-message-accent-line-color: #37AFE2;
}

.wa-message{
  --chotto-message-right-bg: #D9FDD3;
  --chotto-message-right-secondary-bg: #bbf3b2;
  --chotto-message-accent-line-color: #25D366;
}
</style>

```

