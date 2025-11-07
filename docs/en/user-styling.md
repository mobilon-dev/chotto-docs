---
outline: deep
---


# Conditional Component Styling

Some library components can accept an `applyStyle` function as an input parameter, which allows applying a custom style class.

To implement this capability, you need to provide a class or set of classes in the `style` block located in the file where the chat is assembled.

::: tip About Variables
Message variables use the prefix `--chotto-theme-*` (e.g., `--chotto-theme-message-right-bg`). Component variables use the prefix `--chotto-componentname-*` (e.g., `--chotto-chat-input-icon-color`).
:::

For example, a class might look like this:

::: warning Important

Make sure there is no `scoped` tag in the style block header - otherwise the class will not be applied to the component.

:::

``` vue
<style>
.tg-wrapper{
  --chotto-theme-message-right-bg: #DAF0FF;
  --chotto-theme-message-right-secondary-bg: #bce1fa;
  --chotto-theme-message-accent-line-color: #37AFE2;
  --chotto-chat-input-icon-color: #37AFE2;
}
</style>
```

Create a function that will return the name of this class

```vue
<script setup>
  const setClass = () => {
    return "tg-wrapper"
  }
</script>
```

Pass this function as the `applyStyle` argument to a component that supports style changes

```vue

<template>
  <ChottoComponent
    :apply-style='setClass'
  />
</template>

```

## Components with Re-styling Capability

- ChatWrapper - at this component level, you can style aspects related to components inside. Most often these components are Feed, ChatInfo, ChatInput and messages. This component does not pass additional parameters to the applyStyle function.

- Feed - used as a transit component for passing the applyStyle function to message components:

    - AudioMessage - message with attached audio file
    - CallMessage - message with call status 
    - FileMessage - message with arbitrary attached file
    - ImageMessage - message with image
    - TextMessage - standard text message
    - VideoMessage - message with video

Each message passes a `message` parameter (message object) to the applyStyle function, which can be further used to build conditions for style acceptance. An example of such a function is shown below:

```vue

<script setup>
  const setMessageClass = (message) => {
    //Function body
  }
</script>

```

## Example

An example implementation of this mechanism is presented in the [interactive demo](https://mobilon-dev.github.io/chotto-demo/), Chat08. Below is an approximate structure of a chat application based on Chat08.

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

//In case of selecting one dialog for viewing
const setChatWrapperStyle = () => {
  if (selectedDialog.value){
    if (selectedDialog.value.dialogId == '1') return 'wrapper wa-wrapper'
    if (selectedDialog.value.dialogId == '2') return 'wrapper tg-wrapper'
  }
  return 'wrapper'
}

//In case of viewing all dialogs in one message feed
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
  --chotto-theme-message-right-bg: #DAF0FF;
  --chotto-theme-message-right-secondary-bg: #bce1fa;
  --chotto-theme-message-accent-line-color: #37AFE2;
  --chotto-chat-input-icon-color: #37AFE2;
}

.wa-wrapper{
  --chotto-theme-message-right-bg: #D9FDD3;
  --chotto-theme-message-right-secondary-bg: #bbf3b2;
  --chotto-theme-message-accent-line-color: #25D366;
  --chotto-chat-input-icon-color: #25D366;
}

.tg-message{
  --chotto-theme-message-right-bg: #DAF0FF;
  --chotto-theme-message-right-secondary-bg: #bce1fa;
  --chotto-theme-message-accent-line-color: #37AFE2;
}

.wa-message{
  --chotto-theme-message-right-bg: #D9FDD3;
  --chotto-theme-message-right-secondary-bg: #bbf3b2;
  --chotto-theme-message-accent-line-color: #25D366;
}
</style>

```

