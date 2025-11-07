---
outline: 'deep'

---

# Single Column Chat

A chat of this format is the most concise possible and takes up the least space. There are many applications for a single-column chat: embedding in existing applications for feedback, requests, etc., integration with a chat bot, quick reply form and various other tasks. Since this layout has only one column, it is most appropriate to place the main chat component [Feed](https://mobilon-dev.github.io/chotto/?path=/docs/compounds-feed--docs) and input field [ChatInput](https://mobilon-dev.github.io/chotto/?path=/docs/compounds-chatinput--docs) in it.

If desired, the interface can be supplemented with chat information, action buttons and other components from [storybook](https://mobilon-dev.github.io/chotto/).

Below is an example of a single-column chat with a minimal set of functions: the user can only type a message, attach a file and select an emoji in a pre-defined chat.

<img src="/feed_new.png" alt="Изображение" class="image-with-shadow" />

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

## Code Structure of Typical Chat in Feed Layout

```vue
<template>
  <FloatContainer>
    <FeedLayout>
      <template #default>
        <chat-wrapper>
          <template #default>
            <ThemeMode />
            <Feed />
            <ChatInput>
              <template #buttons>
                <FileUploader />
                <ButtonEmojiPicker />
                <!--Additional elements possible-->
              </template>
            </ChatInput>
          </template>
        </chat-wrapper>
      </template>
    </FeedLayout>
  </FloatContainer>
</template>
```

